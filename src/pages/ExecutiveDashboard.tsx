import { MetricCard } from '@/components/MetricCard';
import { GlassCard } from '@/components/GlassCard';
import { orgHealthMetrics, quarterlyTrends, departmentData } from '@/lib/mockData';
import { Activity, TrendingUp, Users, DollarSign, Brain, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';

const healthRadar = [
  { metric: 'Engagement', value: orgHealthMetrics.engagement },
  { metric: 'Retention', value: orgHealthMetrics.retention },
  { metric: 'Productivity', value: orgHealthMetrics.productivity },
  { metric: 'Innovation', value: orgHealthMetrics.innovation },
  { metric: 'Culture', value: orgHealthMetrics.culture },
  { metric: 'Growth', value: orgHealthMetrics.growth },
];

const ExecutiveDashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Executive Dashboard</h1>
      <p className="text-sm text-muted-foreground">Strategic workforce intelligence</p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard title="Org Performance" value={`${orgHealthMetrics.overallScore}/100`} icon={Activity} trend="up" trendValue="+4 pts YoY" neon="green" />
      <MetricCard title="Retention Rate" value={`${orgHealthMetrics.retention}%`} icon={Users} trend="up" trendValue="+2% vs Q4" neon="cyan" />
      <MetricCard title="Workforce ROI" value="3.2x" icon={DollarSign} subtitle="Training investment return" neon="amber" />
      <MetricCard title="AI Confidence" value="93%" icon={Brain} subtitle="Decision accuracy" neon="purple" />
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard className="p-5" neon="green">
        <h3 className="text-sm font-semibold text-foreground mb-4">Company Health Score</h3>
        <ResponsiveContainer width="100%" height={260}>
          <RadarChart data={healthRadar}>
            <PolarGrid stroke="hsl(225,15%,18%)" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 10 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar dataKey="value" stroke="hsl(160,84%,39%)" fill="hsl(160,84%,39%)" fillOpacity={0.2} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard className="p-5" neon="cyan">
        <h3 className="text-sm font-semibold text-foreground mb-4">Quarterly Trends</h3>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={quarterlyTrends}>
            <XAxis dataKey="quarter" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 9 }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'hsl(225,20%,10%)', border: '1px solid hsl(225,15%,18%)', borderRadius: 8, fontSize: 12 }} />
            <Line type="monotone" dataKey="performance" stroke="hsl(199,89%,48%)" strokeWidth={2} name="Performance" />
            <Line type="monotone" dataKey="engagement" stroke="hsl(270,60%,55%)" strokeWidth={2} name="Engagement" />
            <Line type="monotone" dataKey="retention" stroke="hsl(160,84%,39%)" strokeWidth={2} name="Retention" />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>

    {/* AI Strategic Recommendations */}
    <GlassCard className="p-5" neon="purple">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-4 w-4 text-secondary" />
        <h3 className="text-sm font-semibold text-foreground">AI Strategic Recommendations</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg bg-muted/30 p-3">
          <p className="text-[10px] font-semibold text-neon-green mb-1">GROWTH OPPORTUNITY</p>
          <p className="text-xs text-foreground/80">Engineering team shows 15% above-average innovation score. Consider expanding R&D investment by 20% for Q2.</p>
        </div>
        <div className="rounded-lg bg-muted/30 p-3">
          <p className="text-[10px] font-semibold text-neon-amber mb-1">ATTENTION NEEDED</p>
          <p className="text-xs text-foreground/80">Sales attrition trending upward. Predicted cost: $340K. Implement retention program to save $280K annually.</p>
        </div>
        <div className="rounded-lg bg-muted/30 p-3">
          <p className="text-[10px] font-semibold text-primary mb-1">FORECAST</p>
          <p className="text-xs text-foreground/80">Workforce productivity projected to increase 8% in H2 2026 with current L&D investments maintained.</p>
        </div>
      </div>
    </GlassCard>
  </div>
);

export default ExecutiveDashboard;
