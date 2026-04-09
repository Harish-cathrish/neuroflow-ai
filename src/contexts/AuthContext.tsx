import React, { createContext, useContext, useState, useCallback } from 'react';

export type UserRole = 'employee' | 'manager' | 'hr' | 'executive';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  department: string;
  title: string;
}

const MOCK_USERS: Record<UserRole, User> = {
  employee: {
    id: 'emp-001',
    name: 'Alex Rivera',
    email: 'alex.rivera@neuroreview.ai',
    role: 'employee',
    avatar: 'AR',
    department: 'Engineering',
    title: 'Senior Software Engineer',
  },
  manager: {
    id: 'mgr-001',
    name: 'Sarah Chen',
    email: 'sarah.chen@neuroreview.ai',
    role: 'manager',
    avatar: 'SC',
    department: 'Engineering',
    title: 'Engineering Manager',
  },
  hr: {
    id: 'hr-001',
    name: 'Jordan Blake',
    email: 'jordan.blake@neuroreview.ai',
    role: 'hr',
    avatar: 'JB',
    department: 'Human Resources',
    title: 'HR Director',
  },
  executive: {
    id: 'exec-001',
    name: 'Morgan Wells',
    email: 'morgan.wells@neuroreview.ai',
    role: 'executive',
    avatar: 'MW',
    department: 'C-Suite',
    title: 'Chief People Officer',
  },
};

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((role: UserRole) => {
    setUser(MOCK_USERS[role]);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
