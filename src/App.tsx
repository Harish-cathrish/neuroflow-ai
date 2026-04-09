import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LoginPage } from "@/components/LoginPage";
import { DashboardLayout } from "@/components/DashboardLayout";
import EmployeeDashboard from "@/pages/EmployeeDashboard";
import EmployeeGoals from "@/pages/EmployeeGoals";
import EmployeeSelfReview from "@/pages/EmployeeSelfReview";
import EmployeeSkills from "@/pages/EmployeeSkills";
import EmployeeCoaching from "@/pages/EmployeeCoaching";
import ManagerDashboard from "@/pages/ManagerDashboard";
import ManagerTeam from "@/pages/ManagerTeam";
import ManagerEvaluations from "@/pages/ManagerEvaluations";
import ManagerAnalytics from "@/pages/ManagerAnalytics";
import ManagerAlerts from "@/pages/ManagerAlerts";
import HRDashboard from "@/pages/HRDashboard";
import HRBias from "@/pages/HRBias";
import HRDepartments from "@/pages/HRDepartments";
import HRPromotions from "@/pages/HRPromotions";
import HRReports from "@/pages/HRReports";
import ExecutiveDashboard from "@/pages/ExecutiveDashboard";
import ExecutiveWorkforce from "@/pages/ExecutiveWorkforce";
import ExecutiveForecast from "@/pages/ExecutiveForecast";
import ExecutiveStrategy from "@/pages/ExecutiveStrategy";
import AIAgentsDashboard from "@/pages/AIAgentsDashboard";
import SimulationLab from "@/pages/SimulationLab";

const queryClient = new QueryClient();

const roleRedirects = {
  employee: '/employee',
  manager: '/manager',
  hr: '/hr',
  executive: '/executive',
};

const AuthGate = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <LoginPage />;

  return (
    <Routes>
      <Route path="/" element={<Navigate to={roleRedirects[user!.role]} replace />} />
      <Route element={<DashboardLayout />}>
        {/* Employee */}
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/employee/goals" element={<EmployeeGoals />} />
        <Route path="/employee/self-review" element={<EmployeeSelfReview />} />
        <Route path="/employee/skills" element={<EmployeeSkills />} />
        <Route path="/employee/coaching" element={<EmployeeCoaching />} />
        {/* Manager */}
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/team" element={<ManagerTeam />} />
        <Route path="/manager/evaluations" element={<ManagerEvaluations />} />
        <Route path="/manager/analytics" element={<ManagerAnalytics />} />
        <Route path="/manager/alerts" element={<ManagerAlerts />} />
        {/* HR */}
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/hr/bias" element={<HRBias />} />
        <Route path="/hr/departments" element={<HRDepartments />} />
        <Route path="/hr/promotions" element={<HRPromotions />} />
        <Route path="/hr/reports" element={<HRReports />} />
        {/* Executive */}
        <Route path="/executive" element={<ExecutiveDashboard />} />
        <Route path="/executive/workforce" element={<ExecutiveWorkforce />} />
        <Route path="/executive/forecast" element={<ExecutiveForecast />} />
        <Route path="/executive/strategy" element={<ExecutiveStrategy />} />
        {/* Shared */}
        <Route path="/ai-agents" element={<AIAgentsDashboard />} />
        <Route path="/simulation" element={<SimulationLab />} />
      </Route>
      <Route path="*" element={<Navigate to={roleRedirects[user!.role]} replace />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <AuthGate />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
