import { useState } from 'react';
import { CheckCircle2, ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';

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

const CALL_VOLUMES = ['Less than 100/day', '100-500/day', '500-1000/day', '1000+/day'];

type FormState = {
  firstName: string;
  lastName: string;
  organization: string;
  jobTitle: string;
  email: string;
  phone: string;
  orgType: string;
  callVolume: string;
  services: string;
  message: string;
  agree: boolean;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  organization: '',
  jobTitle: '',
  email: '',
  phone: '',
  orgType: '',
  callVolume: '',
  services: '',
  message: '',
  agree: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.organization.trim()) e.organization = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.orgType) e.orgType = 'Please select an option';
    if (!form.services) e.services = 'Please select an option';
    if (!form.agree) e.agree = 'Please agree to be contacted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="bg-navy-50/40 pt-32 lg:pt-40">
        <div className="container-page py-16 lg:py-24">
          <div className="mx-auto max-w-xl rounded-3xl border border-navy-100 bg-white p-10 text-center shadow-card lg:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100">
              <CheckCircle2 className="h-8 w-8 text-success-600" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-navy-900">Request Received</h1>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Thank you. Your request has been received. A member of our team will review your
              requirements and contact you using the information provided.
            </p>
            <div className="mt-8">
              <Button
                onClick={() => {
                  setForm(initialState);
                  setSubmitted(false);
                }}
                variant="primary"
                size="lg"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 lg:pt-40">
        <div className="container-page pb-16 lg:pb-20">
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Talk About Your Communication Needs."
            subtitle="Tell us about your organization and the support you're looking for. We'll review your requirements and get back to you."
            dark
            align="left"
          />
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
            {/* Form */}
            <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-card lg:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-navy-900">Consultation Request</h2>
                <Badge variant="warning">Demo</Badge>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="First Name"
                    required
                    value={form.firstName}
                    onChange={(v) => update('firstName', v)}
                    error={errors.firstName}
                  />
                  <FormField
                    label="Last Name"
                    required
                    value={form.lastName}
                    onChange={(v) => update('lastName', v)}
                    error={errors.lastName}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Organization"
                    required
                    value={form.organization}
                    onChange={(v) => update('organization', v)}
                    error={errors.organization}
                  />
                  <FormField
                    label="Job Title"
                    value={form.jobTitle}
                    onChange={(v) => update('jobTitle', v)}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => update('email', v)}
                    error={errors.email}
                  />
                  <FormField
                    label="Phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update('phone', v)}
                    error={errors.phone}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Organization Type"
                    required
                    value={form.orgType}
                    onChange={(v) => update('orgType', v)}
                    options={ORG_TYPES}
                    error={errors.orgType}
                  />
                  <SelectField
                    label="Estimated Call Volume"
                    value={form.callVolume}
                    onChange={(v) => update('callVolume', v)}
                    options={CALL_VOLUMES}
                  />
                </div>
                <SelectField
                  label="Services Needed"
                  required
                  value={form.services}
                  onChange={(v) => update('services', v)}
                  options={SERVICES_OPTIONS}
                  error={errors.services}
                />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-700">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your communication challenges and the support you need..."
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                  />
                </div>
                <label className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => update('agree', e.target.checked)}
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-6">
                <h3 className="text-base font-bold text-navy-900">Get in Touch</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-brand-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-900">Phone</p>
                      <p className="text-sm text-navy-600">+1 (000) 000-0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-brand-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-900">Email</p>
                      <p className="text-sm text-navy-600">hello@medconnectcare.example</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-brand-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-900">Location</p>
                      <p className="text-sm text-navy-600">Remote operations — serving healthcare organizations nationwide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-brand-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-900">Response Time</p>
                      <p className="text-sm text-navy-600">We typically respond within one business day</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-warning-200 bg-warning-50 p-6">
                <p className="text-sm leading-relaxed text-warning-800">
                  This is a demonstration prototype. The form does not submit to a real backend.
                  Company information and contact details shown here are placeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  required,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy-900 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-100 ${
          error ? 'border-error-300 focus:border-error-500' : 'border-navy-200 focus:border-brand-500'
        }`}
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-error-600">{error}</p>}
    </div>
  );
}
