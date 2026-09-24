import React, { useState } from 'react';
import servicesHeroBg from '../assets/images/services-hero-bg.jpg';
import { SERVICES_CATEGORIES } from '../data/martechData';
import { getServiceTheme } from '../data/serviceColorSchemes';
import { getServiceImage } from '../data/serviceImages';
import { ServiceItem } from '../types';
import {
  Code,
  Database,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Layers,
  Share2,
  Target,
  ShoppingBag,
  MessageSquare,
  FileSpreadsheet,
  LayoutTemplate,
  Sparkles,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Filter,
  BarChart3
} from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceTopic?: string) => void;
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // Helper to render icon for each service
  const renderServiceIcon = (iconName: string, id: string) => {
    switch (iconName) {
      case 'SearchCode':
        return <Code className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  const categoriesToDisplay = selectedCategory === 'todos'
    ? SERVICES_CATEGORIES
    : SERVICES_CATEGORIES.filter(cat => cat.id === selectedCategory);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'todos') {
      const sectionEl = document.getElementById(categoryId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Hero Section Matching Wireframe */}
      <section className="relative overflow-hidden bg-[#0a0f1d] text-white border-b border-[#1e293b]/50 pt-12 pb-16 lg:py-20">
        {/* Background Image con difuminado y gradientes cinematográficos idénticos a index */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1d]">
          <img
            src={servicesHeroBg}
            alt="Ecosistema MarTech Mentalidad Web"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Difuminado y atenuación balanceada idéntica a HeroSection index */}
          <div className="absolute inset-0 bg-[#0a0f1d]/45 backdrop-blur-[2px]" />
          {/* Gradientes direccionales para perfecta legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a12]/80 via-[#0a0f1d]/50 to-[#060a12]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-[#0a0f1d]/40" />
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#8ce033] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#74bf28] animate-pulse"></span>
                PORTAFOLIO DE SOLUCIONES MARTECH 2026
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Todo lo que podemos hacer por tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bf28] via-[#8ce033] to-emerald-400">marketing digital</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Una propuesta integral que conecta tecnología, analítica avanzada, inteligencia artificial y performance de alto impacto para maximizar la rentabilidad de cada peso invertido.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('Diagnóstico de Servicios')}
                  className="px-6 py-3 rounded-lg bg-[#74bf28] text-[#060a12] font-bold text-sm hover:bg-[#8ce033] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Solicitar Asesoría Técnica
                </button>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <div className="flex -space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#74bf28]"></span>
                  </div>
                  <span>Google Premier Partner • Meta Business Partner • HubSpot</span>
                </div>
              </div>
            </div>

            {/* Right Illustrative Ecosystem Card (Matching wireframe graphic placeholder) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0a0f1d]/75 backdrop-blur-md p-6 sm:p-8 text-white shadow-2xl border border-slate-800/80">
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#74bf28]"></div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
                      MW DATA & MEDIA ENGINE
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40">
                    ACTIVO
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-mono">GMP Suite</div>
                      <div className="text-sm font-bold text-white mt-0.5">GA4 & DV360</div>
                      <div className="text-[10px] text-[#74bf28] mt-1">✓ Server-Side Tagging</div>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-mono">Cloud Lake</div>
                      <div className="text-sm font-bold text-white mt-0.5">BigQuery ML</div>
                      <div className="text-[10px] text-[#74bf28] mt-1">✓ Real-Time Streaming</div>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-mono">Privacidad</div>
                      <div className="text-sm font-bold text-white mt-0.5">Ley 21.719</div>
                      <div className="text-[10px] text-[#74bf28] mt-1">✓ Consent Mode v2</div>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800">
                      <div className="text-[11px] text-slate-400 font-mono">Automatización</div>
                      <div className="text-sm font-bold text-white mt-0.5">HubSpot CRM</div>
                      <div className="text-[10px] text-[#74bf28] mt-1">✓ Lead Scoring MQL/SQL</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Atribución Algorítmica</span>
                    <span className="text-[#74bf28] font-bold">100% First-Party</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">¿Deseas evaluar tu infraestructura?</span>
                  <button
                    onClick={() => onOpenConsultation('Auditoría Inicial')}
                    className="text-[#74bf28] hover:text-[#8ce033] font-bold flex items-center gap-1 cursor-pointer"
                  >
                    Auditoría gratuita <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumb & Navigation Bar (Moved below the hero) */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-900 font-medium transition cursor-pointer"
            >
              Inicio
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#58991b] font-bold">Servicios</span>
          </div>

          <button
            onClick={onNavigateHome}
            className="text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1.5 transition cursor-pointer"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>

      {/* Category Filter Pills Bar (Matching Wireframe) */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" />
              Filtrar:
            </span>

            {/* "Todos" Pill */}
            <button
              onClick={() => handleCategoryClick('todos')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shadow-sm ${
                selectedCategory === 'todos'
                  ? 'bg-[#74bf28] text-[#060a12] ring-2 ring-[#74bf28]/40 shadow-md'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-[#74bf28] hover:text-[#4c8716]'
              }`}
            >
              Todos ({SERVICES_CATEGORIES.reduce((acc, cat) => acc + cat.services.length, 0)})
            </button>

            {/* Individual Category Pills from Wireframe */}
            {SERVICES_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shadow-sm flex items-center gap-1.5 ${
                  selectedCategory === category.id
                    ? 'bg-[#74bf28] text-[#060a12] ring-2 ring-[#74bf28]/40 shadow-md'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#74bf28] hover:text-[#4c8716]'
                }`}
              >
                <span>{category.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-black/20 text-[#060a12]'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {category.services.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categorized Services Sections (Matching Wireframe) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 lg:space-y-20">
        
        {categoriesToDisplay.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-32">
            
            {/* Category Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#74bf28] uppercase tracking-wider mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#74bf28]"></span>
                {category.label}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Grid of Service Cards */}
            {/* Note: Sections with 4 cards use a 4-col grid, sections with 2 cards render matching the wireframe */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${
              category.services.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-4'
            } gap-6`}>
              
              {category.services.map((service, sIdx) => {
                const theme = getServiceTheme(service.id, sIdx);

                return (
                  <article
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className={`relative ${theme.cardBg} rounded-[28px] border ${theme.borderColor} shadow-[0_12px_30px_-10px_rgba(116,191,40,0.16)] ${theme.hoverShadow} transition-all duration-300 ease-out group flex flex-col justify-between p-6 sm:p-7 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.01] overflow-hidden select-none`}
                  >
                    {/* Top animated accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-2 ${theme.topLine} rounded-t-[28px] transition-all duration-300 group-hover:h-2.5`}
                    />

                    {/* Ambient glow on hover */}
                    <div
                      className={`pointer-events-none absolute -top-20 -right-20 w-44 h-44 bg-transparent ${theme.glowColor} rounded-full blur-2xl transition-all duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Imagen Referente del Servicio */}
                      <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-xs border border-slate-200/80 group-hover:border-slate-300 transition-colors">
                        <img
                          src={getServiceImage(service.id).src}
                          alt={getServiceImage(service.id).alt}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-xl font-black ${theme.titleColor} ${theme.titleHover} transition-colors leading-snug tracking-tight mb-2`}
                      >
                        {service.title}
                      </h3>

                      {/* Subtitle / Tech Stack */}
                      <p
                        className={`text-xs ${theme.subtitleColor} font-black uppercase tracking-wider mb-3 leading-tight`}
                      >
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className={`text-xs sm:text-[13px] ${theme.descriptionColor} leading-relaxed mb-4 line-clamp-3 transition-colors`}>
                        {service.description}
                      </p>

                      {/* Deliverables / Tech Badges */}
                      <div className="space-y-1.5 mb-4">
                        {service.deliverables.slice(0, 2).map((del, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-tight">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${theme.subtitleColor} shrink-0 mt-0.5`} />
                            <span className="line-clamp-1">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <div className="pt-4 border-t border-slate-100 mt-2 relative z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs cursor-pointer ${theme.badge}`}
                      >
                        <span>Ver servicio</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                );
              })}

              {/* Wireframe balance: when a category has only 2 cards, show an informational discovery card on wide screens */}
              {category.services.length === 2 && (
                <div className="hidden lg:flex lg:col-span-2 rounded-xl border border-dashed border-slate-300 bg-slate-100/60 p-6 flex-col justify-between text-slate-600">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4c8716] uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Solución a Medida
                    </div>
                    <h4 className="text-base font-bold text-slate-800 mb-2">
                      ¿Necesitas un alcance personalizado en {category.title.toLowerCase()}?
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Diseñamos planes integrales que combinan talento senior certificado, herramientas MarTech de vanguardia y sincronización en tiempo real con tus objetivos comerciales.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">
                      Conversa directamente con un especialista
                    </span>
                    <button
                      onClick={() => onOpenConsultation(category.title)}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-300 hover:border-[#74bf28] hover:text-[#4c8716] text-xs font-bold text-slate-800 transition cursor-pointer shadow-sm"
                    >
                      Consultar alcance
                    </button>
                  </div>
                </div>
              )}

            </div>

          </section>
        ))}

      </div>

      {/* Call To Action Banner (Matching Wireframe exact green band) */}
      <section className="bg-[#74bf28] text-[#060a12] py-12 lg:py-16 relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Headline & Subtitle */}
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                ¿Hablamos 30 minutos de tu proyecto?
              </h2>
              <p className="text-sm sm:text-base text-slate-900 font-medium max-w-xl">
                Sin compromiso, definamos la ruta más adecuada para acelerar tus resultados.
              </p>
            </div>

            {/* Right Button (Dark button from wireframe "Agendar llamada") */}
            <div className="shrink-0">
              <button
                onClick={() => onOpenConsultation('Reunión 30 minutos')}
                className="px-8 py-4 rounded-xl bg-slate-950 text-white font-extrabold text-sm hover:bg-slate-900 hover:scale-105 transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center gap-2.5"
              >
                <Calendar className="w-4 h-4 text-[#74bf28]" />
                <span>Agendar llamada</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
