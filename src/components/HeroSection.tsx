import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import heroVideo from '../assets/hero-video.mp4';

interface HeroSlide {
  id: string;
  serviceId?: string;
  titlePrefix: string;
  highlightText: string;
  titleSuffix: string;
  subtitle: string;
  highlightPhrase?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'general',
    titlePrefix: 'De la Captación Masiva a la ',
    highlightText: 'Inteligencia Comercial',
    titleSuffix: ' y Confianza Digital.',
    subtitle: 'Transformamos datos complejos en aceleración de ventas, optimización de pauta publicitaria y cumplimiento estricto de la ',
    highlightPhrase: 'Ley de Protección de Datos 21.719. Traducimos normativa, IA y analítica avanzada a código y resultados medibles.'
  },
  {
    id: 'consultoria',
    serviceId: 'consultoria',
    titlePrefix: 'Consultoría Estratégica en ',
    highlightText: 'Analítica Digital & GA4 360',
    titleSuffix: ' de Punta a Punta.',
    subtitle: 'Implementaciones de alta precisión con Google Tag Manager y Server-Side Tracking. Eliminamos pérdidas de datos y garantizamos ',
    highlightPhrase: '100% de trazabilidad del funnel con Consent Mode v2 según normativa.'
  },
  {
    id: 'data',
    serviceId: 'data',
    titlePrefix: 'Ingeniería de Datos, ',
    highlightText: 'Google Cloud & BigQuery',
    titleSuffix: ' en Tiempo Real.',
    subtitle: 'Centralización de data lakes corporativos, modelos de atribución algorítmica First-Party y ',
    highlightPhrase: 'dashboards automatizados para transformar grandes volúmenes de información en decisiones comerciales certeras.'
  },
  {
    id: 'marketing-digital',
    serviceId: 'marketing-digital',
    titlePrefix: 'Marketing Digital de Rendimiento & ',
    highlightText: 'Compra Programática DV360',
    titleSuffix: ' Avanzada.',
    subtitle: 'Gestión y optimización algorítmica de campañas en Google Marketing Platform, Meta Ads y TikTok. ',
    highlightPhrase: 'Reducimos el costo por adquisición (CPA) y maximizamos el retorno con segmentación predictiva.'
  },
  {
    id: 'marketing-contenido',
    serviceId: 'marketing-contenido',
    titlePrefix: 'Automatización Relacional & ',
    highlightText: 'Soluciones HubSpot CRM',
    titleSuffix: ' Escalables.',
    subtitle: 'Lead scoring predictivo de prospectos cualificados (MQL/SQL), flujos automatizados de nutrición y ',
    highlightPhrase: 'sincronización nativa del CRM con tus canales publicitarios para acelerar ventas.'
  },
  {
    id: 'tecnologia',
    serviceId: 'tecnologia',
    titlePrefix: 'Inteligencia Artificial Aplicada, ',
    highlightText: 'Modelos Predictivos',
    titleSuffix: ' y Training Especializado.',
    subtitle: 'Algoritmos de propensión de compra (Propensity to Purchase), formación ejecutiva en BigQuery ML y ',
    highlightPhrase: 'mesas de ayuda técnicas especializadas con soporte Tier 1 y SLA garantizado.'
  },
  {
    id: 'creatividad-desarrollo',
    serviceId: 'creatividad-desarrollo',
    titlePrefix: 'Desarrollo Web de ',
    highlightText: 'Alta Conversión & Creatividad',
    titleSuffix: ' Optimizada.',
    subtitle: 'Landing pages de carga ultrarrápida con Server-Side Tagging integrado, activos rich media y ',
    highlightPhrase: 'pruebas A/B continuas diseñadas para multiplicar tu tasa de conversión digital.'
  }
];

interface HeroSectionProps {
  onNavigateToServices: () => void;
  onLeadSuccess: (leadData: { name: string; email: string; company: string; service: string }) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToServices,
  onLeadSuccess,
  onSelectService
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 6-Second Automatic Carousel for Hero Text
  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        setFade(true);
      }, 250);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = HERO_SLIDES[slideIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playVideo = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay delayed or restricted by browser
          });
        }
      };

      playVideo();

      // Reliable autoplay triggers on first interaction if blocked by restrictive iframe policies
      const handleInteraction = () => {
        if (video.paused) {
          video.play().catch(() => {});
        }
      };

      window.addEventListener('click', handleInteraction, { once: true });
      window.addEventListener('touchstart', handleInteraction, { once: true });
      window.addEventListener('scroll', handleInteraction, { once: true });

      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('ended', handleEnded);
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
        window.removeEventListener('scroll', handleInteraction);
      };
    }
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'ga4',
    message: '',
    consent: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setFormSubmitted(true);
    onLeadSuccess({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service
    });
  };

  return (
    <section className="relative bg-[#0a0f1d] text-white overflow-hidden py-12 lg:py-16 border-b border-[#1e293b]/50" id="inicio">
      {/* Background Video Looper con difuminado y gradientes cinematográficos */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1d]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Difuminado y atenuación balanceada */}
        <div className="absolute inset-0 bg-[#0a0f1d]/45 backdrop-blur-[2px]" />
        {/* Gradientes direccionales para perfecta legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a12]/75 via-[#0a0f1d]/45 to-[#060a12]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-[#0a0f1d]/40" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Rotating Title & Subtitle Container (changes automatically every 6 seconds) */}
            <div 
              className={`min-h-[190px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col justify-center space-y-4 transition-all duration-300 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`}
            >
              {/* Hero Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.18]">
                {currentSlide.titlePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bf28] via-[#8ce033] to-emerald-400">
                  {currentSlide.highlightText}
                </span>
                {currentSlide.titleSuffix}
              </h1>

              {/* Hero Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {currentSlide.subtitle}
                {currentSlide.highlightPhrase && (
                  <strong className="text-white font-semibold">{currentSlide.highlightPhrase}</strong>
                )}
              </p>
            </div>

            {/* Twin CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#contacto"
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#060a12] bg-[#74bf28] hover:bg-[#8ce033] rounded transition duration-200 shadow-lg green-glow inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Agendar Consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  if (currentSlide.serviceId && onSelectService) {
                    onSelectService(currentSlide.serviceId);
                  } else {
                    onNavigateToServices();
                  }
                }}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#111c35] hover:bg-[#1e293b] border border-slate-700 rounded transition duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                <span>
                  {currentSlide.serviceId ? 'Ver Detalles de esta Solución' : 'Ver Servicios / Soluciones'}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Certifications Grid */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Ecosistema Tecnológico & Certificaciones Oficiales
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-[#74bf28] transition">
                  <span className="text-xs font-bold text-white">Google Partner</span>
                  <span className="text-[10px] text-[#74bf28] font-medium">Premier 2025 (Top 3%)</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-cyan-400 transition">
                  <span className="text-xs font-bold text-white">Google Cloud</span>
                  <span className="text-[10px] text-slate-400 font-medium">Analytics Certified</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-[#74bf28] transition">
                  <span className="text-xs font-bold text-white">GMP Partner</span>
                  <span className="text-[10px] text-[#74bf28] font-medium">Full Stack Sales & Resell</span>
                </div>
                <div className="p-3 bg-[#111c35]/80 border border-slate-700/70 rounded-lg text-center flex flex-col items-center justify-center hover:border-amber-400 transition">
                  <span className="text-xs font-bold text-white">HubSpot</span>
                  <span className="text-[10px] text-slate-400 font-medium">Solutions Partner</span>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Column: The Signature High-Tech Lead Form */}
          <div className="lg:col-span-5" id="contacto">
            <div className="bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl relative">
              <div className="mb-5">
                <h2 className="text-2xl font-extrabold text-white">Cuéntanos tu Desafío</h2>
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
                    Hemos asignado tu caso a un <strong>Lead Solution Consultant</strong> de Mentalidad Web. Te contactaremos en menos de 24 horas hábiles a <span className="text-[#8ce033]">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-name">
                      Nombre y Apellido *
                    </label>
                    <input
                      id="lead-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Andrea Morales"
                      className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-email">
                      Email Corporativo *
                    </label>
                    <input
                      id="lead-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amorales@empresa.cl"
                      className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-company">
                        Empresa / Organización *
                      </label>
                      <input
                        id="lead-company"
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Retail Group S.A."
                        className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-phone">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        id="lead-phone"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-service">
                      Área de Interés Principal
                    </label>
                    <select
                      id="lead-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white focus:border-[#74bf28] px-3 py-2.5"
                    >
                      <option value="ga4">Google Analytics 4 & GA360 / GTM Server-Side</option>
                      <option value="ley-datos">Cumplimiento Ley 21.719 & Consent Mode v2</option>
                      <option value="bigquery">BigQuery, Data Engineering & Dashboards</option>
                      <option value="sem-dv360">Marketing Digital & Programmatic DV360</option>
                      <option value="ia-predictive">Modelos Predictivos & IA Aplicada</option>
                      <option value="hubspot">HubSpot, Inbound & Lead Scoring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-100 mb-1" htmlFor="lead-message">
                      Breve descripción de tu objetivo
                    </label>
                    <textarea
                      id="lead-message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos sobre tus herramientas actuales, tiempos esperados o volumen de tráfico..."
                      className="w-full text-xs rounded-lg bg-[#060a12]/80 border border-slate-700/80 text-white placeholder-slate-400 focus:border-[#74bf28] focus:ring-1 focus:ring-[#74bf28] px-3 py-2"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      id="lead-consent"
                      required
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 bg-[#060a12] text-[#74bf28] focus:ring-[#74bf28]"
                    />
                    <label className="text-[11px] text-emerald-100/90 leading-tight cursor-pointer" htmlFor="lead-consent">
                      Autorizo el tratamiento de mis datos de contacto para la coordinación de esta consultoría según la{' '}
                      <span className="underline text-[#74bf28] font-medium">Ley de Datos 21.719</span>.
                    </label>
                  </div>

                  {/* Contrast Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-[#060a12] font-extrabold uppercase tracking-wider text-xs rounded-lg shadow-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ENVIAR REQUERIMIENTO / AGENDAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-1">
                    <span className="text-[10px] text-emerald-200/70 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#74bf28]" />
                      Respuesta garantizada en menos de 24 horas por un Lead Solution Consultant.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
