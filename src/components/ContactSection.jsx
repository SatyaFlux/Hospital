import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HOSPITAL_INFO } from '../utils/constants';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Compass,
  AlertCircle
} from 'lucide-react';

export const ContactSection = () => {
  const { t, language } = useLanguage();

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
      setFormError(language === 'hi' ? 'कृपया सभी फ़ील्ड भरें।' : 'Please fill in all fields.');
      return;
    }

    // Direct WhatsApp send
    const text = 
`*SAJIDA HOSPITAL - PATIENT INQUIRY*
From: ${contactForm.name}
Phone: ${contactForm.phone}
Message: ${contactForm.message}
Address: Asram Road Chauraha, Utraula, Balrampur (UP)`;

    const url = `https://wa.me/${HOSPITAL_INFO.whatsapp.clean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setFormSent(true);
    setContactForm({ name: '', phone: '', message: '' });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Asram Road Chauraha Utraula Balrampur Uttar Pradesh 271604'
  )}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
            <Compass className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Address */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.addressCardTitle}
                  </h4>
                  <p className="text-base font-bold text-slate-900">
                    {HOSPITAL_INFO.nameEn} ({language === 'hi' ? HOSPITAL_INFO.nameHi : 'Dr. Ehsan Centre'})
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'hi' ? HOSPITAL_INFO.address.line1Hi : HOSPITAL_INFO.address.line1En},<br />
                    {language === 'hi' ? HOSPITAL_INFO.address.cityHi : HOSPITAL_INFO.address.cityEn},{' '}
                    {language === 'hi' ? HOSPITAL_INFO.address.districtHi : HOSPITAL_INFO.address.districtEn},<br />
                    {language === 'hi' ? HOSPITAL_INFO.address.stateHi : HOSPITAL_INFO.address.stateEn} — {HOSPITAL_INFO.address.pincode}
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      <span>{t.contact.openInMapsBtn}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Phone Numbers */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.phoneCardTitle}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'hi' ? 'क्लिक करके कॉल करें' : 'Click to call directly'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1 text-sm font-semibold">
                <a
                  href={`tel:${HOSPITAL_INFO.phones.primary}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 text-slate-800 hover:text-brand-700 transition-colors"
                >
                  <span>{t.contact.phonePrimary}</span>
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.phones.additional1}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 text-slate-800 hover:text-brand-700 transition-colors"
                >
                  <span>{t.contact.phoneAlt1}</span>
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.phones.additional2}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 text-slate-800 hover:text-brand-700 transition-colors"
                >
                  <span>{t.contact.phoneAlt2}</span>
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                </a>
              </div>
            </div>

            {/* Card 3: WhatsApp & Messenger */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.whatsappCardTitle}
                  </h4>
                  <p className="text-base font-bold text-emerald-700">
                    {HOSPITAL_INFO.whatsapp.display}
                  </p>
                  <p className="text-xs text-slate-500">
                    Facebook: <span className="font-semibold text-slate-700">{t.contact.facebookHandle}</span>
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${HOSPITAL_INFO.whatsapp.clean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'व्हाट्सएप चैट खोलें' : 'Chat on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Operating Hours */}
            <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-100 flex items-start gap-3 text-xs">
              <Clock className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-1 text-slate-700">
                <p className="font-bold text-brand-900">{t.contact.timingsCardTitle}</p>
                <p className="text-slate-600">• {t.contact.timingEmergency}</p>
                <p className="text-slate-600">• {t.contact.timingOpd}</p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Map & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Location Map with Verified Utraula Coordinates */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-soft">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span className="text-xs font-bold text-slate-800">
                    {language === 'hi' 
                      ? 'अस्पताल स्थिति (आसाम रोड चौराहा, उतरौला)' 
                      : 'Hospital Map: Asram Road Chauraha, Utraula'}
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1"
                >
                  <span>{t.contact.getDirections}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Verified OpenStreetMap / Map embed centered on Utraula, Balrampur (27.3167, 82.4167) */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                <iframe
                  title="Sajida Hospital Location Map Utraula"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=82.3950%2C27.3050%2C82.4350%2C27.3300&amp;layer=mapnik&amp;marker=27.3167%2C82.4167"
                ></iframe>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                {language === 'hi' 
                  ? 'कोई प्रश्न या जानकारी चाहिए? हमें सीधे संदेश भेजें।' 
                  : 'Have questions or require assistance? Send a message directly to our hospital team.'}
              </p>

              {formSent ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold">{t.contact.formSuccess}</p>
                    <button
                      type="button"
                      onClick={() => setFormSent(false)}
                      className="text-xs text-emerald-700 underline mt-2 font-bold"
                    >
                      {language === 'hi' ? 'दूसरा संदेश भेजें' : 'Send another message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contact.formName} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Mohd. Farooq"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t.contact.formPhone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.formMsg} *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      placeholder={language === 'hi' ? 'अपना प्रश्न या संदेश लिखें...' : 'Type your question or query...'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;

