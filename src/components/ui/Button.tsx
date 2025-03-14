
import React from 'react';
import { cn } from '@/lib/utils';
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  full?: boolean;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className,
  full = false,
  icon,
  href,
  onClick,
  ...props 
}: ButtonProps) => {
  const buttonClasses = cn(
    'font-medium transition-all duration-300 rounded-md flex items-center justify-center gap-2',
    {
      'bg-hyundai-blue text-white hover:bg-hyundai-lightblue': variant === 'default',
      'bg-hyundai-gray text-hyundai-darkgray hover:bg-gray-200': variant === 'secondary',
      'border border-hyundai-blue text-hyundai-blue hover:bg-hyundai-blue/5': variant === 'outline',
      'text-hyundai-blue hover:bg-hyundai-blue/5': variant === 'ghost',
      'text-hyundai-blue underline hover:text-hyundai-lightblue': variant === 'link',
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'w-full': full,
    },
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <ShadcnButton 
      className={buttonClasses} 
      onClick={onClick}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </ShadcnButton>
  );
};

export default Button;
