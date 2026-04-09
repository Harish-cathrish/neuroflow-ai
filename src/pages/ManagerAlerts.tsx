import { GlassCard } from '@/components/GlassCard';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const alerts = [
  { type: 'critical' as const, title: 'Burnout Risk Detected', desc: 'David Kim has logged 45+ hours/week for 4 consecutive weeks. Immediate action recommended.', time: '2h ago' },
  { type: 'warning' as const, title: 'Performance Decline', desc: 'Marcus Johnson performance score dropped 8 points this month. Schedule a check-in.', time: '5h ago' },
  { type: 'info' as const, title: 'Review Cycle Reminder', desc: 'Q1 2026 performance reviews are due in 5 days. 3 reviews pending completion.', time: '1d ago' },
  { type: 'warning' as const, title: 'Skill Gap Alert', desc: 'Team average in Cloud Architecture is 12 points below department benchmark.', time: '2d ago' },
];

const icons = { critical: AlertTriangle, warning: AlertCircle, info: Info };
const colors = { critical: 'text-destructive border-destructive/30', warning: 'text-neon-amber border-neon-amber/30', info: 'text-primary border-primary/30' };

const ManagerAlerts = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Alerts & Notifications</h1>
      <p className="text-sm text-muted-foreground">AI-generated team alerts requiring attention</p>
    </div>
    <div className="space-y-3">
      {alerts.map((a, i) => {
        const Icon = icons[a.type];
        return (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className={`p-4 flex items-start gap-3 border-l-2 ${colors[a.type]}`}>
              <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${colors[a.type].split(' ')[0]}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-foreground">{a.title}</p>
                  <span className="text-[10px] text-muted-foreground">{a.time}</span>
                </div>
                <p className="mt-1 text-xs text-foreground/70">{a.desc}</p>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default ManagerAlerts;
