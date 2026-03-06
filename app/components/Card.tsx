import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'transparent';
  hover?: boolean;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  variant = 'light',
  hover = true,
  className = '',
  padding = 'md',
}: CardProps) {
  const variantClasses = {
    light: 'bg-white border border-gray-200 text-gray-900 shadow-sm',
    dark: 'bg-zinc-900 border border-white/10 text-white shadow-md',
    transparent: 'bg-white/10 border border-white/20 text-white backdrop-blur-md',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-6',
  };

  const hoverClass = hover
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
    : '';

  return (
    <div
      className={[
        'rounded-xl',
        variantClasses[variant],
        paddingClasses[padding],
        hoverClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
