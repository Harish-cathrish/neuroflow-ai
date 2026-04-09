import { NavLink, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  Brain, LayoutDashboard, Target, FileText, BarChart3, Users, Shield,
  Cpu, FlaskConical, LogOut, TrendingUp, AlertTriangle, Award, Settings,
  Activity, Globe, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const navByRole: Record<UserRole, NavItem[]> = {
  employee: [
    { label: 'Dashboard', path: '/employee', icon: LayoutDashboard },
    { label: 'Goals', path: '/employee/goals', icon: Target },
    { label: 'Self Review', path: '/employee/self-review', icon: FileText },
    { label: 'Skills', path: '/employee/skills', icon: TrendingUp },
    { label: 'AI Coach', path: '/employee/coaching', icon: Brain },
  ],
  manager: [
    { label: 'Command Center', path: '/manager', icon: LayoutDashboard },
    { label: 'Team', path: '/manager/team', icon: Users },
    { label: 'Evaluations', path: '/manager/evaluations', icon: FileText },
    { label: 'Analytics', path: '/manager/analytics', icon: BarChart3 },
    { label: 'Alerts', path: '/manager/alerts', icon: AlertTriangle },
  ],
  hr: [
    { label: 'Intelligence', path: '/hr', icon: LayoutDashboard },
    { label: 'Bias Monitor', path: '/hr/bias', icon: Shield },
    { label: 'Departments', path: '/hr/departments', icon: Globe },
    { label: 'Promotions', path: '/hr/promotions', icon: Award },
    { label: 'Reports', path: '/hr/reports', icon: FileText },
  ],
  executive: [
    { label: 'Overview', path: '/executive', icon: LayoutDashboard },
    { label: 'Workforce', path: '/executive/workforce', icon: Users },
    { label: 'Forecast', path: '/executive/forecast', icon: TrendingUp },
    { label: 'Strategy', path: '/executive/strategy', icon: Activity },
  ],
};

const commonNav: NavItem[] = [
  { label: 'AI Agents', path: '/ai-agents', icon: Cpu },
  { label: 'Simulation Lab', path: '/simulation', icon: FlaskConical },
];

export const AppSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;
  const items = navByRole[user.role];

  const roleColor = {
    employee: 'text-primary',
    manager: 'text-secondary',
    hr: 'text-neon-amber',
    executive: 'text-neon-green',
  }[user.role];

  return (
    <aside className={cn(
      'flex h-screen flex-col border-r border-border bg-sidebar transition-all duration-300',
      collapsed ? 'w-16' : 'w-60'
    )}>
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Brain className="h-4 w-4 text-primary" />
        </div>
        {!collapsed && <span className="text-sm font-bold text-foreground">NeuroReview</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-muted-foreground hover:text-foreground">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* User */}
      <div className={cn('border-b border-border p-3', collapsed && 'flex justify-center')}>
        <div className="flex items-center gap-2">
          <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold', roleColor)}>
            {user.avatar}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-foreground">{user.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">{user.title}</p>
            </div>
          )}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {!collapsed && <p className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Main</p>}
        {items.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === `/${user.role}` || item.path === '/employee'}
            className={({ isActive }) => cn(
              'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors',
              isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              collapsed && 'justify-center px-2'
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && item.label}
          </NavLink>
        ))}

        <div className="my-2 border-t border-border" />
        {!collapsed && <p className="px-2 pb-1 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Intelligence</p>}
        {commonNav.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors',
              isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              collapsed && 'justify-center px-2'
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-2">
        <button onClick={logout} className={cn(
          'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive',
          collapsed && 'justify-center px-2'
        )}>
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && 'Sign Out'}
        </button>
      </div>
    </aside>
  );
};
