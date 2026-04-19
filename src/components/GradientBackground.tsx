import type { ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
  variant?: 'dark-blue' | 'blue-purple' | 'purple-blue';
  className?: string;
}

export function GradientBackground({ 
  children, 
  variant = 'dark-blue',
  className = '' 
}: GradientBackgroundProps) {
  const gradients = {
    'dark-blue': 'bg-[#0A0E1A]',
    'blue-purple': 'bg-gradient-to-br from-[#0080E4] via-[#4B5CFF] to-[#7D41B9]',
    'purple-blue': 'bg-gradient-to-br from-[#7D41B9] via-[#4B5CFF] to-[#0080E4]',
  };

  return (
    <div className={`relative overflow-hidden ${gradients[variant]} ${className}`}>
      {children}
    </div>
  );
}
