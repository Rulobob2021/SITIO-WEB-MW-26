import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, User, Check, ArrowRight, Share2 } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onOpenConsultation
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0a0f1d] text-white border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#74bf28]/20 text-[#8ce033] border border-[#74bf28]/40 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#74bf28]" />
                {post.date} • {post.readTime}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {post.title}
            </h2>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
              <User className="w-3.5 h-3.5 text-[#74bf28]" />
              <span>Por <strong>{post.author}</strong> - Lead MarTech Strategist @ Mentalidad Web</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            aria-label="Cerrar artículo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Article Featured Image */}
          {post.imageUrl && (
            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 relative shadow-sm">
              <img
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Key Takeaways Box */}
          <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#58991b]">
              Conclusiones Ejecutivas Clave
            </h4>
            <div className="space-y-2">
              {post.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                  <Check className="w-4 h-4 text-[#74bf28] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Text Paragraphs */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Call to Action Inside Article */}
          <div className="p-6 bg-[#0a0f1d] text-white rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">¿Quieres evaluar este tema en tu empresa?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Agenda un diagnóstico técnico sin costo con nuestro equipo de consultores.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="shrink-0 px-4 py-2.5 bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-bold text-xs uppercase tracking-wider rounded-lg transition shadow cursor-pointer flex items-center gap-2"
            >
              <span>Agendar Diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Mentalidad Insights • Serie Enterprise</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg cursor-pointer"
          >
            Volver a artículos
          </button>
        </div>
      </div>
    </div>
  );
};
