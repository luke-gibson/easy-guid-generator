// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`text-white bg-[#00DC82] hover:bg-white hover:text-[#0D162B] px-4 py-2 rounded-full transition-colors flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;