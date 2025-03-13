
import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility } from 'lucide-react';
import Container from '@/components/ui/Container';

const Footer = () => {
  return (
    <footer className="bg-hyundai-blue text-white pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" aria-label="Hyundai Engineering & Construction">
              <img 
                src="/lovable-uploads/189fdd07-6c45-4faf-b669-85fecef152a8.png" 
                alt="Hyundai Engineering & Construction" 
                className="h-7 w-auto brightness-0 invert" // Reduced by 30%
              />
            </Link>
            <p className="text-sm text-blue-100 max-w-xs">
              Building a better future through innovative construction and engineering solutions.
            </p>
            
            {/* Web Accessibility Logo */}
            <div className="flex items-center mt-4 space-x-2">
              <img 
                src="/lovable-uploads/d22490fd-4e08-46c8-be12-8f0ff99d3c76.png" 
                alt="Web Accessibility" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/jobs" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/positions" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Talent Pool
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-sm text-blue-100 hover:text-white transition-colors">
                  My Application
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/notice" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Notice
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-blue-100 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Document Return Request
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-sm text-blue-100 space-y-2">
              <p>Hyundai Engineering & Construction</p>
              <p>75, Yulgok-ro, Jongno-gu, Seoul, Republic of Korea</p>
              <p>Business Registration: 123-45-67890</p>
              <p>Tel: +82-2-1234-5678</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200 mb-4 md:mb-0">
              © {new Date().getFullYear()} Hyundai Engineering & Construction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-xs text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-xs text-blue-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
