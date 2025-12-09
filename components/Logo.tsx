import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 50" 
      className={className} 
      fill="none"
      aria-label="Grupo MT Logo"
    >
      {/* Icon: Abstract Speedometer/Tech Symbol */}
      <path 
        d="M15 35 A 15 15 0 1 1 35 35" 
        stroke="#FF6600" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      <circle cx="25" cy="25" r="2" fill="white" />
      <path 
        d="M25 25 L32 18" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Text: GRUPO */}
      <text 
        x="50" 
        y="33" 
        fill="white" 
        fontFamily="Montserrat, sans-serif" 
        fontWeight="700" 
        fontSize="24"
      >
        GRUPO
      </text>
      
      {/* Text: MT */}
      <text 
        x="145" 
        y="33" 
        fill="#FF6600" 
        fontFamily="Montserrat, sans-serif" 
        fontWeight="800" 
        fontSize="24"
      >
        MT
      </text>
    </svg>
  );
};