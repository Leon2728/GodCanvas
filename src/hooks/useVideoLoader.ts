
import { useState, useEffect, useCallback } from 'react';

interface UseVideoLoaderProps {
  videoSrc?: string;
  preload?: boolean;
}

export const useVideoLoader = ({ videoSrc, preload = true }: UseVideoLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const preloadVideo = useCallback(async (src: string) => {
    if (!preload) return;
    
    setIsLoading(true);
    setHasError(false);
    
    try {
      const video = document.createElement('video');
      video.preload = 'auto';
      
      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
        video.src = src;
      });
      
      setIsLoaded(true);
    } catch (error) {
      console.warn('Video preload failed:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [preload]);

  useEffect(() => {
    if (videoSrc) {
      preloadVideo(videoSrc);
    }
  }, [videoSrc, preloadVideo]);

  return {
    isLoaded,
    isLoading,
    hasError,
    retry: () => videoSrc && preloadVideo(videoSrc)
  };
};
