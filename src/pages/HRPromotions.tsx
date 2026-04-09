import { GlassCard } from '@/components/GlassCard';
import { teamMembers } from '@/lib/mockData';
import { Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const promotionCandidates = teamMembers.filter(m => m.score >= 80).map(m => ({
  ...m,
  readiness: m.score >= 90 ? 'Ready' : 'Near Ready',
  recommendation: m.score >= 90 ? 'Strongly Recommend' : 'Consider with development plan',
}));

const HRPromotions = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Promotion Readiness</h1>
      <p className="text-sm text-muted-foreground">AI-analyzed promotion candidates</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {promotionCandidates.map((c, i) => (
        <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <GlassCard className="p-5" neon={c.score >= 90 ? 'green' : 'amber'}>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{c.avatar}</div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="text-[10px] text-muted-foreground">{c.role}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-lg font-bold font-mono text-foreground">{c.score}</p>
                <p className={`text-[10px] font-semibold ${c.readiness === 'Ready' ? 'text-neon-green' : 'text-neon-amber'}`}>{c.readiness}</p>
              </div>
            </div>
            <p className="text-xs text-foreground/70">{c.recommendation}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
);

export default HRPromotions;
