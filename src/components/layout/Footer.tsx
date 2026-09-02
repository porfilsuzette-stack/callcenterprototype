import { Link } from 'react-router-dom';
import { PhoneCall, Phone, Mail, ArrowRight } from 'lucide-react';

const footerNav = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Solutions', to: '/#solutions' },
    { label: 'Careers', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'FAQs', to: '/#resources' },
    { label: 'Healthcare Communication Guide', to: '/#resources' },
    { label: 'Insights', to: '/#resources' },
    { label: 'Client Resources', to: '/portal' },
  ],
  Services: [
    { label: 'Patient Call Handling', to: '/services' },
    { label: 'Appointment Scheduling', to: '/services' },
    { label: 'Follow-Up Support', to: '/services' },
    { label: 'After-Hours Support', to: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                <PhoneCall className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                MedConnect<span className="text-brand-400"> Care</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              Healthcare communication, built around your patients. A professional call center
              partner for medical organizations.
            </p>
            <span className="badge-demo-dark mt-5">Prototype / Demo</span>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-navy-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-navy-300">
                <Phone className="h-4 w-4 text-brand-400" />
                +1 (000) 000-0000
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-300">
                <Mail className="h-4 w-4 text-brand-400" />
                hello@medconnectcare.example
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-navy-400">
            This website is a demonstration prototype. Company information, statistics,
            testimonials and contact details shown here are placeholders.
          </p>
          <div className="mt-4 flex flex-col gap-3 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} MedConnect Care. Prototype / Demo.</p>
            <p>Healthcare Communication, Built Around Your Patients.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
