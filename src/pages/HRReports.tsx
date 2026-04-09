import { GlassCard } from '@/components/GlassCard';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const reports = [
  { name: 'Q1 2026 Performance Summary', date: '2026-04-01', type: 'Quarterly Review', status: 'Ready' },
  { name: 'Diversity & Inclusion Report', date: '2026-03-28', type: 'D&I', status: 'Ready' },
  { name: 'Attrition Risk Analysis', date: '2026-03-25', type: 'Risk', status: 'Ready' },
  { name: 'Compensation Equity Audit', date: '2026-03-20', type: 'Compensation', status: 'Processing' },
  { name: 'Training ROI Report', date: '2026-03-15', type: 'L&D', status: 'Ready' },
];

const HRReports = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Automated Reports</h1>
      <p className="text-sm text-muted-foreground">AI-generated HR analytics reports</p>
    </div>
    <div className="space-y-3">
      {reports.map((r, i) => (
        <GlassCard key={i} className="p-4 flex items-center gap-4">
          <FileText className="h-5 w-5 text-primary shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground">{r.name}</p>
            <p className="text-[10px] text-muted-foreground">{r.type} · {r.date}</p>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${r.status === 'Ready' ? 'bg-neon-green/10 text-neon-green' : 'bg-neon-amber/10 text-neon-amber'}`}>{r.status}</span>
          <Button size="sm" variant="ghost" onClick={() => toast.info('Report download simulated')} disabled={r.status !== 'Ready'}>
            <Download className="h-3.5 w-3.5" />
          </Button>
        </GlassCard>
      ))}
    </div>
  </div>
);

export default HRReports;
