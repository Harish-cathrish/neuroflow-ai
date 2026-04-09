import { GlassCard } from '@/components/GlassCard';
import { Zap, Target, Shield, Lightbulb } from 'lucide-react';

const strategies = [
  { icon: Target, title: 'Talent Retention Program', desc: 'Implement targeted retention for high-risk departments. Expected to reduce attrition by 35% and save $520K annually.', priority: 'Critical', color: 'text-destructive' },
  { icon: Zap, title: 'Performance Culture Initiative', desc: 'Launch peer recognition platform and gamified goal tracking. Projected +12% engagement improvement.', priority: 'High', color: 'text-neon-amber' },
  { icon: Shield, title: 'Bias Elimination Roadmap', desc: 'Mandatory reviewer calibration sessions and AI-assisted feedback rewriting. Target: 95%+ fairness score by Q4.', priority: 'High', color: 'text-neon-amber' },
  { icon: Lightbulb, title: 'Innovation Acceleration', desc: 'Allocate 20% time for innovation projects. Based on data from top-performing teams.', priority: 'Medium', color: 'text-primary' },
];

const ExecutiveStrategy = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Strategic Recommendations</h1>
      <p className="text-sm text-muted-foreground">AI-driven strategic initiatives</p>
    </div>
    <div className="grid gap-4">
      {strategies.map((s, i) => (
        <GlassCard key={i} className="p-5 flex items-start gap-4">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-muted flex items-center justify-center">
            <s.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <span className={`text-[10px] font-semibold ${s.color}`}>{s.priority}</span>
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">{s.desc}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>
);

export default ExecutiveStrategy;
