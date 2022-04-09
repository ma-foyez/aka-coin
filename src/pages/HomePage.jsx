import React from 'react';
import Guideline from '../components/guideline/Guideline';
import TopBanner from '../components/topBanner/TopBanner';
import Wallets from '../components/wallets/Wallets';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="Home">
      <TopBanner />
      <Wallets />
      <Guideline />
    </MainLayout>
  );
};

export default HomePage;