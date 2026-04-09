import { GlassCard } from '@/components/GlassCard';
import { teamMembers } from '@/lib/mockData';
import { StatusDot } from '@/components/StatusDot';

const ManagerTeam = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Team Overview</h1>
      <p className="text-sm text-muted-foreground">Detailed view of all team members</p>
    </div>
    <GlassCard className="overflow-hidden" neon="purple">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 text-left font-semibold text-muted-foreground">Employee</th>
            <th className="p-3 text-left font-semibold text-muted-foreground">Role</th>
            <th className="p-3 text-center font-semibold text-muted-foreground">Score</th>
            <th className="p-3 text-center font-semibold text-muted-foreground">Trend</th>
            <th className="p-3 text-center font-semibold text-muted-foreground">Risk</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map(m => (
            <tr key={m.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
              <td className="p-3 font-medium text-foreground">{m.name}</td>
              <td className="p-3 text-muted-foreground">{m.role}</td>
              <td className="p-3 text-center font-mono font-bold text-foreground">{m.score}</td>
              <td className="p-3 text-center">
                <span className={m.trend === 'up' ? 'text-neon-green' : m.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'}>
                  {m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '→'}
                </span>
              </td>
              <td className="p-3"><div className="flex justify-center"><StatusDot status={m.riskLevel === 'high' ? 'error' : m.riskLevel === 'medium' ? 'warning' : 'active'} /></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
  </div>
);

export default ManagerTeam;
