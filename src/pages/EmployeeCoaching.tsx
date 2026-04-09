import { GlassCard } from '@/components/GlassCard';
import { coachingInsights } from '@/lib/mockData';
import { Brain, Sparkles, Target, Heart, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const typeIcons = { skill: BookOpen, recognition: Sparkles, career: Target, wellness: Heart };
const typeColors = { skill: 'text-primary', recognition: 'text-neon-green', career: 'text-secondary', wellness: 'text-neon-rose' };

const EmployeeCoaching = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">AI Career Coach</h1>
      <p className="text-sm text-muted-foreground">Personalized AI-driven coaching insights</p>
    </div>

    <GlassCard className="p-5" neon="amber">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl bg-neon-amber/10 flex items-center justify-center">
          <Brain className="h-5 w-5 text-neon-amber" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Improvement Plan</h3>
          <p className="text-xs text-muted-foreground">Generated based on your performance data</p>
        </div>
      </div>
      <div className="space-y-2 text-xs text-foreground/80 leading-relaxed">
        <p>1. <strong>Short-term (30 days):</strong> Complete AWS Solutions Architect certification. Focus on hands-on labs for VPC and Lambda.</p>
        <p>2. <strong>Mid-term (90 days):</strong> Lead the microservices migration project end-to-end. Document architecture decisions for team knowledge base.</p>
        <p>3. <strong>Long-term (6 months):</strong> Transition into a Tech Lead role. Build cross-team collaboration skills through a joint project with the Product team.</p>
      </div>
    </GlassCard>

    <div className="grid gap-4">
      {coachingInsights.map((c, i) => {
        const Icon = typeIcons[c.type];
        return (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
            <GlassCard className="p-4 flex items-start gap-3">
              <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${typeColors[c.type]}`} />
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground">{c.week} · {c.type}</p>
                <p className="mt-1 text-xs text-foreground/80 leading-relaxed">{c.insight}</p>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default EmployeeCoaching;
