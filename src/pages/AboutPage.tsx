import { Target, Compass, Layers, HeartHandshake, Gauge, ArrowRight, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/CTABanner';
import { TEAM_ROLES } from '@/data/content';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/7681839/pexels-photo-7681839.jpeg?auto=compress&cs=tinysrgb&w=1200';

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To help healthcare organizations stay connected with their patients through professional, reliable, and patient-centered communication — so internal teams can focus on care, not constant phone calls.',
  },
  {
    icon: Compass,
    title: 'Our Approach',
    description:
      'We work as an extension of your operations team. Every workflow is designed around your existing procedures, communication standards, and escalation rules — not generic templates.',
  },
  {
    icon: Layers,
    title: 'How We Work',
    description:
      'Discovery, workflow mapping, training, pilot, launch, monitoring, and optimization. A structured process that ensures communication operations fit your organization from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-Centered Communication',
    description:
      'Every interaction should feel professional and respectful. We treat each patient call as part of the patient experience, not just a transaction to be processed.',
  },
  {
    icon: Gauge,
    title: 'Operational Excellence',
    description:
      'Structured workflows, defined escalation procedures, ongoing monitoring, and continuous improvement. We build reliability into every layer of communication.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 lg:pt-40">
        <div className="container-page pb-16 lg:pb-20">
          <SectionHeading
            eyebrow="About Us"
            title="A Better Way to Support Healthcare Communication"
            subtitle="MedConnect Care is built around the idea that healthcare organizations deserve a communication partner that understands their operational reality."
            dark
            align="left"
          />
        </div>
      </section>

      {/* Image + intro */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-3xl shadow-elevated ring-1 ring-navy-100">
              <img
                src={ABOUT_IMAGE}
                alt="Healthcare call center team working together"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A Communication Partner, Not Just a Call Center"
                align="left"
                className="mb-6"
              />
              <p className="text-lg leading-relaxed text-navy-600">
                MedConnect Care provides healthcare call center and patient communication services
                designed around the operational needs of modern medical organizations. We help
                clinics, practices, telehealth providers, and healthcare networks manage patient
                calls, appointment requests, follow-ups, and administrative communication.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Our approach is simple: we learn your workflows, train our agents on your
                procedures, and operate as an extension of your team. The result is a communication
                experience that feels organized, professional, and patient-centered.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/services" variant="primary" size="md">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core sections */}
      <section className="bg-navy-50/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Principles"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-600">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team roles */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Team"
            title="Roles That Support Your Operations"
            subtitle="Our team structure is designed to ensure your communication workflows run smoothly and your account is well-managed."
            className="mb-6"
          />
          <div className="mx-auto mb-14 max-w-2xl">
            <Badge variant="warning">Example Roles — Prototype</Badge>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_ROLES.map((role) => (
              <div
                key={role.title}
                className="group rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy-900">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Talk About How We Can Work Together"
        text="We'd love to learn about your organization and explore how our communication services can support your team."
      />
    </>
  );
}
