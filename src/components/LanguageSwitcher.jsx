import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ variant = "default" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center rounded-full p-1 border transition-all duration-200 ${
        variant === "transparent"
          ? "bg-white/10 border-white/20 text-white"
          : "bg-slate-100/90 border-slate-200 text-slate-700 shadow-sm"
      }`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center gap-1 pl-2 pr-1 text-xs font-semibold text-slate-500">
        <Globe className="w-3.5 h-3.5 text-brand-600 animate-spin-slow" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-brand-600 text-white shadow-sm font-semibold'
            : 'text-slate-600 hover:text-brand-700'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        English
      </button>

      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 text-xs font-hindi rounded-full transition-all duration-200 ${
          language === 'hi'
            ? 'bg-brand-600 text-white shadow-sm font-bold'
            : 'text-slate-600 hover:text-brand-700 font-medium'
        }`}
        aria-pressed={language === 'hi'}
        title="हिन्दी में बदलें"
      >
        हिन्दी
      </button>
    </div>
  );
};

export default LanguageSwitcher;

