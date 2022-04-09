import React from 'react';
import TopBanner from '../components/topBanner/TopBanner';
import Wallets from '../components/wallets/Wallets';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="Home">
      <TopBanner />
      <Wallets />
    </MainLayout>
  );
};

export default HomePage;