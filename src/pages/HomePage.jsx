import React from 'react';
import TopBanner from '../components/topBanner/TopBanner';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="Home">
      <TopBanner />
    </MainLayout>
  );
};

export default HomePage;