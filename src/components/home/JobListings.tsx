
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

// Sample job data
const featuredJobs = [
  {
    id: 1,
    title: 'Civil Engineer',
    location: 'Seoul, Korea',
    department: 'Construction',
    type: 'Full-time',
    deadline: '2023-12-31',
  },
  {
    id: 2,
    title: 'Project Manager',
    location: 'Singapore',
    department: 'Management',
    type: 'Full-time',
    deadline: '2023-12-15',
  },
  {
    id: 3,
    title: 'Structural Designer',
    location: 'Abu Dhabi, UAE',
    department: 'Engineering',
    type: 'Full-time',
    deadline: '2023-12-20',
  },
  {
    id: 4,
    title: 'Safety Officer',
    location: 'Los Angeles, USA',
    department: 'Safety',
    type: 'Full-time',
    deadline: '2023-12-10',
  },
];

const JobListings = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Add reveal effect
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
    // Initial check
    revealSection();
    
    return () => window.removeEventListener('scroll', revealSection);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 reveal-section">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-hyundai-blue">Current Openings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest job opportunities and become part of our global team building 
            world-class infrastructure and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featuredJobs.map((job) => (
            <Link 
              key={job.id} 
              to={`/jobs/${job.id}`}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-hyundai-green/10 text-hyundai-green rounded-full mb-3">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Apply by: {new Date(job.deadline).toLocaleDateString()}
                  </span>
                  <span className="text-hyundai-blue font-medium text-sm flex items-center">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" href="/jobs">
            Browse All Positions
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default JobListings;
