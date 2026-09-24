import React, { useState } from 'react';
import { FULL_CLIENTS_LIST } from '../data/martechData';
import { ClientProfile } from '../types';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Quote,
  Sparkles,
  Layers,
  Cpu,
  X
} from 'lucide-react';

interface ClientsPageProps {
  onOpenConsultation: (topic?: string) => void;
  onNavigateHome: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('todos');
  const [selectedClientModal, setSelectedClientModal] = useState<ClientProfile | null>(null);

  const sectors = [
    { id: 'todos', label: 'Todos los sectores' },
    { id: 'EDUCACIÓN', label: 'Educación Superior' },
    { id: 'BANCA & FINTECH', label: 'Banca & Fintech' },
    { id: 'RETAIL', label: 'Retail & E-commerce' },
    { id: 'CONSUMO MASIVO', label: 'Consumo Masivo' },
    { id: 'ENERGÍA', label: 'Energía & Utilities' },
    { id: 'SALUD', label: 'Salud & Medicina' },
    { id: 'REAL ESTATE', label: 'Real Estate & Malls' }
  ];

  const filteredClients = FULL_CLIENTS_LIST.filter((client) => {
    if (selectedSector === 'todos') return true;
    return client.sectorTag === selectedSector;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      {/* Hero Section */}
      <section className="relative bg-[#0a0f1d] text-white overflow-hidden py-14 lg:py-18 border-b border-slate-800">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#8ce033] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>CLIENTES & ALIANZAS ESTRATÉGICAS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Marcas líderes que confían en nuestra <span className="text-[#74bf28]">ingeniería de datos</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Acompañamos a corporaciones de primer nivel en banca, retail, educación, salud y consumo masivo en su evolución hacia la madurez analítica, la rentabilidad publicitaria y la privacidad de datos.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenConsultation('Clientes y Alianzas')}
                  className="px-6 py-3 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#74bf28]/20 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Conocer cómo trabajamos con tu industria</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Institutional Validation Badges */}
            <div className="lg:col-span-5">
              <div className="bg-[#111c35]/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#74bf28]" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      Credenciales & Ecosistema
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#74bf28] bg-[#74bf28]/15 px-2 py-0.5 rounded">
                    VERIFICADO
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#74bf28]/20 text-[#74bf28] flex items-center justify-center font-bold text-xs shrink-0">
                      GMP
                    </div>
                    <div>
                      <div className="font-bold text-white">Google Premier Partner (Top 3%)</div>
                      <div className="text-[11px] text-slate-400">Resellers oficiales de GA360, DV360 y SA360 en LATAM.</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                      GCP
                    </div>
                    <div>
                      <div className="font-bold text-white">Google Cloud Certified Partner</div>
                      <div className="text-[11px] text-slate-400">Data pipelines en BigQuery y Server-Side Tagging en Cloud Run.</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                      CRM
                    </div>
                    <div>
                      <div className="font-bold text-white">HubSpot Solutions Partner</div>
                      <div className="text-[11px] text-slate-400">Automatización de ingresos, inbound marketing y sincronización de ventas.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 text-center">
                  Más de 150 empresas transformadas desde 2007
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
            <span className="font-semibold text-slate-800">Clientes</span>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-[#74bf28] hover:text-[#5fa01f] font-semibold flex items-center gap-1 cursor-pointer transition"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>

      {/* Filter Pills Bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {sectors.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedSector === sec.id
                    ? 'bg-[#74bf28] text-[#060a12] shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">
            Mostrando <span className="text-slate-900 font-bold">{filteredClients.length}</span> organizaciones destacadas
          </p>
          <span className="text-xs text-[#74bf28] font-semibold">
            Confianza Empresarial Comprobada
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <article
              key={client.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#74bf28] p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Sector Tag + Initials Emblem */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded-md text-[11px] font-bold uppercase tracking-wider border border-[#74bf28]/20">
                    {client.sectorTag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center font-mono">
                    {client.shortName.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#58991b] transition mb-1 line-clamp-1">
                  {client.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {client.industry}
                </p>

                {/* Highlight */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {client.highlight}
                </p>

                {/* Key Metric Banner */}
                <div className="p-3 bg-[#0a0f1d] text-white rounded-xl mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Impacto Verificado</span>
                  <span className="text-xs font-extrabold text-[#74bf28]">{client.metrics}</span>
                </div>

                {/* Scope Tags */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                    Alcance del Servicio:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {client.scope.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote if available */}
                {client.testimonial && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 italic mb-4">
                    <Quote className="w-3.5 h-3.5 text-[#74bf28] inline mr-1" />
                    "{client.testimonial.quote.slice(0, 100)}..."
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedClientModal(client)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#74bf28] text-white hover:text-[#060a12] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Ver alcance y tecnologías</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Client Detail Modal */}
      {selectedClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedClientModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="px-2.5 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded text-[11px] font-bold uppercase tracking-wider">
                  {selectedClientModal.sectorTag}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedClientModal.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sector: {selectedClientModal.industry}
                </p>
              </div>

              {/* Impact Metric */}
              <div className="p-4 bg-[#0a0f1d] text-white rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Resultado Clave Obtenido</div>
                  <div className="text-xs text-slate-300 mt-0.5">{selectedClientModal.highlight}</div>
                </div>
                <div className="text-xl font-extrabold text-[#74bf28] shrink-0 ml-4">
                  {selectedClientModal.metrics}
                </div>
              </div>

              {/* Scope */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Servicios y Soluciones Desplegadas
                </h4>
                <div className="space-y-2">
                  {selectedClientModal.scope.map((sc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0" />
                      <span>{sc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Stack Tecnológico Integrado
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedClientModal.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial if available */}
              {selectedClientModal.testimonial && (
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
                  <div className="text-xs text-emerald-900 italic">
                    "{selectedClientModal.testimonial.quote}"
                  </div>
                  <div className="text-[11px] font-bold text-emerald-800">
                    — {selectedClientModal.testimonial.author}, {selectedClientModal.testimonial.role}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedClientModal(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    const clientTopic = `Solución tipo ${selectedClientModal.shortName}`;
                    setSelectedClientModal(null);
                    onOpenConsultation(clientTopic);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Consultar por esta solución</span>
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
            onClick={() => onOpenConsultation('Clientes y Alianzas')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#060a12] text-white hover:bg-slate-900 text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            Agendar llamada
          </button>
        </div>
      </div>
    </div>
  );
};
