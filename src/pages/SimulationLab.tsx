import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { simulationScenarios } from '@/lib/mockData';
import { FlaskConical, Play, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const SimulationLab = () => {
  const [activeSim, setActiveSim] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  const handleRun = (id: string) => {
    setRunning(true);
    setActiveSim(null);
    setTimeout(() => {
      setActiveSim(id);
      setRunning(false);
    }, 2000);
  };

  const activeScenario = simulationScenarios.find(s => s.id === activeSim);

  const ImpactIndicator = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className={`text-lg font-bold font-mono ${value > 0 ? 'text-neon-green' : value < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
        {value > 0 ? '+' : ''}{value}{label === 'Cost' ? '' : '%'}
      </div>
      {value > 0 ? <ArrowUp className="h-3 w-3 mx-auto text-neon-green" /> : value < 0 ? <ArrowDown className="h-3 w-3 mx-auto text-destructive" /> : <Minus className="h-3 w-3 mx-auto text-muted-foreground" />}
      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Simulation Lab</h1>
        <p className="text-sm text-muted-foreground">What-if workforce simulations & policy impact predictions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {simulationScenarios.map((scenario) => (
          <GlassCard key={scenario.id} className="p-5" neon={activeSim === scenario.id ? 'cyan' : 'none'}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">{scenario.name}</h3>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleRun(scenario.id)}
                disabled={running}
                className="text-xs text-primary gap-1"
              >
                <Play className="h-3 w-3" /> Run
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{scenario.description}</p>

            <AnimatePresence>
              {activeSim === scenario.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-border pt-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Predicted Impact</p>
                  <div className="grid grid-cols-4 gap-2">
                    <ImpactIndicator value={scenario.impact.retention} label="Retention" />
                    <ImpactIndicator value={scenario.impact.cost} label="Cost" />
                    <ImpactIndicator value={scenario.impact.morale} label="Morale" />
                    <ImpactIndicator value={scenario.impact.productivity} label="Productivity" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        ))}
      </div>

      {running && (
        <GlassCard className="p-5 text-center" neon="purple">
          <div className="flex items-center justify-center gap-3">
            <div className="h-4 w-4 rounded-full bg-secondary animate-ping" />
            <p className="text-sm text-foreground">Running simulation...</p>
          </div>
        </GlassCard>
      )}

      {/* Organization Digital Twin */}
      <GlassCard className="p-5" neon="green">
        <h3 className="text-sm font-semibold text-foreground mb-4">Organization Digital Twin</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-muted/30 p-4 text-center">
            <p className="text-3xl font-bold font-mono text-neon-green">82</p>
            <p className="text-xs text-muted-foreground mt-1">Overall Health</p>
            <div className="mt-2 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-neon-green" style={{ width: '82%' }} /></div>
          </div>
          <div className="rounded-lg bg-muted/30 p-4 text-center">
            <p className="text-3xl font-bold font-mono text-primary">325</p>
            <p className="text-xs text-muted-foreground mt-1">Active Workforce</p>
            <p className="text-[10px] text-neon-green mt-1">↑ 12 new hires this quarter</p>
          </div>
          <div className="rounded-lg bg-muted/30 p-4 text-center">
            <p className="text-3xl font-bold font-mono text-secondary">5</p>
            <p className="text-xs text-muted-foreground mt-1">AI Agents Active</p>
            <p className="text-[10px] text-neon-green mt-1">All systems operational</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default SimulationLab;
