import React, { useState, useId } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Database, 
  TrendingUp, 
  Compass, 
  Link as LinkIcon, 
  Layers, 
  ImageIcon, 
  Check, 
  X,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { ServiceItem } from '../types';
import { getServiceExtendedData, ServicePillar } from '../data/serviceDetailData';
import { CASE_STUDIES } from '../data/martechData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onOpenConsultation: (topic?: string) => void;
  onSelectCaseStudy?: (caseId: string) => void;
  onLeadSuccess: (leadData: { name: string; email: string; company: string; service: string }) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onOpenConsultation,
  onSelectCaseStudy,
  onLeadSuccess
}) => {
  const formHeadingId = useId();
  const data = getServiceExtendedData(service);
  const relatedCase = CASE_STUDIES.find(c => c.id === data.relatedCaseId) || CASE_STUDIES[0];

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consent: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State (open first by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Checklist Modal State
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [checklistEmail, setChecklistEmail] = useState('');
  const [checklistSent, setChecklistSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setFormSubmitted(true);
    onLeadSuccess({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: service.title
    });
  };

  const handleChecklistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checklistEmail) return;
    setChecklistSent(true);
  };

  const scrollToForm = () => {
    const element = document.getElementById('diagnostico-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPillarIcon = (iconName: ServicePillar['iconName']) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#74bf28]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Link':
        return <LinkIcon className="w-5 h-5 text-[#58991b]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#74bf28]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-600" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Matching Wireframe Left Content + Right Form) */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-white py-10 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Hero Column: Wireframe Structure */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge SERVICIOS */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#4c8716] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#74bf28]"></span>
                <span>{data.heroTag}</span>
              </div>

              {/* Big Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                {data.heroHeadline}
              </h1>

              {/* Subtitle / Pain Point text */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {data.heroDescription}
              </p>

              {/* Illustrative Architecture / Graphic Placeholder Box (Wireframe photo placeholder) */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#0a0f1d] to-[#121c32] p-6 text-white shadow-xl relative overflow-hidden">
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#74bf28]/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#74bf28]">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        {service.title} • Especificación de Entrega
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40">
                    {service.impactMetric}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {service.deliverables.slice(0, 4).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Stack Certificado:</span>
                  {service.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs Side by Side matching wireframe: Green "Agendar Diagnóstico" + Blue "Descargar Checklist" */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3.5 rounded-xl bg-[#74bf28] text-[#060a12] font-bold text-xs uppercase tracking-wider hover:bg-[#8ce033] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Diagnóstico</span>
                </button>

                <button
                  onClick={() => setIsChecklistOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#1d5ec9] hover:bg-[#1648a0] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{data.downloadLabel}</span>
                </button>
              </div>

            </div>

            {/* Right Hero Column: High Conversion Lead Form (Matching Wireframe green container) */}
            <div className="lg:col-span-5" id="diagnostico-form">
              <div className="bg-gradient-to-br from-[#123e20] via-[#0d2a17] to-[#08180e] p-6 sm:p-8 rounded-2xl border border-slate-700/60 shadow-2xl relative text-white">
                <div className="mb-5">
                  <div className="inline-block px-2.5 py-1 bg-[#74bf28]/20 border border-[#74bf28]/40 rounded text-[11px] font-bold text-[#8ce033] uppercase tracking-wider mb-2">
                    Diagnóstico Sin Costo
                  </div>
                  <h2 id={formHeadingId} className="text-2xl font-extrabold text-white">Cuéntanos tu Desafío</h2>
                  <p className="text-xs text-emerald-100/80 mt-1">
                    Te ayudamos a encontrar la mejor solución técnica y comercial para tu negocio.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-[#060a12]/90 rounded-xl border border-slate-700/60 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#74bf28]/20 text-[#74bf28] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white">¡Requerimiento Recibido con Éxito!</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Hemos asignado tu caso a un <strong>Lead Solution Consultant</strong> de Mentalidad Web para <strong>{service.title}</strong>. Te contactaremos en menos de 24 horas hábiles a <span className="text-[#8ce033]">{formData.email}</span>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} aria-labelledby={formHeadingId} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="service-lead-name">
                        Nombre y Apellido *
                      </label>
                      <input
                        id="service-lead-name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Francisca Valenzuela"
                        className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="service-lead-email">
                        Email Corporativo *
                      </label>
                      <input
                        id="service-lead-email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="fvalenzuela@empresa.com"
                        className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="service-lead-company">
                          Empresa / Organización *
                        </label>
                        <input
                          id="service-lead-company"
                          required
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Ej. Retail Group S.A."
                          className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="service-lead-phone">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          id="service-lead-phone"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+56 9 9876 5432"
                          className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="service-lead-msg">
                        Breve descripción de tu objetivo
                      </label>
                      <textarea
                        id="service-lead-msg"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`Cuéntanos sobre tus requerimientos en ${service.title}...`}
                        className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        id="service-consent"
                        required
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-700 bg-[#060a12] text-[#74bf28] focus:ring-[#74bf28]"
                      />
                      <label className="text-[11px] text-emerald-100/90 leading-tight cursor-pointer" htmlFor="service-consent">
                        Autorizo el tratamiento de mis datos de contacto según la{' '}
                        <span className="underline text-[#74bf28] font-medium">Ley 21.719</span>.
                      </label>
                    </div>

                    {/* High-visibility submit button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#74bf28] text-[#060a12] font-black text-xs uppercase tracking-wider hover:bg-[#8ce033] shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 transform active:scale-95"
                    >
                      <span>Enviar Solicitud de Diagnóstico</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breadcrumbs & Back Navigation Bar (Moved below the hero) */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onBack}
              className="font-medium text-slate-600 hover:text-[#58991b] transition flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Servicios</span>
            </button>
            <span>/</span>
            <span className="text-slate-400 capitalize">{service.categoryTitle || 'Servicios'}</span>
            <span>/</span>
            <span className="font-semibold text-slate-900 line-clamp-1">{service.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400">
              ID: {service.id}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#74bf28]"></span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              DISPONIBLE
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SECTION: ¿QUÉ HACEMOS POR TU MARCA? (5 Feature Columns) */}
      {/* ============================================================ */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {data.whatWeDoTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {data.whatWeDoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center text-center hover:border-[#74bf28] hover:bg-white hover:shadow-lg transition-all duration-200 group"
              >
                {/* Circular Icon (Orange / Amber / Green accent like wireframe) */}
                <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {renderPillarIcon(pillar.iconName)}
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#4c8716] transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SECTION: CÓMO LO HACEMOS (4-Step Horizontal Timeline) */}
      {/* ============================================================ */}
      <section className="py-14 lg:py-20 bg-slate-50/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Cómo lo hacemos
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Metodología ágil y validada en más de 100 proyectos enterprise en Chile y Latinoamérica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {data.steps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-[#74bf28] transition"
              >
                <div>
                  {/* Green Number Circle (Matching wireframe) */}
                  <div className="w-9 h-9 rounded-full bg-[#74bf28] text-[#060a12] font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                    {step.step}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>

                  <span className="inline-block text-[11px] font-bold text-[#58991b] uppercase tracking-wider mb-3">
                    {step.timeframe}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Entregable:</span>
                  <span className="line-clamp-2">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SECTION: CASO RELACIONADO (Split Card with Screenshot + Result) */}
      {/* ============================================================ */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#74bf28]">
              CASO RELACIONADO
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center hover:border-slate-300 transition">
            
            {/* Left: Visual screenshot / thumbnail preview matching wireframe diagonal pattern */}
            <div className="lg:col-span-5">
              <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-900 to-[#111c35] p-5 text-white flex flex-col justify-between relative overflow-hidden border border-slate-800 shadow-md">
                {/* Diagonal grid pattern simulation */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none"></div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40">
                    {relatedCase.industry}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {relatedCase.techBadge}
                  </span>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-3xl font-black text-white">
                    {relatedCase.highlightMetric}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {relatedCase.highlightLabel}
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Cliente: <strong className="text-white">{relatedCase.client}</strong></span>
                  <span className="text-[#74bf28] font-bold">Verificado</span>
                </div>
              </div>
            </div>

            {/* Right: Text and Link matching wireframe */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {data.relatedCaseHighlight}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {data.relatedCaseContext}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectCaseStudy ? onSelectCaseStudy(data.relatedCaseId) : onOpenConsultation(`Caso de éxito ${relatedCase.client}`)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#58991b] hover:text-[#74bf28] transition group cursor-pointer"
                >
                  <span>→ Leer el caso completo</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SECTION: TRABAJAMOS CON LAS MEJORES HERRAMIENTAS (Logos) */}
      {/* ============================================================ */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            Trabajamos con las mejores herramientas
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {data.tools.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-2.5 hover:border-[#74bf28] transition"
              >
                <div className="w-2 h-2 rounded-full bg-[#74bf28]"></div>
                <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SECTION: PREGUNTAS FRECUENTES (Interactive Accordion) */}
      {/* ============================================================ */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Respuestas directas sobre tiempos, requisitos técnicos y modalidad de trabajo.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#58991b] transition py-1 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400 text-lg shrink-0 font-mono">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. BANNER CTA: VERDE CON BOTÓN OSCURO (Matching Wireframe) */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-[#58991b] to-[#74bf28] py-10 lg:py-12 text-[#060a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left text */}
            <div className="space-y-1.5 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-[#060a12] tracking-tight">
                {data.ctaHeadline}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-emerald-950/80">
                {data.ctaSubtitle}
              </p>
            </div>

            {/* Right dark button matching wireframe */}
            <div className="shrink-0">
              <button
                onClick={() => onOpenConsultation(`Agendar llamada para ${service.title}`)}
                className="px-8 py-4 rounded-xl bg-[#060a12] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-slate-900 shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Agendar llamada</span>
                <ArrowRight className="w-4 h-4 text-[#74bf28]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHECKLIST DOWNLOAD MODAL */}
      {/* ============================================================ */}
      {isChecklistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => {
                setIsChecklistOpen(false);
                setChecklistSent(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!checklistSent ? (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1d5ec9] flex items-center justify-center">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {data.checklistTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Ingresa tu correo corporativo para recibir de inmediato el checklist técnico y la guía de implementación recomendada para {service.title}.
                  </p>
                </div>

                <form onSubmit={handleChecklistSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="checklist-email">
                      Correo Corporativo
                    </label>
                    <input
                      id="checklist-email"
                      required
                      type="email"
                      value={checklistEmail}
                      onChange={(e) => setChecklistEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full text-xs rounded-lg border border-slate-300 p-2.5 text-slate-900 focus:border-[#1d5ec9] focus:ring-1 focus:ring-[#1d5ec9]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#1d5ec9] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1648a0] shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Descargar Documento</span>
                    <Download className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">¡Documento Enviado!</h3>
                <p className="text-xs text-slate-600">
                  Hemos enviado la guía técnica a <strong>{checklistEmail}</strong>. Revisa tu bandeja de entrada o spam en los próximos minutos.
                </p>
                <button
                  onClick={() => {
                    setIsChecklistOpen(false);
                    setChecklistSent(false);
                  }}
                  className="px-6 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
