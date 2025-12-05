import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  children: React.ReactNode;
  href?: string; // Make it act like a link if href is provided
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  href,
  target,
  rel,
  ...props 
}) => {
  // Base styles applied to all button variants
  const baseStyles = [
    "inline-flex items-center justify-center",
    "px-6 py-3",
    "text-base font-bold",
    "rounded-lg",
    "transition-all duration-300 ease-out", // Smooth transition
    "cursor-pointer", // Ensure pointer cursor
    // Accessibility & Focus
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black focus-visible:ring-brand-orange",
    // Active State (Click feedback)
    "active:scale-95",
    // Disabled State
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none"
  ].join(" ");
  
  const variants = {
    primary: [
      "bg-brand-orange text-white",
      "border border-transparent", // Prevent layout shift
      "hover:bg-brand-orangeHover", // Darker orange on hover
      "shadow-[0_0_15px_rgba(255,102,0,0.3)]", // Base glow
      "hover:shadow-[0_0_25px_rgba(255,102,0,0.6)]", // Enhanced glow on hover
      "hover:-translate-y-0.5" // Subtle lift
    ].join(" "),
    
    outline: [
      "bg-transparent text-brand-orange",
      "border-2 border-brand-orange",
      "hover:bg-brand-orange hover:text-white",
      "hover:shadow-[0_0_15px_rgba(255,102,0,0.2)]" // Subtle glow
    ].join(" "),
    
    ghost: [
      "bg-transparent text-brand-text",
      "border border-transparent",
      "hover:text-white hover:bg-white/10" // Better contrast on dark backgrounds
    ].join(" "),
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};