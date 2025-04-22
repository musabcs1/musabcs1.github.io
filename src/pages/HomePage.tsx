import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrendingSection from '../components/home/TrendingSection';
import ElysiumPicksSection from '../components/home/ElysiumPicksSection';
import NewsUpdateSection from '../components/home/NewsUpdateSection';
import CommunitySection from '../components/home/CommunitySection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <ElysiumPicksSection />
      <NewsUpdateSection />
      <CommunitySection />
    </div>
  );
};

export default HomePage;