import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { teamMembers } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send } from 'lucide-react';
import { toast } from 'sonner';

const ManagerEvaluations = () => {
  const [selected, setSelected] = useState(teamMembers[0].id);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState('');

  const employee = teamMembers.find(m => m.id === selected)!;

  const handleAIAssist = () => {
    setFeedback(`${employee.name} has demonstrated ${employee.score >= 85 ? 'exceptional' : employee.score >= 70 ? 'solid' : 'developing'} performance this quarter. Key strengths include consistent delivery and team collaboration. Recommended focus areas: advancing system design skills and taking on more cross-functional initiatives.`);
    toast.success('AI feedback generated');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Evaluations</h1>
        <p className="text-sm text-muted-foreground">Write and submit performance evaluations</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="p-4" neon="purple">
          <h3 className="text-sm font-semibold text-foreground mb-3">Select Employee</h3>
          <div className="space-y-2">
            {teamMembers.map(m => (
              <button key={m.id} onClick={() => setSelected(m.id)}
                className={`w-full flex items-center gap-2 rounded-lg p-2.5 text-left transition-colors ${m.id === selected ? 'bg-primary/10 border border-primary/30' : 'hover:bg-muted/30'}`}>
                <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-primary">{m.avatar}</div>
                <div>
                  <p className="text-xs font-medium text-foreground">{m.name}</p>
                  <p className="text-[10px] text-muted-foreground">{m.role}</p>
                </div>
              </button>
            ))}
          </div>
        </GlassCard>

        <div className="col-span-2 space-y-4">
          <GlassCard className="p-5" neon="cyan">
            <h3 className="text-sm font-semibold text-foreground mb-4">Evaluate: {employee.name}</h3>
            <div className="space-y-3">
              {['Technical Execution', 'Teamwork', 'Initiative', 'Communication', 'Growth'].map(cat => (
                <div key={cat} className="flex items-center justify-between">
                  <span className="text-xs text-foreground">{cat}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} onClick={() => setRatings({ ...ratings, [`${selected}-${cat}`]: n })}
                        className={`h-7 w-7 rounded text-[10px] font-bold transition-all ${ratings[`${selected}-${cat}`] >= n ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-5" neon="amber">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">Written Feedback</h3>
              <Button size="sm" variant="ghost" onClick={handleAIAssist} className="text-neon-amber text-xs gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> AI Assist
              </Button>
            </div>
            <Textarea value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="Write your evaluation feedback..." className="min-h-[100px] bg-background/50 border-border text-sm" />
            <Button onClick={() => toast.success('Evaluation submitted!')} className="mt-3 w-full bg-primary text-primary-foreground gap-2">
              <Send className="h-4 w-4" /> Submit Evaluation
            </Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ManagerEvaluations;
