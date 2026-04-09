import { GlassCard } from '@/components/GlassCard';
import { goals, skills } from '@/lib/mockData';
import { Target, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const EmployeeGoals = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Goal Tracker</h1>
      <p className="text-sm text-muted-foreground">Track and manage your development goals</p>
    </div>
    <div className="grid gap-4">
      {goals.map((g, i) => (
        <motion.div key={g.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <GlassCard className="p-5" neon={g.status === 'completed' ? 'green' : g.priority === 'high' ? 'cyan' : 'none'}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                {g.status === 'completed' ? <CheckCircle className="h-5 w-5 text-neon-green mt-0.5" /> : <Target className="h-5 w-5 text-primary mt-0.5" />}
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{g.deadline}</span>
                    <span className={`rounded px-1.5 py-0.5 font-medium ${g.priority === 'high' ? 'bg-destructive/10 text-destructive' : g.priority === 'medium' ? 'bg-neon-amber/10 text-neon-amber' : 'bg-muted text-muted-foreground'}`}>{g.priority}</span>
                  </div>
                </div>
              </div>
              <span className="text-lg font-bold font-mono text-foreground">{g.progress}%</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-muted">
              <motion.div initial={{ width: 0 }} animate={{ width: `${g.progress}%` }} transition={{ duration: 1 }}
                className={`h-full rounded-full ${g.status === 'completed' ? 'bg-neon-green' : 'bg-gradient-to-r from-primary to-neon-green'}`} />
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
);

export default EmployeeGoals;
