import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  neon?: 'cyan' | 'purple' | 'green' | 'amber' | 'rose' | 'none';
  hover?: boolean;
  animate?: boolean;
}

export const GlassCard = ({ children, className, neon = 'none', hover = true, animate = true }: GlassCardProps) => {
  const neonClass = {
    cyan: 'neon-border-cyan',
    purple: 'neon-border-purple',
    green: 'border-neon-green/40 shadow-[0_0_15px_hsl(160_84%_39%/0.15)]',
    amber: 'border-neon-amber/40 shadow-[0_0_15px_hsl(38_92%_50%/0.15)]',
    rose: 'border-neon-rose/40 shadow-[0_0_15px_hsl(350_89%_60%/0.15)]',
    none: '',
  }[neon];

  const Comp = animate ? motion.div : 'div';
  const animProps = animate
    ? { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } }
    : {};

  return (
    <Comp
      className={cn(hover ? 'glass-card-hover' : 'glass-card', neonClass, className)}
      {...animProps}
    >
      {children}
    </Comp>
  );
};
