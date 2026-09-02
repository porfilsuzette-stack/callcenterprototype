import { useState, type ReactNode } from 'react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

type ConsultationModalProps = {
  open: boolean;
  onClose: () => void;
  trigger?: ReactNode;
};

const ORG_TYPES = [
  'Medical Clinic',
  'Physician Practice',
  'Telehealth',
  'Healthcare Network',
  'Laboratory',
  'Other',
];

const SERVICES_OPTIONS = [
  'Patient Call Handling',
  'Appointment Scheduling',
  'Follow-Up',
  'After-Hours Support',
  'Administrative Support',
  'Custom Solution',
];

export default function ConsultationModal({ open, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const e: Record<string, string> = {};
    const data = new FormData(form);
    const fields = ['firstName', 'lastName', 'organization', 'email', 'phone'];
    for (const f of fields) {
      if (!String(data.get(f) || '').trim()) e[f] = 'This field is required';
    }
    if (data.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email')))) {
      e.email = 'Please enter a valid email address';
    }
    if (!agreed) e.agree = 'Please agree to be contacted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(e.currentTarget)) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setAgreed(false);
    setErrors({});
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {submitted ? (
        <div className="p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-100">
            <CheckCircle2 className="h-7 w-7 text-success-600" />
          </div>
          <h3 className="mt-5 text-2xl font-bold text-navy-900">Request Received</h3>
          <p className="mt-3 text-sm leading-relaxed text-navy-600">
            Thank you. Your request has been received. A member of our team will review your
            requirements and contact you using the information provided.
          </p>
          <Button onClick={handleClose} variant="primary" size="md" className="mt-6">
            Close
          </Button>
        </div>
      ) : (
        <div className="p-8">
          <span className="badge-demo mb-4">Demo</span>
          <h3 className="text-2xl font-bold text-navy-900">Request a Consultation</h3>
          <p className="mt-2 text-sm text-navy-600">
            Tell us about your organization and communication needs. We&apos;ll be in touch.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" name="firstName" error={errors.firstName} />
              <Field label="Last Name" name="lastName" error={errors.lastName} />
            </div>
            <Field label="Organization" name="organization" error={errors.organization} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Phone" name="phone" type="tel" error={errors.phone} />
            <SelectField label="Organization Type" name="orgType" options={ORG_TYPES} />
            <SelectField label="Services Needed" name="services" options={SERVICES_OPTIONS} />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy-700">Message</label>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder="Tell us about your communication challenges..."
              />
            </div>
            <label className="flex items-start gap-2.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-navy-300 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-navy-600">
                I agree to be contacted regarding this consultation request.
              </span>
            </label>
            {errors.agree && <p className="text-xs text-error-600">{errors.agree}</p>}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </Modal>
  );
}

function Field({
  label,
  name,
  type = 'text',
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">{label}</label>
      <input
        type={type}
        name={name}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-100 ${
          error ? 'border-error-300 focus:border-error-500' : 'border-navy-200 focus:border-brand-500'
        }`}
      />
      {error && <p className="mt-1 text-xs text-error-600">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
