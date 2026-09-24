import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/martechData';
import { X, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';

interface DiagnosticToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const DiagnosticToolModal: React.FC<DiagnosticToolModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (points: number) => {
    const updated = { ...selectedAnswers, [currentQ.id]: points };
    setSelectedAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  let totalScore = 0;
  for (const points of Object.values(selectedAnswers)) {
    totalScore += (points as number) || 0;
  }

  const getScoreAssessment = () => {
    if (totalScore >= 80) {
      return {
        level: 'Líder MarTech & Cumplimiento Óptimo',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        textColor: 'text-emerald-600',
        summary: 'Tu empresa cuenta con bases sólidas de ingeniería de datos y cumplimiento proactivo.',
        recs: [
          'Maximizar el retorno implementando modelos predictivos de propensión en Vertex AI.',
          'Consolidar la atribución multitáctil algorítmica con datos offline en BigQuery.',
          'Explorar pauta programática avanzada en DV360 con audiencias First-Party exclusivas.'
        ]
      };
    }
    if (totalScore >= 50) {
      return {
        level: 'Madurez Intermedia con Brechas Regulatorias',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        textColor: 'text-amber-600',
        summary: 'Tienen capacidades activas pero están expuestos a pérdidas de atribución y sanciones de la Ley 21.719.',
        recs: [
          'Migrar de inmediato a Google Tag Manager Server-Side para proteger PII de usuarios.',
          'Configurar Consent Mode v2 para recuperar hasta un 30% de conversiones modeladas.',
          'Conectar el CRM corporativo directamente a las plataformas publicitarias para optimizar el Smart Bidding.'
        ]
      };
    }
    return {
      level: 'Riesgo Alto de Sanción & Pérdida de Datos',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      textColor: 'text-red-600',
      summary: 'Tu arquitectura actual depende de cookies de terceros y no cumple con los estándares de la Ley 21.719.',
      recs: [
        'Auditoría urgente de recolección de datos y arquitectura de medición web.',
        'Implementación de servidor de etiquetado dedicado en Google Cloud Platform.',
        'Estandarización de eventos en Google Analytics 4 con esquema First-Party limpio.'
      ]
    };
  };

  const assessment = getScoreAssessment();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40 text-[10px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#74bf28]" />
              <span>TEST DE MADUREZ MARTECH & LEY 21.719</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Diagnóstico Express de Medición
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Evalúa en 4 preguntas la resiliencia técnica de tu stack digital frente a regulaciones y pérdida de cookies.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            aria-label="Cerrar test"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!showResult ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <span>Pregunta {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#74bf28] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{currentQ.description}</p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full p-4 rounded-xl border border-slate-200 hover:border-[#74bf28] bg-slate-50 hover:bg-emerald-50/40 text-left transition-all group flex flex-col space-y-1 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#58991b]">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#74bf28] transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[11px] text-slate-500">{opt.description}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${assessment.badgeColor}`}>
                  {assessment.level}
                </span>

                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {totalScore} <span className="text-xl text-slate-400 font-normal">/ 100 pts</span>
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  {assessment.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#74bf28]" />
                  Plan de Acción Recomendado para tu Empresa
                </h4>
                <div className="space-y-2.5">
                  {assessment.recs.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#0a0f1d] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white">¿Deseas una auditoría profunda de tu código?</h5>
                  <p className="text-xs text-slate-400">
                    Revisamos tus contenedores y te entregamos un informe técnico detallado sin costo.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="shrink-0 px-4 py-2.5 bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-extrabold text-xs uppercase tracking-wider rounded-lg transition shadow green-glow-subtle flex items-center gap-2 cursor-pointer"
                >
                  <span>Agendar Revisión</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          {showResult ? (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repetir evaluación</span>
            </button>
          ) : (
            <span>Paso {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
          )}
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
