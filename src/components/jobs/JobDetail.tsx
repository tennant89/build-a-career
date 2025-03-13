
import React from 'react';
import { MapPin, Building, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

interface JobDetailProps {
  job: {
    id: number;
    title: string;
    location: string;
    department: string;
    type: string;
    description: string;
    qualifications: string[];
    preferences: string[];
    applicationPeriod: {
      start: string;
      end: string;
    };
    employmentType: string;
    conditions: string[];
    workLocation: string;
    hiringProcess: string[];
    additionalNotes?: string;
  };
}

const JobDetail = ({ job }: JobDetailProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Job Opening: ${job.title} at Hyundai Engineering & Construction`,
        text: `Check out this job opportunity: ${job.title}`,
        url: window.location.href,
      })
      .catch(err => {
        console.error('Error sharing:', err);
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success('Link copied to clipboard');
      })
      .catch(err => {
        toast.error('Failed to copy link');
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div className="py-8">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-hyundai-green/10 text-hyundai-green rounded-full mb-3">
                  {job.department}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <span className="hidden sm:block text-gray-300">•</span>
                  <div className="flex items-center">
                    <Building size={18} className="mr-2 text-gray-400" />
                    <span>{job.department}</span>
                  </div>
                  <span className="hidden sm:block text-gray-300">•</span>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-gray-400" />
                    <span>{job.type}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2 text-gray-400" />
                  <span>Apply by: {new Date(job.applicationPeriod.end).toLocaleDateString()}</span>
                </div>
              </div>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share job"
              >
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button variant="primary" size="lg" full>
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 mb-10">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Job Description</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{job.description}</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Qualifications</h2>
              <ul className="space-y-2 text-gray-700">
                {job.qualifications.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-hyundai-blue mt-2 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Preferences</h2>
              <ul className="space-y-2 text-gray-700">
                {job.preferences.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-hyundai-green mt-2 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Employment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Application Period</h3>
                  <p className="text-gray-700">
                    {new Date(job.applicationPeriod.start).toLocaleDateString()} - {new Date(job.applicationPeriod.end).toLocaleDateString()}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Employment Type</h3>
                  <p className="text-gray-700">{job.employmentType}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Work Location</h3>
                  <p className="text-gray-700">{job.workLocation}</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">General Conditions</h2>
              <ul className="space-y-2 text-gray-700">
                {job.conditions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-hyundai-blue mt-2 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Hiring Process</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <ul className="space-y-6 relative z-10">
                  {job.hiringProcess.map((step, index) => (
                    <li key={index} className="pl-10 relative">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-hyundai-blue text-white flex items-center justify-center">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {job.additionalNotes && (
              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Additional Notes</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>{job.additionalNotes}</p>
                </div>
              </section>
            )}
          </div>
          
          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-200 pt-8">
            <Button
              variant="secondary"
              href="/jobs"
              icon={<ArrowLeft size={18} />}
            >
              Back to Job Listings
            </Button>
            <Button variant="primary" full>
              Apply Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetail;
