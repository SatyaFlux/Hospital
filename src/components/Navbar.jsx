import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import HospitalLogo from './HospitalLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { Phone, Calendar, Menu, X, Ambulance } from 'lucide-react';

export const Navbar = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#departments', label: t.nav.departments },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#facilities', label: t.nav.facilities },
    { href: '#emergency', label: t.nav.emergency, badge: '24/7' },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-header shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
    }`}>
      <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-3 sm:px-6 xl:px-4 2xl:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-3 2xl:gap-4">
          
          {/* Logo with home link */}
          <a 
            href="#home" 
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg transition-transform hover:scale-[1.01]"
            aria-label="Sajida Hospital Home"
          >
            <HospitalLogo size="md" />
          </a>

          {/* Desktop Navigation Links in single horizontal sequence */}
          <nav 
            className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 flex-shrink-0"
            aria-label="Desktop Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative inline-flex items-center whitespace-nowrap px-2.5 py-1.5 2xl:px-3 2xl:py-2 text-xs 2xl:text-sm font-semibold rounded-lg transition-all duration-200 flex-shrink-0 ${
                  link.href === '#emergency'
                    ? 'text-rose-600 hover:text-rose-700 hover:bg-rose-50/80 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-brand-50/70'
                }`}
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-rose-100 text-rose-700 border border-rose-200 whitespace-nowrap flex-shrink-0">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions in single horizontal sequence */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 flex-shrink-0">
            {/* 24/7 Emergency Quick Call */}
            <a
              href={`tel:${HOSPITAL_INFO.phones.primary}`}
              className="inline-flex items-center gap-1.5 2xl:gap-2 px-2.5 2xl:px-3 py-1.5 2xl:py-2 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-full hover:bg-rose-100 transition-colors shadow-sm whitespace-nowrap flex-shrink-0"
              title="24/7 Emergency Line"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
              </span>
              <Ambulance className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{HOSPITAL_INFO.phones.primaryDisplay}</span>
            </a>

            {/* Book Appointment CTA */}
            <a
              href="#appointment"
              className="inline-flex items-center gap-1.5 2xl:gap-2 px-3 2xl:px-4 py-2 2xl:py-2.5 text-xs 2xl:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 rounded-xl shadow-card hover:shadow-glow hover:from-brand-700 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{t.nav.bookBtn}</span>
            </a>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <LanguageSwitcher />

            {/* Quick Book Appointment CTA for tablet view */}
            <a
              href="#appointment"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 rounded-lg shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">{t.nav.bookBtn}</span>
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                  link.href === '#emergency'
                    ? 'text-rose-700 bg-rose-50/80 font-bold'
                    : 'text-slate-800 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-rose-600 text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              {/* Emergency Quick Dial */}
              <a
                href={`tel:${HOSPITAL_INFO.phones.primary}`}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl hover:bg-rose-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>{t.nav.callBtn} (24/7 Helpline)</span>
              </a>

              {/* Book Appointment Button */}
              <a
                href="#appointment"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 rounded-xl shadow-md hover:from-brand-700 hover:to-cyan-700 transition-all text-center"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.nav.bookBtn}</span>
              </a>
            </div>

            {/* Address info in mobile drawer */}
            <div className="pt-2 text-center text-xs text-slate-500">
              <p>{HOSPITAL_INFO.address.line1En}, {HOSPITAL_INFO.address.cityEn}, {HOSPITAL_INFO.address.districtEn} - 271604</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

