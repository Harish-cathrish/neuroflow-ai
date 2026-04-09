import { MetricCard } from '@/components/MetricCard';
import { GlassCard } from '@/components/GlassCard';
import { departmentData, biasMetrics } from '@/lib/mockData';
import { Shield, Users, TrendingDown, Award, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { motion } from 'framer-motion';

const HRDashboard = () => {
  const totalEmployees = departmentData.reduce((a, b) => a + b.headcount, 0);
  const avgAttrition = (departmentData.reduce((a, b) => a + b.attrition, 0) / departmentData.length).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">HR Intelligence Dashboard</h1>
        <p className="text-sm text-muted-foreground">Organization-wide analytics & fairness monitoring</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Workforce" value={totalEmployees} icon={Users} neon="amber" />
        <MetricCard title="Avg Attrition" value={`${avgAttrition}%`} icon={TrendingDown} trend="down" trendValue="-1.2% vs Q4" neon="rose" />
        <MetricCard title="Bias Score" value="91/100" icon={Shield} trend="up" trendValue="+3 pts" neon="green" />
        <MetricCard title="Promotion Ready" value="24" icon={Award} subtitle="Across 4 departments" neon="purple" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Department scores */}
        <GlassCard className="p-5" neon="amber">
          <h3 className="text-sm font-semibold text-foreground mb-4">Department Performance</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={departmentData}>
              <XAxis dataKey="name" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'hsl(225,20%,10%)', border: '1px solid hsl(225,15%,18%)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                {departmentData.map((d, i) => (
                  <Cell key={i} fill={d.score >= 85 ? 'hsl(160,84%,39%)' : d.score >= 78 ? 'hsl(199,89%,48%)' : 'hsl(38,92%,50%)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Bias metrics */}
        <GlassCard className="p-5" neon="green">
          <h3 className="text-sm font-semibold text-foreground mb-4">Bias Detection Heatmap</h3>
          <div className="space-y-3">
            {biasMetrics.map((b, i) => (
              <motion.div key={b.category} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-foreground">{b.category}</span>
                  <div className="flex items-center gap-2">
                    {b.alerts > 0 && <span className="text-[10px] text-neon-amber flex items-center gap-0.5"><AlertTriangle className="h-3 w-3" />{b.alerts}</span>}
                    <span className={`text-xs font-mono font-bold ${b.score >= 90 ? 'text-neon-green' : b.score >= 85 ? 'text-neon-amber' : 'text-destructive'}`}>{b.score}%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${b.score}%` }} transition={{ duration: 1 }}
                    className={`h-full rounded-full ${b.score >= 90 ? 'bg-neon-green' : b.score >= 85 ? 'bg-neon-amber' : 'bg-destructive'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Diversity & Attrition */}
      <GlassCard className="p-5" neon="purple">
        <h3 className="text-sm font-semibold text-foreground mb-4">Workforce Risk Alerts</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-3">
            <p className="text-[10px] font-semibold text-destructive">HIGH ATTRITION RISK</p>
            <p className="mt-1 text-xs text-foreground/80">Sales department at 12.3% attrition — 2x company average. AI recommends retention program.</p>
          </div>
          <div className="rounded-lg bg-neon-amber/5 border border-neon-amber/20 p-3">
            <p className="text-[10px] font-semibold text-neon-amber">AGE BIAS WARNING</p>
            <p className="mt-1 text-xs text-foreground/80">Age-based bias score at 87%. 5 flagged reviews in Q1. Recommend reviewer training.</p>
          </div>
          <div className="rounded-lg bg-neon-green/5 border border-neon-green/20 p-3">
            <p className="text-[10px] font-semibold text-neon-green">DIVERSITY IMPROVING</p>
            <p className="mt-1 text-xs text-foreground/80">Product dept diversity at 51%, highest in org. Sharing best practices across teams.</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default HRDashboard;
