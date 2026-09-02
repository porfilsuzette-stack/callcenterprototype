import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-navy-100'
          : 'bg-white/0 border-b border-transparent',
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-white shadow-soft">
            <PhoneCall className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy-900">
            MedConnect<span className="text-brand-600"> Care</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/portal"
            className="text-sm font-semibold text-navy-700 transition-colors hover:text-navy-900"
          >
            Client Portal
          </Link>
          <Button to="/contact" size="md" variant="primary">
            Request a Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-elevated animate-slide-in">
            <div className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-lg px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/portal"
                className="rounded-lg px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                Client Portal
              </Link>
            </div>
            <div className="mt-4 border-t border-navy-100 pt-4">
              <Button to="/contact" size="lg" variant="primary" className="w-full">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
