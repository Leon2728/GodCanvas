
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface TextToSpeechProps {
  text: string;
  title?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, title = "Artículo" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load API key from localStorage on mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('elevenlabs_api_key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  // Save API key to localStorage when it changes
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('elevenlabs_api_key', apiKey);
    } else {
      localStorage.removeItem('elevenlabs_api_key');
    }
  }, [apiKey]);

  // Cleanup text for better speech synthesis
  const cleanText = (rawText: string) => {
    return rawText
      .replace(/[📰⚔️🧠📌📖✅📅🤖🎥🎙️⚡📊🎯❌✝️💬]/g, '') // Remove emojis
      .replace(/https?:\/\/[^\s]+/g, '') // Remove URLs
      .replace(/\n+/g, '. ') // Replace line breaks with periods
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim();
  };

  const handlePlay = async () => {
    const cleanedText = cleanText(text);
    
    if (apiKey) {
      // Use ElevenLabs if API key is provided
      try {
        await playWithElevenLabs(cleanedText);
      } catch (error) {
        console.log('ElevenLabs failed, falling back to browser TTS:', error);
        playWithBrowserTTS(cleanedText);
      }
    } else {
      // Use browser's built-in TTS
      playWithBrowserTTS(cleanedText);
    }
  };

  const playWithElevenLabs = async (cleanedText: string) => {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text: cleanedText,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      if (!response.ok) {
        throw new Error('ElevenLabs API error');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.playbackRate = playbackRate;
        await audioRef.current.play();
        setIsPlaying(true);
        setIsPaused(false);
      }
    } catch (error) {
      throw error;
    }
  };

  const playWithBrowserTTS = (cleanedText: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utterance.rate = playbackRate;
      utterance.pitch = 1;
      utterance.volume = isMuted ? 0 : 1;
      
      // Try to use Spanish voice if available
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(voice => 
        voice.lang.includes('es') || voice.name.includes('Spanish')
      );
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      utterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentTime(0);
      };

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handlePause = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPaused(true);
    } else if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
      setIsPaused(false);
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  // Update time for audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-violet-900/30 to-gray-900 backdrop-blur-lg rounded-2xl border border-violet-500/30 p-6 mb-8 shadow-2xl shadow-violet-900/30">
      <audio ref={audioRef} />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center border border-violet-500/30">
            <Volume2 className="w-6 h-6 text-violet-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">Escuchar Artículo</h3>
            <p className="text-sm text-violet-300 font-lora">{title}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowApiKeyInput(!showApiKeyInput)}
          className="text-violet-300 hover:text-violet-200 hover:bg-violet-500/20 transition-colors"
        >
          ⚙️ Configurar
        </Button>
      </div>

      {showApiKeyInput && (
        <div className="mb-4 p-4 bg-violet-950/40 rounded-lg border border-violet-500/30 animate-fade-in">
          <label className="block text-sm font-medium text-violet-200 mb-2">
            ElevenLabs API Key (voz de alta fidelidad)
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Ingresa tu API key de ElevenLabs"
            className="w-full px-3 py-2 bg-violet-900/30 border border-violet-500/40 rounded-lg text-white placeholder-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all"
          />
          <p className="text-xs text-violet-300/70 mt-2">
            La clave se guarda en tu navegador. Sin API key, se usará la voz estándar del sistema (gratuita).
          </p>
        </div>
      )}

      <div className="flex items-center space-x-2 md:space-x-4">
        {!isPlaying ? (
          <Button
            onClick={handlePlay}
            className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-violet-600/30 hover:bg-violet-600/50 text-violet-100 border border-violet-400/40 font-semibold transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            <span>Reproducir</span>
          </Button>
        ) : (
          <Button
            onClick={isPaused ? handleResume : handlePause}
            className="flex-1 md:flex-none flex items-center justify-center space-x-2 bg-violet-600/30 hover:bg-violet-600/50 text-violet-100 border border-violet-400/40 font-semibold transition-all duration-200"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            <span>{isPaused ? 'Continuar' : 'Pausar'}</span>
          </Button>
        )}

        <Button
          onClick={handleStop}
          variant="ghost"
          size="icon"
          className="text-violet-300 hover:text-violet-100 hover:bg-violet-500/20 transition-colors"
          aria-label="Detener y reiniciar"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>

        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="text-violet-300 hover:text-violet-100 hover:bg-violet-500/20 transition-colors"
          aria-label={isMuted ? "Quitar silencio" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>

        <div className="hidden md:flex items-center space-x-2">
          <span className="text-sm text-violet-300">Velocidad:</span>
          {[0.75, 1, 1.25, 1.5].map((speed) => (
            <Button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              variant="ghost"
              size="sm"
              className={`text-xs px-2.5 py-1 h-auto rounded-md ${
                playbackRate === speed 
                  ? 'text-violet-100 bg-violet-600/40' 
                  : 'text-violet-300 hover:text-violet-200 hover:bg-violet-500/20'
              }`}
            >
              {speed}x
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex md:hidden items-center space-x-2 mt-4">
          <span className="text-sm text-violet-300">Velocidad:</span>
          {[0.75, 1, 1.25, 1.5].map((speed) => (
            <Button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              variant="ghost"
              size="sm"
              className={`text-xs px-2.5 py-1 h-auto rounded-md ${
                playbackRate === speed 
                  ? 'text-violet-100 bg-violet-600/40' 
                  : 'text-violet-300 hover:text-violet-200 hover:bg-violet-500/20'
              }`}
            >
              {speed}x
            </Button>
          ))}
        </div>

      {duration > 0 && (
        <div className="mt-4 flex items-center space-x-3">
          <span className="text-xs text-violet-300 font-mono w-10 text-center">{formatTime(currentTime)}</span>
          <div className="flex-1 group h-2 bg-violet-900/50 rounded-full cursor-pointer">
            <div 
              className="h-full bg-violet-400 rounded-full transition-all duration-150 group-hover:bg-violet-300"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span className="text-xs text-violet-300 font-mono w-10 text-center">{formatTime(duration)}</span>
        </div>
      )}

      {!apiKey && (
        <p className="text-xs text-violet-400/80 mt-4 text-center bg-violet-900/30 p-2 rounded-md border border-violet-500/20">
          ✨ Voz de alta fidelidad disponible. Haz clic en <strong>⚙️ Configurar</strong> para usar tu API key de ElevenLabs.
        </p>
      )}
    </div>
  );
};

export default TextToSpeech;
