import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DEPARTMENTS_DATA } from '../utils/constants';
import { 
  Building2, 
  UserRoundCheck, 
  ShieldAlert, 
  BedDouble, 
  Flame, 
  Stethoscope, 
  Activity, 
  Syringe, 
  ScanLine, 
  HeartPulse, 
  Wind, 
  Cpu, 
  FlaskConical, 
  Ambulance, 
  CheckCircle2, 
  ArrowRight,
  X,
  Phone,
  Calendar
} from 'lucide-react';

const iconMap = {
  UserRoundCheck,
  ShieldAlert,
  BedDouble,
  Flame,
  Stethoscope,
  Activity,
  Syringe,
  ScanLine,
  HeartPulse,
  Wind,
  Cpu,
  FlaskConical,
  Ambulance,
};

export const Departments = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDept, setSelectedDept] = useState(null);

  const tabs = [
    { id: 'all', label: t.departments.tabs.all },
    { id: 'wards', label: t.departments.tabs.wards },
    { id: 'critical', label: t.departments.tabs.critical },
    { id: 'diagnostics', label: t.departments.tabs.diagnostics },
    { id: 'outpatient', label: t.departments.tabs.outpatient },
  ];

  const filteredDepts = DEPARTMENTS_DATA.filter((dept) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'wards') return dept.category === 'wards';
    if (activeTab === 'critical') return dept.category === 'critical' || dept.id === 'emergency-ward';
    if (activeTab === 'diagnostics') return dept.category === 'diagnostics';
    if (activeTab === 'outpatient') return dept.category === 'outpatient' || dept.category === 'emergency';
    return true;
  });

  return (
    <section id="departments" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-800 border border-brand-200">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.departments.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.departments.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.departments.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'bg-white text-slate-600 hover:text-brand-600 hover:bg-white/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredDepts.map((dept) => {
            const Icon = iconMap[dept.iconName] || Stethoscope;
            const deptText = t.departments.items[dept.nameKey] || {
              title: dept.nameKey,
              desc: '',
              specs: []
            };

            const isEmergencyRelated = dept.is24x7;

            return (
              <div
                key={dept.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  isEmergencyRelated
                    ? 'border-rose-100 hover:border-rose-300 ring-1 ring-rose-50/50'
                    : 'border-slate-100 hover:border-brand-200'
                }`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isEmergencyRelated 
                        ? 'bg-rose-50 text-rose-600' 
                        : 'bg-brand-50 text-brand-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      isEmergencyRelated 
                        ? 'bg-rose-100 text-rose-700' 
                        : 'bg-sky-50 text-brand-700 border border-sky-100'
                    }`}>
                      {language === 'hi' ? dept.badgeHi : dept.badgeEn}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                    {deptText.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {deptText.desc}
                  </p>

                  {/* Bullet points */}
                  {deptText.specs && deptText.specs.length > 0 && (
                    <ul className="space-y-1.5 mb-5 text-xs text-slate-700 font-medium">
                      {deptText.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                            isEmergencyRelated ? 'text-rose-500' : 'text-brand-600'
                          }`} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedDept({ dept, deptText, Icon })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors group"
                  >
                    <span>{t.departments.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {dept.is24x7 && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                      24/7 Available
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedDept && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setSelectedDept(null)}
        >
          <div 
            className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-left border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <selectedDept.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {selectedDept.deptText.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-600">
                    {language === 'hi' ? selectedDept.dept.badgeHi : selectedDept.dept.badgeEn}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="py-5 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>{selectedDept.deptText.desc}</p>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {language === 'hi' ? 'सुविधा विशेषताएँ' : 'Unit Capabilities'}
                </h4>
                <ul className="space-y-2">
                  {selectedDept.deptText.specs?.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                onClick={() => setSelectedDept(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-700 transition-colors text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookBtn}</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                {t.departments.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Departments;

