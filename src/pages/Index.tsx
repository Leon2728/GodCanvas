import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import Avatar3DCarousel from '../components/Avatar3DCarousel';
import CommunitySection from '../components/CommunitySection';
import SocialSection from '../components/SocialSection';
import AboutSection from '../components/AboutSection';
import RegisterSection from '../components/RegisterSection';
import FloatingHandReminder from '../components/FloatingHandReminder';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-950 to-emerald-950 transition-colors duration-500">
      <FloatingHandReminder />
      <Helmet>
        <title>El Lienzo de Dios - Guías Espirituales, Blog Profético y Sabiduría Bíblica</title>
        <meta
          name="description"
          content="Selecciona tu guía espiritual en El Lienzo de Dios. Explora análisis proféticos, artículos, documentales y reflexiones espirituales a través de avatares bíblicos en 3D."
        />
        <meta property="og:title" content="El Lienzo de Dios - Guías Espirituales" />
        <meta property="og:description" content="Interpreta la sabiduría y los eventos actuales desde una perspectiva profética y bíblica en nuestro blog." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@godcanvas" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <link rel="canonical" href="https://tudominio.com/" />
      </Helmet>
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
