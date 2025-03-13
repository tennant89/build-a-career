
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container = ({ children, className, fluid = false }: ContainerProps) => {
  return (
    <div 
      className={cn(
        'mx-auto px-4 sm:px-6 md:px-8',
        fluid ? 'w-full' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
