import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  badge?: string;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  variant = 'light',
  title,
  subtitle,
  badge,
  id,
  className = '',
}: SectionProps) {
  const sectionVariant =
    variant === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900';

  return (
    <section
      className={`py-10 md:py-16 ${sectionVariant} ${className}`}
      id={id}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10 text-center">
            <h2>{title}</h2>
            {subtitle && <p className="mx-auto mt-3 max-w-3xl text-gray-500">{subtitle}</p>}
            {badge && (
              <span className="mt-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                {badge}
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
