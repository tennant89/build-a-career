
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';

const menuItems = [
  { name: 'Job Listings', path: '/jobs' },
  { name: 'Open Positions', path: '/positions' },
  { name: 'Application Status', path: '/status' },
  { name: 'Announcements', path: '/announcements' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-10"
            aria-label="Hyundai Engineering & Construction"
          >
            <img 
              src="/lovable-uploads/189fdd07-6c45-4faf-b669-85fecef152a8.png" 
              alt="Hyundai Engineering & Construction" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-hyundai-blue relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-hyundai-blue after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
                  location.pathname === item.path
                    ? 'text-hyundai-blue after:scale-x-100'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector + Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-hyundai-blue transition-colors mr-8"
              aria-label="Switch language"
            >
              <Globe size={18} className="mr-2" />
              <span className="hidden sm:inline">EN</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-hyundai-blue transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="animate-fade-in" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-lg font-medium py-2 border-b border-gray-100',
                location.pathname === item.path
                  ? 'text-hyundai-blue'
                  : 'text-gray-700'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
