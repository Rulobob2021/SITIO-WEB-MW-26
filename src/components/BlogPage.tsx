import React, { useState } from 'react';
import { EXTENDED_BLOG_POSTS } from '../data/martechData';
import { BlogPost } from '../types';
import {
  ArrowRight,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Search,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';

interface BlogPageProps {
  onSelectArticle: (post: BlogPost) => void;
  onOpenConsultation: (topic?: string) => void;
  onNavigateHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectArticle,
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<boolean>(false);

  const categories = [
    { id: 'todos', label: 'Todos los artículos' },
    { id: 'regulacion', label: 'Regulación & Privacidad' },
    { id: 'estrategia', label: 'Estrategia MarTech' },
    { id: 'cloud', label: 'Arquitectura Cloud' },
    { id: 'ia', label: 'Inteligencia Artificial' },
    { id: 'analitica', label: 'Analítica Comercial' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscriptionSuccess(true);
    setTimeout(() => {
      setSubscriptionSuccess(false);
      setSubscribedEmail('');
    }, 4000);
  };

  const filteredPosts = EXTENDED_BLOG_POSTS.filter((post) => {
    const matchesCategory = (() => {
      if (selectedCategory === 'todos') return true;
      if (selectedCategory === 'regulacion') return post.category.toLowerCase().includes('regulación') || post.category.toLowerCase().includes('privacidad');
      if (selectedCategory === 'estrategia') return post.category.toLowerCase().includes('estrategia');
      if (selectedCategory === 'cloud') return post.category.toLowerCase().includes('cloud') || post.category.toLowerCase().includes('arquitectura');
      if (selectedCategory === 'ia') return post.category.toLowerCase().includes('inteligencia') || post.category.toLowerCase().includes('ia');
      if (selectedCategory === 'analitica') return post.category.toLowerCase().includes('analítica');
      return true;
    })();

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
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
                <BookOpen className="w-3.5 h-3.5" />
                <span>MENTALIDAD INSIGHTS • MARTECH & DATA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Análisis técnico, regulación y tendencias en <span className="text-[#74bf28]">MarTech</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Artículos de fondo, guías de arquitectura cloud y análisis normativos escritos por nuestros directores y consultores senior para líderes de marketing y datos.
              </p>

              {/* Search Bar Input */}
              <div className="pt-2 max-w-md relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por tema: Ley 21.719, Server-Side, BigQuery..."
                  className="w-full pl-10 pr-4 py-3 bg-[#111c35] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#74bf28] transition"
                />
              </div>
            </div>

            {/* Right Card: Tech Digest & Newsletter */}
            <div className="lg:col-span-5">
              <div className="bg-[#111c35]/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#74bf28]" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      Boletín Técnico MarTech
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#74bf28] bg-[#74bf28]/15 px-2 py-0.5 rounded">
                    MENSUAL
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Recibe resúmenes ejecutivos sobre la Ley de Datos Personales, cambios en algoritmos de subastas y arquitecturas en Google Cloud.
                </p>

                {subscriptionSuccess ? (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0" />
                    <span>¡Suscripción confirmada! Te enviaremos el próximo digest.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={subscribedEmail}
                        onChange={(e) => setSubscribedEmail(e.target.value)}
                        placeholder="tu.email@empresa.com"
                        className="flex-1 px-3 py-2.5 bg-[#0a0f1d] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#74bf28]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-bold text-xs transition cursor-pointer shrink-0"
                      >
                        Suscribirme
                      </button>
                    </div>
                    <span className="text-[10px] text-slate-400 block">
                      Cero spam. Solo contenido técnico de alto valor para equipos de data.
                    </span>
                  </form>
                )}

                <div className="pt-2 border-t border-slate-700/60 flex flex-wrap gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">#Ley21719</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">#GTMServerSide</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">#BigQueryML</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">#ConsentModeV2</span>
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
            <span className="font-semibold text-slate-800">Blog</span>
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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">
            Mostrando <span className="text-slate-900 font-bold">{filteredPosts.length}</span> publicaciones técnicas
          </p>
          <span className="text-xs text-[#74bf28] font-semibold">
            Investigaciones Originales
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs space-y-3">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No encontramos artículos para esta búsqueda</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Intenta cambiar los términos de búsqueda o selecciona otra categoría en los filtros superiores.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-[#74bf28] hover:text-[#060a12] transition"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#74bf28] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Article Thumbnail Image */}
                  <div
                    onClick={() => onSelectArticle(post)}
                    className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden cursor-pointer"
                  >
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={post.imageAlt || post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                        <BookOpen className="w-8 h-8" />
                      </div>
                    )}
                    {/* Gradient shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-[#0a0f1d]/85 backdrop-blur-md text-[#8ce033] rounded-md font-bold uppercase tracking-wider text-[10px] border border-[#74bf28]/40 shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Read time pill on image */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-[11px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-[#74bf28]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title */}
                    <h3
                      onClick={() => onSelectArticle(post)}
                      className="text-base font-extrabold text-slate-900 group-hover:text-[#58991b] transition leading-snug line-clamp-2 mb-2.5 cursor-pointer"
                    >
                      {post.title}
                    </h3>

                    {/* Date & Author */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-4 pb-3 border-b border-slate-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" />
                        {post.author}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Key Takeaways preview pills */}
                    {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 space-y-1.5">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Punto Clave:
                        </div>
                        <div className="text-[11px] text-slate-700 leading-snug flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#74bf28] shrink-0 mt-0.5" />
                          <span>{post.keyTakeaways[0]}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onSelectArticle(post)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#74bf28] text-white hover:text-[#060a12] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

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
            onClick={() => onOpenConsultation('Mentalidad Insights')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#060a12] text-white hover:bg-slate-900 text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            Agendar llamada
          </button>
        </div>
      </div>
    </div>
  );
};
