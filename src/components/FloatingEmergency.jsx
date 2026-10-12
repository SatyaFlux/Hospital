import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { Phone, MessageCircle, Ambulance, X } from 'lucide-react';

export const FloatingEmergency = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-2 text-left min-w-[220px]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-[11px] font-extrabold text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              {language === 'hi' ? '24/7 आपातकालीन' : '24/7 Emergency'}
            </span>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
              aria-label="Close quick menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phones.primary}`}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
              <Phone className="w-3 h-3" />
            </div>
            <div>
              <p>{HOSPITAL_INFO.phones.primaryDisplay}</p>
              <span className="text-[10px] text-rose-600 font-normal">
                {language === 'hi' ? 'तुरंत कॉल करें' : 'Call Immediately'}
              </span>
            </div>
          </a>

          <a
            href={`https://wa.me/${HOSPITAL_INFO.whatsapp.clean}?text=${encodeURIComponent('EMERGENCY: Need urgent assistance at Sajida Hospital Utraula')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-3 h-3" />
            </div>
            <div>
              <p>WhatsApp Chat</p>
              <span className="text-[10px] text-emerald-600 font-normal">
                {HOSPITAL_INFO.whatsapp.display}
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!expanded && (
          <span className="hidden sm:inline-block bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm pointer-events-none">
            {language === 'hi' ? '24/7 आपातकालीन सहायता' : '24/7 Emergency Hotline'}
          </span>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-rose-300"
          aria-label="Open emergency quick contacts"
          title="24/7 Emergency & Ambulance"
        >
          {/* Animated ping ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-60 pointer-events-none"></span>

          <Ambulance className="w-7 h-7 relative z-10" />
        </button>
      </div>

    </div>
  );
};

export default FloatingEmergency;

