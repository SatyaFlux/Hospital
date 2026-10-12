import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { 
  Calendar, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Ambulance, 
  FlaskConical, 
  HeartHandshake,
  CheckCircle2,
  Clock
} from 'lucide-react';
import logoBoardImg from '../assets/images/sajida-hospital-logo-board.png';

export const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-medical-mesh pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.titlePrefix}{' '}
              <span className="bg-gradient-to-r from-brand-600 via-cyan-600 to-brand-700 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Verified Legacy Callout */}
            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-brand-100 shadow-soft">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
                <HeartHandshake className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-slate-900">
                  {language === 'hi' 
                    ? 'डॉ० एहसान हेल्थ केयर सेन्टर (साजिदा हॉस्पिटल)' 
                    : 'Dr. Ehsan Health Care Centre (Sajida Hospital)'}
                </p>
                <p className="text-slate-600 mt-0.5">
                  {language === 'hi'
                    ? '2004 से निःशुल्क परामर्श की सुविधा निरन्तर जारी — जनसेवा के दो दशक समर्पित।'
                    : 'Continuous free consultation facility ongoing since 2004 — dedicated to our local community.'}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Primary: Book Appointment */}
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white text-base bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 shadow-card hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookAppointmentBtn}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Secondary: Call Hospital */}
              <a
                href={`tel:${HOSPITAL_INFO.phones.primary}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 text-base bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-brand-300 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>{t.hero.callHospitalBtn}</span>
              </a>

              {/* Tertiary: Explore Facilities */}
              <a
                href="#facilities"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-brand-700 text-sm hover:text-brand-800 hover:bg-brand-50/60 transition-colors"
              >
                <span>{t.hero.exploreFacilitiesBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro verification pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {language === 'hi' ? '24/7 आपातकालीन ट्राइएज' : '24/7 Emergency Triage'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {language === 'hi' ? '24/7 ऑन-कॉल एम्बुलेंस' : '24/7 On-Call Ambulance'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {language === 'hi' ? '24/7 पैथोलॉजी लैब' : '24/7 Diagnostic Lab'}
              </span>
            </div>

          </div>

          {/* Right Hero Visual: Authentic Hospital Branding Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card with warm ambient glow */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white via-white to-sky-50 shadow-2xl border border-sky-100">
                
                {/* Real Hospital Acrylic Board Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-inner group">
                  <img
                    src={logoBoardImg}
                    alt="Sajida Hospital Official Acrylic Signboard at Utraula"
                    className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent flex flex-col justify-end p-5 text-white text-left">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-600/90 text-white w-fit backdrop-blur-sm border border-white/20 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {language === 'hi' ? 'सत्यापित अस्पताल परिसर' : 'Verified Hospital Facility'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {language === 'hi' ? 'साजिदा हॉस्पिटल' : 'Sajida Hospital'}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-200 font-medium">
                      {language === 'hi' 
                        ? 'आसाम रोड चौराहा, उतरौला, बलरामपुर (271604)' 
                        : 'Asram Road Chauraha, Utraula, Balrampur (271604)'}
                    </p>
                  </div>
                </div>

                {/* Floating Top Badge: 24/7 Emergency & Lab */}
                <div className="absolute -top-4 -right-4 sm:-right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-rose-100 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      <p className="text-xs font-extrabold text-rose-700 uppercase tracking-wide">
                        {language === 'hi' ? '24/7 आपातकालीन' : '24/7 Emergency'}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      {language === 'hi' ? 'एम्बुलेंस व पैथोलॉजी लैब' : '& Ambulance Service'}
                    </p>
                  </div>
                </div>

                {/* Floating Bottom Badge: Legacy Since 2004 */}
                <div className="absolute -bottom-4 -left-4 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-brand-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">
                      {language === 'hi' ? 'स्थापना: 2004' : 'Est. 2004'}
                    </p>
                    <p className="text-[11px] text-brand-700 font-semibold">
                      {language === 'hi' ? '20+ वर्ष से निरंतर सेवा' : '20+ Years in Utraula'}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Below Hero: 4 Key Value Cards */}
        <div className="mt-14 pt-10 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          
          {/* Card 1: 20+ Years Legacy */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">
              {t.hero.statYears}
            </h4>
            <p className="text-xs font-semibold text-brand-700 mt-0.5">
              {t.hero.statYearsLabel}
            </p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'hi' 
                ? '2004 से लगातार स्थानीय नागरिकों के लिए निःशुल्क परामर्श सुविधा जारी।' 
                : 'Continuous free consultation tradition maintained for over two decades.'}
            </p>
          </div>

          {/* Card 2: 13+ Specialized Units */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">
              {t.hero.statFacilities}
            </h4>
            <p className="text-xs font-semibold text-cyan-700 mt-0.5">
              {t.hero.statFacilitiesLabel}
            </p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'hi' 
                ? 'महिला वार्ड, आईपीडी, आईसीयू, ओटी, सी-आर्म व डायलिसिस यूनिट।' 
                : 'Female ward, IPD, ICU, OT, C-Arm imaging & Dialysis unit under one roof.'}
            </p>
          </div>

          {/* Card 3: 24/7 Emergency & Ambulance */}
          <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <Ambulance className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">
              {t.hero.statEmergency}
            </h4>
            <p className="text-xs font-semibold text-rose-700 mt-0.5">
              {t.hero.statEmergencyLabel}
            </p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'hi' 
                ? '24 घंटे ऑन-कॉल एम्बुलेंस और त्वरित पैथोलॉजी जांच सुविधा।' 
                : '24/7 dedicated medical transfer and continuous diagnostic laboratory.'}
            </p>
          </div>

          {/* Card 4: Qualified Doctors & Specialists */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-heading">
              {t.hero.statDoctors}
            </h4>
            <p className="text-xs font-semibold text-emerald-700 mt-0.5">
              {t.hero.statDoctorsLabel}
            </p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {language === 'hi' 
                ? 'दंत रोग, नेत्र रोग, जनरल फिजिशियन एवं दिल्ली के न्यूरो सर्जन।' 
                : 'Dental surgeon, ophthalmologist, physician, and visiting neurosurgeon.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

