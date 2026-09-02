import {
  PhoneCall,
  CalendarClock,
  PhoneOutgoing,
  Moon,
  ClipboardList,
  Settings2,
  Stethoscope,
  UserRound,
  Video,
  Network,
  FlaskConical,
  HeartPulse,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/#solutions' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/#resources' },
];

export type Service = {
  id: string;
  number: string;
  icon: typeof PhoneCall;
  title: string;
  short: string;
  features: string[];
  description: string;
  capabilities: string[];
  workflow: string[];
  benefits: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'patient-call-handling',
    number: '01',
    icon: PhoneCall,
    title: 'Patient Call Handling',
    short: 'Handle inbound patient calls professionally and route requests according to predefined workflows.',
    features: ['Inbound call handling', 'Call routing', 'Patient inquiries', 'Message taking', 'Escalation workflows'],
    description:
      'Professional inbound call handling designed around your organization\u2019s communication standards. Every patient call is answered promptly, routed to the right workflow, and documented for your internal team.',
    capabilities: [
      'Dedicated inbound call coverage during your defined hours',
      'Custom call routing based on urgency and call type',
      'Patient inquiry handling with approved scripts',
      'Accurate message taking and delivery',
      'Escalation to on-call or clinical staff when needed',
    ],
    workflow: [
      'Patient calls your dedicated line',
      'Agent answers using your approved greeting',
      'Call type and urgency are identified',
      'Request is routed, documented, or escalated',
      'Message delivered to your team through agreed channels',
    ],
    benefits: [
      'Fewer missed patient calls',
      'Consistent, professional first point of contact',
      'Reduced interruptions for clinical staff',
      'Clear documentation of every interaction',
    ],
  },
  {
    id: 'appointment-scheduling',
    number: '02',
    icon: CalendarClock,
    title: 'Appointment Scheduling',
    short:
      'Help patients request, schedule, reschedule or cancel appointments according to the organization\u2019s procedures.',
    features: ['Appointment requests', 'Scheduling support', 'Rescheduling', 'Cancellation handling', 'Confirmation communication'],
    description:
      'Flexible scheduling support that works within your existing booking procedures. Agents help patients request, confirm, reschedule, or cancel appointments while keeping your calendar organized.',
    capabilities: [
      'Appointment request intake and processing',
      'Scheduling support per your availability rules',
      'Rescheduling and cancellation handling',
      'Confirmation and reminder communication',
      'Coordination with your scheduling system',
    ],
    workflow: [
      'Patient requests an appointment',
      'Agent checks availability per your rules',
      'Appointment is booked, rescheduled, or cancelled',
      'Confirmation sent to the patient',
      'Details synced to your team\u2019s workflow',
    ],
    benefits: [
      'Smoother scheduling experience for patients',
      'Fewer scheduling errors and double-bookings',
      'Reduced administrative workload',
      'Better appointment attendance through reminders',
    ],
  },
  {
    id: 'patient-follow-up',
    number: '03',
    icon: PhoneOutgoing,
    title: 'Patient Follow-Up',
    short: 'Support administrative follow-up workflows after appointments or healthcare interactions.',
    features: ['Follow-up calls', 'Reminder communication', 'Callback management', 'Administrative outreach'],
    description:
      'Structured follow-up communication to keep patients informed between visits. Agents manage callbacks, reminders, and administrative outreach based on your defined workflows.',
    capabilities: [
      'Post-appointment follow-up calls',
      'Reminder communication for upcoming visits',
      'Callback management and tracking',
      'Administrative outreach per your instructions',
    ],
    workflow: [
      'Follow-up list is prepared per your criteria',
      'Agent contacts patients at scheduled times',
      'Outcomes are documented and categorized',
      'Actionable items are routed to your team',
    ],
    benefits: [
      'Improved patient engagement between visits',
      'Consistent reminder communication',
      'Better visibility into patient responses',
      'Reduced follow-up burden on clinical staff',
    ],
  },
  {
    id: 'after-hours-support',
    number: '04',
    icon: Moon,
    title: 'After-Hours Support',
    short: 'Provide communication coverage outside normal internal operating hours when appropriate.',
    features: ['Evening support', 'Weekend coverage', 'Message collection', 'Escalation procedures'],
    description:
      'Communication coverage beyond your standard operating hours. Agents handle urgent routing, collect messages, and follow escalation procedures so patients always reach a professional response.',
    capabilities: [
      'Evening and weekend call coverage',
      'Message collection for non-urgent matters',
      'Urgent call escalation per your rules',
      'Seamless handoff to your daytime team',
    ],
    workflow: [
      'Patient calls outside your operating hours',
      'Agent determines urgency level',
      'Urgent calls are escalated immediately',
      'Non-urgent messages are collected and delivered',
    ],
    benefits: [
      'Patients always reach a live professional',
      'Urgent matters handled without delay',
      'Your team returns to organized messages',
      'Extended coverage without hiring additional staff',
    ],
  },
  {
    id: 'healthcare-administrative-support',
    number: '05',
    icon: ClipboardList,
    title: 'Healthcare Administrative Support',
    short: 'Reduce repetitive communication workload for internal teams.',
    features: ['Patient information requests', 'Administrative questions', 'Referral communication', 'Documentation workflows'],
    description:
      'Administrative communication support that takes repetitive tasks off your team\u2019s plate. Agents handle routine patient information requests, referral communication, and documentation workflows.',
    capabilities: [
      'Patient information request handling',
      'Administrative question management',
      'Referral communication coordination',
      'Documentation workflow support',
    ],
    workflow: [
      'Request is received from a patient or partner',
      'Agent follows your approved procedure',
      'Information is collected, verified, or routed',
      'Documentation is completed and delivered',
    ],
    benefits: [
      'Internal staff freed for higher-value work',
      'Faster response to routine requests',
      'Consistent handling of administrative tasks',
      'Reduced backlog during peak periods',
    ],
  },
  {
    id: 'custom-call-center-solutions',
    number: '06',
    icon: Settings2,
    title: 'Custom Call Center Solutions',
    short: 'Create customized workflows based on the client\u2019s organization, procedures and requirements.',
    features: ['Custom workflows', 'Dedicated procedures', 'Specialized routing', 'Scalable support'],
    description:
      'Tailored communication solutions built around your organization\u2019s unique needs. We design custom workflows, routing rules, and reporting structures that fit your operational reality.',
    capabilities: [
      'Custom workflow design and implementation',
      'Dedicated procedures for your organization',
      'Specialized call routing and escalation',
      'Scalable support that grows with your needs',
    ],
    workflow: [
      'We analyze your requirements and constraints',
      'A custom workflow is designed and documented',
      'Agents are trained on your specific procedures',
      'Operations launch with ongoing optimization',
    ],
    benefits: [
      'A solution shaped around your organization',
      'Workflows that match your existing processes',
      'Scalable support for growing patient volumes',
      'Dedicated procedures for specialized needs',
    ],
  },
];

export type Solution = {
  icon: typeof Stethoscope;
  title: string;
  description: string;
};

export const SOLUTIONS: Solution[] = [
  { icon: Stethoscope, title: 'Medical Clinics', description: 'Improve patient communication while reducing administrative pressure.' },
  { icon: UserRound, title: 'Physician Practices', description: 'Support appointment management and patient calls.' },
  { icon: Video, title: 'Telehealth Providers', description: 'Extend your communication infrastructure without expanding internal teams.' },
  { icon: Network, title: 'Healthcare Networks', description: 'Support high-volume communication across multiple locations.' },
  { icon: FlaskConical, title: 'Laboratories', description: 'Provide structured communication support for patients and healthcare partners.' },
  { icon: HeartPulse, title: 'Specialty Practices', description: 'Create communication workflows adapted to specialized healthcare environments.' },
];

export const PROBLEM_CARDS = [
  { title: 'Missed Calls', description: 'Important patient calls can be missed when internal teams are busy.' },
  { title: 'Administrative Overload', description: 'Staff spend valuable time handling repetitive communication tasks.' },
  { title: 'Patient Experience', description: 'Patients expect fast, professional and clear communication.' },
  { title: 'Operational Pressure', description: 'Growing patient volumes can put additional pressure on existing teams.' },
];

export const HOW_IT_WORKS_STEPS = [
  { number: '01', title: 'Discovery', description: 'We understand your organization, call volume, workflows and communication requirements.' },
  { number: '02', title: 'Workflow Design', description: 'We build communication procedures around your existing processes.' },
  { number: '03', title: 'Team Preparation', description: 'Agents are trained on your approved workflows, communication standards and escalation procedures.' },
  { number: '04', title: 'Launch & Optimization', description: 'Operations begin with ongoing monitoring and workflow improvements.' },
];

export const DETAILED_WORKFLOW = [
  { number: '01', title: 'Discovery', description: 'We learn your organization, call volume, communication goals, and operational constraints.' },
  { number: '02', title: 'Workflow Mapping', description: 'We document call types, routing rules, escalation paths, and scheduling procedures.' },
  { number: '03', title: 'Training', description: 'Agents are trained on your approved scripts, communication standards, and escalation procedures.' },
  { number: '04', title: 'Pilot', description: 'A controlled pilot validates workflows, identifies gaps, and refines procedures.' },
  { number: '05', title: 'Launch', description: 'Full operations begin with your defined coverage hours and communication workflows.' },
  { number: '06', title: 'Monitoring', description: 'Ongoing monitoring tracks call quality, response times, and workflow adherence.' },
  { number: '07', title: 'Optimization', description: 'Regular reviews identify improvements and adjust workflows as your needs evolve.' },
];

export const WHAT_WE_NEED = [
  { title: 'Communication Objectives', description: 'What outcomes matter most for your patient communication.' },
  { title: 'Call Types', description: 'The categories of calls your organization receives most frequently.' },
  { title: 'Scheduling Procedures', description: 'How appointments are booked, rescheduled, and managed.' },
  { title: 'Escalation Rules', description: 'Which situations require immediate escalation to clinical staff.' },
  { title: 'Operating Hours', description: 'The hours you need coverage, including after-hours support.' },
  { title: 'Approved Scripts', description: 'Communication scripts and messaging your organization has approved.' },
  { title: 'Reporting Requirements', description: 'The metrics and reports that help you monitor operations.' },
];

export const SECURITY_CARDS = [
  { title: 'Controlled Access', description: 'Access to communication tools and data is restricted to authorized personnel.' },
  { title: 'Role-Based Workflows', description: 'Agents operate within defined roles and responsibilities set by your organization.' },
  { title: 'Secure Communication Practices', description: 'Communication workflows follow client-defined procedures for handling sensitive information.' },
  { title: 'Defined Escalation Procedures', description: 'Clear escalation paths ensure urgent matters reach the right people promptly.' },
  { title: 'Staff Training', description: 'Agents receive training on communication standards and client-specific procedures.' },
  { title: 'Client-Specific Processes', description: 'Workflows are built around your organization\u2019s procedures, not generic templates.' },
];

export const WHY_US = [
  { title: 'Patient-Centered', description: 'Every interaction should feel professional and respectful.' },
  { title: 'Reliable Processes', description: 'Structured workflows reduce communication gaps.' },
  { title: 'Flexible Support', description: 'Services can adapt to different organizations and operational needs.' },
  { title: 'Human Support', description: 'Technology supports the team \u2014 it does not replace thoughtful communication.' },
  { title: 'Partnership Mindset', description: 'We work as an extension of the client\u2019s operations team.' },
];

export const TEAM_ROLES = [
  { title: 'Operations Director', description: 'Oversees communication operations and client relationships.' },
  { title: 'Healthcare Operations Manager', description: 'Manages day-to-day workflows and agent performance.' },
  { title: 'Quality & Training Lead', description: 'Ensures communication standards and ongoing training.' },
  { title: 'Client Success Manager', description: 'Serves as your primary point of contact for ongoing support.' },
];

export const FAQS = [
  {
    q: 'What types of healthcare organizations do you support?',
    a: 'We work with medical clinics, physician practices, telehealth providers, healthcare networks, laboratories, and specialty practices. Our workflows are tailored to each organization\u2019s operational needs.',
  },
  {
    q: 'How quickly can operations be launched?',
    a: 'Timelines depend on the complexity of your workflows, the number of call types, and your scheduling procedures. During discovery, we assess your requirements and provide a clear implementation timeline.',
  },
  {
    q: 'Do your agents follow our scripts and procedures?',
    a: 'Yes. Agents are trained on your approved scripts, communication standards, and escalation procedures. We work as an extension of your team, not a generic call center.',
  },
  {
    q: 'Can you provide after-hours coverage?',
    a: 'Yes. We offer evening, weekend, and after-hours support with defined escalation procedures so urgent matters reach the right people promptly.',
  },
  {
    q: 'How do you handle patient information?',
    a: 'Our workflows are designed around client-defined procedures, access controls, and role-based responsibilities. Specific security and compliance requirements are reviewed during implementation.',
  },
  {
    q: 'Is this a real company?',
    a: 'No. MedConnect Care is a demonstration prototype. Company information, statistics, and contact details shown here are placeholders for presentation purposes.',
  },
];

// ---- Demo data for dashboards ----

export const DASHBOARD_METRICS = [
  { label: 'Inbound Calls', value: 128, accent: 'brand' },
  { label: 'Answered', value: 119, accent: 'success' },
  { label: 'Pending', value: 9, accent: 'warning' },
  { label: 'Appointments Requested', value: 34, accent: 'brand' },
  { label: 'Callbacks', value: 17, accent: 'navy' },
];

export const CALLS_BY_HOUR = [
  { hour: '8am', calls: 12 },
  { hour: '9am', calls: 28 },
  { hour: '10am', calls: 35 },
  { hour: '11am', calls: 31 },
  { hour: '12pm', calls: 22 },
  { hour: '1pm', calls: 18 },
  { hour: '2pm', calls: 26 },
  { hour: '3pm', calls: 30 },
  { hour: '4pm', calls: 24 },
  { hour: '5pm', calls: 16 },
  { hour: '6pm', calls: 10 },
];

export const CALL_CATEGORIES = [
  { name: 'Appointment Requests', value: 42, color: '#1c78f0' },
  { name: 'General Inquiries', value: 31, color: '#3497fb' },
  { name: 'Follow-Ups', value: 18, color: '#5ab5ff' },
  { name: 'Escalations', value: 9, color: '#0b1f3a' },
];

export const RESPONSE_ACTIVITY = [
  { day: 'Mon', answered: 112, pending: 8 },
  { day: 'Tue', answered: 108, pending: 6 },
  { day: 'Wed', answered: 121, pending: 10 },
  { day: 'Thu', answered: 115, pending: 7 },
  { day: 'Fri', answered: 119, pending: 9 },
  { day: 'Sat', answered: 64, pending: 5 },
  { day: 'Sun', answered: 42, pending: 3 },
];

export const RECENT_ACTIVITY = [
  { time: '08:42', type: 'Appointment Request', status: 'Completed', team: 'Scheduling' },
  { time: '09:15', type: 'Patient Callback', status: 'Pending', team: 'Support' },
  { time: '09:31', type: 'General Inquiry', status: 'Completed', team: 'Support' },
  { time: '10:02', type: 'Appointment Request', status: 'In Progress', team: 'Scheduling' },
  { time: '10:18', type: 'Follow-Up Call', status: 'Completed', team: 'Follow-Up' },
  { time: '10:45', type: 'General Inquiry', status: 'Completed', team: 'Support' },
];

export const SYSTEM_STATUS_PANEL = [
  { label: 'Call Queue', value: 4, status: 'normal' },
  { label: 'Appointment Requests', value: 7, status: 'normal' },
  { label: 'Callback Requests', value: 3, status: 'normal' },
  { label: 'Escalations', value: 1, status: 'warning' },
];

export const PORTAL_METRICS = [
  { label: "Today's Calls", value: 128, change: '+12%', trend: 'up' as const },
  { label: 'Answered', value: 119, change: '93%', trend: 'up' as const },
  { label: 'Pending', value: 9, change: '-2', trend: 'down' as const },
  { label: 'Appointments', value: 34, change: '+5', trend: 'up' as const },
  { label: 'Escalations', value: 2, change: '0', trend: 'flat' as const },
];

export const PORTAL_CALL_VOLUME = [
  { hour: '8', calls: 12, answered: 11 },
  { hour: '9', calls: 28, answered: 27 },
  { hour: '10', calls: 35, answered: 33 },
  { hour: '11', calls: 31, answered: 29 },
  { hour: '12', calls: 22, answered: 20 },
  { hour: '13', calls: 18, answered: 17 },
  { hour: '14', calls: 26, answered: 25 },
  { hour: '15', calls: 30, answered: 28 },
  { hour: '16', calls: 24, answered: 22 },
  { hour: '17', calls: 16, answered: 15 },
];

export const PORTAL_REQUEST_CATEGORIES = [
  { name: 'Appointments', value: 42, color: '#1c78f0' },
  { name: 'Inquiries', value: 31, color: '#3497fb' },
  { name: 'Follow-Ups', value: 18, color: '#5ab5ff' },
  { name: 'Escalations', value: 9, color: '#0b1f3a' },
];

export const PORTAL_DAILY_ACTIVITY = [
  { day: 'Mon', calls: 120, appointments: 28 },
  { day: 'Tue', calls: 114, appointments: 25 },
  { day: 'Wed', calls: 131, appointments: 32 },
  { day: 'Thu', calls: 122, appointments: 30 },
  { day: 'Fri', calls: 128, appointments: 34 },
  { day: 'Sat', calls: 69, appointments: 14 },
  { day: 'Sun', calls: 45, appointments: 8 },
];
