import { GlassCard } from '@/components/GlassCard';
import { departmentData } from '@/lib/mockData';
import { Users } from 'lucide-react';

const ExecutiveWorkforce = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Workforce Overview</h1>
      <p className="text-sm text-muted-foreground">Organization-wide workforce metrics</p>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {departmentData.map(d => (
        <GlassCard key={d.name} className="p-5" neon="cyan">
          <h3 className="text-sm font-semibold text-foreground">{d.name}</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div><p className="text-muted-foreground">Headcount</p><p className="font-bold text-foreground">{d.headcount}</p></div>
            <div><p className="text-muted-foreground">Score</p><p className="font-bold text-foreground">{d.score}</p></div>
            <div><p className="text-muted-foreground">Attrition</p><p className={`font-bold ${d.attrition > 8 ? 'text-destructive' : 'text-foreground'}`}>{d.attrition}%</p></div>
            <div><p className="text-muted-foreground">Diversity</p><p className="font-bold text-foreground">{d.diversity}%</p></div>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>
);

export default ExecutiveWorkforce;
