import React, { useState } from 'react';
import aboutHeroBg from '../assets/images/about-hero-bg.jpg';
import { TEAM_MEMBERS, COMPANY_MILESTONES } from '../data/martechData';
import { TeamMember } from '../types';
import { MentalidadPillarsInfographic } from './MentalidadPillarsInfographic';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
  TrendingUp,
  Database,
  Cpu,
  Mail,
  Linkedin,
  X
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      {/* Hero Section */}
      <section className="relative bg-[#0a0f1d] text-white overflow-hidden py-14 lg:py-18 border-b border-slate-800">
        {/* Background Image con difuminado y gradientes cinematográficos idénticos a index */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f1d]">
          <img
            src={aboutHeroBg}
            alt="Equipo Mentalidad Web e Innovación Tecnológica"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Difuminado y atenuación balanceada idéntica a HeroSection index */}
          <div className="absolute inset-0 bg-[#0a0f1d]/50 backdrop-blur-[2px]" />
          {/* Gradientes direccionales para perfecta legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a12]/85 via-[#0a0f1d]/55 to-[#060a12]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/90 via-transparent to-[#0a0f1d]/40" />
        </div>

        <div className="absolute top-0 right-10 w-96 h-96 bg-[#74bf28]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74bf28]/15 border border-[#74bf28]/30 text-[#8ce033] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>QUIÉNES SOMOS • 17+ AÑOS DE TRAYECTORIA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ingeniería de datos, cultura analítica y <span className="text-[#74bf28]">visión de negocio</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Nacimos en 2007 en Santiago de Chile con la convicción de que el marketing digital debía sustentarse en rigor científico y tecnología de punta. Hoy somos la consultora y partner MarTech preferido por las principales corporaciones de la región.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenConsultation('Conocer a Mentalidad Web')}
                  className="px-6 py-3 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#74bf28]/20 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Conversar con un consultor senior</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Quick Institutional Metrics */}
            <div className="lg:col-span-5">
              <div className="bg-[#111c35]/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#74bf28]" />
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      Trayectoria Institucional
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#74bf28] bg-[#74bf28]/15 px-2 py-0.5 rounded">
                    DESDE 2007
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-[#74bf28]">17+</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Años de experiencia continua</div>
                  </div>
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-white">Top 3%</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Google Premier Partner LATAM</div>
                  </div>
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-cyan-400">+150</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Grandes empresas transformadas</div>
                  </div>
                  <div className="p-3 bg-[#0a0f1d] rounded-xl border border-slate-800">
                    <div className="text-2xl font-extrabold text-emerald-400">100%</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Especialistas certificados</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-700/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#74bf28]" />
                    Santiago de Chile • Lastarria
                  </span>
                  <span className="text-slate-300 font-medium">Cobertura Regional</span>
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
            <span className="font-semibold text-slate-800">Nosotros</span>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-[#74bf28] hover:text-[#5fa01f] font-semibold flex items-center gap-1 cursor-pointer transition"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>

      {/* Pillars / Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            Nuestros Pilares
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ¿Por qué las organizaciones eligen a Mentalidad Web?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Principios irrenunciables que guían cada proyecto de arquitectura, medios y consultoría de negocio.
          </p>
        </div>

        {/* Infographic Interface (Mind Silhouette & Strategic Cycle) */}
        <MentalidadPillarsInfographic />
      </section>

      {/* Leadership Team Section - Matched to Slide Format (Nuestro equipo) */}
      <section className="bg-white border-y border-slate-200 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Eyebrow */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Liderazgo & Talento
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Consultores, ingenieros cloud y estrategas senior que lideran la transformación digital en la región.
            </p>
          </div>

          {/* Slide Layout Container */}
          <div className="bg-[#fafafa] rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs relative overflow-hidden">
            
            {/* TOP ROW: 2 Members */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
              
              {/* Member 1: Top Left (Red / Coral badge) */}
              {(() => {
                const member = TEAM_MEMBERS[0];
                return (
                  <div key={member.id} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 group">
                    <div className="flex-1 text-center sm:text-right flex flex-col items-center sm:items-end order-2 sm:order-1">
                      {/* Name Badge */}
                      <div
                        style={{ backgroundColor: member.badgeColor || '#ea4335' }}
                        className="text-white font-bold text-base sm:text-lg px-6 py-1.5 shadow-sm inline-block tracking-wide"
                      >
                        {member.name}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3 mb-1.5 tracking-tight">
                        {member.role.split('&')[0].trim()}
                      </h3>

                      {/* Department / Category */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {member.department}
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-3 text-center sm:text-right">
                        {member.bio}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#e53935] transition cursor-pointer"
                      >
                        <span>Ver credenciales</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Slanted Photo */}
                    <div className="order-1 sm:order-2 shrink-0 relative">
                      <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-64 md:h-72 overflow-hidden [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)] bg-slate-200 shadow-inner group-hover:shadow-md transition">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Fallback in case of network constraint
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Member 2: Top Right (Teal / Green badge) */}
              {(() => {
                const member = TEAM_MEMBERS[1];
                return (
                  <div key={member.id} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 group">
                    <div className="flex-1 text-center sm:text-right flex flex-col items-center sm:items-end order-2 sm:order-1">
                      {/* Name Badge */}
                      <div
                        style={{ backgroundColor: member.badgeColor || '#00897b' }}
                        className="text-white font-bold text-base sm:text-lg px-6 py-1.5 shadow-sm inline-block tracking-wide"
                      >
                        {member.name}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3 mb-1.5 tracking-tight">
                        {member.role.split('&')[0].trim()}
                      </h3>

                      {/* Department / Category */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {member.department}
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-3 text-center sm:text-right">
                        {member.bio}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#00897b] transition cursor-pointer"
                      >
                        <span>Ver credenciales</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Slanted Photo */}
                    <div className="order-1 sm:order-2 shrink-0 relative">
                      <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-64 md:h-72 overflow-hidden [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)] bg-slate-200 shadow-inner group-hover:shadow-md transition">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* CENTER DIVIDER BAND: "Nuestro equipo" with geometric diamonds and horizontal line */}
            <div className="relative py-6 sm:py-8 my-4 border-y border-slate-200/90 bg-white/70 -mx-6 sm:-mx-10 px-6 sm:px-10 flex flex-col items-center justify-center">
              
              {/* Title from Reference Slide */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight text-center">
                Nuestro equipo
              </h2>

              {/* Decorative Geometric Diamonds and Accent Line matching reference */}
              <div className="flex items-center justify-center mt-3 gap-0 relative">
                {/* Orange/Coral Diamond */}
                <div className="w-4 h-4 border-2 border-[#e53935] rotate-45 transform bg-transparent shrink-0 z-10" />
                
                {/* Teal/Green Diamond (Interlocking) */}
                <div className="w-4 h-4 border-2 border-[#00897b] rotate-45 transform bg-transparent shrink-0 -ml-1.5 z-20" />
                
                {/* Horizontal Teal Accent Line extending to the right */}
                <div className="h-[2px] w-36 sm:w-64 md:w-80 bg-gradient-to-r from-[#00897b] via-[#00897b]/80 to-transparent ml-2 rounded-full" />
              </div>

              {/* Sub-label under divider */}
              <div className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-3">
                Conoce al equipo que lidera tu estrategia
              </div>
            </div>

            {/* BOTTOM ROW: 2 Members */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8">
              
              {/* Member 3: Bottom Left (Cyan / Azure badge) */}
              {(() => {
                const member = TEAM_MEMBERS[2];
                return (
                  <div key={member.id} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 group">
                    <div className="flex-1 text-center sm:text-right flex flex-col items-center sm:items-end order-2 sm:order-1">
                      {/* Name Badge */}
                      <div
                        style={{ backgroundColor: member.badgeColor || '#0288d1' }}
                        className="text-white font-bold text-base sm:text-lg px-6 py-1.5 shadow-sm inline-block tracking-wide"
                      >
                        {member.name}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3 mb-1.5 tracking-tight">
                        {member.role.split('&')[0].trim()}
                      </h3>

                      {/* Department / Category */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {member.department}
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-3 text-center sm:text-right">
                        {member.bio}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#0288d1] transition cursor-pointer"
                      >
                        <span>Ver credenciales</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Slanted Photo */}
                    <div className="order-1 sm:order-2 shrink-0 relative">
                      <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-64 md:h-72 overflow-hidden [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)] bg-slate-200 shadow-inner group-hover:shadow-md transition">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Member 4: Bottom Right (Slate / Charcoal badge) */}
              {(() => {
                const member = TEAM_MEMBERS[3];
                return (
                  <div key={member.id} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 group">
                    <div className="flex-1 text-center sm:text-right flex flex-col items-center sm:items-end order-2 sm:order-1">
                      {/* Name Badge */}
                      <div
                        style={{ backgroundColor: member.badgeColor || '#455a64' }}
                        className="text-white font-bold text-base sm:text-lg px-6 py-1.5 shadow-sm inline-block tracking-wide"
                      >
                        {member.name}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3 mb-1.5 tracking-tight">
                        {member.role.split('&')[0].trim()}
                      </h3>

                      {/* Department / Category */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        {member.department}
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-3 text-center sm:text-right">
                        {member.bio}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#455a64] transition cursor-pointer"
                      >
                        <span>Ver credenciales</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Slanted Photo */}
                    <div className="order-1 sm:order-2 shrink-0 relative">
                      <div className="w-44 sm:w-48 md:w-56 h-56 sm:h-64 md:h-72 overflow-hidden [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)] bg-slate-200 shadow-inner group-hover:shadow-md transition">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* Optional Switcher to view more team specialists */}
            {TEAM_MEMBERS.length > 4 && (
              <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium">
                  Más especialistas sénior: {TEAM_MEMBERS.slice(4).map(m => m.name).join(', ')}
                </div>
                <div className="flex items-center gap-2">
                  {TEAM_MEMBERS.slice(4).map((specialist) => (
                    <button
                      key={specialist.id}
                      onClick={() => setSelectedMember(specialist)}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#74bf28] hover:text-[#58991b] transition shadow-2xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{specialist.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({specialist.role.split('&')[0]})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                {selectedMember.imageUrl ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0 border border-slate-200">
                    <img
                      src={selectedMember.imageUrl}
                      alt={selectedMember.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-105"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0f1d] text-[#74bf28] font-mono font-extrabold text-xl flex items-center justify-center shadow-md shrink-0">
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs font-bold text-[#5fa01f]">
                    {selectedMember.role}
                  </div>
                  <div className="text-xs text-slate-500">
                    {selectedMember.department} • {selectedMember.experienceYears}+ años de experiencia
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                {selectedMember.bio}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Especialidades & Certificaciones Oficiales
                </h4>
                <div className="space-y-2">
                  {selectedMember.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-[#74bf28] shrink-0" />
                      <span className="font-semibold">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    const memberTopic = `Reunión con ${selectedMember.name} (${selectedMember.role})`;
                    setSelectedMember(null);
                    onOpenConsultation(memberTopic);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#74bf28] hover:bg-[#8ce033] text-[#060a12] text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Agendar reunión con este especialista</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#74bf28]/10 text-[#5fa01f] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            Nuestra Historia
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Hitos que definen nuestra evolución tecnológica
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            17 años anticipando las transformaciones de la industria digital en Latinoamérica.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {COMPANY_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#74bf28] shadow-xs transition-all flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group"
            >
              <div className="shrink-0">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#0a0f1d] text-[#74bf28] group-hover:bg-[#74bf28] group-hover:text-[#060a12] font-mono font-extrabold text-sm transition-all shadow-sm">
                  {milestone.year}
                </span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#58991b] transition">
                  {milestone.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office & Regional Presence Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0a0f1d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#74bf28] font-mono font-bold uppercase">
                <MapPin className="w-4 h-4" />
                <span>CASA MATRIZ • SANTIAGO DE CHILE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Villavicencio 361, Barrio Lastarria
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Nuestra sede principal está ubicada en el corazón cultural y tecnológico de Santiago de Chile. Desde aquí operamos proyectos de alta escala para clientes en Chile, Perú, Colombia, México y Centroamérica.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span>+56 2 2638 8805</span>
                <span>•</span>
                <span>contacto@mentalidadweb.com</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 p-4 bg-[#111c35] rounded-xl border border-slate-700 text-center">
                <div className="text-lg font-bold text-white">Chile & Cono Sur</div>
                <div className="text-[11px] text-slate-400 mt-1">HQ Central Santiago</div>
              </div>
              <div className="flex-1 p-4 bg-[#111c35] rounded-xl border border-slate-700 text-center">
                <div className="text-lg font-bold text-[#74bf28]">Región Andina</div>
                <div className="text-[11px] text-slate-400 mt-1">Perú & Colombia Hub</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner Matching Wireframe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
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
            onClick={() => onOpenConsultation('Nosotros / Quiénes Somos')}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-[#060a12] text-white hover:bg-slate-900 text-xs uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            Agendar llamada
          </button>
        </div>
      </div>
    </div>
  );
};
