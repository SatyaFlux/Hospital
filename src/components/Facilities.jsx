import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  Flame, 
  UserRoundCheck, 
  BedDouble, 
  Activity, 
  Syringe, 
  ScanLine, 
  HeartPulse, 
  Wind, 
  Cpu, 
  FlaskConical, 
  Ambulance, 
  CheckCircle2,
  Phone
} from 'lucide-react';
import { HOSPITAL_INFO } from '../utils/constants';

export const Facilities = () => {
  const { t, language } = useLanguage();

  const facilitiesList = [
    {
      id: 'emergency',
      nameEn: 'Emergency Ward',
      nameHi: 'आपातकालीन वार्ड (Emergency)',
      descEn: 'Equipped for rapid triage, immediate stabilization, and prompt acute intervention.',
      descHi: 'त्वरित प्राथमिक उपचार, जीवन रक्षक ट्राइएज और आपातकालीन मरीज स्थिरता हेतु।',
      icon: Flame,
      is24x7: true,
      tagEn: '24/7 Rapid Response',
      tagHi: '24/7 आपातकालीन सेवा',
    },
    {
      id: 'ambulance',
      nameEn: 'Ambulance Services',
      nameHi: 'एम्बुलेंस सेवा (Ambulance)',
      descEn: 'On-call medical van equipped with oxygen and stretcher for urgent patient pickup and hospital transfers.',
      descHi: 'ऑक्सीजन व स्ट्रेचर युक्त ऑन-कॉल वाहन, उतरौला व आसपास के क्षेत्रों से मरीजों के सुरक्षित परिवहन हेतु।',
      icon: Ambulance,
      is24x7: true,
      tagEn: '24/7 On-Call Dispatch',
      tagHi: '24/7 ऑन-कॉल रवानगी',
    },
    {
      id: 'lab',
      nameEn: 'Diagnostic Laboratory',
      nameHi: 'डायग्नोस्टिक लैब (Pathology)',
      descEn: 'Round-the-clock clinical pathology services for blood tests, sugar profiles, and routine diagnostics.',
      descHi: 'रक्त जांच, यूरिन व बायोकेमिस्ट्री परीक्षणों के लिए 24 घंटे उपलब्ध पैथोलॉजी प्रयोगशाला।',
      icon: FlaskConical,
      is24x7: true,
      tagEn: '24/7 Testing Available',
      tagHi: '24 घंटे जांच उपलब्ध',
    },
    {
      id: 'female-ward',
      nameEn: 'Female Ward',
      nameHi: 'महिला वार्ड (Female Ward)',
      descEn: 'Clean, secure, and private inpatient recovery ward dedicated to female patients with female nursing care.',
      descHi: 'महिला मरीजों के लिए सुरक्षित, स्वच्छ और गरिमापूर्ण वातावरण जहां समर्पित महिला नर्सिंग उपस्थित रहती है।',
      icon: UserRoundCheck,
      is24x7: false,
      tagEn: 'Dedicated Care',
      tagHi: 'समर्पित महिला कक्ष',
    },
    {
      id: 'ipd',
      nameEn: 'Indoor Patient Care (IPD)',
      nameHi: 'इनडोर पेशेंट वार्ड (IPD)',
      descEn: 'Hygienic and well-ventilated inpatient rooms with round-the-clock vitals monitoring and bedside attention.',
      descHi: 'भर्ती मरीजों के लिए हवादार कमरे, नियमित वाइटल्स परीक्षण और निरंतर नर्सिंग सहायता।',
      icon: BedDouble,
      is24x7: false,
      tagEn: 'Bedside Nursing',
      tagHi: 'निरंतर देखरेख',
    },
    {
      id: 'icu',
      nameEn: 'ICU — Intensive Care Unit',
      nameHi: 'आईसीयू (Intensive Care)',
      descEn: 'High-dependency critical care with multi-parameter vital monitors and close observation.',
      descHi: 'गंभीर मरीजों के लिए मल्टी-पैरामीटर मॉनिटर्स और सतत चिकित्सीय निगरानी युक्त यूनिट।',
      icon: Activity,
      is24x7: true,
      tagEn: 'Critical Care Unit',
      tagHi: 'गहन चिकित्सा यूनिट',
    },
    {
      id: 'ot',
      nameEn: 'Operation Theatre (OT)',
      nameHi: 'ऑपरेशन थियेटर (OT)',
      descEn: 'Sterile surgical environment equipped for minor and major surgical procedures with strict infection control.',
      descHi: 'जीवाणु-रहित शल्य चिकित्सा कक्ष जहां कड़े स्वच्छता मानकों के साथ सर्जरी की जाती है।',
      icon: Syringe,
      is24x7: false,
      tagEn: 'Sterile Surgical Suite',
      tagHi: 'सुसज्जित ऑपरेशन थिएटर',
    },
    {
      id: 'c-arm',
      nameEn: 'C-Arm Imaging Facility',
      nameHi: 'सी-आर्म इमेजिंग (C-Arm)',
      descEn: 'Real-time fluoroscopy X-ray imaging assisting precision orthopedic and surgical procedures.',
      descHi: 'हड्डी रोग व शल्य क्रियाओं में सटीक मार्गदर्शन प्रदान करने वाली रियल-टाइम सी-आर्म इमेजिंग।',
      icon: ScanLine,
      is24x7: false,
      tagEn: 'Fluoroscopy Imaging',
      tagHi: 'फ्लोरोस्कोपी तकनीक',
    },
    {
      id: 'dialysis',
      nameEn: 'Dialysis Unit',
      nameHi: 'डायलिसिस यूनिट (Dialysis)',
      descEn: 'Hygienic hemodialysis care for renal patients under the supervision of experienced healthcare staff.',
      descHi: 'गुर्दे के मरीजों के लिए स्वच्छ व सुरक्षित हेमोडायलिसिस सहायता।',
      icon: HeartPulse,
      is24x7: false,
      tagEn: 'Renal Care',
      tagHi: 'किडनी केयर',
    },
    {
      id: 'nebulizer',
      nameEn: 'Nebulizer Facility',
      nameHi: 'नेबुलाइज़र सुविधा (Nebulizer)',
      descEn: 'Fast inhalation relief for asthma, bronchitis, wheezing, and acute respiratory discomfort.',
      descHi: 'अस्थमा, सांस फूलने और छाती में जकड़न से पीड़ित मरीजों के लिए त्वरित नेबुलाइजेशन।',
      icon: Wind,
      is24x7: false,
      tagEn: 'Respiratory Relief',
      tagHi: 'सांस राहत सेवा',
    },
    {
      id: 'oxygen',
      nameEn: 'Oxygen Facilities',
      nameHi: 'ऑक्सीजन सुविधा (Oxygen)',
      descEn: 'Medical oxygen supply ensuring steady respiratory support across inpatient beds and emergency triage.',
      descHi: 'आपातकालीन वार्डों व बिस्तरों के लिए मेडिकल ऑक्सीजन की निरंतर व विश्वसनीय उपलब्धता।',
      icon: Cpu,
      is24x7: true,
      tagEn: 'Continuous Medical O2',
      tagHi: 'निरंतर ऑक्सीजन सप्लाई',
    },
  ];

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.facilities.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.facilities.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.facilities.subtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {facilitiesList.map((item) => {
            const Icon = item.icon;
            const isEmergency = item.is24x7;

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  isEmergency
                    ? 'border-rose-100 ring-1 ring-rose-50 shadow-soft'
                    : 'border-slate-100 shadow-soft'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isEmergency
                        ? 'bg-rose-50 text-rose-600'
                        : 'bg-brand-50 text-brand-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                      isEmergency
                        ? 'bg-rose-100 text-rose-700 font-extrabold'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {language === 'hi' ? item.tagHi : item.tagEn}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                    {language === 'hi' ? item.nameHi : item.nameEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isEmergency ? 'text-rose-500' : 'text-brand-600'}`} />
                    {language === 'hi' ? 'सत्यापित सुविधा' : 'Verified Facility'}
                  </span>

                  {isEmergency && (
                    <a
                      href={`tel:${HOSPITAL_INFO.phones.primary}`}
                      className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1"
                      title="Direct Call"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{language === 'hi' ? 'कॉल करें' : 'Call'}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Facilities;

