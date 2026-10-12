import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import HospitalLogo from './HospitalLogo';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUp, 
  Heart, 
  ShieldCheck, 
  X,
  Clock,
  Sparkles
} from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#departments', label: t.nav.departments },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#facilities', label: t.nav.facilities },
    { href: '#emergency', label: t.nav.emergency },
    { href: '#appointment', label: t.nav.appointment },
    { href: '#contact', label: t.nav.contact },
  ];

  const departmentLinks = [
    { href: '#departments', label: language === 'hi' ? 'महिला वार्ड' : 'Female Ward' },
    { href: '#departments', label: language === 'hi' ? 'इन्फेक्शन ड्रेसिंग वार्ड' : 'Infection Dressing Ward' },
    { href: '#departments', label: language === 'hi' ? 'इनडोर पेशेंट वार्ड (आईपीडी)' : 'Indoor Patient Ward (IPD)' },
    { href: '#departments', label: language === 'hi' ? 'आईसीयू (गहन चिकित्सा इकाई)' : 'ICU (Intensive Care Unit)' },
    { href: '#departments', label: language === 'hi' ? 'ऑपरेशन थियेटर (ओटी)' : 'Operation Theatre (OT)' },
    { href: '#departments', label: language === 'hi' ? 'सी-आर्म इमेजिंग सुविधा' : 'C-Arm Imaging Facility' },
    { href: '#departments', label: language === 'hi' ? 'डायलिसिस यूनिट' : 'Dialysis Unit' },
    { href: '#departments', label: language === 'hi' ? '24/7 डायग्नोस्टिक लैब' : '24/7 Diagnostic Lab' },
    { href: '#departments', label: language === 'hi' ? '24/7 एम्बुलेंस सेवा' : '24/7 Ambulance Services' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Col 1: Logo & Mission Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <HospitalLogo variant="light" size="lg" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {t.footer.tagline}
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-sm space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? '2004 से अनवरत निःशुल्क परामर्श' : 'Free Consultation Ongoing Since 2004'}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {language === 'hi' 
                  ? 'डॉ० एहसान हेल्थ केयर सेन्टर द्वारा स्थानीय समुदाय की सेवा में समर्पित।' 
                  : 'Pioneered by Dr. Ehsan Health Care Centre in service of the community.'}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                {language === 'hi' ? 'भाषा चुनें / Select Language:' : 'Select Language:'}
              </span>
              <LanguageSwitcher variant="transparent" />
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t.footer.departmentsList}
            </h4>
            <ul className="space-y-2 text-xs">
              {departmentLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>
                  {HOSPITAL_INFO.address.line1En},<br />
                  {HOSPITAL_INFO.address.cityEn}, {HOSPITAL_INFO.address.districtEn}, {HOSPITAL_INFO.address.stateEn} — {HOSPITAL_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phones.primary}`} className="hover:text-white font-semibold">
                  {HOSPITAL_INFO.phones.primaryDisplay} (24/7)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phones.additional1}`} className="hover:text-white">
                  {HOSPITAL_INFO.phones.additional1} / {HOSPITAL_INFO.phones.additional2}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${HOSPITAL_INFO.whatsapp.clean}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold"
                >
                  WhatsApp: {HOSPITAL_INFO.whatsapp.display}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed text-left">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {legalModal === 'privacy' ? t.footer.privacy : t.footer.terms}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto">
              {legalModal === 'privacy' ? (
                <>
                  <p className="font-semibold text-slate-900">
                    {language === 'hi' ? 'रोगी गोपनीयता नीति' : 'Patient Privacy Policy — Sajida Hospital'}
                  </p>
                  <p>
                    {language === 'hi'
                      ? 'साजिदा हॉस्पिटल में आपकी व्यक्तिगत एवं चिकित्सकीय जानकारी की सुरक्षा सर्वोपरि है। हम केवल परामर्श समन्वय और आपातकालीन सूचना हेतु संपर्क विवरण दर्ज करते हैं।'
                      : 'At Sajida Hospital, your personal and medical privacy is strictly protected. We only collect essential contact information necessary for scheduling consultations and coordinating emergency assistance.'}
                  </p>
                  <p>
                    {language === 'hi'
                      ? 'हम किसी भी मरीज का निजी डेटा किसी तीसरे पक्ष को विपणन या विज्ञापन हेतु साझा नहीं करते हैं।'
                      : 'We do not sell, rent, or share patient information with third-party advertisers or unauthorized commercial entities.'}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-slate-900">
                    {language === 'hi' ? 'सेवा की शर्तें' : 'Terms & Hospital Information Guidelines'}
                  </p>
                  <p>
                    {language === 'hi'
                      ? 'यह वेबसाइट सामान्य स्वास्थ्य जागरूकता और साजिदा हॉस्पिटल (आसाम रोड चौराहा, उतरौला, बलरामपुर) में परामर्श अनुरोध हेतु प्रदान की गई है।'
                      : 'This website is provided for informational and appointment request coordination for Sajida Hospital located at Asram Road Chauraha, Utraula, Balrampur.'}
                  </p>
                  <p>
                    {language === 'hi'
                      ? 'आपातकालीन परिस्थितियों में सीधे 09839620619 पर संपर्क करें या तत्काल अस्पताल पहुंचें।'
                      : 'In acute medical emergencies, please directly call 09839620619 or visit our emergency ward immediately.'}
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700"
              >
                {language === 'hi' ? 'ठीक है' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

