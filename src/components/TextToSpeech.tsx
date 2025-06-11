
import React, { useState, useRef, useEffect } from 'react';
import { volume, volumeOff, Play, Pause, RotateCcw } from 'lucide-react';
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
    <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-xl rounded-2xl border border-blue-400/20 p-6 mb-8">
      <audio ref={audioRef} />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
            <volume className="w-5 h-5 text-blue-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Escuchar Artículo</h3>
            <p className="text-sm text-blue-200">{title}</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowApiKeyInput(!showApiKeyInput)}
          className="text-blue-300 hover:text-blue-200"
        >
          ⚙️ Configurar
        </Button>
      </div>

      {showApiKeyInput && (
        <div className="mb-4 p-4 bg-blue-950/30 rounded-lg border border-blue-400/20">
          <label className="block text-sm font-medium text-blue-200 mb-2">
            ElevenLabs API Key (opcional para voz profesional):
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Ingresa tu API key de ElevenLabs"
            className="w-full px-3 py-2 bg-blue-900/20 border border-blue-400/30 rounded-lg text-white placeholder-blue-300/50 focus:border-blue-400/50 focus:outline-none"
          />
          <p className="text-xs text-blue-300/70 mt-1">
            Sin API key se usará la voz del navegador (gratuita)
          </p>
        </div>
      )}

      <div className="flex items-center space-x-4">
        {!isPlaying ? (
          <Button
            onClick={handlePlay}
            className="flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border border-blue-400/30"
          >
            <Play className="w-4 h-4" />
            <span>Reproducir</span>
          </Button>
        ) : (
          <Button
            onClick={isPaused ? handleResume : handlePause}
            className="flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border border-blue-400/30"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            <span>{isPaused ? 'Continuar' : 'Pausar'}</span>
          </Button>
        )}

        <Button
          onClick={handleStop}
          variant="ghost"
          size="sm"
          className="text-blue-300 hover:text-blue-200"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>

        <Button
          onClick={toggleMute}
          variant="ghost"
          size="sm"
          className="text-blue-300 hover:text-blue-200"
        >
          {isMuted ? <volumeOff className="w-4 h-4" /> : <volume className="w-4 h-4" />}
        </Button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-blue-300">Velocidad:</span>
          {[0.75, 1, 1.25, 1.5].map((speed) => (
            <Button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              variant="ghost"
              size="sm"
              className={`text-xs ${
                playbackRate === speed 
                  ? 'text-blue-200 bg-blue-600/20' 
                  : 'text-blue-300 hover:text-blue-200'
              }`}
            >
              {speed}x
            </Button>
          ))}
        </div>
      </div>

      {duration > 0 && (
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-xs text-blue-300">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 bg-blue-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-400 transition-all duration-300"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span className="text-xs text-blue-300">{formatTime(duration)}</span>
        </div>
      )}

      <p className="text-xs text-blue-300/70 mt-3">
        💡 Tip: Para mejor calidad de voz, configura tu API key de ElevenLabs
      </p>
    </div>
  );
};

export default TextToSpeech;
