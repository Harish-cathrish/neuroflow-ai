import { MetricCard } from '@/components/MetricCard';
import { GlassCard } from '@/components/GlassCard';
import { teamMembers, performanceTimeline } from '@/lib/mockData';
import { Users, TrendingUp, AlertTriangle, CheckCircle, BarChart3, Brain } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { StatusDot } from '@/components/StatusDot';
import { motion } from 'framer-motion';

const ManagerDashboard = () => {
  const avgScore = Math.round(teamMembers.reduce((a, b) => a + b.score, 0) / teamMembers.length);
  const atRisk = teamMembers.filter(m => m.riskLevel === 'high').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Manager Command Center</h1>
        <p className="text-sm text-muted-foreground">Engineering Team Overview</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Team Size" value={teamMembers.length} icon={Users} neon="purple" />
        <MetricCard title="Avg Score" value={avgScore} icon={TrendingUp} trend="up" trendValue="+3 from Q4" neon="cyan" />
        <MetricCard title="At Risk" value={atRisk} icon={AlertTriangle} neon="rose" />
        <MetricCard title="Reviews Due" value="3" icon={CheckCircle} subtitle="Due in 5 days" neon="amber" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Team comparison */}
        <GlassCard className="col-span-2 p-5" neon="purple">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Team Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={teamMembers} layout="vertical">
              <XAxis type="number" domain={[0, 100]} tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 11 }} axisLine={false} />
              <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'hsl(225, 20%, 10%)', border: '1px solid hsl(225, 15%, 18%)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {teamMembers.map((m, i) => (
                  <Cell key={i} fill={m.score >= 90 ? 'hsl(160, 84%, 39%)' : m.score >= 75 ? 'hsl(199, 89%, 48%)' : m.score >= 65 ? 'hsl(38, 92%, 50%)' : 'hsl(0, 72%, 51%)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Team list */}
        <GlassCard className="p-5" neon="cyan">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Team Members</h3>
          <div className="space-y-3">
            {teamMembers.map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-lg bg-muted/30 p-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{m.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{m.name}</p>
                  <p className="text-[10px] text-muted-foreground">{m.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-foreground">{m.score}</span>
                  <StatusDot status={m.riskLevel === 'high' ? 'error' : m.riskLevel === 'medium' ? 'warning' : 'active'} />
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* AI Feedback Assistant */}
      <GlassCard className="p-5" neon="amber">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="h-4 w-4 text-neon-amber" />
          <h3 className="text-sm font-semibold text-foreground">AI Evaluation Suggestions</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-muted/30 p-3">
            <p className="text-[10px] font-semibold text-neon-green mb-1">High Performer Alert</p>
            <p className="text-xs text-foreground/80">Aisha Patel (score: 95) shows consistent growth. Recommend for senior promotion consideration and cross-team leadership opportunity.</p>
          </div>
          <div className="rounded-lg bg-muted/30 p-3">
            <p className="text-[10px] font-semibold text-destructive mb-1">Attention Required</p>
            <p className="text-xs text-foreground/80">David Kim (score: 68) shows declining trajectory. Suggested action: 1-on-1 meeting, workload review, and targeted skill development plan.</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ManagerDashboard;
