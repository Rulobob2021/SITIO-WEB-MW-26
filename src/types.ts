export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
  techStack: string[];
  impactMetric: string;
  category?: 'consultoria-data' | 'campanas-performance' | 'marketing-contenidos' | 'desarrollo-creatividad';
  categoryTitle?: string;
}

export interface ServiceCategory {
  id: 'consultoria-data' | 'campanas-performance' | 'marketing-contenidos' | 'desarrollo-creatividad';
  title: string;
  label: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  categoryTag: string;
  techBadge: string;
  title: string;
  summary: string;
  description: string;
  highlightMetric: string;
  highlightLabel: string;
  roasMetric: string;
  cpaMetric: string;
  pipelineStatus: string;
  keyAchievements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface ClientLogo {
  name: string;
  fullTitle: string;
  industry: string;
  highlight: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  shortName: string;
  industry: string;
  sectorTag: string;
  highlight: string;
  scope: string[];
  metrics: string;
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  certifications: string[];
  experienceYears: number;
  imageUrl?: string;
  badgeColor?: string;
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}
