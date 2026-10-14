import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export const TopBar = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-navy-900 via-brand-950 to-brand-900 text-slate-200 text-xs border-b border-brand-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Left: Location & 2004 Legacy Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="hidden sm:inline font-medium">
                {language === 'hi' ? HOSPITAL_INFO.address.fullAddressHi : HOSPITAL_INFO.address.fullAddressEn}
              </span>
              <span className="sm:hidden font-medium">
                {language === 'hi' ? 'आसाम रोड चौराहा, उतरौला' : 'Asram Road Chauraha, Utraula'}
              </span>
            </div>

            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-brand-800/60 text-cyan-200 border border-brand-700/60">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {t.topbar.freeConsultPill}
            </span>
          </div>

          {/* Right: Phone, WhatsApp & Language Switcher */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap ml-auto">
            {/* Direct Phone */}
            <a
              href={`tel:${HOSPITAL_INFO.phones.primary}`}
              className="flex items-center gap-1.5 hover:text-white font-medium transition-colors group whitespace-nowrap flex-shrink-0"
              title="Call Sajida Hospital Reception & Emergency"
            >
              <div className="w-5 h-5 rounded-full bg-brand-600/60 flex items-center justify-center group-hover:bg-brand-500 transition-colors flex-shrink-0">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="hidden xs:inline text-slate-400 whitespace-nowrap">{t.topbar.helpline}</span>
              <span className="text-white font-bold tracking-wide whitespace-nowrap">{HOSPITAL_INFO.phones.primaryDisplay}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsapp.clean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors whitespace-nowrap flex-shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="whitespace-nowrap">{HOSPITAL_INFO.whatsapp.display}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center">
              <LanguageSwitcher variant="transparent" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBar;

