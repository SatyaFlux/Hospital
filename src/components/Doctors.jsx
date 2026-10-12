import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA, HOSPITAL_INFO } from '../utils/constants';
import { 
  UserCheck, 
  Clock, 
  GraduationCap, 
  Stethoscope, 
  Calendar, 
  Phone, 
  ShieldCheck,
  CheckCircle,
  Eye,
  Smile,
  Brain,
  HeartHandshake
} from 'lucide-react';

export const Doctors = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  const getDoctorIcon = (key) => {
    switch (key) {
      case 'dental': return Smile;
      case 'eye': return Eye;
      case 'neuro': return Brain;
      default: return Stethoscope;
    }
  };

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    if (filter === 'all') return true;
    return doc.departmentKey === filter;
  });

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <UserCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.doctors.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.doctors.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.doctors.subtitle}
          </p>
          <p className="text-xs text-brand-700 font-medium inline-flex items-center gap-1.5 bg-brand-50/70 px-3 py-1 rounded-full border border-brand-100">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            {t.doctors.sourceNote}
          </p>
        </div>

        {/* Doctor Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'सभी विशेषज्ञ' : 'All Specialists'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('opd')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'opd'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'सामान्य चिकित्सा (Physicians)' : 'General Physicians'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('dental')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'dental'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'दंत रोग (Dental)' : 'Dental Surgeon'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('eye')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'eye'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'नेत्र रोग (Eye / Opthalmology)' : 'Eye Specialist'}
          </button>
          <button
            type="button"
            onClick={() => setFilter('neuro')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'neuro'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'hi' ? 'न्यूरो सर्जरी (Neurosurgeon)' : 'Neurosurgeon'}
          </button>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredDoctors.map((doc) => {
            const Icon = getDoctorIcon(doc.departmentKey);

            return (
              <div
                key={doc.id}
                className="flex flex-col justify-between rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Doctor Avatar Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-600">
                          {language === 'hi' ? doc.roleHi : doc.roleEn}
                        </span>
                        <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                          {language === 'hi' ? doc.nameHi : doc.nameEn}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {t.doctors.specialtyLabel}
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {language === 'hi' ? doc.specializationHi : doc.specializationEn}
                    </p>
                  </div>

                  {/* Verified Qualifications */}
                  <div className="mb-5 p-3.5 rounded-xl bg-white border border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                      <GraduationCap className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span>{t.doctors.qualificationLabel}</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {language === 'hi' ? doc.qualificationHi : doc.qualificationEn}
                    </p>
                  </div>

                  {/* Availability Timing Chip */}
                  <div className="mb-6 p-3 rounded-xl bg-brand-50/80 border border-brand-100 flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-700 block">
                        {t.doctors.timingLabel}:
                      </span>
                      <span className="font-semibold text-brand-800 leading-tight">
                        {language === 'hi' ? doc.timingHi : doc.timingEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2.5">
                  <a
                    href="#appointment"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-sm text-center"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.doctors.bookDoctorBtn}</span>
                  </a>

                  <a
                    href={`tel:${HOSPITAL_INFO.phones.primary}`}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                    title={`Call for ${doc.nameEn} availability`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Doctors;

