import { useState } from 'react';
import { ArrowRight, CheckCircle2, Workflow, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/CTABanner';
import { SERVICES, type Service } from '@/data/content';
import { cn } from '@/utils/cn';

export default function ServicesPage() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) as Service;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 lg:pt-40">
        <div className="container-page pb-16 lg:pb-20">
          <SectionHeading
            eyebrow="Our Services"
            title="Healthcare Communication Services Designed Around Your Workflow"
            subtitle="Six core services that work together to support your patient communication needs — from inbound calls to custom workflows."
            dark
            align="left"
          />
        </div>
      </section>

      {/* Interactive service selector */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
            {/* Selector sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-500">
                Select a Service
              </p>
              <div className="flex flex-col gap-2">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={cn(
                      'flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200',
                      activeId === service.id
                        ? 'border-navy-900 bg-navy-900 text-white shadow-soft'
                        : 'border-navy-100 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                        activeId === service.id ? 'bg-white/15 text-white' : 'bg-navy-50 text-navy-700',
                      )}
                    >
                      <service.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold">{service.title}</p>
                      <p
                        className={cn(
                          'text-xs',
                          activeId === service.id ? 'text-navy-200' : 'text-navy-500',
                        )}
                      >
                        {service.number}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active service detail */}
            <div key={active.id} className="animate-fade-up">
              <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-card lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white">
                    <active.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-brand-600">
                      Service {active.number}
                    </span>
                    <h2 className="text-2xl font-bold text-navy-900 lg:text-3xl">
                      {active.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-navy-600">{active.description}</p>

                {/* Capabilities */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
                    Key Capabilities
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {active.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-start gap-2.5 rounded-xl bg-navy-50/50 px-4 py-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                        <span className="text-sm text-navy-700">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow */}
                <div className="mt-8">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-500">
                    <Workflow className="h-4 w-4" />
                    Typical Workflow
                  </h3>
                  <div className="mt-4 space-y-3">
                    {active.workflow.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                          {i + 1}
                        </span>
                        <span className="pt-1 text-sm text-navy-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-8">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-500">
                    <TrendingUp className="h-4 w-4" />
                    Benefits
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {active.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span className="text-sm text-navy-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-navy-100 pt-6">
                  <Button to="/contact" variant="primary" size="lg">
                    Request This Service
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Services You Need?"
        text="Tell us about your organization and we'll help you identify the right communication support for your team."
        primaryLabel="Build Your Solution"
        secondaryText="No obligation. Let's discuss your requirements."
      />
    </>
  );
}
