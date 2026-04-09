import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  neon?: 'cyan' | 'purple' | 'green' | 'amber' | 'rose' | 'none';
}

export const MetricCard = ({ title, value, subtitle, icon: Icon, trend, trendValue, neon = 'cyan' }: MetricCardProps) => {
  return (
    <GlassCard neon={neon} className="p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          {trend && trendValue && (
            <p className={cn('text-xs font-medium', trend === 'up' ? 'text-neon-green' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground')}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
            </p>
          )}
        </div>
        <div className={cn(
          'rounded-lg p-2.5',
          neon === 'cyan' ? 'bg-primary/10 text-primary' :
          neon === 'purple' ? 'bg-secondary/10 text-secondary' :
          neon === 'green' ? 'bg-neon-green/10 text-neon-green' :
          neon === 'amber' ? 'bg-neon-amber/10 text-neon-amber' :
          neon === 'rose' ? 'bg-neon-rose/10 text-neon-rose' :
          'bg-muted text-muted-foreground'
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </GlassCard>
  );
};
