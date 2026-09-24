import React, { useState } from 'react';
import casesHeroBg from '../assets/images/cases-hero-bg.jpg';
import { EXTENDED_CASE_STUDIES } from '../data/martechData';
import { CaseStudy } from '../types';
import { 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Database,
  BarChart3,
  X,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenConsultation: (topic?: string) => void;
  onNavigateHome: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los casos' },
    { id: 'educacion', label: 'Educación Superior' },
    { id: 'banca', label: 'Banca & Fintech' },
    { id: 'retail', label: 'Retail & E-commerce' },
    { id: 'consumo', label: 'Consumo Masivo' },
    { id: 'energia-salud', label: 'Energía & Salud' }
  ];

  const filteredCases = EXTENDED_CASE_STUDIES.filter((item) => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'educacion') return item.industry.toLowerCase().includes('educación');
    if (selectedCategory === 'banca') return item.industry.toLowerCase().includes('financieros') || item.industry.toLowerCase().includes('banca');
    if (selectedCategory === 'retail') return item.industry.toLowerCase().includes('retail') || item.industry.toLowerCase().includes('commerce');
    if (selectedCategory === 'consumo') return item.industry.toLowerCase().includes('consumo') || item.industry.toLowerCase().includes('alimentos');
    if (selectedCategory === 'energia-salud') return item.industry.toLowerCase().includes('energía') || item.industry.toLowerCase().includes('salud');
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      {/* Hero Section */}
      <section className="relative bg-[#0a0f1d] text-white overflow-hidden py-14 lg:py-18 border-b border-slate-800">
        {/* Background Image con difuminado y gradientes cinematográficos idénticos a index */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1d]">
          <img
            src={casesHeroBg}
            alt="Ecosistema de Casos de Éxito MarTech e IA"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Difuminado y atenuación balanceada idéntica a HeroSection index */}
          <div className="absolute inset-0 bg-[#0a0f1d]/45 backdrop-blur-[2px]" />
          {/* Gradientes direccionales para perfecta legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a12]/80 via-[#0a0f1d]/50 to-[#060a12]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-[#0a0f1d]/40" />
        </div>

        {/* Subtle Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#8ce033] text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>CASOS DE ÉXITO EMPRESARIALES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Resultados reales respaldados por <span className="text-[#74bf28]">datos y tecnología</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Descubre cómo las marcas líderes en Latinoamérica transforman su arquitectura digital, optimizan su costo de adquisición y escalan su rentabilidad neta junto a Mentalidad Web.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenConsultation('Casos de Éxito')}
                  className="px-6 py-3 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#74bf28]/20 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Analizar un caso similar para mi empresa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hero Right: High-Tech Telemetry Stats Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#111c35]/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#74bf28] animate-pulse" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      Métricas Consolidadas
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#74bf28] bg-[#74bf28]/15 px-2 py-0.5 rounded border border-[#74bf28]/30">
                    LATAM ENTERPRISE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#74bf28]">+48%</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-medium leading-tight">
                      Incremento medio en ROAS publicitario
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">-27%</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-medium leading-tight">
                      Reducción en Costo por Adquisición (CPA)
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">+$150M</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-medium leading-tight">
                      USD anuales en medios gestionados
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-medium leading-tight">
                      Conformidad con Ley 21.719 y Consent Mode
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Auditorías con Google Cloud y GMP</span>
                  <span className="text-[#8ce033] font-semibold">Casos Verificados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation Bar (Moved below the hero) */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#74bf28] transition font-medium cursor-pointer"
            >
              Inicio
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">Casos de Éxito</span>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-[#74bf28] hover:text-[#5fa01f] font-semibold flex items-center gap-1 cursor-pointer transition"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#74bf28] text-[#060a12] shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">
            Mostrando <span className="text-slate-900 font-bold">{filteredCases.length}</span> casos de éxito documentados
          </p>
          <span className="text-xs text-[#74bf28] font-semibold">
            Google Marketing Platform Premier
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#74bf28] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Badges header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded-md text-[11px] font-bold uppercase tracking-wider border border-[#74bf28]/20">
                    {item.categoryTag}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {item.techBadge}
                  </span>
                </div>

                {/* Client title */}
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#58991b] transition line-clamp-1 mb-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {item.summary}
                </p>

                {/* Big Metric Highlight Container */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-5 group-hover:bg-[#74bf28]/5 transition">
                  <div className="text-3xl font-extrabold text-[#74bf28]">
                    {item.highlightMetric}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    {item.highlightLabel}
                  </div>
                </div>

                {/* Quick stats grid */}
                <div className="grid grid-cols-2 gap-2 mb-5 text-[11px] font-mono">
                  <div className="p-2 bg-slate-100/70 rounded-lg text-slate-700">
                    <span className="text-slate-400 block text-[10px]">ROAS:</span>
                    <span className="font-bold text-emerald-600">{item.roasMetric}</span>
                  </div>
                  <div className="p-2 bg-slate-100/70 rounded-lg text-slate-700">
                    <span className="text-slate-400 block text-[10px]">CPA:</span>
                    <span className="font-bold text-blue-600">{item.cpaMetric}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalCase(item)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#74bf28] text-white hover:text-[#060a12] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Ver caso completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalCase(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded text-[11px] font-bold uppercase tracking-wider">
                    {activeModalCase.categoryTag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {activeModalCase.techBadge}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {activeModalCase.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sector: {activeModalCase.industry}
                </p>
              </div>

              {/* Highlight Banner */}
              <div className="p-5 bg-[#0a0f1d] text-white rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Impacto Central Comprobado</div>
                  <div className="text-xs text-slate-200 mt-0.5">{activeModalCase.highlightLabel}</div>
                </div>
                <div className="text-3xl font-extrabold text-[#74bf28]">
                  {activeModalCase.highlightMetric}
                </div>
              </div>

              {/* Problem & Context */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  El Desafío Estratégico
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {activeModalCase.description}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Soluciones y Logros Técnicos
                </h4>
                <div className="space-y-2.5">
                  {activeModalCase.keyAchievements.map((achieve, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Status */}
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold">{activeModalCase.pipelineStatus}</span>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalCase(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    const caseTopic = `Caso ${activeModalCase.client}`;
                    setActiveModalCase(null);
                    onOpenConsultation(caseTopic);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Solicitar asesoría para mi empresa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Bottom Banner Matching Wireframe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#74bf28] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#060a12] leading-snug">
              ¿Hablamos 30 minutos de tu proyecto?
            </h3>
            <p className="text-xs sm:text-sm text-[#060a12]/80 mt-1 font-medium">
              Sin compromiso, definamos la ruta más adecuada para acelerar tus resultados.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Casos de Éxito')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#060a12] text-white hover:bg-slate-900 text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            Agendar llamada
          </button>
        </div>
      </div>
    </div>
  );
};
