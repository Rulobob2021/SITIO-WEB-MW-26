export interface ServiceColorTheme {
  id: string;
  name: string;
  cardBg: string;
  borderColor: string;
  hoverShadow: string;
  glowColor: string;
  topLine: string;
  iconBox: string;
  badge: string;
  titleColor: string;
  titleHover: string;
  subtitleColor: string;
  descriptionColor: string;
  actionText: string;
  actionIconCircle: string;
  hexAccent: string;
}

const UNIFIED_STYLE: Omit<ServiceColorTheme, 'id' | 'name'> = {
  // Exact styling matching the user's reference image:
  // Clean off-white background subtly fading into a fresh soft lime tint
  cardBg: 'bg-gradient-to-b from-white via-[#fcfefb] to-[#f0fae8]',
  borderColor: 'border-[#74bf28]/35 hover:border-[#74bf28]',
  hoverShadow: 'hover:shadow-[0_20px_40px_-12px_rgba(116,191,40,0.22)]',
  glowColor: 'group-hover:bg-[#74bf28]/10',
  topLine: 'bg-gradient-to-r from-[#65a30d] via-[#74bf28] to-[#8ce033]',
  iconBox: 'bg-[#dcfce7] border border-[#86efac] text-[#166534] group-hover:bg-[#74bf28] group-hover:text-white group-hover:border-[#74bf28] group-hover:shadow-[0_0_16px_rgba(116,191,40,0.35)]',
  badge: 'bg-[#dcfce7] text-[#166534] border border-[#86efac] group-hover:bg-[#74bf28] group-hover:text-white group-hover:border-[#74bf28]',
  titleColor: 'text-[#0f172a]',
  titleHover: 'group-hover:text-[#166534]',
  subtitleColor: 'text-[#52931c]',
  descriptionColor: 'text-slate-600',
  actionText: 'text-[#245b08] font-bold',
  actionIconCircle: 'bg-[#dcfce7] border border-[#86efac] text-[#166534] group-hover:bg-[#74bf28] group-hover:text-white group-hover:border-[#74bf28]',
  hexAccent: '#74bf28'
};

export const SERVICE_COLOR_THEMES: Record<string, ServiceColorTheme> = {
  consultoria: {
    id: 'consultoria',
    name: 'Consultoría & Analítica',
    ...UNIFIED_STYLE
  },
  data: {
    id: 'data',
    name: 'Data & Google Cloud',
    ...UNIFIED_STYLE
  },
  'marketing-digital': {
    id: 'marketing-digital',
    name: 'Marketing Digital & DV360',
    ...UNIFIED_STYLE
  },
  'marketing-contenido': {
    id: 'marketing-contenido',
    name: 'Marketing de Contenido & HubSpot',
    ...UNIFIED_STYLE
  },
  tecnologia: {
    id: 'tecnologia',
    name: 'Tecnología & IA Aplicada',
    ...UNIFIED_STYLE
  },
  'creatividad-desarrollo': {
    id: 'creatividad-desarrollo',
    name: 'Creatividad & Desarrollo Web',
    ...UNIFIED_STYLE
  }
};

export const getServiceTheme = (serviceId: string, _index?: number): ServiceColorTheme => {
  if (SERVICE_COLOR_THEMES[serviceId]) {
    return SERVICE_COLOR_THEMES[serviceId];
  }
  return SERVICE_COLOR_THEMES.consultoria;
};
