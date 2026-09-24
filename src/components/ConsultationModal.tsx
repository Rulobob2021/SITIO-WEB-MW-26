import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [step, setStep] = useState<'schedule' | 'confirmed'>('schedule');
  const [selectedDate, setSelectedDate] = useState('2025-09-08');
  const [selectedSlot, setSelectedSlot] = useState('10:00 - 10:30');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
    service: defaultService || 'GA4 & GMP Full Stack'
  });

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setStep('confirmed');
  };

  const timeSlots = [
    '09:30 - 10:00',
    '10:00 - 10:30',
    '11:30 - 12:00',
    '15:00 - 15:30',
    '16:30 - 17:00'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40 text-[10px] font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3 h-3" />
              <span>30 MINUTOS • SIN COSTO NI COMPROMISO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Agendar Diagnóstico Estratégico
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Salimos de la llamada con 3 acciones concretas y hoja de ruta técnica.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'confirmed' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#58991b] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                ¡Reunión Agendada Exitosamente!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Hemos reservado tu horario para el día <strong className="text-slate-900">{selectedDate}</strong> a las <strong className="text-slate-900">{selectedSlot} hrs</strong>.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Especialista asignado:</span>
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-[#74bf28]" />
                    Jose Valenzuela (Lead Partner)
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Plataforma:</span>
                  <span className="font-bold text-slate-900">Google Meet (Enlace enviado a tu email)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Destinatario:</span>
                  <span className="font-bold text-[#58991b]">{formData.email}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Revisa tu bandeja de entrada. Te hemos enviado la invitación con el link de acceso directo.
              </p>

              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#0a0f1d] hover:bg-[#1e293b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
              >
                Entendido / Finalizar
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              {/* Slot selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Selecciona Fecha y Horario
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">Fecha preferente:</span>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 text-slate-800 focus:border-[#74bf28]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">Horario disponible:</span>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 text-slate-800 focus:border-[#74bf28]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot} hrs (GMT-3)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Form info */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Datos de Contacto
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Rodrigo Vera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:border-[#74bf28]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rvera@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:border-[#74bf28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:border-[#74bf28]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 8765 4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:border-[#74bf28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">
                    Tema o Desafío Prioritario
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-xs rounded-lg border border-slate-300 p-2 focus:border-[#74bf28]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-extrabold uppercase tracking-wider text-xs rounded-lg shadow-lg green-glow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirmar Agendamiento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#74bf28]" />
                  Tus datos son tratados bajo estricta confidencialidad según Ley 21.719.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
