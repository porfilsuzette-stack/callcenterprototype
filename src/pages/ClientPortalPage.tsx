import { useState } from 'react';
import {
  PhoneCall,
  CalendarClock,
  PhoneOutgoing,
  FileBarChart,
  Users,
  Settings,
  LayoutDashboard,
  Search,
  Bell,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  PhoneForwarded,
  CalendarPlus,
  TrendingUp,
  TrendingDown,
  Minus,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  PORTAL_METRICS,
  PORTAL_CALL_VOLUME,
  PORTAL_REQUEST_CATEGORIES,
  PORTAL_DAILY_ACTIVITY,
  RECENT_ACTIVITY,
} from '@/data/content';
import { cn } from '@/utils/cn';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const SIDEBAR_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'calls', label: 'Calls', icon: PhoneCall },
  { id: 'appointments', label: 'Appointments', icon: CalendarClock },
  { id: 'callbacks', label: 'Callbacks', icon: PhoneOutgoing },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const DATE_FILTERS = ['Today', '7 Days', '30 Days', '90 Days'];

export default function ClientPortalPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [dateFilter, setDateFilter] = useState('Today');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-navy-50/40 pt-16 lg:pt-18">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-64 transform border-r border-navy-100 bg-white pt-16 lg:pt-18 transition-transform duration-300 lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex-1 space-y-1 p-4">
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                    activeNav === item.id
                      ? 'bg-navy-900 text-white'
                      : 'text-navy-600 hover:bg-navy-50',
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="border-t border-navy-100 p-4">
              <button
                onClick={() => setLoggedIn(false)}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-error-50 hover:text-error-600"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-navy-950/30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 lg:ml-64">
          {/* Top bar */}
          <header className="sticky top-16 z-20 flex items-center gap-4 border-b border-navy-100 bg-white/90 px-5 py-3 backdrop-blur-md lg:top-18 lg:px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-700 hover:bg-navy-50 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
              <input
                type="text"
                placeholder="Search calls, appointments, reports..."
                className="w-full rounded-xl border border-navy-200 bg-navy-50/50 py-2 pl-9 pr-4 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-100"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-navy-600 transition-colors hover:bg-navy-50">
                <Bell className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error-500" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                  JD
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-navy-900">Jane Doe</p>
                  <p className="text-xs text-navy-500">Admin</p>
                </div>
                <ChevronDown className="hidden h-4 w-4 text-navy-400 sm:block" />
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <main className="p-5 lg:p-8">
            {/* Header row */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-navy-900">Good morning, Jane</h1>
                  <Badge variant="warning">Demo Environment</Badge>
                </div>
                <p className="mt-1 text-sm text-navy-600">Communication Operations Overview</p>
              </div>
              {/* Date filter */}
              <div className="flex items-center gap-1 rounded-xl border border-navy-100 bg-white p-1 shadow-soft">
                {DATE_FILTERS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDateFilter(d)}
                    className={cn(
                      'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                      dateFilter === d
                        ? 'bg-navy-900 text-white'
                        : 'text-navy-600 hover:bg-navy-50',
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
              {PORTAL_METRICS.map((m) => {
                const icons = [PhoneCall, CheckCircle2, Clock, CalendarPlus, PhoneForwarded];
                const Icon = icons[PORTAL_METRICS.indexOf(m)] || PhoneCall;
                return (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <TrendBadge trend={m.trend} value={m.change} />
                    </div>
                    <p className="mt-4 text-xs font-medium text-navy-500">{m.label}</p>
                    <p className="mt-1 text-2xl font-bold text-navy-900">{m.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Charts */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-navy-900">Call Volume</p>
                  <Badge variant="default">Hourly</Badge>
                </div>
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PORTAL_CALL_VOLUME}>
                      <defs>
                        <linearGradient id="portalVol" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1c78f0" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#1c78f0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="hour" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Area type="monotone" dataKey="calls" stroke="#1c78f0" strokeWidth={2} fill="url(#portalVol)" name="Total Calls" />
                      <Area type="monotone" dataKey="answered" stroke="#10b981" strokeWidth={2} fill="none" name="Answered" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft">
                <p className="mb-4 text-sm font-semibold text-navy-900">Request Categories</p>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={PORTAL_REQUEST_CATEGORIES}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={70}
                        paddingAngle={3}
                      >
                        {PORTAL_REQUEST_CATEGORIES.map((e) => (
                          <Cell key={e.name} fill={e.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-3 space-y-1.5">
                  {PORTAL_REQUEST_CATEGORIES.map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-navy-600">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                        {c.name}
                      </div>
                      <span className="font-semibold text-navy-900">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Daily activity bar chart */}
            <div className="mt-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft">
              <p className="mb-4 text-sm font-semibold text-navy-900">Daily Activity</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PORTAL_DAILY_ACTIVITY}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="calls" fill="#1c78f0" radius={[4, 4, 0, 0]} name="Calls" />
                    <Bar dataKey="appointments" fill="#3497fb" radius={[4, 4, 0, 0]} name="Appointments" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent activity table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
              <div className="flex items-center justify-between border-b border-navy-100 bg-navy-50/40 px-5 py-3">
                <p className="text-sm font-semibold text-navy-900">Recent Activity</p>
                <Badge variant="warning">Demo Data</Badge>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-navy-100 text-left text-xs uppercase tracking-wide text-navy-500">
                      <th className="px-5 py-3 font-medium">Time</th>
                      <th className="px-5 py-3 font-medium">Type</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium">Assigned Team</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-50">
                    {RECENT_ACTIVITY.map((row, i) => (
                      <tr key={i} className="transition-colors hover:bg-navy-50/40">
                        <td className="px-5 py-3 font-medium text-navy-900">{row.time}</td>
                        <td className="px-5 py-3 text-navy-700">{row.type}</td>
                        <td className="px-5 py-3">
                          <Badge
                            variant={
                              row.status === 'Completed'
                                ? 'success'
                                : row.status === 'Pending'
                                  ? 'warning'
                                  : 'info'
                            }
                          >
                            {row.status}
                          </Badge>
                        </td>
                        <td className="px-5 py-3 text-navy-700">{row.team}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function TrendBadge({ trend, value }: { trend: 'up' | 'down' | 'flat'; value: string }) {
  const Icon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const color =
    trend === 'up'
      ? 'text-success-600 bg-success-50'
      : trend === 'down'
        ? 'text-brand-600 bg-brand-50'
        : 'text-navy-500 bg-navy-50';
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold', color)}>
      <Icon className="h-3 w-3" />
      {value}
    </span>
  );
}

// ---- Login Screen ----
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-navy-950 px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-elevated lg:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
              <PhoneCall className="h-6 w-6" />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-navy-900">Client Portal</h1>
            <p className="mt-2 text-sm text-navy-600">
              Sign in to view your communication operations dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organization.com"
                className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Badge variant="warning">Demo Environment</Badge>
          </div>
          <p className="mt-4 text-center text-xs text-navy-500">
            This is a prototype. Use any credentials to explore the dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
