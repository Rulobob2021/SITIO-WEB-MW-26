import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MentalidadWebLogo } from './MentalidadWebLogo';

interface NavbarProps {
  onOpenDiagnostic?: () => void;
  onOpenConsultation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDiagnostic,
  onOpenConsultation,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-[#1e293b]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center group focus:outline-none transition-transform hover:scale-[1.02] cursor-pointer"
          title="Mentalidad Web - Home"
          aria-label="Mentalidad Web - Inicio"
        >
          <MentalidadWebLogo className="h-8 sm:h-9 w-auto" variant="white" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`flex items-center gap-1.5 transition-colors ${
              activeSection === 'inicio' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#74bf28]"></span>
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('servicios')}
            className={`transition-colors relative flex items-center ${
              activeSection === 'servicios' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Servicios
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-[#74bf28]/20 text-[#74bf28] border border-[#74bf28]/40 rounded">
              GMP
            </span>
          </button>
          <button
            onClick={() => handleNavClick('casos')}
            className={`transition-colors ${
              activeSection === 'casos' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Casos de Éxito
          </button>
          <button
            onClick={() => handleNavClick('clientes')}
            className={`transition-colors ${
              activeSection === 'clientes' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Clientes
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors ${
              activeSection === 'blog' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('nosotros')}
            className={`transition-colors ${
              activeSection === 'nosotros' ? 'text-[#74bf28] font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Nosotros
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center space-x-4">
          {/* Direct CTA */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-bold rounded bg-[#74bf28] text-[#060a12] hover:bg-[#8ce033] transition shadow-lg green-glow-subtle cursor-pointer"
          >
            Hablemos / Diagnóstico
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35] flex items-center justify-between"
            >
              <span>Servicios</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#74bf28]/20 text-[#74bf28] border border-[#74bf28]/40 rounded">
                GMP
              </span>
            </button>
            <button
              onClick={() => handleNavClick('casos')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => handleNavClick('clientes')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Clientes
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#74bf28] rounded-md hover:bg-[#111c35]"
            >
              Nosotros
            </button>
          </div>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center px-4 py-2.5 text-xs uppercase tracking-wider font-bold rounded bg-[#74bf28] text-[#060a12] hover:bg-[#8ce033] transition"
            >
              Hablemos / Diagnóstico
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
