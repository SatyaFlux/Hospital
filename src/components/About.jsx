import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { 
  Building2, 
  Heart, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ShieldCheck,
  Maximize2,
  X,
  FileText
} from 'lucide-react';
import bannerImg from '../assets/images/sajida-hospital-banner.jpg';
import contactCardImg from '../assets/images/sajida-hospital-contact-card.png';
import logoBoardImg from '../assets/images/sajida-hospital-logo-board.png';

export const About = () => {
  const { t, language } = useLanguage();
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* 2004 Legacy Banner Highlight Card */}
        <div className="relative mb-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-brand-800 to-navy-900 text-white shadow-xl overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? '2004 से अनवरत सेवा' : 'Continuous Service Since 2004'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.about.highlight2004Title}
              </h3>
              <p className="text-sm sm:text-base text-cyan-100 leading-relaxed max-w-3xl">
                {t.about.highlight2004Desc}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-slate-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {language === 'hi' ? 'आसाम रोड चौराहा, उतरौला' : 'Asram Road Chauraha, Utraula'}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {HOSPITAL_INFO.phones.primaryDisplay}
                </span>
              </div>
            </div>

            {/* Official banner preview button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
              <button
                type="button"
                onClick={() => setModalImage({
                  src: bannerImg,
                  title: language === 'hi' ? 'साजिदा हॉस्पिटल आधिकारिक बैनर' : 'Sajida Hospital Official Banner',
                  caption: language === 'hi' 
                    ? 'डॉ० एहसान हेल्थ केयर सेन्टर, डॉक्टर विवरण एवं संपर्क नंबर' 
                    : 'Dr. Ehsan Health Care Centre doctor schedules and verified contacts'
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <FileText className="w-4 h-4" />
                <span>{t.about.viewBanner}</span>
                <Maximize2 className="w-3.5 h-3.5 ml-1 opacity-75 group-hover:opacity-100" />
              </button>

              <button
                type="button"
                onClick={() => setModalImage({
                  src: logoBoardImg,
                  title: language === 'hi' ? 'साजिदा हॉस्पिटल आधिकारिक साइनबोर्ड' : 'Sajida Hospital Official Signboard',
                  caption: language === 'hi' 
                    ? 'उतरौला अस्पताल परिसर में स्थापित ऐक्रेलिक बोर्ड' 
                    : 'Acrylic brand board installed at Utraula hospital premises'
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs tracking-wide transition-all border border-white/20"
              >
                <span>{t.about.viewPlaque}</span>
                <Maximize2 className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              {t.about.feature1Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.feature1Desc}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'सुरक्षित महिला वार्ड व आईपीडी' : 'Dedicated Female Ward & IPD'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'इन्फेक्शन ड्रेसिंग वार्ड' : 'Infection Dressing Ward'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'आईसीयू व आधुनिक ऑपरेशन थियेटर' : 'ICU & Operation Theatre'}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              {t.about.feature2Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.feature2Desc}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'सटीक सी-आर्म इमेजिंग' : 'C-Arm Precision Fluoroscopy'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'हेमोडायलिसिस यूनिट व ऑक्सीजन' : 'Dialysis Unit & Oxygen'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>{language === 'hi' ? '24/7 पैथोलॉजी डायग्नोस्टिक्स' : '24/7 Diagnostic Pathology Lab'}</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              {t.about.feature3Title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.about.feature3Desc}
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'दंत चिकित्सक (प्रत्येक दिन)' : 'Dental Surgeon (Every Day)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'एम.बी.बी.एस. चिकित्सक (प्रतिदिन)' : 'MBBS Physician (Daily from 1 PM)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{language === 'hi' ? 'नेत्र विशेषज्ञ व न्यूरो सर्जन' : 'Eye Specialist & Neurosurgeon'}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Verified Asset Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-900">{modalImage.title}</h4>
                <p className="text-xs text-slate-500">{modalImage.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img 
                src={modalImage.src} 
                alt={modalImage.title} 
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

