import React from 'react';
import { MapPin, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { MentalidadWebLogo } from './MentalidadWebLogo';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onNavigate,
  onOpenDiagnostic
}) => {
  return (
    <>
      {/* Full-width CTA Banner */}
      <section className="bg-gradient-to-r from-[#20552b] via-[#2f7a3f] to-[#1f562c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                ¿Hablamos 30 minutos de tu proyecto?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 font-normal">
                Sin compromiso. Salimos de la llamada con 3 acciones concretas.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#060a12] hover:bg-black text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-xl border border-white/20 transition duration-200 cursor-pointer"
              >
                <span>Agendar llamada</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#74bf28]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0a0f1d] text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center">
                <MentalidadWebLogo className="h-8 w-auto" variant="white" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Consultora y Agencia MarTech Premier en Latinoamérica. Impulsamos el crecimiento empresarial a través de analítica avanzada, inteligencia artificial y marketing de alto desempeño.
              </p>

              <div className="pt-2 text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#74bf28] shrink-0" />
                  <span>Villavicencio 361 Of. 114, Lastarria, Santiago, Chile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#74bf28] shrink-0" />
                  <a href="mailto:contacto@mentalidadweb.com" className="hover:text-white transition">
                    contacto@mentalidadweb.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 1: Servicios Clave */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                SERVICIOS CLAVE
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition">
                    Data & Analítica GA4
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition">
                    Marketing Digital & Performance
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition">
                    IA Assessment & Automatización
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDiagnostic} className="hover:text-[#8ce033] transition flex items-center gap-1">
                    <span>Ley de Datos 21.719</span>
                    <span className="text-[9px] px-1 py-0.2 bg-[#74bf28]/20 text-[#8ce033] rounded">Test</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('servicios')} className="hover:text-[#74bf28] transition">
                    Cloud Analytics & GCP
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Compañía */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                COMPAÑÍA
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => onNavigate('nosotros')} className="hover:text-[#74bf28] transition">
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('casos')} className="hover:text-[#74bf28] transition">
                    Casos de Éxito
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('clientes')} className="hover:text-[#74bf28] transition">
                    Cartera de Clientes
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('blog')} className="hover:text-[#74bf28] transition">
                    Blog & Insights
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDiagnostic} className="hover:text-[#74bf28] transition">
                    Diagnóstico MarTech
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Cumplimiento */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                LEGAL & PRIVACIDAD
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="text-slate-400">Política de Privacidad</span>
                </li>
                <li>
                  <span className="text-slate-400">Cumplimiento Ley 21.719</span>
                </li>
                <li>
                  <span className="text-slate-400">Términos de Servicio</span>
                </li>
                <li>
                  <span className="text-slate-400">Seguridad de Datos</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-semibold block mb-2">
                  CERTIFICACIONES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#111c35] text-[10px] text-slate-300 border border-slate-700">
                    Google Premier
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#111c35] text-[10px] text-slate-300 border border-slate-700">
                    GMP Partner
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#74bf28]" />
              <span>© {new Date().getFullYear()} Mentalidad Web SpA. Todos los derechos reservados.</span>
            </div>
            <div className="flex space-x-6 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                X (Twitter)
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#74bf28] transition uppercase tracking-wider font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
