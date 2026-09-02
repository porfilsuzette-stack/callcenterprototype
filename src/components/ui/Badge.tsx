import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'dark';
  className?: string;
};

const variantClasses: Record<string, string> = {
  default: 'bg-navy-50 text-navy-700 ring-navy-200',
  success: 'bg-success-50 text-success-700 ring-success-200',
  warning: 'bg-warning-50 text-warning-700 ring-warning-200',
  error: 'bg-error-50 text-error-700 ring-error-200',
  info: 'bg-brand-50 text-brand-700 ring-brand-200',
  dark: 'bg-white/10 text-white ring-white/15',
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
