
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      {/* Content */}
      <div className={cn(
        "relative z-20 h-full w-full flex flex-col justify-center items-center text-center text-white",
        "px-4 sm:px-6 md:px-8"
      )}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl animate-fade-in">
          Build Your Future with Us
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100 animate-fade-in-up">
          Join Hyundai Engineering & Construction and be part of transformative projects that shape communities worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="primary" 
            size="lg" 
            href="/jobs" 
            className="bg-hyundai-blue hover:bg-hyundai-blue/90 shadow-lg"
            icon={<ArrowRight size={20} />}
          >
            View Open Positions
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="/register" 
            className="border-white text-white hover:bg-white/10"
          >
            Join Talent Pool
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-subtle"></div>
        </div>
        <p className="text-white text-xs mt-2 text-center">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
