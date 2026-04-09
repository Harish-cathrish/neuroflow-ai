import { GlassCard } from '@/components/GlassCard';
import { departmentData } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const HRDepartments = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Department Analytics</h1>
      <p className="text-sm text-muted-foreground">Cross-department performance and metrics</p>
    </div>
    <GlassCard className="overflow-hidden" neon="amber">
      <table className="w-full text-xs">
        <thead><tr className="border-b border-border">
          <th className="p-3 text-left text-muted-foreground">Department</th>
          <th className="p-3 text-center text-muted-foreground">Headcount</th>
          <th className="p-3 text-center text-muted-foreground">Score</th>
          <th className="p-3 text-center text-muted-foreground">Attrition</th>
          <th className="p-3 text-center text-muted-foreground">Diversity</th>
        </tr></thead>
        <tbody>
          {departmentData.map(d => (
            <tr key={d.name} className="border-b border-border/50 hover:bg-muted/20">
              <td className="p-3 font-medium text-foreground">{d.name}</td>
              <td className="p-3 text-center text-foreground">{d.headcount}</td>
              <td className="p-3 text-center font-mono font-bold text-foreground">{d.score}</td>
              <td className={`p-3 text-center font-mono ${d.attrition > 8 ? 'text-destructive' : d.attrition > 5 ? 'text-neon-amber' : 'text-neon-green'}`}>{d.attrition}%</td>
              <td className="p-3 text-center text-foreground">{d.diversity}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
    <GlassCard className="p-5" neon="cyan">
      <h3 className="text-sm font-semibold text-foreground mb-4">Attrition by Department</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={departmentData}>
          <XAxis dataKey="name" tick={{ fill: 'hsl(215,15%,55%)', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(215,15%,55%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'hsl(225,20%,10%)', border: '1px solid hsl(225,15%,18%)', borderRadius: 8, fontSize: 12 }} />
          <Bar dataKey="attrition" radius={[4, 4, 0, 0]}>
            {departmentData.map((d, i) => (
              <Cell key={i} fill={d.attrition > 8 ? 'hsl(0,72%,51%)' : d.attrition > 5 ? 'hsl(38,92%,50%)' : 'hsl(160,84%,39%)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GlassCard>
  </div>
);

export default HRDepartments;
