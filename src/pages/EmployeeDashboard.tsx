import { MetricCard } from '@/components/MetricCard';
import { GlassCard } from '@/components/GlassCard';
import { performanceTimeline, goals, skills, coachingInsights } from '@/lib/mockData';
import { Target, TrendingUp, Award, Brain, CheckCircle, Clock, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const EmployeeDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Growth Dashboard</h1>
        <p className="text-sm text-muted-foreground">Your personal performance & development hub</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Performance Score" value="87" subtitle="Top 22% in department" icon={TrendingUp} trend="up" trendValue="+5 from last quarter" neon="cyan" />
        <MetricCard title="Goals Completed" value="4/5" subtitle="1 in progress" icon={Target} trend="up" trendValue="80% completion rate" neon="green" />
        <MetricCard title="Skill Progress" value="78%" subtitle="6 skills tracked" icon={Zap} trend="up" trendValue="+12% this month" neon="purple" />
        <MetricCard title="AI Coach Score" value="A-" subtitle="Consistent performer" icon={Brain} neon="amber" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Performance Timeline */}
        <GlassCard className="col-span-2 p-5" neon="cyan">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Performance Timeline</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={performanceTimeline}>
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'hsl(225, 20%, 10%)', border: '1px solid hsl(225, 15%, 18%)', borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="score" stroke="hsl(199, 89%, 48%)" fill="url(#scoreGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Skill Radar */}
        <GlassCard className="p-5" neon="purple">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Skill Map</h3>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={skills}>
              <PolarGrid stroke="hsl(225, 15%, 18%)" />
              <PolarAngleAxis dataKey="name" tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 9 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Current" dataKey="current" stroke="hsl(199, 89%, 48%)" fill="hsl(199, 89%, 48%)" fillOpacity={0.2} />
              <Radar name="Target" dataKey="target" stroke="hsl(270, 60%, 55%)" fill="hsl(270, 60%, 55%)" fillOpacity={0.1} strokeDasharray="4 4" />
            </RadarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Goals */}
        <GlassCard className="p-5" neon="green">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Active Goals</h3>
          <div className="space-y-3">
            {goals.map(g => (
              <div key={g.id} className="flex items-center gap-3">
                {g.status === 'completed' ? (
                  <CheckCircle className="h-4 w-4 shrink-0 text-neon-green" />
                ) : (
                  <Clock className="h-4 w-4 shrink-0 text-neon-amber" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="truncate text-xs font-medium text-foreground">{g.title}</p>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${g.progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-neon-green"
                    />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">{g.progress}%</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* AI Coaching */}
        <GlassCard className="p-5" neon="amber">
          <h3 className="mb-4 text-sm font-semibold text-foreground flex items-center gap-2">
            <Brain className="h-4 w-4 text-neon-amber" /> AI Coaching Insights
          </h3>
          <div className="space-y-3">
            {coachingInsights.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-lg bg-muted/50 p-3"
              >
                <p className="text-[10px] font-semibold text-muted-foreground mb-1">{c.week}</p>
                <p className="text-xs text-foreground/80 leading-relaxed">{c.insight}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
