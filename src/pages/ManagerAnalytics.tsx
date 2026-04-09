import { GlassCard } from '@/components/GlassCard';
import { teamMembers, performanceTimeline } from '@/lib/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ManagerAnalytics = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Team Analytics</h1>
      <p className="text-sm text-muted-foreground">Productivity trends and insights</p>
    </div>
    <GlassCard className="p-5" neon="cyan">
      <h3 className="text-sm font-semibold text-foreground mb-4">Team Performance Trend</h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={performanceTimeline}>
          <XAxis dataKey="month" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis domain={[60, 100]} tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'hsl(225,20%,10%)', border: '1px solid hsl(225,15%,18%)', borderRadius: 8, fontSize: 12 }} />
          <Line type="monotone" dataKey="score" stroke="hsl(199,89%,48%)" strokeWidth={2} dot={{ fill: 'hsl(199,89%,48%)', r: 3 }} />
          <Line type="monotone" dataKey="goals" stroke="hsl(160,84%,39%)" strokeWidth={2} dot={{ fill: 'hsl(160,84%,39%)', r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </GlassCard>
  </div>
);

export default ManagerAnalytics;
