import React, { useState, useRef } from 'react';
import { CLIENTS_LIST } from '../data/martechData';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { ClientLogoRenderer } from './ClientLogoRenderer';

interface ClientTrustBarProps {
  onSelectClientCase?: (clientId: string) => void;
}

export const ClientTrustBar: React.FC<ClientTrustBarProps> = ({ onSelectClientCase }) => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Triple the list to create a seamless infinite looping carousel track
  const carouselItems = [...CLIENTS_LIST, ...CLIENTS_LIST, ...CLIENTS_LIST];

  const scrollTrack = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden" id="clientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
          
          <div>
            <span className="text-xs uppercase tracking-widest text-[#58991b] font-bold block mb-1">
              TRAYECTORIA & VALIDACIÓN REGIONAL
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              Confían en nosotros
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                +50 clientes enterprise
              </span>
            </h3>
          </div>

          {/* Carousel controls: Pause/Play & Manual scroll arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
              aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#58991b] fill-[#58991b]" />
                  <span className="hidden sm:inline text-slate-600">Reanudar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-slate-600">Pausar</span>
                </>
              )}
            </button>

            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

            <button
              onClick={() => scrollTrack('left')}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Anterior"
              aria-label="Anterior cliente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTrack('right')}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Siguiente"
              aria-label="Siguiente cliente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Carousel Track strictly contained within the max-w-7xl container */}
        <div className="relative w-full overflow-hidden rounded-2xl group/carousel">
          {/* Soft edge gradients for seamless entry and exit within container boundaries */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div
            ref={trackRef}
            className={`flex items-center overflow-x-auto no-scrollbar ${
              isPaused ? 'animate-marquee-paused' : 'animate-marquee'
            }`}
            style={{
              willChange: 'transform',
            }}
          >
            {carouselItems.map((client, index) => {
              const itemKey = `${client.name}-${index}`;
              return (
                <div
                  key={itemKey}
                  onClick={() => onSelectClientCase && onSelectClientCase(client.name.toLowerCase())}
                  className="w-52 sm:w-60 md:w-64 shrink-0 h-24 sm:h-28 flex items-center justify-center px-6 cursor-pointer group select-none transition-transform duration-300 hover:scale-105"
                  title={`${client.fullTitle} (${client.industry})`}
                >
                  {/* Logo en tonos grises por defecto, recupera su color original al pasar el cursor */}
                  <div className="w-full h-full flex items-center justify-center filter grayscale opacity-60 contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100">
                    <ClientLogoRenderer
                      clientKey={client.name}
                      className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain filter drop-shadow-xs transition-all duration-300"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
