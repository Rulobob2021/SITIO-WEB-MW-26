import React, { useState } from 'react';
import { Database, ShieldCheck, Users, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface PillarItem {
  num: string;
  numColor: string;
  arrowColor: string;
  title: string;
  description: string;
  highlight: string;
  iconName: 'team' | 'database' | 'chat' | 'globe';
}

export const MentalidadPillarsInfographic: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars: PillarItem[] = [
    {
      num: '01',
      numColor: '#0f223d', // Dark Navy
      arrowColor: '#0f223d',
      title: 'Rigor Matemático & Datos Verídicos',
      description:
        'Rechazamos las vanity metrics y los informes inflados. Nuestra obsesión es medir el retorno real sobre la inversión (ROAS), el margen de contribución y el costo neto de adquisición.',
      highlight: 'Modelos de atribución avanzados y auditoría sin sesgos.',
      iconName: 'team'
    },
    {
      num: '02',
      numColor: '#74bf28', // Brand Lime Green
      arrowColor: '#74bf28',
      title: 'Privacidad First-Party & Ley 21.719',
      description:
        'Lideramos la transición regional hacia la protección de datos personales con arquitecturas seguras en Google Cloud (Cloud Run), GTM Server-Side y Consent Mode v2.',
      highlight: 'Cumplimiento normativo y resiliencia post-cookies.',
      iconName: 'database'
    },
    {
      num: '03',
      numColor: '#15803d', // Forest Green
      arrowColor: '#15803d',
      title: 'Consultoría Senior & Acompañamiento',
      description:
        'No delegamos tu negocio en perfiles junior. Cada cuenta cuenta con un Lead Consultant certificado y un Solution Architect con más de una década de experiencia.',
      highlight: 'Acompañamiento estratégico directo C-Level.',
      iconName: 'chat'
    },
    {
      num: '04',
      numColor: '#0f223d', // Dark Navy
      arrowColor: '#0f223d',
      title: 'Alianzas Tecnológicas de Élite',
      description:
        'Estamos situados en el Top 3% de Google Premier Partners en Latinoamérica, con credenciales oficiales en Google Cloud Platform y licenciamiento oficial GMP.',
      highlight: 'Acceso prioritario a betas y soporte de ingeniería de Google.',
      iconName: 'globe'
    }
  ];

  // Helper for polar to cartesian coordinates (0° is 12 o'clock, clockwise)
  const polarToCartesian = (cx: number, cy: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + radius * Math.cos(angleInRadians),
      y: cy + radius * Math.sin(angleInRadians)
    };
  };

  // Helper to generate SVG path for a circular curved arrow
  const createArrowPath = (
    cx: number,
    cy: number,
    rInner: number,
    rOuter: number,
    startAngle: number,
    endAngle: number,
    tipAngle: number,
    flare: number = 10
  ) => {
    const startOuter = polarToCartesian(cx, cy, rOuter, startAngle);
    const endOuter = polarToCartesian(cx, cy, rOuter, endAngle);
    const flareOuter = polarToCartesian(cx, cy, rOuter + flare, endAngle);
    const tip = polarToCartesian(cx, cy, (rInner + rOuter) / 2, tipAngle);
    const flareInner = polarToCartesian(cx, cy, rInner - flare, endAngle);
    const endInner = polarToCartesian(cx, cy, rInner, endAngle);
    const startInner = polarToCartesian(cx, cy, rInner, startAngle);

    const largeArc = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      `M ${startOuter.x.toFixed(2)} ${startOuter.y.toFixed(2)}`,
      `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${endOuter.x.toFixed(2)} ${endOuter.y.toFixed(2)}`,
      `L ${flareOuter.x.toFixed(2)} ${flareOuter.y.toFixed(2)}`,
      `L ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
      `L ${flareInner.x.toFixed(2)} ${flareInner.y.toFixed(2)}`,
      `L ${endInner.x.toFixed(2)} ${endInner.y.toFixed(2)}`,
      `A ${rInner} ${rInner} 0 ${largeArc} 0 ${startInner.x.toFixed(2)} ${startInner.y.toFixed(2)}`,
      'Z'
    ].join(' ');
  };

  // Geometry configuration for the mind cycle
  const cx = 350;
  const cy = 250;
  const rOuter = 160;
  const rInner = 105;

  // 4 curved arrows matching the reference image cycle
  // Arrow 1: Top-Left (Navy)
  const arrow1Path = createArrowPath(cx, cy, rInner, rOuter, 280, 348, 4, 11);
  // Arrow 2: Top-Right (Lime Green)
  const arrow2Path = createArrowPath(cx, cy, rInner, rOuter, 10, 78, 94, 11);
  // Arrow 3: Bottom-Right (Forest Green)
  const arrow3Path = createArrowPath(cx, cy, rInner, rOuter, 100, 168, 184, 11);
  // Arrow 4: Bottom-Left (Navy)
  const arrow4Path = createArrowPath(cx, cy, rInner, rOuter, 190, 258, 274, 11);

  // Icon position calculation along the mid-radius arc
  const iconPos1 = polarToCartesian(cx, cy, (rInner + rOuter) / 2, 314);
  const iconPos2 = polarToCartesian(cx, cy, (rInner + rOuter) / 2, 44);
  const iconPos3 = polarToCartesian(cx, cy, (rInner + rOuter) / 2, 134);
  const iconPos4 = polarToCartesian(cx, cy, (rInner + rOuter) / 2, 224);

  return (
    <div className="relative w-full py-8">
      {/* Desktop & Tablet View (lg and up) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Pillars 01 and 02 */}
        <div className="col-span-4 space-y-16">
          {/* Pillar 01 */}
          <div
            onMouseEnter={() => setActivePillar(0)}
            onMouseLeave={() => setActivePillar(null)}
            className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
              activePillar === 0
                ? 'bg-slate-50 shadow-md border-l-4 border-[#0f223d] translate-x-1'
                : 'hover:bg-slate-50/70'
            }`}
          >
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-[#0f223d] font-serif mb-2">
              {pillars[0].num}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2">
              {pillars[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pillars[0].description}
            </p>
            {activePillar === 0 && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0f223d] bg-slate-200/60 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#74bf28]" />
                <span>{pillars[0].highlight}</span>
              </div>
            )}
          </div>

          {/* Pillar 02 */}
          <div
            onMouseEnter={() => setActivePillar(1)}
            onMouseLeave={() => setActivePillar(null)}
            className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
              activePillar === 1
                ? 'bg-slate-50 shadow-md border-l-4 border-[#74bf28] translate-x-1'
                : 'hover:bg-slate-50/70'
            }`}
          >
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-[#74bf28] font-serif mb-2">
              {pillars[1].num}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2">
              {pillars[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pillars[1].description}
            </p>
            {activePillar === 1 && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#5fa01f] bg-emerald-50 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#74bf28]" />
                <span>{pillars[1].highlight}</span>
              </div>
            )}
          </div>
        </div>

        {/* Center Column: Mind Silhouette & Brain Cycle Infographic */}
        <div className="col-span-4 flex items-center justify-center relative">
          <div className="w-full max-w-[460px] aspect-square relative select-none">
            <svg
              viewBox="0 0 700 560"
              className="w-full h-full drop-shadow-md overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="mind-center-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000000" floodOpacity="0.16" />
                </filter>
                <filter id="arrow-glow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Head Silhouette in Deep Corporate Navy (#0a192f) */}
              <path
                d="
                  M 230 550
                  L 245 440
                  C 240 405, 230 375, 205 355
                  C 195 348, 190 342, 192 332
                  C 194 322, 204 318, 204 310
                  C 204 302, 192 295, 192 284
                  C 192 276, 198 270, 210 264
                  L 170 240
                  C 165 235, 168 228, 178 222
                  L 220 205
                  C 228 192, 228 180, 222 170
                  C 214 148, 220 120, 240 95
                  C 265 65, 305 40, 355 35
                  C 365 34, 375 34, 385 35
                  L 385 100
                  C 365 100, 335 110, 310 135
                  C 275 170, 275 220, 290 260
                  C 295 275, 305 290, 320 305
                  C 335 320, 350 330, 365 338
                  L 365 550
                  Z
                "
                fill="#0a192f"
              />

              {/* Lower base connecting neck and occipital back */}
              <path
                d="
                  M 365 338
                  C 390 350, 420 360, 455 365
                  C 480 368, 500 365, 520 355
                  L 520 440
                  C 480 470, 440 510, 420 550
                  L 365 550
                  Z
                "
                fill="#0a192f"
                opacity="0.95"
              />

              {/* Curved Arrows (Cycle inside the mind) */}
              
              {/* Arrow 1: Top-Left (Navy) */}
              <path
                d={arrow1Path}
                fill={activePillar === 0 ? '#1e3a8a' : '#0f223d'}
                filter="url(#arrow-glow)"
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActivePillar(0)}
                onMouseLeave={() => setActivePillar(null)}
              />

              {/* Arrow 2: Top-Right (Lime Green) */}
              <path
                d={arrow2Path}
                fill={activePillar === 1 ? '#8ce033' : '#74bf28'}
                filter="url(#arrow-glow)"
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActivePillar(1)}
                onMouseLeave={() => setActivePillar(null)}
              />

              {/* Arrow 3: Bottom-Right (Forest Green) */}
              <path
                d={arrow3Path}
                fill={activePillar === 2 ? '#22c55e' : '#15803d'}
                filter="url(#arrow-glow)"
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActivePillar(2)}
                onMouseLeave={() => setActivePillar(null)}
              />

              {/* Arrow 4: Bottom-Left (Navy / Tech Blue) */}
              <path
                d={arrow4Path}
                fill={activePillar === 3 ? '#0369a1' : '#0a2540'}
                filter="url(#arrow-glow)"
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActivePillar(3)}
                onMouseLeave={() => setActivePillar(null)}
              />

              {/* White Minimalist Line Icons inside the Curved Arrows */}
              
              {/* Icon 1: Organization / Team Hierarchy (Top-Left Arrow) */}
              <g transform={`translate(${iconPos1.x - 14}, ${iconPos1.y - 14})`} stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                <circle cx="14" cy="5" r="3" />
                <path d="M10 11h8" />
                <path d="M14 11v5" />
                <path d="M6 16h16" />
                <circle cx="6" cy="21" r="2.5" />
                <circle cx="14" cy="21" r="2.5" />
                <circle cx="22" cy="21" r="2.5" />
              </g>

              {/* Icon 2: Binders / Data Architecture (Top-Right Arrow) */}
              <g transform={`translate(${iconPos2.x - 13}, ${iconPos2.y - 13})`} stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                <rect x="3" y="3" width="6" height="20" rx="1" />
                <rect x="11" y="3" width="6" height="20" rx="1" />
                <rect x="19" y="3" width="6" height="20" rx="1" />
                <circle cx="6" cy="18" r="1" fill="#ffffff" />
                <circle cx="14" cy="18" r="1" fill="#ffffff" />
                <circle cx="22" cy="18" r="1" fill="#ffffff" />
              </g>

              {/* Icon 3: Speech Bubbles / Dialogue (Bottom-Right Arrow) */}
              <g transform={`translate(${iconPos3.x - 14}, ${iconPos3.y - 14})`} stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                <path d="M6 18H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                <path d="M10 11h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3l-4 3v-3h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z" />
              </g>

              {/* Icon 4: Globe / Global Alliances (Bottom-Left Arrow) */}
              <g transform={`translate(${iconPos4.x - 14}, ${iconPos4.y - 14})`} stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                <circle cx="14" cy="14" r="10" />
                <path d="M4 14h20" />
                <ellipse cx="14" cy="14" rx="5" ry="10" />
              </g>

              {/* Central White Badge with Drop Shadow ("Mentalidad / ADN") */}
              <circle
                cx={cx}
                cy={cy}
                r={80}
                fill="#ffffff"
                filter="url(#mind-center-shadow)"
              />
              <circle
                cx={cx}
                cy={cy}
                r={79}
                stroke="#e2e8f0"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Center Typography matching the reference style */}
              <text
                x={cx}
                y={cy - 4}
                textAnchor="middle"
                fill="#0f223d"
                fontSize="24"
                fontWeight="800"
                fontFamily="Georgia, serif"
                letterSpacing="0.5"
              >
                Mentalidad
              </text>
              <text
                x={cx}
                y={cy + 18}
                textAnchor="middle"
                fill="#74bf28"
                fontSize="11"
                fontWeight="800"
                letterSpacing="2.5"
                className="uppercase"
              >
                PILARES
              </text>
            </svg>
          </div>
        </div>

        {/* Right Column: Pillars 03 and 04 */}
        <div className="col-span-4 space-y-16">
          {/* Pillar 03 */}
          <div
            onMouseEnter={() => setActivePillar(2)}
            onMouseLeave={() => setActivePillar(null)}
            className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
              activePillar === 2
                ? 'bg-slate-50 shadow-md border-r-4 border-[#15803d] -translate-x-1'
                : 'hover:bg-slate-50/70'
            }`}
          >
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-[#15803d] font-serif mb-2">
              {pillars[2].num}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2">
              {pillars[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pillars[2].description}
            </p>
            {activePillar === 2 && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] bg-emerald-50 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                <span>{pillars[2].highlight}</span>
              </div>
            )}
          </div>

          {/* Pillar 04 */}
          <div
            onMouseEnter={() => setActivePillar(3)}
            onMouseLeave={() => setActivePillar(null)}
            className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
              activePillar === 3
                ? 'bg-slate-50 shadow-md border-r-4 border-[#0f223d] -translate-x-1'
                : 'hover:bg-slate-50/70'
            }`}
          >
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-[#0f223d] font-serif mb-2">
              {pillars[3].num}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2">
              {pillars[3].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pillars[3].description}
            </p>
            {activePillar === 3 && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0f223d] bg-slate-200/60 px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#74bf28]" />
                <span>{pillars[3].highlight}</span>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Mobile & Tablet View (< lg) */}
      <div className="lg:hidden space-y-8 max-w-xl mx-auto">
        {/* Mind Cycle Graphic centered */}
        <div className="w-full max-w-[340px] mx-auto aspect-square">
          <svg
            viewBox="0 0 700 560"
            className="w-full h-full drop-shadow-md overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="mind-center-shadow-m" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000000" floodOpacity="0.16" />
              </filter>
            </defs>

            {/* Silhouette */}
            <path
              d="
                M 230 550
                L 245 440
                C 240 405, 230 375, 205 355
                C 195 348, 190 342, 192 332
                C 194 322, 204 318, 204 310
                C 204 302, 192 295, 192 284
                C 192 276, 198 270, 210 264
                L 170 240
                C 165 235, 168 228, 178 222
                L 220 205
                C 228 192, 228 180, 222 170
                C 214 148, 220 120, 240 95
                C 265 65, 305 40, 355 35
                C 365 34, 375 34, 385 35
                L 385 100
                C 365 100, 335 110, 310 135
                C 275 170, 275 220, 290 260
                C 295 275, 305 290, 320 305
                C 335 320, 350 330, 365 338
                L 365 550
                Z
              "
              fill="#0a192f"
            />
            <path
              d="
                M 365 338
                C 390 350, 420 360, 455 365
                C 480 368, 500 365, 520 355
                L 520 440
                C 480 470, 440 510, 420 550
                L 365 550
                Z
              "
              fill="#0a192f"
              opacity="0.95"
            />

            {/* Arrows */}
            <path d={arrow1Path} fill="#0f223d" />
            <path d={arrow2Path} fill="#74bf28" />
            <path d={arrow3Path} fill="#15803d" />
            <path d={arrow4Path} fill="#0a2540" />

            {/* Central White Badge */}
            <circle cx={cx} cy={cy} r={80} fill="#ffffff" filter="url(#mind-center-shadow-m)" />
            <circle cx={cx} cy={cy} r={79} stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill="#0f223d"
              fontSize="24"
              fontWeight="800"
              fontFamily="Georgia, serif"
            >
              Mentalidad
            </text>
            <text
              x={cx}
              y={cy + 18}
              textAnchor="middle"
              fill="#74bf28"
              fontSize="11"
              fontWeight="800"
              letterSpacing="2.5"
            >
              PILARES
            </text>
          </svg>
        </div>

        {/* 4 Cards stacked cleanly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2"
            >
              <div
                className="text-4xl font-black font-serif tracking-tight"
                style={{ color: pillar.numColor }}
              >
                {pillar.num}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
