import { GlassCard } from '@/components/GlassCard';
import { skills } from '@/lib/mockData';
import { motion } from 'framer-motion';

const EmployeeSkills = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Skill Gap Analysis</h1>
      <p className="text-sm text-muted-foreground">Track your skills against target competency levels</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((s, i) => {
        const gap = s.target - s.current;
        return (
          <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="p-5" neon={gap <= 5 ? 'green' : gap <= 15 ? 'amber' : 'rose'}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
                <span className="text-[10px] font-mono text-muted-foreground">Gap: {gap}pts</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                    <span>Current: {s.current}</span><span>Target: {s.target}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted relative">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.target}%` }} transition={{ duration: 1 }} className="absolute h-full rounded-full bg-muted-foreground/20" />
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.current}%` }} transition={{ duration: 1, delay: 0.2 }} className="absolute h-full rounded-full bg-gradient-to-r from-primary to-neon-green" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default EmployeeSkills;
