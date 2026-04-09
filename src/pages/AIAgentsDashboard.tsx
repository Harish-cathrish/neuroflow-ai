import { useState, useEffect } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { MetricCard } from '@/components/MetricCard';
import { ConfidenceBadge } from '@/components/ConfidenceBadge';
import { StatusDot } from '@/components/StatusDot';
import { aiAgents } from '@/lib/mockData';
import { Cpu, Activity, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAgentsDashboard = () => {
  const [liveLog, setLiveLog] = useState<{ time: string; agent: string; action: string; confidence: number }[]>([]);

  useEffect(() => {
    const actions = [
      { agent: 'Performance Review Agent', action: 'Analyzing peer feedback for Engineering team', confidence: 0.94 },
      { agent: 'Bias Monitoring Agent', action: 'Scanning Marketing reviews for language bias', confidence: 0.96 },
      { agent: 'Growth Coach Agent', action: 'Updating skill recommendations for 8 employees', confidence: 0.91 },
      { agent: 'Risk Prediction Agent', action: 'Recalculating burnout probability scores', confidence: 0.87 },
      { agent: 'Promotion Recommendation Agent', action: 'Evaluating Q1 promotion candidates', confidence: 0.93 },
      { agent: 'Bias Monitoring Agent', action: 'Cross-referencing rating distributions by age group', confidence: 0.95 },
      { agent: 'Performance Review Agent', action: 'Generating narrative summary for David Kim', confidence: 0.89 },
      { agent: 'Growth Coach Agent', action: 'Creating personalized learning path', confidence: 0.92 },
    ];
    let idx = 0;
    const interval = setInterval(() => {
      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      setLiveLog(prev => [{ ...actions[idx % actions.length], time }, ...prev].slice(0, 15));
      idx++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const totalDecisions = aiAgents.reduce((a, b) => a + b.decisions, 0);
  const avgAccuracy = (aiAgents.reduce((a, b) => a + b.accuracy, 0) / aiAgents.length).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">AI Agent Control Center</h1>
        <p className="text-sm text-muted-foreground">Autonomous AI activity monitoring</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Active Agents" value={aiAgents.filter(a => a.status === 'active').length} icon={Cpu} neon="cyan" />
        <MetricCard title="Total Decisions" value={totalDecisions.toLocaleString()} icon={CheckCircle} neon="green" />
        <MetricCard title="Avg Accuracy" value={`${avgAccuracy}%`} icon={Activity} neon="purple" />
        <MetricCard title="Alerts" value="2" icon={AlertTriangle} neon="amber" />
      </div>

      {/* Agent cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {aiAgents.map((agent, i) => (
          <motion.div key={agent.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="p-5" neon={agent.status === 'active' ? 'cyan' : 'amber'}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{agent.icon}</span>
                  <div>
                    <h3 className="text-xs font-semibold text-foreground">{agent.name}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <StatusDot status={agent.status} />
                      <span className="text-[10px] text-muted-foreground capitalize">{agent.status}</span>
                    </div>
                  </div>
                </div>
                <ConfidenceBadge value={agent.confidence} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-center mb-3">
                <div className="rounded bg-muted/30 p-2">
                  <p className="text-lg font-bold font-mono text-foreground">{agent.decisions}</p>
                  <p className="text-[10px] text-muted-foreground">Decisions</p>
                </div>
                <div className="rounded bg-muted/30 p-2">
                  <p className="text-lg font-bold font-mono text-foreground">{agent.accuracy}%</p>
                  <p className="text-[10px] text-muted-foreground">Accuracy</p>
                </div>
              </div>

              <p className="text-[10px] text-muted-foreground mb-1">Last action · {agent.lastActionTime}</p>
              <p className="text-xs text-foreground/70">{agent.lastAction}</p>

              <div className="mt-3 space-y-1.5">
                {agent.logs.slice(0, 2).map((log, j) => (
                  <div key={j} className="flex items-center gap-2 text-[10px]">
                    <span className="font-mono text-muted-foreground">{log.time}</span>
                    <span className="truncate text-foreground/60 flex-1">{log.action}</span>
                    <span className={`font-medium ${log.result === 'Flagged' || log.result === 'Alert Sent' ? 'text-neon-amber' : 'text-neon-green'}`}>{log.result}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Live activity feed */}
      <GlassCard className="p-5" neon="purple">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-4 w-4 text-secondary animate-pulse" />
          <h3 className="text-sm font-semibold text-foreground">Live AI Activity Feed</h3>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {liveLog.length === 0 && <p className="text-xs text-muted-foreground">Waiting for agent activity...</p>}
          {liveLog.map((entry, i) => (
            <motion.div key={`${entry.time}-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[11px] py-1.5 border-b border-border/30">
              <span className="font-mono text-muted-foreground shrink-0">{entry.time}</span>
              <span className="text-primary font-medium shrink-0">{entry.agent.split(' ')[0]}</span>
              <span className="text-foreground/70 truncate flex-1">{entry.action}</span>
              <ConfidenceBadge value={entry.confidence} />
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* AI Decision Transparency */}
      <GlassCard className="p-5" neon="green">
        <h3 className="text-sm font-semibold text-foreground mb-4">AI Decision Transparency Panel</h3>
        <div className="rounded-lg bg-muted/30 p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-lg bg-neon-green/10 flex items-center justify-center text-sm">🚀</div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">Decision: Recommend Aisha Patel for Senior Promotion</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
                <div><span className="text-muted-foreground">Confidence:</span> <span className="text-neon-green font-bold">96%</span></div>
                <div><span className="text-muted-foreground">Bias Risk:</span> <span className="text-neon-green font-bold">Low (2%)</span></div>
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">
                <strong className="text-foreground">Reasoning:</strong> Consistent performance score ≥90 for 4 consecutive quarters. 
                Peer feedback sentiment 94% positive. Led 3 cross-team initiatives. Skills exceed next-level requirements by 15%.
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                <strong className="text-foreground">Data Factors:</strong> Performance history, peer reviews, goal completion rate, skill assessments, market benchmarks, tenure analysis.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default AIAgentsDashboard;
