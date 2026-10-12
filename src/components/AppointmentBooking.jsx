import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS_DATA, DEPARTMENTS_DATA, HOSPITAL_INFO } from '../utils/constants';
import { submitAppointmentRequest, validateIndianMobile } from '../services/appointmentService';
import AppointmentSuccessModal from './AppointmentSuccessModal';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Building2, 
  Stethoscope, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  MessageCircle,
  ShieldAlert
} from 'lucide-react';

export const AppointmentBooking = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    patientName: '',
    mobile: '',
    department: '',
    doctor: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // Min date today: YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.patientName || formData.patientName.trim().length < 2) {
      newErrors.patientName = t.appointment.errors.nameRequired;
    }

    const phoneCheck = validateIndianMobile(formData.mobile);
    if (!phoneCheck.valid) {
      newErrors.mobile = t.appointment.errors.phoneInvalid;
    }

    if (!formData.department) {
      newErrors.department = t.appointment.errors.deptRequired;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = t.appointment.errors.dateRequired;
    } else if (formData.preferredDate < todayStr) {
      newErrors.preferredDate = t.appointment.errors.pastDate;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitAppointmentRequest(formData);
      setSubmissionResult(result);
      // Reset form
      setFormData({
        patientName: '',
        mobile: '',
        department: '',
        doctor: '',
        preferredDate: '',
        preferredTime: 'Morning (09:00 AM - 01:00 PM)',
        message: '',
      });
      setErrors({});
    } catch (err) {
      setErrors({ form: err.message || 'Error submitting request. Please try again or call reception.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const directWhatsAppUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp.clean}?text=${encodeURIComponent(
    'Hello Sajida Hospital, I would like to book a doctor consultation in Utraula. Please guide me.'
  )}`;

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-medical-mesh relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.appointment.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.appointment.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.appointment.subtitle}
          </p>
        </div>

        {/* Booking Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-card p-6 sm:p-10 text-left">
          
          {/* Emergency Warning Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              {t.appointment.disclaimer}
            </p>
          </div>

          {/* Form Error Banner */}
          {errors.form && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Field 1: Patient Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.nameLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder={t.appointment.namePlaceholder}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                      errors.patientName ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p className="mt-1 text-xs text-rose-600 font-medium">{errors.patientName}</p>
                )}
              </div>

              {/* Field 2: Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.phoneLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t.appointment.phonePlaceholder}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                      errors.mobile ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.mobile && (
                  <p className="mt-1 text-xs text-rose-600 font-medium">{errors.mobile}</p>
                )}
              </div>

              {/* Field 3: Department */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.deptLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                      errors.department ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <option value="">{t.appointment.deptDefault}</option>
                    <option value="OPD General Medicine">OPD — General Medicine (सामान्य चिकित्सा)</option>
                    <option value="Dental Surgery">Dental Surgery — डॉ० अताउल्लाह खान (प्रत्येक दिन)</option>
                    <option value="Eye / Ophthalmology">Eye Care — डॉ० आतिफ रहमान (प्रत्येक मंगलवार 1-5 PM)</option>
                    <option value="Neurosurgery Consultation">Neurosurgery — डॉ० सुरजीत सिंह (2nd & 4th Sunday)</option>
                    <option value="Female Ward Care">Female Ward (महिला वार्ड)</option>
                    <option value="Inpatient IPD">Indoor Patient Ward (इनडोर पेशेंट वार्ड)</option>
                    <option value="Infection Dressing">Infection Dressing Ward (ड्रेसिंग वार्ड)</option>
                    <option value="Dialysis Care">Dialysis Unit (डायलिसिस यूनिट)</option>
                    <option value="C-Arm Imaging">C-Arm Imaging (सी-आर्म इमेजिंग)</option>
                    <option value="Diagnostic Laboratory">Diagnostic Laboratory (24/7 पैथोलॉजी लैब)</option>
                    <option value="Emergency Care">Emergency Ward (आपातकालीन वार्ड)</option>
                  </select>
                </div>
                {errors.department && (
                  <p className="mt-1 text-xs text-rose-600 font-medium">{errors.department}</p>
                )}
              </div>

              {/* Field 4: Doctor (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.doctorLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option value="">{t.appointment.doctorDefault}</option>
                    {DOCTORS_DATA.map((doc) => (
                      <option key={doc.id} value={doc.nameEn}>
                        {language === 'hi' ? doc.nameHi : doc.nameEn} ({language === 'hi' ? doc.roleHi : doc.roleEn})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 5: Preferred Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.dateLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="preferredDate"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                      errors.preferredDate ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-rose-600 font-medium">{errors.preferredDate}</p>
                )}
              </div>

              {/* Field 6: Preferred Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {t.appointment.timeLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option value="Morning (09:00 AM - 01:00 PM)">{t.appointment.timeMorning}</option>
                    <option value="Afternoon (01:00 PM - 05:00 PM)">{t.appointment.timeAfternoon}</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">{t.appointment.timeEvening}</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Field 7: Clinical Note / Symptoms */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t.appointment.messageLabel}
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.appointment.messagePlaceholder}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                ></textarea>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 text-white font-bold text-base shadow-card hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t.appointment.submittingBtn}</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>{t.appointment.submitBtn}</span>
                  </>
                )}
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-bold text-sm hover:bg-emerald-100 transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.appointment.directWhatsappBtn}</span>
              </a>
            </div>

          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submissionResult && (
        <AppointmentSuccessModal
          result={submissionResult}
          onClose={() => setSubmissionResult(null)}
        />
      )}
    </section>
  );
};

export default AppointmentBooking;

