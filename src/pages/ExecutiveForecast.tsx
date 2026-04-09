import { GlassCard } from '@/components/GlassCard';
import { quarterlyTrends } from '@/lib/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const forecast = [
  ...quarterlyTrends,
  { quarter: 'Q2 2026', performance: 84, engagement: 80, retention: 92 },
  { quarter: 'Q3 2026', performance: 86, engagement: 82, retention: 93 },
  { quarter: 'Q4 2026', performance: 88, engagement: 84, retention: 93 },
];

const ExecutiveForecast = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Workforce Forecast</h1>
      <p className="text-sm text-muted-foreground">AI-projected workforce trends through 2026</p>
    </div>
    <GlassCard className="p-5" neon="green">
      <h3 className="text-sm font-semibold text-foreground mb-4">Growth Projections</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={forecast}>
          <XAxis dataKey="quarter" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 9 }} axisLine={false} tickLine={false} />
          <YAxis domain={[60, 100]} tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'hsl(225,20%,10%)', border: '1px solid hsl(225,15%,18%)', borderRadius: 8, fontSize: 12 }} />
          <Line type="monotone" dataKey="performance" stroke="hsl(199,89%,48%)" strokeWidth={2} strokeDasharray={quarterlyTrends.length > 4 ? undefined : "5 5"} />
          <Line type="monotone" dataKey="engagement" stroke="hsl(270,60%,55%)" strokeWidth={2} />
          <Line type="monotone" dataKey="retention" stroke="hsl(160,84%,39%)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-3 text-[10px] text-muted-foreground">Dashed lines represent AI projections based on current trends and planned initiatives.</p>
    </GlassCard>
  </div>
);

export default ExecutiveForecast;
