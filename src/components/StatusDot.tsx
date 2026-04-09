import { cn } from '@/lib/utils';

export const StatusDot = ({ status }: { status: 'active' | 'warning' | 'error' | 'idle' }) => {
  const colors = {
    active: 'bg-neon-green',
    warning: 'bg-neon-amber',
    error: 'bg-destructive',
    idle: 'bg-muted-foreground',
  };
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === 'active' && <span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', colors[status])} />}
      <span className={cn('relative inline-flex h-2.5 w-2.5 rounded-full', colors[status])} />
    </span>
  );
};
