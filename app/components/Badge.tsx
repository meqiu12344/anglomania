import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-white/30',
    success: 'bg-gradient-to-r from-emerald-500 to-green-400 text-white border-white/30',
    warning: 'bg-amber-500 text-white border-white/30',
    danger: 'bg-red-500 text-white border-white/30',
    info: 'bg-gradient-to-r from-cyan-700 to-cyan-500 text-white border-white/30',
  };

  const sizeClasses = {
    sm: 'min-h-6 px-3 py-1 text-[11px] tracking-[0.35px]',
    md: 'min-h-8 px-4 py-1.5 text-sm tracking-[0.4px]',
  };

  return (
    <span
      className={[
        'inline-flex items-center justify-center whitespace-nowrap rounded-full border font-bold leading-none shadow-md shadow-black/10',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
