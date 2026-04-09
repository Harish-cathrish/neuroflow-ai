import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Send, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const categories = ['Technical Skills', 'Collaboration', 'Leadership', 'Innovation', 'Communication'];

const EmployeeSelfReview = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [narrative, setNarrative] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleGenerateAI = () => {
    setAiSuggestion(
      "Based on your ratings and recent performance data, here's a suggested narrative:\n\n" +
      "\"This quarter, I've made significant strides in technical skills, completing the microservices migration project ahead of schedule. " +
      "I actively mentored two junior developers, helping them ramp up on our codebase. My focus on system design has improved, " +
      "as evidenced by the 30% reduction in API response times. I aim to continue developing my leadership capabilities " +
      "and plan to pursue AWS certification to strengthen my cloud architecture skills.\""
    );
    toast.success('AI suggestion generated');
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success('Self-review submitted successfully!');
  };

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <GlassCard className="p-8 text-center max-w-md" neon="green">
          <CheckCircle className="mx-auto h-12 w-12 text-neon-green mb-4" />
          <h2 className="text-lg font-bold text-foreground">Review Submitted</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your self-review has been submitted for this cycle. Your manager will review it shortly.</p>
          <Button onClick={() => setSubmitted(false)} className="mt-4 bg-primary/10 text-primary hover:bg-primary/20" variant="ghost">Submit Another</Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Self Review</h1>
        <p className="text-sm text-muted-foreground">Q1 2026 Performance Self-Assessment</p>
      </div>

      <GlassCard className="p-5" neon="cyan">
        <h3 className="text-sm font-semibold text-foreground mb-4">Rate Yourself</h3>
        <div className="space-y-4">
          {categories.map(cat => (
            <div key={cat} className="flex items-center justify-between">
              <span className="text-xs text-foreground">{cat}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    onClick={() => setRatings({ ...ratings, [cat]: n })}
                    className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                      ratings[cat] >= n ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-5" neon="purple">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Performance Narrative</h3>
          <Button size="sm" variant="ghost" onClick={handleGenerateAI} className="text-secondary hover:text-secondary/80 text-xs gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> AI Assist
          </Button>
        </div>
        {aiSuggestion && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mb-3 rounded-lg bg-secondary/5 border border-secondary/20 p-3">
            <p className="text-[10px] font-semibold text-secondary mb-1">AI Suggestion</p>
            <p className="text-xs text-foreground/80 leading-relaxed whitespace-pre-line">{aiSuggestion}</p>
            <Button size="sm" variant="ghost" onClick={() => { setNarrative(aiSuggestion.split('\n\n')[1]?.replace(/"/g, '') || ''); setAiSuggestion(''); }} className="mt-2 text-xs text-secondary">
              Use This
            </Button>
          </motion.div>
        )}
        <Textarea
          value={narrative}
          onChange={e => setNarrative(e.target.value)}
          placeholder="Describe your key achievements, challenges, and areas for growth..."
          className="min-h-[120px] bg-background/50 border-border text-sm"
        />
      </GlassCard>

      <Button onClick={handleSubmit} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
        <Send className="h-4 w-4" /> Submit Self Review
      </Button>
    </div>
  );
};

export default EmployeeSelfReview;
