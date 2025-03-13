
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden reveal-section">
      {/* Background Image - Changed to new hero image */}
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10"></div> {/* Enhanced dim effect for readability */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/3664dc50-221c-40bb-a435-c47fd5313e21.png')"
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
      
      {/* Scroll indicator - centered and reduced size */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-4 h-6 border-2 border-white rounded-full flex justify-center"> {/* Reduced size by 50% */}
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse-subtle"></div>
        </div>
        <p className="text-white text-xs mt-2 text-center">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
