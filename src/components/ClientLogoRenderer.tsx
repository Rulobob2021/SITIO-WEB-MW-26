import React from 'react';

interface ClientLogoRendererProps {
  clientKey: string;
  className?: string;
}

export const ClientLogoRenderer: React.FC<ClientLogoRendererProps> = ({ clientKey, className }) => {
  const normalizedKey = clientKey.toLowerCase().replace(/[\s\-_]/g, '');
  const baseImgClass = className || "h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain select-none transition-transform duration-300";

  switch (normalizedKey) {
    case 'bci':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 175 60"
            className={baseImgClass}
            aria-label="Logo Bci somosdiferentes"
          >
            {/* Colorful Ribbon Emblem on Left */}
            <g transform="translate(4, 5) scale(1.45)">
              {/* Red diagonal cross ribbon */}
              <path
                d="M0.004 26.972C0.052 28.457 1.107 29.723 2.513 29.96C2.705 29.993 2.897 30.01 3.089 29.993C3.888 29.96 4.623 29.605 5.15 28.998C5.694 28.39 5.965 27.58 5.933 26.753C5.933 24.491 7.164 22.955 8.842 21.216C10.6 19.849 13.109 18.178 16.641 16.102C21.036 13.637 23.897 10.717 24.52 8.337L24.536 8.27C24.616 7.966 24.648 7.662 24.632 7.358C24.584 5.873 23.529 4.607 22.123 4.371C21.931 4.337 21.739 4.32 21.547 4.337C20.748 4.371 20.013 4.725 19.486 5.333C18.942 5.94 18.671 6.751 18.703 7.578C18.703 9.958 17.344 11.544 15.506 13.384C11.591 16.608 7.979 18.229 7.979 18.229C3.584 20.693 0.723 23.613 0.1 25.993L0.084 26.06C0.02 26.381 -0.012 26.685 0.004 26.972Z"
                fill="#EF3942"
              />
              {/* Green bottom-right loop */}
              <path
                d="M17.712 17.452C17.712 17.452 20.908 18.347 19.901 23.09C19.853 23.343 19.821 23.596 19.853 23.866C19.965 25.267 21.132 26.297 22.458 26.179C23.785 26.061 24.76 24.828 24.648 23.427C24.424 20.136 18.543 16.102 17.744 16.203C17.744 16.203 17.28 16.22 17.28 16.845C17.28 17.351 17.712 17.452 17.712 17.452Z"
                fill="#0C9647"
              />
              {/* Yellow bottom-left bulb */}
              <path
                d="M17.179 18.798C17.179 18.798 19.273 19.389 18.617 22.478C18.617 22.478 17.93 25.398 13.503 26.157C8.501 27.035 8.581 25.094 8.581 25.094C8.533 24.132 8.197 22.967 13.168 19.794C13.168 19.794 15.677 18.174 17.179 18.798Z"
                fill="#FDD700"
              />
              {/* Blue top-left loop */}
              <path
                d="M4.655 4.658C4.942 8.877 10.664 13.924 14.084 15.882C15.011 16.423 16.162 16.304 16.497 16.169C18.063 15.41 16.385 14.768 16.385 14.768C16.385 14.768 11 13.249 12.678 5.248C12.773 4.826 12.805 4.388 12.773 3.932C12.582 1.569 10.616 -0.187 8.378 0.016C6.125 0.218 4.463 2.295 4.655 4.658Z"
                fill="#2C70B8"
              />
            </g>

            {/* Wordmark "Bci" in Black with Serif details */}
            <text
              x="52"
              y="37"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="bold"
              fontSize="37"
              className="fill-[#111827]"
            >
              Bci
            </text>

            {/* Subtitle "somosdiferentes" */}
            <text
              x="53"
              y="52"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontWeight="500"
              fontSize="11"
              letterSpacing="-0.2px"
              className="fill-[#374151]"
            >
              somosdiferentes
            </text>
          </svg>
        </div>
      );

    case 'colun':
      return (
        <div className="flex items-center justify-center h-full w-full py-0.5">
          <svg
            viewBox="0 0 176 68"
            className={baseImgClass}
            aria-label="Logo Colun"
          >
            {/* The Holstein Cow silhouette standing on top */}
            <g transform="translate(58, 2) scale(0.65)">
              {/* Cow body base */}
              <path
                d="M10 24 C10 18, 14 12, 20 10 L26 8 C27 4, 30 2, 33 2 C35 2, 36 4, 35 7 L40 6 C43 6, 46 9, 46 13 L43 16 C48 16, 68 15, 78 17 C83 18, 86 21, 88 26 L89 33 C87 35, 87 40, 89 45 L88 47 L85 47 L84 37 C81 38, 77 39, 74 38 L73 47 L70 47 L71 36 C63 36, 52 38, 44 38 L43 47 L40 47 L41 35 C38 34, 33 34, 29 33 L28 47 L25 47 L26 31 C22 31, 17 28, 14 27 Z"
                className="fill-slate-900"
              />
              {/* Cow white body fill & spots */}
              <path
                d="M20 12 C24 12, 27 15, 29 18 C32 17, 36 17, 39 19 C38 23, 35 26, 32 26 C28 26, 25 24, 22 21 Z"
                fill="#FFFFFF"
              />
              <path
                d="M45 18 C50 16, 58 17, 62 21 C59 25, 54 28, 48 27 C44 26, 43 21, 45 18 Z"
                fill="#FFFFFF"
              />
              <path
                d="M68 20 C73 19, 79 21, 82 24 C80 29, 74 32, 69 30 C66 27, 66 22, 68 20 Z"
                fill="#FFFFFF"
              />
              {/* Cow hooves */}
              <rect x="25" y="45" width="3" height="3" fill="#111827" />
              <rect x="40" y="45" width="3" height="3" fill="#111827" />
              <rect x="70" y="45" width="3" height="3" fill="#111827" />
              <rect x="85" y="45" width="3" height="3" fill="#111827" />
            </g>

            {/* Red Organic Oval Banner */}
            <path
              d="M 22 40 C 14 29, 42 24, 88 24 C 134 24, 160 29, 154 44 C 148 58, 128 64, 88 64 C 48 64, 26 53, 22 40 Z"
              fill="#D91A2A"
            />

            {/* Lowercase rounded "colun" text in white */}
            <g transform="translate(88, 50)">
              {/* c */}
              <path
                d="M -48 -3 C -48 -8, -44 -11, -38 -11 C -33 -11, -30 -8, -29 -4 L -34 -3 C -34 -6, -36 -7, -38 -7 C -42 -7, -43 -4, -43 -1 C -43 2, -42 5, -38 5 C -36 5, -34 4, -34 1 L -29 2 C -30 6, -33 9, -38 9 C -44 9, -48 6, -48 -1 Z"
                fill="#FFFFFF"
              />
              {/* o */}
              <path
                d="M -26 -1 C -26 -7, -22 -11, -16 -11 C -10 -11, -6 -7, -6 -1 C -6 5, -10 9, -16 9 C -22 9, -26 5, -26 -1 Z M -21 -1 C -21 3, -19 5, -16 5 C -13 5, -11 3, -11 -1 C -11 -5, -13 -7, -16 -7 C -19 -7, -21 -5, -21 -1 Z"
                fill="#FFFFFF"
              />
              {/* l */}
              <rect x="-3" y="-15" width="5" height="23" rx="2.5" fill="#FFFFFF" />
              {/* u */}
              <path
                d="M 5 -10 L 10 -10 L 10 0 C 10 3, 11 5, 14 5 C 17 5, 18 3, 18 0 L 18 -10 L 23 -10 L 23 1 C 23 6, 19 9, 14 9 C 9 9, 5 6, 5 1 Z"
                fill="#FFFFFF"
              />
              {/* n */}
              <path
                d="M 27 -10 L 32 -10 L 32 -4 C 34 -8, 38 -10, 42 -10 C 47 -10, 50 -7, 50 -2 L 50 8 L 45 8 L 45 -1 C 45 -4, 43 -6, 40 -6 C 37 -6, 33 -4, 32 -1 L 32 8 L 27 8 Z"
                fill="#FFFFFF"
              />
              {/* M.R. */}
              <text x="52" y="8" fontFamily="sans-serif" fontSize="4.5" fontWeight="bold" fill="#FFFFFF">
                M.R.
              </text>
            </g>
          </svg>
        </div>
      );

    case 'falabella':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 182 46"
            className={baseImgClass}
            aria-label="Logo Falabella.com"
          >
            {/* Iconic lime green color #8ED200 */}
            <g fill="#8ED200" transform="translate(3, 3)">
              {/* f */}
              <path d="M12 8 C15 8, 17 9, 18 11 L18 14 C17 13.5, 16 13, 15 13 C14 13, 13.5 13.5, 13.5 14.5 L13.5 18 L18 18 L18 22 L13.5 22 L13.5 35 L8.5 35 L8.5 22 L5 22 L5 18 L8.5 18 L8.5 14 C8.5 10, 10 8, 12 8 Z" />
              {/* a */}
              <path d="M21 26 C21 21.5, 24.5 18, 29.5 18 C34.5 18, 38 21.5, 38 26 L38 35 L33.5 35 L33.5 32 C32 34, 29.5 35.5, 27 35.5 C23 35.5, 21 33, 21 29.5 C21 26, 23.5 24, 28 23.5 L33.5 23 L33.5 22.5 C33.5 20.5, 31.5 19.5, 29.5 19.5 C27.5 19.5, 25.5 20.5, 25 21.5 Z M33.5 26.5 L28.5 27 C26 27.5, 25.5 28.5, 25.5 29.5 C25.5 31, 27 32, 29 32 C31.5 32, 33.5 30, 33.5 27.5 Z" />
              {/* l */}
              <rect x="42" y="8" width="5" height="27" rx="1.5" />
              {/* a */}
              <path d="M51 26 C51 21.5, 54.5 18, 59.5 18 C64.5 18, 68 21.5, 68 26 L68 35 L63.5 35 L63.5 32 C62 34, 59.5 35.5, 57 35.5 C53 35.5, 51 33, 51 29.5 C51 26, 53.5 24, 58 23.5 L63.5 23 L63.5 22.5 C63.5 20.5, 61.5 19.5, 59.5 19.5 C57.5 19.5, 55.5 20.5, 55 21.5 Z M63.5 26.5 L58.5 27 C56 27.5, 55.5 28.5, 55.5 29.5 C55.5 31, 57 32, 59 32 C61.5 32, 63.5 30, 63.5 27.5 Z" />
              {/* b */}
              <path d="M72 8 L77 8 L77 21 C78.5 19, 81 18, 83.5 18 C89 18, 93 22, 93 26.5 C93 31.5, 89 35.5, 83.5 35.5 C81 35.5, 78.5 34.5, 77 32.5 L77 35 L72 35 Z M82.5 22 C79.5 22, 77 24, 77 26.5 C77 29.5, 79.5 31.5, 82.5 31.5 C85.5 31.5, 88 29.5, 88 26.5 C88 24, 85.5 22, 82.5 22 Z" />
              {/* e */}
              <path d="M97 26.5 C97 21.5, 101 18, 106 18 C111 18, 115 21.5, 115 27 L102 27 C102.5 29.5, 104.5 31.5, 107 31.5 C109 31.5, 110.5 30.5, 111.5 29.5 L114.5 31.5 C113 33.5, 110 35.5, 106 35.5 C101 35.5, 97 31.5, 97 26.5 Z M110 24 C109.5 22, 108 20.5, 106 20.5 C104 20.5, 102.5 22, 102 24 Z" />
              {/* l */}
              <rect x="119" y="8" width="5" height="27" rx="1.5" />
              {/* l */}
              <rect x="127" y="8" width="5" height="27" rx="1.5" />
              {/* a */}
              <path d="M136 26 C136 21.5, 139.5 18, 144.5 18 C149.5 18, 153 21.5, 153 26 L153 35 L148.5 35 L148.5 32 C147 34, 144.5 35.5, 142 35.5 C138 35.5, 136 33, 136 29.5 C136 26, 138.5 24, 143 23.5 L148.5 23 L148.5 22.5 C148.5 20.5, 146.5 19.5, 144.5 19.5 C142.5 19.5, 140.5 20.5, 140 21.5 Z M148.5 26.5 L143.5 27 C141 27.5, 140.5 28.5, 140.5 29.5 C140.5 31, 142 32, 144 32 C146.5 32, 148.5 30, 148.5 27.5 Z" />
              {/* . */}
              <circle cx="157.5" cy="33.5" r="2.4" />
              {/* c */}
              <path d="M161 26.5 C161 21.5, 164.5 18, 169 18 C171.5 18, 173.5 19, 174.5 20.5 L172 22.5 C171.5 21.5, 170.5 21, 169 21 C166.5 21, 165 23.5, 165 26.5 C165 29.5, 166.5 32, 169 32 C170.5 32, 171.5 31.5, 172 30.5 L174.5 32.5 C173.5 34, 171.5 35.5, 169 35.5 C164.5 35.5, 161 31.5, 161 26.5 Z" />
              {/* o */}
              <circle cx="178" cy="27" r="4.5" fill="none" stroke="#8ED200" strokeWidth="2.8" />
            </g>
          </svg>
        </div>
      );

    case 'lipigas':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 178 56"
            className={baseImgClass}
            aria-label="Logo Lipigas"
          >
            {/* Yellow-orange bean/flame symbol on left */}
            <g transform="translate(6, 6) scale(1.05)">
              <path
                d="M 16 23 C 12 12, 24 6, 36 10 C 47 6, 58 12, 54 23 C 51 34, 38 41, 35 41 C 32 41, 19 34, 16 23 Z"
                fill="#FFB703"
              />
              {/* White inner flowing swoosh */}
              <path
                d="M 35 12 C 27 16, 24 25, 31 33 C 34 36, 40 34, 38 28 C 36 23, 41 21, 38 16 C 37 14, 36 13, 35 12 Z"
                fill="#FFFFFF"
              />
            </g>

            {/* Wordmark "Lipigas" in slanted Navy Blue */}
            <g transform="translate(70, 39) skewX(-12)">
              <text
                x="0"
                y="0"
                fontFamily="'Montserrat', 'Arial Black', sans-serif"
                fontWeight="900"
                fontSize="29"
                letterSpacing="-0.5px"
                className="fill-[#002D62]"
              >
                Lipigas
              </text>
            </g>

            {/* Registered Trademark symbol */}
            <text
              x="166"
              y="22"
              fontFamily="sans-serif"
              fontWeight="bold"
              fontSize="9"
              className="fill-[#002D62]"
            >
              ®
            </text>
          </svg>
        </div>
      );

    case 'uc':
    case 'ucchile':
    case 'universidadcatolica':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 192 60"
            className={baseImgClass}
            aria-label="Logo Pontificia Universidad Católica de Chile"
          >
            {/* UC Crest / Escudo on the Left in #0066CC */}
            <g transform="translate(6, 3) scale(0.52)" className="stroke-[#0066CC] fill-none">
              {/* Papal Tiara & Cross on Top */}
              <path d="M45 4 L55 4 M50 1 L50 9" strokeWidth="2.5" />
              <path d="M38 14 C42 9, 58 9, 62 14 C58 17, 42 17, 38 14 Z" strokeWidth="2" />
              <path d="M34 22 C40 17, 60 17, 66 22 C60 25, 40 25, 34 22 Z" strokeWidth="2" />
              <path d="M30 30 C38 25, 62 25, 70 30 C62 33, 38 33, 30 30 Z" strokeWidth="2" />

              {/* Crossed keys */}
              <path d="M26 22 L74 38 M74 22 L26 38" strokeWidth="2" />

              {/* Outer circular shield ribbon */}
              <circle cx="50" cy="65" r="33" strokeWidth="2.5" />
              <circle cx="50" cy="65" r="30" strokeWidth="1.2" />

              {/* Shield Quadrants divider */}
              <line x1="50" y1="35" x2="50" y2="95" strokeWidth="2" />
              <line x1="20" y1="65" x2="80" y2="65" strokeWidth="2" />

              {/* Quadrant 1: Cross */}
              <path d="M35 44 L35 58 M28 49 L42 49" strokeWidth="2.2" />

              {/* Quadrant 2: Compass & Square */}
              <path d="M65 42 L60 58 L70 58 M56 46 L74 54" strokeWidth="1.8" />

              {/* Quadrant 3: Chalice */}
              <path d="M30 73 C30 81, 40 81, 40 73 Z M35 81 L35 86 M30 86 L40 86" strokeWidth="1.8" />

              {/* Quadrant 4: Scales of Justice */}
              <path d="M65 71 L65 85 M56 75 L74 75 M54 75 L52 82 L58 82 Z M72 75 L70 82 L76 82 Z" strokeWidth="1.8" />
            </g>

            {/* UC Classical Roman Serif Typography on Right */}
            <g
              transform="translate(64, 14)"
              className="fill-[#0066CC]"
              fontFamily="'Cinzel', 'Trajan Pro', 'Baskerville', 'Times New Roman', serif"
              fontWeight="700"
              fontSize="9.5"
              letterSpacing="0.8px"
            >
              <text x="0" y="0">PONTIFICIA</text>
              <text x="0" y="11.5">UNIVERSIDAD</text>
              <text x="0" y="23">CATÓLICA</text>
              <text x="0" y="34.5">DE CHILE</text>
            </g>
          </svg>
        </div>
      );

    case 'sodimac':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 180 50"
            className={baseImgClass}
            aria-label="Logo Sodimac Homecenter"
          >
            {/* Red house roof icon with yellow smile */}
            <g transform="translate(6, 4)">
              <path d="M 18 2 L 36 16 L 31 16 L 31 34 L 5 34 L 5 16 L 0 16 Z" fill="#E11D2A" />
              {/* White smile arc */}
              <path d="M 10 24 Q 18 31 26 24" stroke="#FEE100" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </g>
            <text
              x="50"
              y="26"
              fontFamily="'Impact', 'Montserrat', sans-serif"
              fontWeight="900"
              fontSize="24"
              letterSpacing="0.5px"
              fill="#E11D2A"
            >
              SODIMAC
            </text>
            <text
              x="51"
              y="38"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="9"
              letterSpacing="2.5px"
              fill="#002F6C"
            >
              HOMECENTER
            </text>
          </svg>
        </div>
      );

    case 'clinicaalemana':
    case 'alemana':
      return (
        <div className="flex items-center justify-center h-full w-full py-1">
          <svg
            viewBox="0 0 190 52"
            className={baseImgClass}
            aria-label="Logo Clínica Alemana"
          >
            {/* Emerald Medical Cross */}
            <g transform="translate(6, 6)">
              <circle cx="20" cy="20" r="18" fill="#0D8275" />
              <path d="M 16 10 L 24 10 L 24 16 L 30 16 L 30 24 L 24 24 L 24 30 L 16 30 L 16 24 L 10 24 L 10 16 L 16 16 Z" fill="#FFFFFF" />
            </g>
            <text
              x="52"
              y="25"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="700"
              fontSize="16"
              letterSpacing="-0.3px"
              fill="#0F2D37"
            >
              Clínica Alemana
            </text>
            <text
              x="52"
              y="37"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="500"
              fontSize="9"
              letterSpacing="1px"
              fill="#0D8275"
            >
              SANTIAGO DE CHILE
            </text>
          </svg>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight">
          {clientKey}
        </div>
      );
  }
};
