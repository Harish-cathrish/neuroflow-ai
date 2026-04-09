import { cn } from '@/lib/utils';

export const ConfidenceBadge = ({ value, size = 'sm' }: { value: number; size?: 'sm' | 'md' }) => {
  const pct = Math.round(value * 100);
  const color = pct >= 90 ? 'text-neon-green bg-neon-green/10' : pct >= 80 ? 'text-neon-amber bg-neon-amber/10' : 'text-neon-rose bg-neon-rose/10';
  return (
    <span className={cn('inline-flex items-center rounded-full font-mono font-medium', color, size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs')}>
      {pct}%
    </span>
  );
};
