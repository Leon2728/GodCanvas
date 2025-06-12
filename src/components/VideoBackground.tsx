
import React, { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackGradient?: boolean;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  fallbackGradient = true,
  className = "" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      console.log('Loading video:', videoSrc);
      videoRef.current.load();
    }
  }, [videoSrc]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    console.log('Video loaded successfully:', videoSrc);
    
    // Ensure the video plays
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed, but will work on user interaction:', err);
      });
    }
  };

  const handleVideoError = (e: any) => {
    setHasError(true);
    console.error('Video failed to load:', videoSrc, e);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play:', videoSrc);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video play attempt failed:', err);
      });
    }
  };

  // Animated cosmic fallback
  const CosmicFallback = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary cosmic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-blue-900/20 via-cyan-900/25 to-emerald-900/20 dark:from-violet-900/50 dark:via-blue-900/40 dark:via-cyan-900/45 dark:to-emerald-900/30"></div>
      
      {/* Animated nebula layers */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse cosmic-drift" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse nebula-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating cosmic particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Subtle scanning effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className={`absolute inset-0 ${className}`}>
      {videoSrc && !hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-80' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          onLoadStart={() => console.log('Video load started:', videoSrc)}
          onLoadedMetadata={() => console.log('Video metadata loaded:', videoSrc)}
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      )}
      
      {/* Show fallback if no video, error, or while loading */}
      {(fallbackGradient && (!videoSrc || hasError || !isLoaded)) && (
        <CosmicFallback />
      )}
      
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-10"></div>
    </div>
  );
};

export default VideoBackground;
