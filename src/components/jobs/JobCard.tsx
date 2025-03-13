
import React from 'react';
import { ArrowRight, MapPin, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    location: string;
    department: string;
    type: string;
    deadline: string;
    logo?: string;
    isNew?: boolean;
  };
  className?: string;
}

const JobCard = ({ job, className }: JobCardProps) => {
  return (
    <Link
      to={`/jobs/${job.id}`}
      className={cn(
        "block bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="p-6">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              {job.isNew && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-hyundai-green/10 text-hyundai-green rounded-full mb-2">
                  New
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Building size={16} className="mr-2 text-gray-400" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
            {job.logo && (
              <div className="bg-gray-50 p-2 rounded-md">
                <img src={job.logo} alt="Company logo" className="w-10 h-10 object-contain" />
              </div>
            )}
          </div>
          
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Apply by: {new Date(job.deadline).toLocaleDateString()}
            </span>
            <span className="text-hyundai-blue font-medium text-sm flex items-center">
              View Details <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
