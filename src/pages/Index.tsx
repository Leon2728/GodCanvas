
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import Avatar3DCarousel from '../components/Avatar3DCarousel';
import CommunitySection from '../components/CommunitySection';
import SocialSection from '../components/SocialSection';
import AboutSection from '../components/AboutSection';
import RegisterSection from '../components/RegisterSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-950 to-emerald-950 transition-colors duration-500">
      <Header />
      <HeroSection />
      <BlogSection isDark={true} />
      <Avatar3DCarousel />
      <CommunitySection isDark={true} />
      <SocialSection isDark={true} />
      <AboutSection isDark={true} />
      <RegisterSection isDark={true} />
    </div>
  );
};

export default Index;
