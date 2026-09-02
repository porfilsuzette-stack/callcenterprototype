import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-block text-sm font-semibold uppercase tracking-wider',
            dark ? 'text-brand-300' : 'text-brand-600',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed', dark ? 'text-navy-200' : 'text-navy-600')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
