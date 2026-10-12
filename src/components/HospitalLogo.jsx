import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const HospitalLogo = ({ 
  className = "h-11", 
  showSubtitle = true, 
  variant = "default", // default | light | dark
  size = "md" // sm | md | lg
}) => {
  const { language } = useLanguage();
  
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SH Swirl Crest Icon */}
      <div className="relative flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          className={
            size === "sm" ? "w-9 h-9" : 
            size === "lg" ? "w-14 h-14" : 
            "w-11 h-11"
          } 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="logoS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="logoH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
          </defs>

          {/* Background disc */}
          <circle 
            cx="50" 
            cy="50" 
            r="47" 
            fill={isLight ? "rgba(255,255,255,0.15)" : "#ffffff"} 
            stroke={isLight ? "rgba(255,255,255,0.4)" : "#e0f2fe"} 
            strokeWidth="2" 
          />

          {/* Dynamic Swirl Arc */}
          <path
            d="M 50 14
               A 36 36 0 1 0 84 58
               A 30 30 0 0 1 50 20
               Z"
            fill="url(#logoSwirl)"
          />

          {/* Top Swirl Accent */}
          <path
            d="M 52 14
               C 68 15 82 28 85 46
               C 81 33 70 21 54 18
               Z"
            fill="#0ea5e9"
          />

          {/* Stylized 'S' */}
          <text
            x="34"
            y="62"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontSize="34"
            fontWeight="900"
            fill={isLight ? "#38bdf8" : "url(#logoS)"}
            textAnchor="middle"
            letterSpacing="-1"
          >
            S
          </text>

          {/* Stylized 'H' */}
          <text
            x="63"
            y="62"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontSize="34"
            fontWeight="900"
            fill={isLight ? "#ffffff" : "url(#logoH)"}
            textAnchor="middle"
            letterSpacing="-1"
          >
            H
          </text>

          {/* Subtle medical dot */}
          <circle cx="50" cy="74" r="2.5" fill="#0ea5e9" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left leading-tight">
        <span className={`font-extrabold tracking-wide uppercase font-heading ${
          isLight ? "text-white" : "text-slate-900"
        } ${
          size === "sm" ? "text-base tracking-wider" : 
          size === "lg" ? "text-2xl" : 
          "text-lg sm:text-xl"
        }`}>
          {language === 'hi' ? 'साजिदा हॉस्पिटल' : 'SAJIDA HOSPITAL'}
        </span>
        
        {showSubtitle && (
          <span className={`text-[10px] sm:text-xs font-medium tracking-tight ${
            isLight ? "text-cyan-200" : "text-brand-700"
          }`}>
            {language === 'hi' 
              ? 'डॉ० एहसान हेल्थ केयर सेन्टर • उतरौला' 
              : 'Dr. Ehsan Health Care Centre • Utraula'}
          </span>
        )}
      </div>
    </div>
  );
};

export default HospitalLogo;
