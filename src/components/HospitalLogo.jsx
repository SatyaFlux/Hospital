import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import emblemImg from '../assets/images/sajida-hospital-emblem-transparent.png';

export const HospitalLogo = ({ 
  className = "h-11", 
  showSubtitle = true, 
  variant = "default", // default | light | dark
  size = "md" // sm | md | lg
}) => {
  const { language } = useLanguage();
  
  const isLight = variant === "light";

  const sizeDimensions = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-12 h-12 sm:w-14 sm:h-14"
  }[size] || "w-10 h-10 sm:w-11 sm:h-11";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official SH Crest Emblem */}
      <div className={`relative flex-shrink-0 flex items-center justify-center ${
        isLight ? "p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm" : ""
      }`}>
        <img 
          src={emblemImg} 
          alt="Sajida Hospital Official Logo Emblem"
          className={`${sizeDimensions} object-contain`}
          loading="eager"
        />
      </div>

      {/* Official Typography */}
      <div className="flex flex-col text-left leading-tight">
        <span className={`font-extrabold tracking-wide uppercase font-heading ${
          isLight ? "text-white" : "text-slate-900"
        } ${
          size === "sm" ? "text-sm sm:text-base tracking-wider" : 
          size === "lg" ? "text-xl sm:text-2xl" : 
          "text-base sm:text-lg lg:text-xl"
        }`}>
          {language === 'hi' ? 'साजिदा हॉस्पिटल' : 'SAJIDA HOSPITAL'}
        </span>
        
        {showSubtitle && (
          <span className={`text-[10px] sm:text-xs font-semibold tracking-tight ${
            isLight ? "text-cyan-200" : "text-brand-700"
          }`}>
            {language === 'hi' 
              ? '(एहसान हेल्थ केयर सेंटर)' 
              : 'Dr. Ehsan Health Care Centre'}
          </span>
        )}
      </div>
    </div>
  );
};

export default HospitalLogo;
