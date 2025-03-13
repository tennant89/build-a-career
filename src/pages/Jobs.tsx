
import React, { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import SearchFilters from '@/components/jobs/SearchFilters';
import JobCard from '@/components/jobs/JobCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample jobs data
const jobsData = [
  {
    id: 1,
    title: 'Civil Engineer',
    location: 'Seoul, Korea',
    department: 'Construction',
    type: 'Full-time',
    deadline: '2023-12-31',
    isNew: true,
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
    isNew: true,
  },
  {
    id: 4,
    title: 'Safety Officer',
    location: 'Los Angeles, USA',
    department: 'Safety',
    type: 'Full-time',
    deadline: '2023-12-10',
  },
  {
    id: 5,
    title: 'Environmental Specialist',
    location: 'London, UK',
    department: 'Environmental',
    type: 'Contract',
    deadline: '2023-12-25',
  },
  {
    id: 6,
    title: 'Architect',
    location: 'Tokyo, Japan',
    department: 'Design',
    type: 'Full-time',
    deadline: '2024-01-05',
    isNew: true,
  },
  {
    id: 7,
    title: 'Electrical Engineer',
    location: 'Sydney, Australia',
    department: 'Engineering',
    type: 'Full-time',
    deadline: '2024-01-10',
  },
  {
    id: 8,
    title: 'Mechanical Engineer',
    location: 'Berlin, Germany',
    department: 'Engineering',
    type: 'Full-time',
    deadline: '2024-01-15',
  },
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    locations: [],
    roles: [],
    businessAreas: [],
  });
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Filter jobs based on search query and filters
    let result = [...jobsData];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query)
      );
    }
    
    if (filters.locations.length > 0) {
      result = result.filter(job => filters.locations.includes(job.location));
    }
    
    if (filters.roles.length > 0) {
      result = result.filter(job => filters.roles.includes(job.title));
    }
    
    if (filters.businessAreas.length > 0) {
      result = result.filter(job => filters.businessAreas.includes(job.department));
    }
    
    setFilteredJobs(result);
  }, [searchQuery, filters]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-hyundai-blue py-20 mt-16">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Job Listings</h1>
            <p className="text-blue-100 max-w-2xl mx-auto animate-fade-in-up">
              Explore our current job openings and find the perfect role to advance your career at Hyundai Engineering & Construction.
            </p>
          </div>
        </Container>
      </div>
      
      <Container className="py-10">
        <SearchFilters 
          onSearch={setSearchQuery} 
          onFilter={setFilters} 
        />
        
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job Found' : 'Jobs Found'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="col-span-2 py-12 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs match your criteria</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search filters or try a different search term.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({
                    locations: [],
                    roles: [],
                    businessAreas: [],
                  });
                }}
                className="text-hyundai-blue font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </Container>
      
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 w-12 h-12 bg-hyundai-blue text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      <Footer />
    </div>
  );
};

export default Jobs;
