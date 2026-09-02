import { ArrowRight, CheckCircle2, ListChecks } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/CTABanner';
import { DETAILED_WORKFLOW, WHAT_WE_NEED } from '@/data/content';

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 lg:pt-40">
        <div className="container-page pb-16 lg:pb-20">
          <SectionHeading
            eyebrow="How It Works"
            title="A Structured Process from Discovery to Optimization"
            subtitle="We don't just answer phones. We design, build, and refine communication workflows that fit your organization."
            dark
            align="left"
          />
        </div>
      </section>

      {/* Detailed workflow */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Process"
            title="Seven Steps to a Communication Workflow That Fits"
            className="mb-16"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.75rem] top-0 hidden h-full w-px bg-gradient-to-b from-brand-300 via-navy-200 to-transparent lg:left-1/2 lg:block" />

            <div className="space-y-6 lg:space-y-0">
              {DETAILED_WORKFLOW.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:gap-12`}
                >
                  {/* Card */}
                  <div className="flex-1 lg:py-4">
                    <div
                      className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card lg:p-7 ${
                        i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 font-display text-sm font-bold text-white">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-navy-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 top-6 z-10 flex h-14 w-14 items-center justify-center lg:static lg:top-auto">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-brand-500 text-white shadow-soft">
                      <span className="text-xs font-bold">{step.number}</span>
                    </span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="bg-navy-50/40 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Preparation"
            title="What We Need From Your Organization"
            subtitle="To build communication workflows that truly fit your operations, we need a clear picture of how your organization works."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_NEED.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  <ListChecks className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg">
              Discuss Your Workflow
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Build Your Communication Workflow?"
        text="Let's start with a conversation about your organization, your call volume, and the support you need."
        primaryLabel="Start a Conversation"
      />
    </>
  );
}
