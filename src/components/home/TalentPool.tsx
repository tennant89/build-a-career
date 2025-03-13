
import React from 'react';
import { UserPlus } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const TalentPool = () => {
  return (
    <section className="py-20 bg-gray-800 text-white reveal-section"> {/* Changed to monochrome background */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-gray-200 text-sm font-medium mb-4">
              Join Our Talent Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Can't find the perfect role? Join our talent pool
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Register your interest and skills with Hyundai Engineering & Construction. We'll notify you when relevant 
              opportunities arise that match your expertise and career aspirations.
            </p>
            <Button 
              variant="outline"
              size="lg"
              href="/register"
              className="border-white text-white hover:bg-white/10"
              icon={<UserPlus size={20} />}
            >
              Register Your Profile
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Engineering team collaborating" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white p-4 rounded-lg max-w-xs shadow-lg">
              <p className="font-medium">
                "Joining the talent pool helped me find the perfect role when it became available."
              </p>
              <p className="text-sm mt-2 text-gray-400">— Sarah Kim, Project Engineer</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TalentPool;
