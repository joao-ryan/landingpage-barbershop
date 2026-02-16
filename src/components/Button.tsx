import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', href }) => {
  const baseStyles = "px-10 py-4 rounded-none font-bold uppercase tracking-widest transition-all duration-300 text-center inline-block text-xs";

  const variants = {
    primary: "bg-usaBlue-deep text-white hover:bg-usaRed shadow-soft hover:-translate-y-1",
    secondary: "bg-usaRed text-white hover:bg-usaRed-dark shadow-soft hover:-translate-y-1",
    outline: "border-2 border-usaBlue-deep text-usaBlue-deep hover:bg-usaBlue-deep hover:text-white hover:-translate-y-1"
  };

  const content = (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href} className="inline-block">{content}</a>;
  }

  return content;
};

export default Button;
