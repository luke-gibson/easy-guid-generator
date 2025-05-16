import React from 'react';
import Link from 'next/link';

interface PillComponentProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const PillComponent: React.FC<PillComponentProps> = ({ to, children, className }) => {
  return (
    <Link
      href={to}
      target='_blank'
      className={`bg-opacity-80 hover:bg-opacity-100 transition-all bg-white text-[#0D162B] text-xs sm:text-[14px] px-3 sm:px-6 py-2 sm:py-3 rounded-full flex items-center ${className}`}
    >
      {children}
    </Link>
  );
};

export default PillComponent;