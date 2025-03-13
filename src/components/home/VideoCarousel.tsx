
import React, { useState, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';

// Sample video data
const videos = [
  {
    id: 1,
    title: 'The Future of Construction',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '#',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Building Sustainable Cities',
    thumbnail: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '#',
    duration: '4:20',
  },
  {
    id: 3,
    title: 'Engineering Marvels',
    thumbnail: 'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '#',
    duration: '5:12',
  },
  {
    id: 4,
    title: 'Our Global Impact',
    thumbnail: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    videoUrl: '#',
    duration: '2:55',
  },
];

const VideoCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeVideo < videos.length - 1) {
      setActiveVideo(activeVideo + 1);
      scrollToVideo(activeVideo + 1);
    }
  };

  const handlePrevious = () => {
    if (activeVideo > 0) {
      setActiveVideo(activeVideo - 1);
      scrollToVideo(activeVideo - 1);
    }
  };

  const scrollToVideo = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch videos showcasing our projects, expertise, and the impact we make around the world.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation arrows */}
          <div className="hidden md:flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-4">
            <button
              onClick={handlePrevious}
              disabled={activeVideo === 0}
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-opacity",
                activeVideo === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"
              )}
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeVideo === videos.length - 1}
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-opacity",
                activeVideo === videos.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"
              )}
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Videos */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            onScroll={(e) => {
              if (carouselRef.current) {
                const scrollPosition = carouselRef.current.scrollLeft;
                const videoWidth = carouselRef.current.offsetWidth;
                const index = Math.round(scrollPosition / videoWidth);
                if (index !== activeVideo) {
                  setActiveVideo(index);
                }
              }
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="min-w-full snap-start"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <span className="text-sm text-gray-300">{video.duration}</span>
                  </div>
                  <button
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label={`Play ${video.title}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-hyundai-blue/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play size={24} fill="white" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Thumbnails */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => {
                  setActiveVideo(index);
                  scrollToVideo(index);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeVideo === index
                    ? "bg-hyundai-blue scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoCarousel;
