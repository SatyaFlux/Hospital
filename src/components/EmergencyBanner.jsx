import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  Ambulance, 
  FlaskConical, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Flame 
} from 'lucide-react';

export const EmergencyBanner = () => {
  const { t, language } = useLanguage();

  const emergencyWhatsAppUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp.clean}?text=${encodeURIComponent(
    'EMERGENCY ASSISTANCE NEEDED: Hello Sajida Hospital, I need urgent medical assistance / ambulance dispatch in Utraula, Balrampur.'
  )}`;

  return (
    <section id="emergency" className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background emergency glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-extrabold uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-ping"></span>
                <Flame className="w-4 h-4 text-rose-400" />
                <span>{t.emergency.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
                {t.emergency.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t.emergency.subtitle}
              </p>

              {/* Verified 24/7 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5 text-rose-400 font-bold text-sm mb-1">
                    <Ambulance className="w-5 h-5 flex-shrink-0" />
                    <span>{t.emergency.ambulanceTitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.emergency.ambulanceDesc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm mb-1">
                    <FlaskConical className="w-5 h-5 flex-shrink-0" />
                    <span>{t.emergency.labTitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.emergency.labDesc}
                  </p>
                </div>
              </div>

              {/* Address verification note */}
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{t.emergency.addressNotice}</span>
              </div>

            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-black/40 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              
              <div className="text-center pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {language === 'hi' ? 'सीधा आपातकालीन संपर्क' : 'Immediate Emergency Lines'}
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'hi' ? '24 घंटे किसी भी समय कॉल करें' : 'Call anytime, day or night'}
                </p>
              </div>

              {/* Primary Call: 098396 20619 */}
              <a
                href={`tel:${HOSPITAL_INFO.phones.primary}`}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold text-lg sm:text-xl shadow-lg shadow-rose-900/40 hover:scale-[1.02] transition-all text-center group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{HOSPITAL_INFO.phones.primaryDisplay}</span>
              </a>

              {/* Backup Call Lines */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.phones.additional1}`}
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{HOSPITAL_INFO.phones.additional1}</span>
                </a>
                <a
                  href={`tel:${HOSPITAL_INFO.phones.additional2}`}
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{HOSPITAL_INFO.phones.additional2}</span>
                </a>
              </div>

              {/* WhatsApp Emergency Chat */}
              <a
                href={emergencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.emergency.whatsappBtn}</span>
              </a>

              <div className="pt-2 text-center text-[11px] text-slate-400">
                <p>
                  {language === 'hi' 
                    ? 'कृपया गंभीर आपात स्थिति में ऑनलाइन फॉर्म का इंतजार न करें, सीधे कॉल करें।' 
                    : 'For life-threatening emergencies, please call directly rather than waiting for email.'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EmergencyBanner;

