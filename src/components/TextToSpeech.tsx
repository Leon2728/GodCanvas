import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Square, Settings, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

interface TextToSpeechProps {
  text: string;
  title?: string;
}

interface VoiceSettings {
  rate: number;
  pitch: number;
  volume: number;
  voice: SpeechSynthesisVoice | null;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, title = "Artículo" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    rate: 1,
    pitch: 1,
    volume: 0.8,
    voice: null
  });

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const textChunks = useRef<string[]>([]);
  const currentChunkIndex = useRef(0);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      if (availableVoices.length > 0 && !voiceSettings.voice) {
        const spanishVoice = availableVoices.find(voice => 
          voice.lang.includes('es') || voice.name.toLowerCase().includes('spanish')
        );
        setVoiceSettings(prev => ({
          ...prev,
          voice: spanishVoice || availableVoices[0]
        }));
      }
    };

    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const cleanText = (text: string): string => {
    return text
      .replace(/[#*_`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const splitTextIntoChunks = (text: string, maxLength: number = 200): string[] => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const chunks: string[] = [];
    let currentChunk = '';

    sentences.forEach(sentence => {
      const trimmedSentence = sentence.trim();
      if (currentChunk.length + trimmedSentence.length <= maxLength) {
        currentChunk += (currentChunk ? '. ' : '') + trimmedSentence;
      } else {
        if (currentChunk) chunks.push(currentChunk + '.');
        currentChunk = trimmedSentence;
      }
    });

    if (currentChunk) chunks.push(currentChunk + '.');
    return chunks;
  };

  const speakChunk = (chunkIndex: number) => {
    if (chunkIndex >= textChunks.current.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      return;
    }

    const chunk = textChunks.current[chunkIndex];
    const utterance = new SpeechSynthesisUtterance(chunk);
    
    utterance.rate = voiceSettings.rate;
    utterance.pitch = voiceSettings.pitch;
    utterance.volume = isMuted ? 0 : voiceSettings.volume;
    if (voiceSettings.voice) {
      utterance.voice = voiceSettings.voice;
    }

    utterance.onend = () => {
      currentChunkIndex.current++;
      setCurrentPosition(currentChunkIndex.current);
      setProgress((currentChunkIndex.current / textChunks.current.length) * 100);
      
      if (currentChunkIndex.current < textChunks.current.length) {
        speakChunk(currentChunkIndex.current);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(100);
      }
    };

    utterance.onerror = () => {
      console.error('Error en la síntesis de voz');
      setIsPlaying(false);
      setIsLoading(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const handlePlay = async () => {
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    const cleanedText = cleanText(text);
    textChunks.current = splitTextIntoChunks(cleanedText);
    currentChunkIndex.current = 0;
    setCurrentPosition(0);
    setProgress(0);

    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
      speakChunk(0);
    }, 500);
  };

  const handlePause = () => {
    speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setCurrentPosition(0);
    currentChunkIndex.current = 0;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current && isPlaying) {
      utteranceRef.current.volume = isMuted ? voiceSettings.volume : 0;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <h3 className="text-xl font-bold text-white font-mono">🎧 NARRADOR AI</h3>
        </div>
        <div className="text-cyan-400 text-sm font-mono">
          {isPlaying ? 'REPRODUCIENDO' : isPaused ? 'PAUSADO' : 'LISTO'}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-cyan-300 mb-2">
          <span>Progreso de lectura</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          onClick={isPlaying ? handlePause : handlePlay}
          disabled={isLoading}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-2 border-emerald-400/50"
        >
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>

        <Button
          onClick={handleStop}
          disabled={!isPlaying && !isPaused}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-2 border-red-400/50"
        >
          <Square className="h-5 w-5" />
        </Button>

        <Button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-2 border-purple-400/50"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>

        <Button
          onClick={() => setShowSettings(!showSettings)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 border-2 border-blue-400/50"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {showSettings && (
        <div className="bg-black/50 rounded-xl p-4 border border-cyan-400/20 mb-4">
          <h4 className="text-cyan-400 font-mono mb-4">Configuración de Voz</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-cyan-300 text-sm mb-2">Velocidad: {voiceSettings.rate.toFixed(1)}x</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={voiceSettings.rate}
                onChange={(e) => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                className="w-full accent-cyan-400"
              />
            </div>
            
            <div>
              <label className="block text-cyan-300 text-sm mb-2">Tono: {voiceSettings.pitch.toFixed(1)}</label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={voiceSettings.pitch}
                onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                className="w-full accent-cyan-400"
              />
            </div>
            
            <div>
              <label className="block text-cyan-300 text-sm mb-2">Volumen: {Math.round(voiceSettings.volume * 100)}%</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={voiceSettings.volume}
                onChange={(e) => setVoiceSettings(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                className="w-full accent-cyan-400"
              />
            </div>
          </div>

          {voices.length > 0 && (
            <div className="mt-4">
              <label className="block text-cyan-300 text-sm mb-2">Voz:</label>
              <select
                value={voiceSettings.voice?.name || ''}
                onChange={(e) => {
                  const selectedVoice = voices.find(v => v.name === e.target.value);
                  setVoiceSettings(prev => ({ ...prev, voice: selectedVoice || null }));
                }}
                className="w-full bg-gray-800 text-white border border-cyan-400/30 rounded px-3 py-2"
              >
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <p className="text-cyan-200 text-sm leading-relaxed">
          Disfruta de la experiencia auditiva de nuestro contenido. Utiliza los controles para personalizar la velocidad, 
          tono y voz según tus preferencias.
        </p>
      </div>
    </div>
  );
};

export default TextToSpeech;
