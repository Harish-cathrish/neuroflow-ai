import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Brain, Shield, Users, BarChart3, Briefcase, Zap } from 'lucide-react';

const roles: { role: UserRole; label: string; description: string; icon: React.ElementType; color: string }[] = [
  { role: 'employee', label: 'Employee', description: 'Personal growth dashboard', icon: Users, color: 'from-primary to-neon-green' },
  { role: 'manager', label: 'Manager', description: 'Team command center', icon: BarChart3, color: 'from-neon-purple to-primary' },
  { role: 'hr', label: 'HR / Admin', description: 'Intelligence dashboard', icon: Shield, color: 'from-neon-amber to-neon-rose' },
  { role: 'executive', label: 'Executive', description: 'Strategic insights', icon: Briefcase, color: 'from-neon-green to-primary' },
];

export const LoginPage = () => {
  const { login } = useAuth();
  const [hoveredRole, setHoveredRole] = useState<UserRole | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-green/3 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg space-y-8"
      >
        {/* Logo */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20"
          >
            <Brain className="h-8 w-8 text-primary" />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Neuro<span className="text-primary">Review</span> AI
          </h1>
          <p className="text-sm text-muted-foreground">Autonomous Performance Intelligence Platform</p>
        </div>

        {/* Role Selection */}
        <div className="space-y-3">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Select your role to continue</p>
          <div className="grid gap-3">
            {roles.map(({ role, label, description, icon: Icon, color }, i) => (
              <motion.button
                key={role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => login(role)}
                onMouseEnter={() => setHoveredRole(role)}
                onMouseLeave={() => setHoveredRole(null)}
                className="glass-card-hover group flex items-center gap-4 p-4 text-left transition-all"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} transition-transform group-hover:scale-110`}>
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
                <Zap className={`h-4 w-4 transition-opacity ${hoveredRole === role ? 'text-primary opacity-100' : 'opacity-0'}`} />
              </motion.button>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-muted-foreground/60">
          Demo mode — click any role to explore the platform
        </p>
      </motion.div>
    </div>
  );
};
