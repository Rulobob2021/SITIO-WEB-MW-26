import React from 'react';
import { SERVICES_LIST } from '../data/martechData';
import { getServiceTheme } from '../data/serviceColorSchemes';
import { getServiceImage } from '../data/serviceImages';
import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onNavigateToAllServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onNavigateToAllServices }) => {

  return (
    <section className="py-20 bg-slate-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#74bf28] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#74bf28]"></span>
            SERVICIOS
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Ingeniería de Medición, Analítica & Aceleración MarTech
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Alineamos la pila tecnológica de marketing digital para que cada peso invertido en adquisición genere retorno visible en el estado de resultados.
          </p>
        </div>

        {/* 3x2 Grid as specified in Wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {SERVICES_LIST.map((service) => {
            const theme = getServiceTheme(service.id);

            return (
              <article
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`relative ${theme.cardBg} p-8 rounded-[28px] border ${theme.borderColor} shadow-[0_12px_30px_-10px_rgba(116,191,40,0.16)] ${theme.hoverShadow} transition-all duration-300 ease-out group flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 hover:scale-[1.01] overflow-hidden select-none`}
              >
                {/* Top distinctive color accent gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${theme.topLine} rounded-t-[28px] transition-all duration-300 group-hover:h-2.5`}
                />

                {/* Ambient soft glow on hover */}
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-transparent ${theme.glowColor} rounded-full blur-2xl transition-all duration-500`}
                />

                <div className="relative z-10">
                  {/* Imagen Referente del Servicio */}
                  <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-xs border border-slate-200/80 group-hover:border-slate-300 transition-colors">
                    <img
                      src={getServiceImage(service.id).src}
                      alt={getServiceImage(service.id).alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Title with distinct hover color */}
                  <h3
                    className={`text-2xl font-black ${theme.titleColor} ${theme.titleHover} transition-colors duration-200 leading-snug tracking-tight mb-2`}
                  >
                    {service.title}
                  </h3>

                  {/* Subtitle / Tech Stack in specific accent color */}
                  <p
                    className={`text-xs ${theme.subtitleColor} font-black uppercase tracking-wider mb-4 leading-relaxed`}
                  >
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-[13px] sm:text-sm ${theme.descriptionColor} leading-relaxed line-clamp-3 transition-colors duration-200`}>
                    {service.description}
                  </p>
                </div>

                {/* Bottom Interactive Action Footer matching attached image */}
                <div
                  className="relative z-10 mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-bold transition-colors duration-200"
                >
                  <span className={`flex items-center gap-1.5 tracking-tight ${theme.actionText}`}>
                    Ver servicio
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 shadow-2xs ${theme.actionIconCircle}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA to Full Services Catalog Matching Wireframe */}
        {onNavigateToAllServices && (
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateToAllServices}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a0f1d] text-white hover:bg-[#16223e] border border-slate-700 hover:border-[#74bf28] text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Ver portafolio completo de servicios (12 soluciones)</span>
              <ArrowRight className="w-4 h-4 text-[#74bf28]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
