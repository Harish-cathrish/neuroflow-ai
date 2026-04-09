// Mock data for the entire platform

export const teamMembers = [
  { id: 'emp-001', name: 'Alex Rivera', role: 'Senior Software Engineer', department: 'Engineering', score: 87, avatar: 'AR', trend: 'up' as const, riskLevel: 'low' as const },
  { id: 'emp-002', name: 'Priya Sharma', role: 'Full Stack Developer', department: 'Engineering', score: 92, avatar: 'PS', trend: 'up' as const, riskLevel: 'low' as const },
  { id: 'emp-003', name: 'Marcus Johnson', role: 'DevOps Engineer', department: 'Engineering', score: 74, avatar: 'MJ', trend: 'down' as const, riskLevel: 'medium' as const },
  { id: 'emp-004', name: 'Elena Volkov', role: 'QA Lead', department: 'Engineering', score: 81, avatar: 'EV', trend: 'stable' as const, riskLevel: 'low' as const },
  { id: 'emp-005', name: 'David Kim', role: 'Frontend Developer', department: 'Engineering', score: 68, avatar: 'DK', trend: 'down' as const, riskLevel: 'high' as const },
  { id: 'emp-006', name: 'Aisha Patel', role: 'Backend Developer', department: 'Engineering', score: 95, avatar: 'AP', trend: 'up' as const, riskLevel: 'low' as const },
];

export const performanceTimeline = [
  { month: 'Jul', score: 72, reviews: 3, goals: 5 },
  { month: 'Aug', score: 75, reviews: 2, goals: 6 },
  { month: 'Sep', score: 78, reviews: 4, goals: 4 },
  { month: 'Oct', score: 82, reviews: 3, goals: 7 },
  { month: 'Nov', score: 85, reviews: 5, goals: 5 },
  { month: 'Dec', score: 83, reviews: 2, goals: 8 },
  { month: 'Jan', score: 87, reviews: 4, goals: 6 },
  { month: 'Feb', score: 89, reviews: 3, goals: 7 },
  { month: 'Mar', score: 87, reviews: 5, goals: 5 },
];

export const goals = [
  { id: 'g1', title: 'Complete AWS certification', progress: 75, deadline: '2026-05-15', priority: 'high' as const, status: 'in-progress' as const },
  { id: 'g2', title: 'Lead microservices migration', progress: 40, deadline: '2026-06-30', priority: 'high' as const, status: 'in-progress' as const },
  { id: 'g3', title: 'Mentor 2 junior developers', progress: 90, deadline: '2026-04-30', priority: 'medium' as const, status: 'in-progress' as const },
  { id: 'g4', title: 'Reduce API response time by 30%', progress: 100, deadline: '2026-03-15', priority: 'high' as const, status: 'completed' as const },
  { id: 'g5', title: 'Contribute to open source project', progress: 20, deadline: '2026-08-01', priority: 'low' as const, status: 'in-progress' as const },
];

export const skills = [
  { name: 'TypeScript', current: 85, target: 95 },
  { name: 'System Design', current: 70, target: 90 },
  { name: 'Leadership', current: 65, target: 80 },
  { name: 'Cloud Architecture', current: 75, target: 90 },
  { name: 'Communication', current: 80, target: 85 },
  { name: 'Problem Solving', current: 90, target: 95 },
];

export const departmentData = [
  { name: 'Engineering', score: 84, headcount: 120, attrition: 5.2, diversity: 42, budget: 2.4 },
  { name: 'Marketing', score: 78, headcount: 45, attrition: 8.1, diversity: 58, budget: 0.8 },
  { name: 'Sales', score: 82, headcount: 65, attrition: 12.3, diversity: 47, budget: 1.2 },
  { name: 'Product', score: 88, headcount: 30, attrition: 3.1, diversity: 51, budget: 0.6 },
  { name: 'Finance', score: 76, headcount: 25, attrition: 4.5, diversity: 39, budget: 0.4 },
  { name: 'Operations', score: 79, headcount: 40, attrition: 6.8, diversity: 44, budget: 0.5 },
];

export const aiAgents = [
  {
    id: 'agent-review',
    name: 'Performance Review Agent',
    status: 'active' as const,
    icon: '📊',
    decisions: 347,
    accuracy: 94.2,
    lastAction: 'Generated Q1 review for Engineering team',
    lastActionTime: '2 min ago',
    confidence: 0.94,
    logs: [
      { time: '14:32', action: 'Generated performance review for Alex Rivera', confidence: 0.96, result: 'Approved' },
      { time: '14:28', action: 'Analyzed peer feedback data for Q1 cycle', confidence: 0.92, result: 'Completed' },
      { time: '14:15', action: 'Detected rating inconsistency in Marketing dept', confidence: 0.88, result: 'Flagged' },
    ],
  },
  {
    id: 'agent-bias',
    name: 'Bias Monitoring Agent',
    status: 'active' as const,
    icon: '⚖️',
    decisions: 892,
    accuracy: 97.1,
    lastAction: 'Scanned 45 reviews for gender bias patterns',
    lastActionTime: '5 min ago',
    confidence: 0.97,
    logs: [
      { time: '14:30', action: 'Completed bias scan on Sales department reviews', confidence: 0.97, result: 'Clean' },
      { time: '14:20', action: 'Detected language bias in review #R-2847', confidence: 0.91, result: 'Flagged' },
      { time: '14:10', action: 'Updated bias detection model with new training data', confidence: 0.95, result: 'Updated' },
    ],
  },
  {
    id: 'agent-coach',
    name: 'Growth Coach Agent',
    status: 'active' as const,
    icon: '🎯',
    decisions: 234,
    accuracy: 91.5,
    lastAction: 'Created personalized learning path for 12 employees',
    lastActionTime: '8 min ago',
    confidence: 0.91,
    logs: [
      { time: '14:25', action: 'Generated skill gap analysis for David Kim', confidence: 0.89, result: 'Delivered' },
      { time: '14:18', action: 'Recommended leadership training for 3 high-performers', confidence: 0.93, result: 'Sent' },
      { time: '14:05', action: 'Updated career path predictions based on market trends', confidence: 0.87, result: 'Completed' },
    ],
  },
  {
    id: 'agent-risk',
    name: 'Risk Prediction Agent',
    status: 'warning' as const,
    icon: '🔮',
    decisions: 156,
    accuracy: 88.3,
    lastAction: 'Elevated burnout risk alert for 3 employees',
    lastActionTime: '12 min ago',
    confidence: 0.88,
    logs: [
      { time: '14:22', action: 'Predicted attrition risk increase in Sales Q2', confidence: 0.85, result: 'Alert Sent' },
      { time: '14:12', action: 'Analyzed overtime patterns across Engineering', confidence: 0.90, result: 'Report Generated' },
      { time: '13:55', action: 'Flagged workload imbalance in Ops team', confidence: 0.82, result: 'Flagged' },
    ],
  },
  {
    id: 'agent-promo',
    name: 'Promotion Recommendation Agent',
    status: 'active' as const,
    icon: '🚀',
    decisions: 89,
    accuracy: 92.8,
    lastAction: 'Identified 7 promotion-ready candidates',
    lastActionTime: '15 min ago',
    confidence: 0.92,
    logs: [
      { time: '14:20', action: 'Evaluated Aisha Patel for senior promotion', confidence: 0.96, result: 'Recommended' },
      { time: '14:08', action: 'Compared promotion rates across demographics', confidence: 0.94, result: 'Report Ready' },
      { time: '13:50', action: 'Updated promotion criteria based on market benchmarks', confidence: 0.90, result: 'Calibrated' },
    ],
  },
];

export const coachingInsights = [
  { week: 'Week 1', insight: 'Focus on system design fundamentals — your architecture reviews show room for improvement in scalability patterns.', type: 'skill' as const },
  { week: 'Week 2', insight: 'Great progress on the microservices migration! Consider documenting your approach for the team wiki.', type: 'recognition' as const },
  { week: 'Week 3', insight: 'Your mentoring sessions are highly rated. Consider applying for the Tech Lead track.', type: 'career' as const },
  { week: 'Week 4', insight: 'Work-life balance alert: You\'ve logged 15% more hours than average. Consider delegating the CI/CD tasks.', type: 'wellness' as const },
];

export const simulationScenarios = [
  { id: 'sim-1', name: 'Promote top 10% performers', description: 'Impact of promoting all employees scoring above 90th percentile', impact: { retention: +12, cost: +340000, morale: +18, productivity: +8 } },
  { id: 'sim-2', name: 'Remote-first policy', description: 'Switching to fully remote work model', impact: { retention: +8, cost: -180000, morale: +5, productivity: -2 } },
  { id: 'sim-3', name: 'Reduce team sizes by 15%', description: 'Restructuring to leaner teams', impact: { retention: -15, cost: -520000, morale: -12, productivity: -5 } },
  { id: 'sim-4', name: 'Increase L&D budget 25%', description: 'Expanding learning and development programs', impact: { retention: +10, cost: +150000, morale: +14, productivity: +11 } },
];

export const orgHealthMetrics = {
  overallScore: 82,
  engagement: 78,
  retention: 91,
  productivity: 85,
  innovation: 73,
  culture: 80,
  growth: 88,
};

export const quarterlyTrends = [
  { quarter: 'Q1 2025', performance: 76, engagement: 72, retention: 89 },
  { quarter: 'Q2 2025', performance: 79, engagement: 75, retention: 90 },
  { quarter: 'Q3 2025', performance: 81, engagement: 77, retention: 88 },
  { quarter: 'Q4 2025', performance: 80, engagement: 76, retention: 91 },
  { quarter: 'Q1 2026', performance: 82, engagement: 78, retention: 91 },
];

export const biasMetrics = [
  { category: 'Gender', score: 94, alerts: 2, status: 'good' as const },
  { category: 'Ethnicity', score: 91, alerts: 3, status: 'good' as const },
  { category: 'Age', score: 87, alerts: 5, status: 'warning' as const },
  { category: 'Department', score: 82, alerts: 7, status: 'warning' as const },
  { category: 'Tenure', score: 96, alerts: 1, status: 'good' as const },
];
