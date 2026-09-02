import { useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import ConsultationModal from '@/components/ConsultationModal';

type CTABannerProps = {
  title: string;
  text: string;
  primaryLabel?: string;
  secondaryText?: string;
  children?: ReactNode;
};

export default function CTABanner({
  title,
  text,
  primaryLabel = 'Request a Consultation',
  secondaryText = 'No obligation. Let\u2019s discuss your requirements.',
}: CTABannerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="container-page py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-4xl bg-navy-900 px-6 py-14 text-center shadow-elevated sm:px-12 lg:py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">{text}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              onClick={() => setModalOpen(true)}
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-navy-300">{secondaryText}</p>
        </div>
      </div>
      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
