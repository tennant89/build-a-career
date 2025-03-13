
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
    
    // Initialize the section reveal animations
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', revealSections);
    // Initial check
    setTimeout(revealSections, 100);
    
    return () => window.removeEventListener('scroll', revealSections);
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
