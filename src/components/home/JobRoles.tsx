import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const jobRoles = [
  {
    id: 1,
    title: 'Civil Engineers',
    name: 'Building Infrastructure',
    description: 'Design and oversee construction projects while considering factors like cost, safety, and environmental impact.',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
  {
    id: 2,
    title: 'Project Managers',
    name: 'Leading Excellence',
    description: 'Oversee planning, execution, and closing of projects, ensuring they are delivered on time and within budget.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
  {
    id: 3,
    title: 'Structural Engineers',
    name: 'Creating Foundations',
    description: 'Analyze, design, and assess the structural integrity and load-bearing elements of buildings and infrastructure.',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
  {
    id: 4,
    title: 'Environmental Specialists',
    name: 'Protecting Our Planet',
    description: 'Ensure construction projects comply with environmental regulations and implement sustainable practices.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
  {
    id: 5,
    title: 'Architects',
    name: 'Designing the Future',
    description: 'Create designs for new construction projects, alterations and redevelopments with creativity and functionality.',
    image: 'https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
  {
    id: 6,
    title: 'Safety Officers',
    name: 'Ensuring Protection',
    description: 'Develop and implement safety protocols to ensure all construction activities adhere to health and safety regulations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&crop=faces&face=center',
  },
];

const JobRoles = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of visible width
      
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const revealSection = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          sectionRef.current.classList.add('revealed');
        }
      }
    };
    
    window.addEventListener('scroll', revealSection);
    revealSection();
    
    return () => window.removeEventListener('scroll', revealSection);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 reveal-section">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-hyundai-blue">Career Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the diverse roles within Hyundai Engineering & Construction where your skills can thrive and make an impact.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('left')} 
              disabled={scrollPosition <= 10}
              className={cn(
                "w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center",
                "transition-opacity duration-300",
                scrollPosition <= 10 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              )}
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('right')} 
              disabled={scrollPosition >= maxScroll - 10}
              className={cn(
                "w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center",
                "transition-opacity duration-300",
                scrollPosition >= maxScroll - 10 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              )}
              aria-label="Scroll right"
            >
              <ArrowRight size={20} className="text-gray-600" />
            </button>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            onScroll={handleScroll}
          >
            {jobRoles.map((role) => (
              <div 
                key={role.id} 
                className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] px-4 snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={role.image} 
                      alt={role.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-hyundai-green font-medium">{role.title}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-3 text-gray-900">{role.name}</h3>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                    <Link to={`/roles/${role.id}`}>
                      <Button variant="ghost" className="mt-2">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mt-6 md:hidden">
          {Array.from({ length: Math.ceil(jobRoles.length / 2) }).map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                i * 2 <= scrollPosition / 280 && (i + 1) * 2 > scrollPosition / 280
                  ? "bg-hyundai-blue"
                  : "bg-gray-300"
              )}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollLeft = i * 280 * 2;
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default JobRoles;
