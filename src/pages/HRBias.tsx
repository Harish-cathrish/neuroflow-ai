import { GlassCard } from '@/components/GlassCard';
import { biasMetrics } from '@/lib/mockData';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const HRBias = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Bias Monitor</h1>
      <p className="text-sm text-muted-foreground">Real-time fairness and equity tracking</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {biasMetrics.map((b, i) => (
        <motion.div key={b.category} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <GlassCard className="p-5" neon={b.status === 'good' ? 'green' : 'amber'}>
            <div className="flex items-center gap-2 mb-3">
              <Shield className={`h-4 w-4 ${b.status === 'good' ? 'text-neon-green' : 'text-neon-amber'}`} />
              <h3 className="text-sm font-semibold text-foreground">{b.category} Fairness</h3>
            </div>
            <div className="text-3xl font-bold font-mono text-foreground mb-2">{b.score}%</div>
            <p className="text-xs text-muted-foreground">{b.alerts} flagged reviews this quarter</p>
            <div className="mt-3 h-2 rounded-full bg-muted">
              <div className={`h-full rounded-full transition-all ${b.score >= 90 ? 'bg-neon-green' : 'bg-neon-amber'}`} style={{ width: `${b.score}%` }} />
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
);

export default HRBias;
