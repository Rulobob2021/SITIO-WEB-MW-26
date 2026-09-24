import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, ShieldCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40 text-[11px] font-bold uppercase tracking-wider mb-2">
              <span>SOLUCIÓN EMPRESARIAL</span>
              <span>•</span>
              <span>{service.impactMetric}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">{service.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Descripción del Alcance
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#74bf28]" />
              Entregables Técnicos Garantizados
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-slate-500" />
              Stack Tecnológico Aplicado
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-[#0a0f1d] text-white border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Respuesta en &lt; 24h por un Lead Specialist
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] rounded-lg shadow green-glow-subtle flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Diagnóstico para este Servicio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
