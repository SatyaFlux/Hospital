import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Printer, 
  X, 
  Calendar, 
  Clock, 
  User, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export const AppointmentSuccessModal = ({ result, onClose }) => {
  const { t, language } = useLanguage();

  if (!result) return null;

  const { token, data, whatsappUrl, mode } = result;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close confirmation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-800">
              {mode === 'supabase' 
                ? (language === 'hi' ? 'डेटाबेस में दर्ज' : 'Recorded in Database')
                : (language === 'hi' ? 'सत्यापित संपर्क अनुरोध' : 'Verified Request Mode')}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              {t.appointment.modal.successTitle}
            </h3>
          </div>
        </div>

        {/* Token Badge */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-cyan-50 border border-brand-100 text-center">
          <p className="text-xs text-brand-700 font-semibold mb-1">
            {t.appointment.modal.successDesc}
          </p>
          <p className="text-2xl font-black tracking-widest text-brand-900 font-mono">
            {token}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            {t.appointment.modal.status}
          </p>
        </div>

        {/* Appointment Summary Table */}
        <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-600" />
              {t.appointment.modal.patientName}
            </span>
            <span className="font-bold text-slate-900">{data.patient_name}</span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-brand-600" />
              {t.appointment.modal.dept}
            </span>
            <span className="font-bold text-slate-900">{data.department}</span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-600" />
              {t.appointment.modal.dateTime}
            </span>
            <span className="font-bold text-slate-900">{data.preferred_date} • {data.preferred_time}</span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              {t.appointment.modal.phone}
            </span>
            <span className="font-bold text-slate-900">+91 {data.mobile}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-2.5">
          {/* Action 1: WhatsApp Dispatch */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all text-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.appointment.modal.whatsappAction}</span>
          </a>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Action 2: Call Reception */}
            <a
              href={`tel:${HOSPITAL_INFO.phones.primary}`}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{t.appointment.modal.callAction}</span>
            </a>

            {/* Action 3: Print Slip */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.appointment.modal.printAction}</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center text-[11px] text-slate-400">
          <p>
            {language === 'hi'
              ? 'आसाम रोड चौराहा, उतरौला, बलरामपुर (271604) • फोन: 09839620619'
              : 'Asam Road Chauraha, Utraula, Balrampur (271604) • Phone: 09839620619'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AppointmentSuccessModal;

