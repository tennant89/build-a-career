
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import JobListings from '@/components/home/JobListings';
import TalentPool from '@/components/home/TalentPool';
import JobRoles from '@/components/home/JobRoles';
import VideoCarousel from '@/components/home/VideoCarousel';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <JobListings />
        <TalentPool />
        <JobRoles />
        <VideoCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
