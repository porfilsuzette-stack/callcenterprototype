import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  PhoneCall,
  CalendarClock,
  PhoneOutgoing,
  Moon,
  ClipboardList,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
  Headphones,
  HeartHandshake,
  Lock,
  UserCog,
  Megaphone,
  GraduationCap,
  FileText,
  CheckCircle2,
  Clock,
  PhoneMissed,
  UserX,
  Gauge,
  Activity,
  PhoneForwarded,
  CalendarPlus,
  MessageSquare,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import ConsultationModal from '@/components/ConsultationModal';
import {
  SERVICES,
  SOLUTIONS,
  PROBLEM_CARDS,
  HOW_IT_WORKS_STEPS,
  SECURITY_CARDS,
  WHY_US,
  DASHBOARD_METRICS,
  CALLS_BY_HOUR,
  CALL_CATEGORIES,
  RESPONSE_ACTIVITY,
  RECENT_ACTIVITY,
  SYSTEM_STATUS_PANEL,
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

const HERO_IMAGE =
  'https://images.pexels.com/photos/5453809/pexels-photo-5453809.jpeg?auto=compress&cs=tinysrgb&w=1200';

const problemIcons = [PhoneMissed, ClipboardList, UserX, Gauge];

const trustIndicators = [
  { icon: ShieldCheck, label: 'Built for healthcare organizations' },
  { icon: HeartHandshake, label: 'Patient-first communication' },
  { icon: Headphones, label: 'Professional support' },
];

const journeySteps = [
  { icon: PhoneCall, label: 'Patient calls' },
  { icon: PhoneForwarded, label: 'Call received' },
  { icon: MessageSquare, label: 'Request identified' },
  { icon: Workflow, label: 'Workflow applied' },
  { icon: CalendarPlus, label: 'Appointment / message / escalation' },
  { icon: CheckCircle2, label: 'Patient receives next step' },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/60 to-white pt-28 lg:pt-36">
        <div className="container-page pb-16 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="animate-fade-up">
              <Badge variant="info" className="mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Healthcare Communication Partner
              </Badge>
              <h1 className="text-4xl font-bold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.5rem]">
                Your Patients Need Answers.
                <br />
                <span className="text-brand-600">We Make Sure They Get Them.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
                MedConnect Care provides reliable healthcare call center and patient communication
                services that help medical organizations stay connected with their patients —
                without overwhelming their internal teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setModalOpen(true)} variant="primary" size="lg">
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trustIndicators.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-navy-600">
                    <item.icon className="h-4 w-4 text-brand-600" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl shadow-elevated ring-1 ring-navy-100">
                <img
                  src={HERO_IMAGE}
                  alt="Professional healthcare call center agents at work"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
              {/* Floating UI card */}
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-navy-100 bg-white p-4 shadow-elevated sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-100">
                    <PhoneCall className="h-5 w-5 text-success-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-500">Calls Answered</p>
                    <p className="text-lg font-bold text-navy-900">93%</p>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-navy-400">Demo data</p>
              </div>
              {/* Floating appointment card */}
              <div className="absolute -right-4 top-6 hidden rounded-2xl border border-navy-100 bg-white p-4 shadow-elevated sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <CalendarClock className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-500">Appointments Today</p>
                    <p className="text-lg font-bold text-navy-900">34</p>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-navy-400">Demo data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="bg-navy-50/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Challenge"
            title="Your Team Should Focus on Care."
            subtitle="Not Constantly Answering Phones."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEM_CARDS.map((card, i) => {
              const Icon = problemIcons[i];
              return (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-error-50 text-error-600 transition-colors group-hover:bg-error-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{card.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button to="/#how-it-works" variant="primary" size="lg">
              See How We Can Help
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="A Healthcare Communication Team That Works Alongside Yours"
            subtitle="Flexible support designed around the operational needs of modern healthcare organizations."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-brand-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-2xl font-bold text-navy-100 transition-colors group-hover:text-brand-200">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.short}</p>
                <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg">
              Build Your Solution
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS BY ORGANIZATION ===== */}
      <section id="solutions" className="bg-navy-50/40 py-20 lg:py-28 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Solutions"
            title="Built for Different Healthcare Organizations"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.title}
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <sol.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{sol.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-20 lg:py-28 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple for Your Team. Seamless for Your Patients."
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="absolute left-[3.25rem] top-7 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-navy-200 to-transparent lg:block" />
                )}
                <div className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 font-display text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg">
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY DASHBOARD ===== */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technology"
            title="Human Communication. Supported by Technology."
            subtitle="A clear operational view of your communication workflows — calls, appointments, and follow-ups in one place."
            dark
            className="mb-14"
          />
          <TechnologyDashboard />
        </div>
      </section>

      {/* ===== PATIENT EXPERIENCE ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Experience"
            title="Every Conversation Is Part of the Patient Experience."
            className="mb-14"
          />
          <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-50/50 to-white p-8 shadow-soft lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-navy-700">
                  Our goal is not simply to answer calls. It is to create a communication experience
                  that feels professional, organized and patient-centered.
                </p>
                <Button to="/how-it-works" variant="outline" size="md" className="mt-8 w-fit">
                  See Our Process
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                {journeySteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft ring-1 ring-navy-100">
                      <step.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-navy-900">
                        {i + 1}. {step.label}
                      </span>
                    </div>
                    {i < journeySteps.length - 1 && (
                      <div className="hidden text-navy-300 sm:block">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECURITY & PRIVACY ===== */}
      <section className="bg-navy-50/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Security & Privacy"
            title="Built With Healthcare Operations in Mind"
            className="mb-6"
          />
          <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-navy-600">
            Healthcare communication requires careful handling of sensitive information. Our
            workflows are designed around client-defined procedures, access controls, role-based
            responsibilities and appropriate escalation processes.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_CARDS.map((card) => {
              const Icon = [Lock, UserCog, ShieldCheck, PhoneForwarded, GraduationCap, FileText][
                SECURITY_CARDS.indexOf(card)
              ];
              return (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{card.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-warning-200 bg-warning-50 px-6 py-4 text-center">
            <p className="text-sm leading-relaxed text-warning-800">
              Compliance requirements vary by organization and jurisdiction. Specific security and
              compliance requirements are reviewed during implementation.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CLIENT PORTAL PREVIEW ===== */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Portal"
            title="A Clear View of Your Communication Operations"
            subtitle="Monitor calls, appointments, callbacks, and team activity from a single dashboard."
            className="mb-14"
          />
          <PortalPreview />
          <div className="mt-12 text-center">
            <Button to="/portal" variant="primary" size="lg">
              See the Client Portal
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== WHY MEDCONNECT CARE ===== */}
      <section className="bg-navy-50/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why MedConnect Care"
            title="More Than a Call Center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => {
              const icons = [HeartHandshake, ShieldCheck, Activity, Headphones, Users];
              const Icon = icons[i] || HeartHandshake;
              return (
                <div
                  key={item.title}
                  className={cn(
                    'group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
                    i === 4 && 'sm:col-span-2 lg:col-span-1',
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <CTABanner
        title="Let's Build a Better Patient Communication Experience."
        text="Tell us about your organization, your communication challenges and the support you need."
      />

      {/* ===== RESOURCES / FAQ ===== */}
      <section id="resources" className="bg-navy-50/40 py-20 lg:py-28 scroll-mt-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Resources"
            title="Frequently Asked Questions"
            subtitle="Common questions about our healthcare communication services and how we work with medical organizations."
            className="mb-14"
          />
          <FAQAccordion />
        </div>
      </section>

      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ---- Technology Dashboard ----
function TechnologyDashboard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-navy-900 p-6 shadow-elevated lg:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Patient Communication Overview</h3>
            <p className="text-xs text-navy-300">Real-time operational view</p>
          </div>
        </div>
        <span className="badge-demo-dark">Demo Data</span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {DASHBOARD_METRICS.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-medium text-navy-300">{m.label}</p>
            <p className="mt-1 text-2xl font-bold text-white">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <p className="mb-4 text-sm font-semibold text-white">Calls by Hour</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CALLS_BY_HOUR}>
                <defs>
                  <linearGradient id="callsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3497fb" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#3497fb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="hour" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#0b1f3a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="calls"
                  stroke="#3497fb"
                  strokeWidth={2}
                  fill="url(#callsGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-4 text-sm font-semibold text-white">Call Categories</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CALL_CATEGORIES}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                >
                  {CALL_CATEGORIES.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#0b1f3a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 space-y-1.5">
            {CALL_CATEGORIES.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-navy-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </div>
                <span className="font-semibold text-white">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response activity + Status panel */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <p className="mb-4 text-sm font-semibold text-white">Response Activity (Weekly)</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={RESPONSE_ACTIVITY}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#0b1f3a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                  cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="answered" fill="#3497fb" radius={[4, 4, 0, 0]} name="Answered" />
                <Bar dataKey="pending" fill="#fbbf24" radius={[4, 4, 0, 0]} name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">System Status</p>
            <Badge variant="dark" className="bg-white/10 text-navy-200 ring-white/15">
              Demo Environment
            </Badge>
          </div>
          <div className="space-y-3">
            {SYSTEM_STATUS_PANEL.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-navy-200">{s.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{s.value}</span>
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full',
                      s.status === 'warning' ? 'bg-warning-400' : 'bg-success-400',
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Portal Preview ----
function PortalPreview() {
  const tabs = ['Overview', 'Calls', 'Appointments', 'Callbacks', 'Agents', 'Reports'];
  const [activeTab, setActiveTab] = useState('Overview');

  const portalCards = [
    { label: "Today's Calls", value: 128, icon: PhoneCall, color: 'brand' },
    { label: 'Pending Requests', value: 9, icon: Clock, color: 'warning' },
    { label: 'Appointments', value: 34, icon: CalendarClock, color: 'navy' },
    { label: 'Escalations', value: 2, icon: PhoneForwarded, color: 'error' },
  ];

  const colorMap: Record<string, string> = {
    brand: 'bg-brand-50 text-brand-600',
    warning: 'bg-warning-50 text-warning-600',
    navy: 'bg-navy-100 text-navy-700',
    error: 'bg-error-50 text-error-600',
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-elevated">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-navy-100 bg-navy-50/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-error-300" />
          <span className="h-3 w-3 rounded-full bg-warning-300" />
          <span className="h-3 w-3 rounded-full bg-success-300" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-navy-400 ring-1 ring-navy-100">
          portal.medconnectcare.example/dashboard
        </div>
        <span className="badge-demo">Demo Data</span>
      </div>

      <div className="p-5 lg:p-7">
        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                activeTab === tab
                  ? 'bg-navy-900 text-white'
                  : 'text-navy-600 hover:bg-navy-50',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {portalCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-xl', colorMap[card.color])}>
                <card.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-medium text-navy-500">{card.label}</p>
              <p className="mt-1 text-2xl font-bold text-navy-900">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft lg:col-span-2">
            <p className="mb-4 text-sm font-semibold text-navy-900">Call Volume (Today)</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CALLS_BY_HOUR}>
                  <defs>
                    <linearGradient id="portalCallsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1c78f0" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#1c78f0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="hour" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="calls" stroke="#1c78f0" strokeWidth={2} fill="url(#portalCallsGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-soft">
            <p className="mb-4 text-sm font-semibold text-navy-900">Request Categories</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={CALL_CATEGORIES} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3}>
                    {CALL_CATEGORIES.map((e) => (
                      <Cell key={e.name} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent activity table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
          <div className="border-b border-navy-100 bg-navy-50/40 px-5 py-3">
            <p className="text-sm font-semibold text-navy-900">Recent Activity</p>
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
      </div>
    </div>
  );
}
