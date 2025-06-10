
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Avatar3DCarousel from '../components/Avatar3DCarousel';
import CommunitySection from '../components/CommunitySection';
import SocialSection from '../components/SocialSection';
import AboutSection from '../components/AboutSection';
import RegisterSection from '../components/RegisterSection';

interface IndexProps {
  isDark?: boolean;
  onThemeToggle?: () => void;
}

const Index: React.FC<IndexProps> = ({ isDark = false, onThemeToggle = () => {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50 to-emerald-50 dark:from-gray-900 dark:via-violet-950 dark:to-emerald-950 transition-colors duration-500">
      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
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
