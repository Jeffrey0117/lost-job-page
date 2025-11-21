import React from 'react';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  dark?: boolean;
}

export const PaperCard: React.FC<PaperCardProps> = ({ 
  children, 
  className = '', 
  rotate = 'rotate-0',
  dark = false
}) => {
  const baseStyles = "p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.02]";
  const colorStyles = dark 
    ? "bg-stone-800 text-stone-100 border-2 border-stone-600 handwritten-border" 
    : "bg-paper text-ink border-2 border-stone-800 handwritten-border";
  
  return (
    <div className={`${baseStyles} ${colorStyles} ${rotate} ${className}`}>
      {children}
    </div>
  );
};