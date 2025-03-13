
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobDetailComponent from '@/components/jobs/JobDetail';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sample job data
const jobData = {
  id: 1,
  title: 'Civil Engineer',
  location: 'Seoul, Korea',
  department: 'Construction',
  type: 'Full-time',
  description: "Hyundai Engineering & Construction is seeking a Civil Engineer to join our growing team. As a Civil Engineer, you will be responsible for designing, developing, and constructing infrastructure projects including roads, buildings, airports, tunnels, dams, bridges, and water supply systems. You'll work closely with clients and other professionals to ensure that projects meet requirements and are completed on time and within budget.",
  qualifications: [
    "Bachelor's degree in Civil Engineering or related field",
    "Professional Engineer (PE) license preferred",
    "Minimum of 3 years of experience in civil engineering",
    "Proficient in AutoCAD, Civil 3D, and other relevant software",
    "Strong analytical and problem-solving skills",
    "Excellent communication and teamwork abilities",
    "Experience with construction site management is a plus"
  ],
  preferences: [
    "Master's degree in Civil Engineering or related field",
    "Experience with international projects",
    "Knowledge of BIM (Building Information Modeling)",
    "Familiarity with sustainable design principles",
    "Additional languages (especially Korean) is a plus"
  ],
  applicationPeriod: {
    start: '2023-11-15',
    end: '2023-12-31'
  },
  employmentType: 'Full-time, Permanent',
  conditions: [
    "Competitive salary based on experience and qualifications",
    "Comprehensive health insurance and retirement benefits",
    "Paid time off and holiday leave",
    "Professional development opportunities",
    "Relocation assistance may be provided for exceptional candidates"
  ],
  workLocation: "Hyundai Engineering & Construction Headquarters, Seoul, Korea with potential for travel to project sites",
  hiringProcess: [
    "Initial application review",
    "Online technical assessment",
    "First round interview (technical)",
    "Second round interview (with senior management)",
    "Final decision and offer"
  ],
  additionalNotes: "Hyundai Engineering & Construction is an equal opportunity employer. We evaluate qualified applicants without regard to race, color, religion, sex, national origin, disability, or any other protected characteristic."
};

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real application, you would fetch the job details based on the ID
    // For this demo, we're just checking if the ID exists in our sample data
    if (!id || isNaN(Number(id))) {
      navigate('/jobs', { replace: true });
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  // In a real application, you would render a loading state or error state
  if (!id || isNaN(Number(id))) {
    return null;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mt-16">
        <JobDetailComponent job={jobData} />
      </div>
      <Footer />
    </div>
  );
};

export default JobDetail;
