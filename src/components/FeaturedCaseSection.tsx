import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/martechData';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from 'lucide-react';

interface FeaturedCaseSectionProps {
  onOpenConsultation: () => void;
  onNavigateToAllCases?: () => void;
}

export const FeaturedCaseSection: React.FC<FeaturedCaseSectionProps> = ({ onOpenConsultation, onNavigateToAllCases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = CASE_STUDIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="casos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative">
          
          {/* Left Graphic Column: High-tech Case Study Simulation Container */}
          <div className="lg:col-span-6">
            <div className="bg-[#060a12] rounded-xl p-6 border border-slate-800 text-white relative overflow-hidden shadow-xl transition-all">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#74bf28]/20 text-[#8ce033] text-[10px] font-bold uppercase tracking-wider border border-[#74bf28]/40">
                    {currentCase.categoryTag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{currentCase.techBadge}</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold font-mono">VALIDADO 100%</span>
              </div>

              {/* Case Visual Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-extrabold text-white">{currentCase.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                  {currentCase.summary}
                </p>

                <div className="p-4 bg-[#0a0f1d] rounded-lg border border-slate-800/90">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    Impacto Comprobado de Negocio
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#74bf28]">
                    {currentCase.highlightMetric}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {currentCase.highlightLabel}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between pt-1">
                  <span className="truncate max-w-[280px] sm:max-w-none">{currentCase.pipelineStatus}</span>
                  <span className="text-[#8ce033] font-semibold">GMP Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#74bf28] uppercase tracking-wider block mb-1">
                  CASO DESTACADO ({currentIndex + 1} de {CASE_STUDIES.length})
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Caso anterior"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Caso siguiente"
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                CASOS DE ÉXITO DE ALTA ESCALA
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Implementamos modelos de atribución algorítmica y canalización BigQuery que eliminan las discrepancias entre las plataformas de medios y el CRM comercial de nuestros clientes.
              </p>

              {/* 2 Highlighted Stats as in wireframe */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100 mb-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {currentCase.roasMetric}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    ROAS Optimizado
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#74bf28] tracking-tight">
                    {currentCase.cpaMetric}
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    CPA en Conversión
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#0a0f1d] hover:bg-[#1e293b] text-white rounded-lg inline-flex items-center gap-2 cursor-pointer shadow"
                >
                  <span>Replicar éxito en mi empresa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#74bf28]" />
                </button>
                {onNavigateToAllCases && (
                  <button
                    onClick={onNavigateToAllCases}
                    className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-[#74bf28] text-slate-800 hover:text-[#060a12] rounded-lg inline-flex items-center gap-2 cursor-pointer transition border border-slate-200"
                  >
                    <span>Ver todos los casos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Pagination Indicator (4 Dots matching wireframe) */}
            <div className="flex items-center space-x-2 pt-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ver caso ${i + 1}`}
                  className={`transition-all ${
                    currentIndex === i
                      ? 'w-6 h-2 rounded-full bg-[#74bf28]'
                      : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
