import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import EmergencyBanner from './components/EmergencyBanner';
import AppointmentBooking from './components/AppointmentBooking';
import TestimonialsFaq from './components/TestimonialsFaq';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingEmergency from './components/FloatingEmergency';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {/* Accessible skip link */}
        <a 
          href="#home" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-brand-600 focus:text-white focus:rounded-xl"
        >
          Skip to main content
        </a>

        {/* Top Info Bar */}
        <TopBar />

        {/* Main Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Departments & Wards */}
          <Departments />

          {/* Doctors Section */}
          <Doctors />

          {/* Hospital Facilities */}
          <Facilities />

          {/* 24/7 Emergency & Ambulance Highlight */}
          <EmergencyBanner />

          {/* Online Appointment Booking */}
          <AppointmentBooking />

          {/* FAQ & Patient Guidance */}
          <TestimonialsFaq />

          {/* Contact & Location Map */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Emergency & WhatsApp Hotline Pill */}
        <FloatingEmergency />
      </div>
    </LanguageProvider>
  );
}

export default App;
