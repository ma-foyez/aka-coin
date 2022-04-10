import React from 'react';
import Community from '../components/community/Community';
import Guideline from '../components/guideline/Guideline';
import TopBanner from '../components/topBanner/TopBanner';
import Wallets from '../components/wallets/Wallets';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="Home">
      <TopBanner />
      <Community />
      <Wallets />
      <Guideline />
    </MainLayout>
  );
};

export default HomePage;