import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
  as?: 'button' | 'a';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  href,
  as = 'button',
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500';

  const variantClasses = {
    primary:
      'bg-blue-600 text-white border-2 border-blue-600 shadow-md shadow-blue-600/30 hover:bg-blue-500 hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/40',
    secondary:
      'bg-white text-blue-600 border-2 border-blue-600 shadow-md shadow-blue-600/20 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/40',
    outline:
      'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'pointer-events-none opacity-60' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a' && href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
