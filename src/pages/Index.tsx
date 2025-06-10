
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Avatar3DCarousel from '../components/Avatar3DCarousel';
import CommunitySection from '../components/CommunitySection';
import SocialSection from '../components/SocialSection';
import AboutSection from '../components/AboutSection';
import RegisterSection from '../components/RegisterSection';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50 to-emerald-50 dark:from-gray-900 dark:via-violet-950 dark:to-emerald-950 transition-colors duration-500">
      <Header isDark={isDark} onThemeToggle={toggleTheme} />
      <HeroSection />
      <Avatar3DCarousel />
      <CommunitySection isDark={isDark} />
      <SocialSection isDark={isDark} />
      <AboutSection isDark={isDark} />
      <RegisterSection isDark={isDark} />
    </div>
  );
};

export default Index;
