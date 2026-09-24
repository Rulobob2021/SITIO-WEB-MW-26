import { ServiceItem, ServiceCategory, CaseStudy, BlogPost, ClientLogo, ClientProfile, TeamMember, DiagnosticQuestion } from '../types';
import blogPrivacyImg from '../assets/images/blog_privacy_law_1788811029071.jpg';
import blogStrategyImg from '../assets/images/blog_martech_strategy_1788811047518.jpg';
import blogAnalyticsImg from '../assets/images/blog_analytics_bi_1788811062892.jpg';
import blogCloudImg from '../assets/images/blog_cloud_servers_1788811080452.jpg';
import blogAiMlImg from '../assets/images/blog_ai_machinelearning_1788811098665.jpg';
import blogCreativeAiImg from '../assets/images/blog_creative_ai_1788811133436.jpg';

export const CLIENTS_LIST: ClientLogo[] = [
  {
    name: 'UC',
    fullTitle: 'Pontificia Universidad Católica de Chile',
    industry: 'Educación Superior',
    highlight: 'Consolidación de postgrados y trazabilidad First-Party integral'
  },
  {
    name: 'BCI',
    fullTitle: 'Banco de Crédito e Inversiones',
    industry: 'Banca & Servicios Financieros',
    highlight: 'Arquitectura BigQuery ML y optimización de adquisición digital'
  },
  {
    name: 'Falabella',
    fullTitle: 'Falabella Retail',
    industry: 'Retail & E-commerce',
    highlight: 'GTM Server-Side, Consent Mode v2 y atribución cross-device'
  },
  {
    name: 'Colun',
    fullTitle: 'Cooperativa Agrícola y Lechera de La Unión',
    industry: 'Consumo Masivo / Alimentos',
    highlight: 'Inteligencia de medios, GA4 empresarial y dashboards Looker'
  },
  {
    name: 'Lipigas',
    fullTitle: 'Empresas Lipigas S.A.',
    industry: 'Energía & Servicios',
    highlight: 'Trazabilidad omnicanal y orquestación de audiencias DV360'
  },
  {
    name: 'Sodimac',
    fullTitle: 'Sodimac Homecenter',
    industry: 'Retail & Construcción',
    highlight: 'Feeds dinámicos DCO, SA360 y modelos de atribución omnicanal'
  },
  {
    name: 'ClinicaAlemana',
    fullTitle: 'Clínica Alemana de Santiago',
    industry: 'Salud & Medicina',
    highlight: 'Protección de datos médicos sensibles y optimización de reservas'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'consultoria',
    title: 'Consultoría',
    subtitle: 'GA4, TAG MANAGER, SEO/GEO, ANALYTICS 360',
    description: 'Diseño de esquemas de eventos personalizados, licencias empresariales GA360, migración sin pérdidas y auditorías técnicas de Google Tag Manager.',
    iconName: 'SearchCode',
    tags: ['Google Analytics 4', 'GTM Server-Side', 'Analytics 360', 'Auditoría Técnica'],
    deliverables: [
      'Documento de arquitectura de datos (Data Layer Specification).',
      'Auditoría y limpieza de contenedores GTM web y Server-Side.',
      'Configuración de Consent Mode v2 según Ley 21.719.',
      'SLA garantizado para licencias empresariales Google Analytics 360.'
    ],
    techStack: ['GA4', 'GA360', 'Google Tag Manager', 'Cloud Functions', 'Looker Studio'],
    impactMetric: '100% trazabilidad sin pérdidas'
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'BIGQUERY, FULL STACK GMP, REAL TIME DASHBOARD',
    description: 'Centralización de data lakes en Google Cloud, integración nativa de DV360, SA360 y Campaign Manager para atribución cross-channel avanzada.',
    iconName: 'Database',
    tags: ['BigQuery', 'Google Cloud Platform', 'DV360', 'SA360', 'Looker'],
    deliverables: [
      'Exportación nativa de GA4 a BigQuery y deduplicación de eventos.',
      'Modelos de atribución algorítmica First-Party y Markov Chains.',
      'Dashboards ejecutivos automatizados en Looker Studio y Power BI.',
      'Canalizaciones ETL automatizadas hacia data warehouse corporativo.'
    ],
    techStack: ['BigQuery', 'Google Cloud', 'DV360', 'Search Ads 360', 'SQL / dbt'],
    impactMetric: '+18.4% precisión en atribución'
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    subtitle: 'MARKETING DIGITAL, CAMPAÑAS Y AUDITORÍA (SEM) PROGRAMMATIC / RICH MEDIA / DV360',
    description: 'Gestión y optimización algorítmica de campañas en Google Ads, Meta Ads y TikTok. Enfoque riguroso en costo por adquisición (CPA) y rentabilidad neta.',
    iconName: 'TrendingUp',
    tags: ['Display & Video 360', 'Google Ads', 'Programmatic', 'Meta Ads', 'Search Ads 360'],
    deliverables: [
      'Estrategias de compra programática con acuerdos preferenciales y PMP.',
      'Smart Bidding impulsado por señales offline y conversiones mejoradas.',
      'Auditorías continuas de desvío presupuestario y brand safety.',
      'Optimización de pauta basada en margen neto (Margen ROAS).'
    ],
    techStack: ['DV360', 'Google Ads', 'Meta Ads Manager', 'Campaign Manager 360'],
    impactMetric: '-24% reducción en CPA promedio'
  },
  {
    id: 'marketing-contenido',
    title: 'Marketing de Contenido',
    subtitle: 'INBOUND MARKETING SOCIAL MEDIA MARKETING',
    description: 'Automatización de marketing relacional mediante HubSpot, scoring de prospectos cualificados (MQL/SQL), orquestación de workflows y alineación del pipeline comercial.',
    iconName: 'FileSpreadsheet',
    tags: ['HubSpot Partner', 'Inbound Marketing', 'Lead Scoring', 'CRM Sync'],
    deliverables: [
      'Configuración de flujos automatizados de nutrición y re-engagement.',
      'Matriz de Lead Scoring automatizada conectada con el equipo de ventas.',
      'Estrategia editorial B2B orientada a intención de búsqueda comercial.',
      'Integración bidireccional CRM con plataformas publicitarias.'
    ],
    techStack: ['HubSpot', 'Salesforce', 'Make/Zapier', 'LinkedIn Ads', 'ActiveCampaign'],
    impactMetric: '+35% conversión MQL a SQL'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    subtitle: 'TRAINING Y CAPACITACIONES SOPORTE TÉCNICO GMP',
    description: 'Programas de formación ejecutiva y técnica a la medida en BigQuery para negocio, analítica predictiva y adopción de herramientas de IA generativa aplicada.',
    iconName: 'Cpu',
    tags: ['BigQuery ML', 'Capacitación MarTech', 'IA Predictiva', 'Soporte GMP'],
    deliverables: [
      'Workshops prácticos de SQL y BigQuery para equipos de marketing.',
      'Entrenamiento de modelos de Propensity to Purchase (Propensión de compra).',
      'Mesas de ayuda técnicas con respuesta en menos de 2 horas (SLA Tier 1).',
      'Certificación interna para equipos corporativos en el stack GMP.'
    ],
    techStack: ['Python', 'SQL', 'Vertex AI', 'TensorFlow Lite', 'GMP Academy'],
    impactMetric: '99.9% uptime en soporte técnico'
  },
  {
    id: 'creatividad-desarrollo',
    title: 'Creatividad y Desarrollo',
    subtitle: 'DESARROLLO WEB DISEÑO DE PIEZAS CREATIVAS',
    description: 'Desarrollo de landing pages de ultra-alta conversión con trazabilidad Server-Side y piezas rich media dinámicas adaptadas en tiempo real según señales de usuario.',
    iconName: 'LayoutTemplate',
    tags: ['Landing Pages', 'Server-Side Tagging', 'Rich Media', 'CRO & UX'],
    deliverables: [
      'Landings de carga ultrarrápida (< 1.2s LCP) optimizadas para Google Ads.',
      'Diseño responsive adaptado a la identidad corporativa y accesibilidad.',
      'Pruebas A/B multivariables continuas para optimización de tasa de conversión.',
      'Banners dinámicos (Studio / Creative) vinculados a feeds de productos en vivo.'
    ],
    techStack: ['React', 'Next.js / Vite', 'Tailwind CSS', 'Google Studio', 'VWO / Optimizely'],
    impactMetric: '+42% tasa de conversión'
  }
];

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    id: 'consultoria-data',
    title: 'Consultoría y data',
    label: 'SERVICIOS',
    description: 'Arquitectura de medición empresarial, data lakes en Google Cloud, licenciamiento GA360 y cumplimiento normativo Ley 21.719.',
    icon: 'Database',
    services: [
      {
        id: 'consultoria-ga4',
        title: 'Consultoría y data',
        subtitle: 'GA4, TAG MANAGER, SEO/GEO, ANALYTICS 360',
        description: 'Auditoría integral de esquemas de medición, diseño de Data Layer corporativo, implementación avanzada de Google Tag Manager Server-Side y migración sin pérdidas.',
        iconName: 'SearchCode',
        tags: ['Google Analytics 4', 'GTM Server-Side', 'Analytics 360', 'Auditoría Técnica'],
        deliverables: [
          'Data Layer Specification homologado según estándares corporativos.',
          'Limpieza y auditoría de contenedores GTM web y Server-Side en Google Cloud.',
          'Configuración de eventos de comercio electrónico mejorado y conversiones offline.',
          'Gobernanza continua y monitoreo de salud de etiquetas sin pérdidas.'
        ],
        techStack: ['GA4', 'GA360', 'Google Tag Manager', 'Cloud Functions', 'Looker Studio'],
        impactMetric: '100% trazabilidad validada',
        category: 'consultoria-data',
        categoryTitle: 'Consultoría y data'
      },
      {
        id: 'data-bigquery',
        title: 'BigQuery & Data Lake',
        subtitle: 'BIGQUERY, FULL STACK GMP, REAL TIME DASHBOARD',
        description: 'Centralización de data lakes en Google Cloud, streaming de eventos GA4 a BigQuery, modelos de atribución First-Party y automatización de pipelines ejecutivos.',
        iconName: 'Database',
        tags: ['BigQuery', 'Google Cloud Platform', 'DV360', 'SA360', 'Looker'],
        deliverables: [
          'Exportación nativa de GA4 a BigQuery y deduplicación de eventos raw.',
          'Modelos de atribución algorítmica First-Party y Markov Chains.',
          'Dashboards ejecutivos automatizados en Looker Studio y Power BI.',
          'Canalizaciones ETL automatizadas hacia data warehouse corporativo.'
        ],
        techStack: ['BigQuery', 'Google Cloud', 'DV360', 'Search Ads 360', 'SQL / dbt'],
        impactMetric: '+18.4% precisión en atribución',
        category: 'consultoria-data',
        categoryTitle: 'Consultoría y data'
      },
      {
        id: 'analytics-360',
        title: 'Analytics 360 Suite',
        subtitle: 'LICENCIAMIENTO ENTERPRISE, SLA 99.9%, AUDITORÍA',
        description: 'Suministro oficial y soporte de licencias GA360 para corporaciones. Trazabilidad sin límites de muestreo, SLA de procesamiento continuo y soporte especializado Tier 1.',
        iconName: 'Cpu',
        tags: ['Analytics 360', 'SLA 99.9%', 'GMP Enterprise', 'Auditoría'],
        deliverables: [
          'Contrato de licenciamiento oficial Google Marketing Platform Premier.',
          'SLA de uptime y actualización de datos en tiempo real (< 1 hora).',
          'Mesa técnica de soporte prioritario con respuesta en menos de 2 horas.',
          'Entrenamiento corporativo continuo para equipos de data y negocio.'
        ],
        techStack: ['GA360', 'Display & Video 360', 'Search Ads 360', 'Campaign Manager'],
        impactMetric: 'SLA corporativo 99.9%',
        category: 'consultoria-data',
        categoryTitle: 'Consultoría y data'
      },
      {
        id: 'privacidad-consent',
        title: 'Privacidad & Ley 21.719',
        subtitle: 'CONSENT MODE V2, SERVER-SIDE TAGGING, 1ST PARTY',
        description: 'Adecuación técnica a la nueva Ley de Protección de Datos Personales de Chile (Ley 21.719) y normativas globales con Consent Mode v2 y recolección First-Party.',
        iconName: 'ShieldCheck',
        tags: ['Ley 21.719', 'Consent Mode v2', 'Server-Side', 'First-Party Data'],
        deliverables: [
          'Auditoría de cookies, scripts y flujo de consentimiento en el sitio.',
          'Implementación avanzada de Google Consent Mode v2 (básico o avanzado).',
          'Migración de cookies a Server-Side Tagging en infraestructura Google Cloud.',
          'Estrategia de resiliencia y mitigación ante la degradación de cookies de terceros.'
        ],
        techStack: ['Consent Mode v2', 'Cloud Run', 'GTM Server-Side', 'OneTrust / Cookiebot'],
        impactMetric: '100% cumplimiento normativo',
        category: 'consultoria-data',
        categoryTitle: 'Consultoría y data'
      }
    ]
  },
  {
    id: 'campanas-performance',
    title: 'Campañas y performance',
    label: 'SERVICIOS',
    description: 'Estrategias de adquisición de alto rendimiento, compra programática en inventarios premium y optimización algorítmica del retorno sobre la inversión (ROAS).',
    icon: 'TrendingUp',
    services: [
      {
        id: 'performance-campanas',
        title: 'Campañas y performance',
        subtitle: 'PROGRAMMATIC, RICH MEDIA, DV360',
        description: 'Gestión y optimización algorítmica de campañas en Google Ads, Meta Ads y TikTok. Enfoque riguroso en costo por adquisición (CPA) y rentabilidad neta.',
        iconName: 'TrendingUp',
        tags: ['Display & Video 360', 'Google Ads', 'Programmatic', 'Meta Ads', 'Search Ads 360'],
        deliverables: [
          'Estrategias de compra programática con acuerdos preferenciales y PMP.',
          'Smart Bidding impulsado por señales offline y conversiones mejoradas.',
          'Auditorías continuas de desvío presupuestario y brand safety.',
          'Optimización de pauta basada en margen neto (Margen ROAS).'
        ],
        techStack: ['DV360', 'Google Ads', 'Meta Ads Manager', 'Campaign Manager 360'],
        impactMetric: '-24% reducción en CPA promedio',
        category: 'campanas-performance',
        categoryTitle: 'Campañas y performance'
      },
      {
        id: 'performance-google-ads',
        title: 'Google Ads & SA360',
        subtitle: 'SEARCH ADS 360, SMART BIDDING, PERFORMANCE MAX',
        description: 'Gestión de pauta en Google Ads y SA360 basada en modelos predictivos y Smart Bidding con datos First-Party y conversiones mejoradas (Enhanced Conversions).',
        iconName: 'Target',
        tags: ['Google Ads', 'Search Ads 360', 'Smart Bidding', 'Performance Max'],
        deliverables: [
          'Estructuras de campaña orientadas al margen de contribución del negocio.',
          'Activación de conversiones mejoradas offline y sincronización con CRM.',
          'Automatización de reglas de puja en Search Ads 360 para search e inventario.',
          'Optimización continua de términos de búsqueda y calidad de landing pages.'
        ],
        techStack: ['Search Ads 360', 'Google Ads', 'Google Merchant Center', 'Looker'],
        impactMetric: '+32% volumen de conversiones',
        category: 'campanas-performance',
        categoryTitle: 'Campañas y performance'
      },
      {
        id: 'performance-paid-social',
        title: 'Paid Social & Meta Ads',
        subtitle: 'META ADS, TIKTOK ADS, LINKEDIN B2B, CAPI',
        description: 'Estrategias de performance en redes sociales con integración profunda de Conversions API (CAPI) para sobrepasar las restricciones de tracking en navegadores.',
        iconName: 'Share2',
        tags: ['Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Conversions API'],
        deliverables: [
          'Integración Server-Side de Meta CAPI y TikTok Events API sin pérdida de señal.',
          'Modelado de audiencias lookalike con bases First-Party de clientes de alto valor LTV.',
          'Estrategias de pauta B2B en LinkedIn Ads por cuentas objetivo (ABM).',
          'Pruebas creativas semanales para evitar la fatiga y caída de rendimiento.'
        ],
        techStack: ['Meta Business Manager', 'TikTok Ads Manager', 'LinkedIn Campaign Manager', 'Meta CAPI'],
        impactMetric: '+38% retorno en inversión (ROAS)',
        category: 'campanas-performance',
        categoryTitle: 'Campañas y performance'
      },
      {
        id: 'performance-retail-media',
        title: 'Retail Media & Marketplaces',
        subtitle: 'FALABELLA, CENCOSUD MEDIA, MERCADO LIBRE, AMAZON',
        description: 'Aceleración de ventas en los principales retailers y marketplaces de Latinoamérica, aprovechando los datos First-Party en el momento exacto de compra.',
        iconName: 'ShoppingBag',
        tags: ['Retail Media', 'Cencosud Media', 'Falabella Media', 'Amazon Ads'],
        deliverables: [
          'Estrategias de Sponsored Products y Sponsored Brands con segmentación por categoría.',
          'Optimización de stock y correlación de pauta con disponibilidad en tiempo real.',
          'Modelos de atribución omnicanal con validación de sell-out en góndola física y digital.',
          'Reportes ejecutivos unificados de ventas y participación de mercado.'
        ],
        techStack: ['Cencosud Media Platform', 'Falabella Direct', 'Mercado Libre Ads', 'Amazon DSP'],
        impactMetric: '+52% aumento de GMV en retailers',
        category: 'campanas-performance',
        categoryTitle: 'Campañas y performance'
      }
    ]
  },
  {
    id: 'marketing-contenidos',
    title: 'Marketing de contenidos',
    label: 'SERVICIOS',
    description: 'Generación de demanda, construcción de comunidad y automatización del ciclo de vida del cliente mediante Inbound y CRM.',
    icon: 'MessageSquare',
    services: [
      {
        id: 'contenido-social-media',
        title: 'Social Media',
        subtitle: 'GA4, TAG MANAGER, SEO/GEO, ANALYTICS 360',
        description: 'Construcción de comunidades leales y posicionamiento de marca con contenido audiovisual de alto impacto, storytelling estratégico e interacción constante.',
        iconName: 'Share2',
        tags: ['Social Media', 'Storytelling', 'Short-Form Video', 'Community Management'],
        deliverables: [
          'Parrilla editorial mensual alineada a los pilares y objetivos de la marca.',
          'Producción de vídeos cortos nativos de alta retención (Reels, TikTok, Shorts).',
          'Gestión de comunidad, moderación y protocolo de respuestas en tiempo real.',
          'Informes mensuales de engagement, alcance orgánico y sentimiento de marca.'
        ],
        techStack: ['Meta Creator Studio', 'TikTok Studio', 'CapCut / Premiere', 'Hootsuite / Metricool'],
        impactMetric: '+120% crecimiento en engagement',
        category: 'marketing-contenidos',
        categoryTitle: 'Marketing de contenidos'
      },
      {
        id: 'contenido-hubspot',
        title: 'HubSpot',
        subtitle: 'PROGRAMMATIC, RICH MEDIA, DV360',
        description: 'Automatización de marketing relacional mediante HubSpot, scoring predictivo de prospectos (MQL/SQL), orquestación de workflows y sincronización comercial.',
        iconName: 'FileSpreadsheet',
        tags: ['HubSpot Partner', 'Inbound Marketing', 'Lead Scoring', 'CRM Sync'],
        deliverables: [
          'Configuración de flujos automatizados de nutrición y re-engagement por etapa del embudo.',
          'Matriz de Lead Scoring automatizada conectada en tiempo real con el equipo comercial.',
          'Estrategia editorial B2B orientada a intención de búsqueda comercial y captura de leads.',
          'Integración bidireccional CRM con plataformas publicitarias para optimizar por valor.'
        ],
        techStack: ['HubSpot Marketing Hub', 'HubSpot Sales CRM', 'Make / Zapier', 'Salesforce'],
        impactMetric: '+35% conversión MQL a SQL',
        category: 'marketing-contenidos',
        categoryTitle: 'Marketing de contenidos'
      }
    ]
  },
  {
    id: 'desarrollo-creatividad',
    title: 'Desarrollo web y piezas creativas',
    label: 'SERVICIOS',
    description: 'Desarrollo de portales y landing pages de ultra-alta conversión, Core Web Vitals impecables y piezas creativas dinámicas de alto impacto.',
    icon: 'LayoutTemplate',
    services: [
      {
        id: 'desarrollo-web',
        title: 'Desarrollo Web',
        subtitle: 'GA4, TAG MANAGER, SEO/GEO, ANALYTICS 360',
        description: 'Desarrollo de sitios web corporativos y landing pages de ultra-alta conversión con carga ultrarrápida (< 1.2s LCP), trazabilidad Server-Side y CRO integrado.',
        iconName: 'LayoutTemplate',
        tags: ['Landing Pages', 'Server-Side Tagging', 'Core Web Vitals', 'CRO & UX'],
        deliverables: [
          'Landings de carga ultrarrápida (< 1.2s LCP) optimizadas para Google Ads y campañas.',
          'Diseño responsive adaptado a la identidad corporativa, accesibilidad y velocidad.',
          'Pruebas A/B multivariables continuas para optimización de tasa de conversión.',
          'Integración nativa con dataLayer y seguimiento Server-Side en Google Cloud.'
        ],
        techStack: ['React', 'Next.js / Vite', 'Tailwind CSS', 'Google Studio', 'VWO / Optimizely'],
        impactMetric: '+42% tasa de conversión',
        category: 'desarrollo-creatividad',
        categoryTitle: 'Desarrollo web y piezas creativas'
      },
      {
        id: 'piezas-creativas',
        title: 'Piezas creativas',
        subtitle: 'PROGRAMMATIC, RICH MEDIA, DV360',
        description: 'Diseño y desarrollo de creatividades dinámicas (DCO) y formatos Rich Media interactivos que adaptan contenido en tiempo real según señales de usuario.',
        iconName: 'Sparkles',
        tags: ['Rich Media', 'Google Studio', 'Dynamic Creative DCO', 'Motion Design'],
        deliverables: [
          'Banners HTML5 interactivos con soporte cross-device y animación ligera.',
          'Integración con feeds dinámicos de producto en Google Studio y DV360.',
          'Diseño de sets creativos para campañas de alto impacto y notoriedad.',
          'Pruebas continuas de titulares y llamados a la acción para maximizar CTR.'
        ],
        techStack: ['Google Studio', 'Adobe Creative Suite', 'Figma', 'HTML5 Canvas / CSS3'],
        impactMetric: '+42% tasa de clics (CTR)',
        category: 'desarrollo-creatividad',
        categoryTitle: 'Desarrollo web y piezas creativas'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'uc',
    client: 'Pontificia Universidad Católica de Chile',
    industry: 'Educación Superior',
    categoryTag: 'EDUCACIÓN SUPERIOR',
    techBadge: 'GA4 + Server-Side',
    title: 'Pontificia Universidad Católica de Chile',
    summary: 'Consolidación completa del ecosistema de postgrados y matrículas mediante arquitectura First-Party y trazabilidad integral del postulante.',
    description: 'La UC necesitaba unificar la medición de más de 40 facultades y programas académicos bajo un único modelo de atribución sin perder la privacidad del usuario ni los históricos previos a GA4.',
    highlightMetric: '+42%',
    highlightLabel: 'Eficiencia en tasa de matrículas validadas',
    roasMetric: '-24%',
    cpaMetric: '-31%',
    pipelineStatus: 'Migración completada con 0% pérdida de atribución histórica',
    keyAchievements: [
      'GTM Server-Side montado sobre Google Cloud Platform con latencia < 80ms.',
      'Atribución precisa de campañas SEM y Paid Social hacia el sistema de admisiones.',
      'Deduplicación de leads duplicados en un 94%, ahorrando presupuesto publicitario.',
      'Capacitación de 15 equipos de comunicación y marketing universitario.'
    ]
  },
  {
    id: 'bci',
    client: 'BCI Banca Digital',
    industry: 'Servicios Financieros',
    categoryTag: 'BANCA DIGITAL & FINTECH',
    techBadge: 'BigQuery ML + DV360',
    title: 'Banco de Crédito e Inversiones (BCI)',
    summary: 'Modelos predictivos de scoring de clientes y optimización algorítmica de créditos de consumo con compra programática.',
    description: 'Implementación de un data lake en BigQuery sincronizado en tiempo real con DV360 y Google Ads para activar audiencias de alto valor patrimonial con consentimiento verificado.',
    highlightMetric: '+55%',
    highlightLabel: 'Atribución First-Party comprobada',
    roasMetric: '+48%',
    cpaMetric: '-28%',
    pipelineStatus: 'Pipeline en tiempo real procesando 1.2M eventos diarios',
    keyAchievements: [
      'Integración nativa BigQuery con Google Marketing Platform.',
      'Segmentación predictiva reduciendo el costo por apertura de cuenta.',
      'Cumplimiento preventivo integral de la Ley 21.719 de datos bancarios.',
      'Modelado de atribución multitáctil basado en datos (DDA).'
    ]
  },
  {
    id: 'falabella',
    client: 'Falabella Retail',
    industry: 'Retail & E-commerce',
    categoryTag: 'E-COMMERCE OMNICANAL',
    techBadge: 'Consent Mode v2 + GA360',
    title: 'Falabella Retail',
    summary: 'Infraestructura de medición omnicanal con recuperación de señales perdidas por bloqueo de cookies de terceros.',
    description: 'Despliegue de Consent Mode v2 en múltiples países de la región, permitiendo recuperar el modelado de conversiones en Google Ads y DV360 sin vulnerar la privacidad del consumidor.',
    highlightMetric: '+32%',
    highlightLabel: 'Conversiones recuperadas via Consent Mode',
    roasMetric: '+39%',
    cpaMetric: '-22%',
    pipelineStatus: 'Arquitectura multi-sitio con 100% de uptime en CyberDays',
    keyAchievements: [
      'Despliegue ágil en tiempo récord previo a eventos Cyber.',
      'Mapeo exacto entre ventas online y retiro en tienda física (ROPO).',
      'Optimización de subastas en tiempo real en Search Ads 360.',
      'Soporte 24/7 de alta concurrencia durante peaks comerciales.'
    ]
  },
  {
    id: 'colun',
    client: 'Colun',
    industry: 'Consumo Masivo',
    categoryTag: 'CONSUMO MASIVO & CPG',
    techBadge: 'Full Stack GMP + Looker',
    title: 'Colun - La Magia del Sur',
    summary: 'Gobierno de datos de marketing y panel de control unificado de Brand Awareness y Trade Marketing digital.',
    description: 'Estandarización de todas las agencias de medios y creativas bajo un único repositorio de datos y métricas unificadas para evaluar el impacto del mix de medios en ventas en retail.',
    highlightMetric: '+29%',
    highlightLabel: 'Incremento de recordación y engagement',
    roasMetric: '+41%',
    cpaMetric: '-26%',
    pipelineStatus: 'Dashboards directivos en Looker Studio actualizados cada hora',
    keyAchievements: [
      'Unificación de métricas de YouTube, Meta, TikTok y Programmatic.',
      'Evaluación continua del Brand Lift por categoría de producto.',
      'Alineación del equipo comercial con indicadores de impacto directo.',
      'Reducción de reportabilidad manual de 3 días a 0 minutos.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ley-datos-chile-21719',
    title: 'Postergación de la Ley de Protección de Datos en Chile: ¿Oportunidad o Riesgo para las Empresas?',
    category: 'REGULACIÓN & PRIVACIDAD',
    date: '1 Septiembre 2024',
    readTime: '5 min lectura',
    author: 'Jose Valenzuela',
    summary: 'El gobierno chileno ingresó un proyecto de ley con suma urgencia para aplicar la entrada en vigencia de la nueva Ley de Protección de Datos Personales (N° 21.719). Analizamos cómo prepararse con Server-Side Tagging.',
    imageUrl: blogPrivacyImg,
    imageAlt: 'Ciberseguridad y protección de datos bajo la Ley 21.719 en Chile',
    content: [
      'La discusión sobre la entrada en vigencia de la Ley N° 21.719 de Protección de Datos Personales en Chile ha tomado un giro estratégico con las últimas mociones legislativas. Mientras algunas organizaciones asumen la prórroga como una pausa, las empresas líderes en MarTech comprenden que se trata de una ventana de oro para rediseñar su arquitectura técnica.',
      'El principal impacto para los equipos de marketing digital recae en la recolección de identificadores de usuario, el uso de píxeles del lado del cliente y las cookies de terceros. La nueva Agencia de Protección de Datos tendrá facultades sancionatorias con multas de hasta 20.000 UTM en faltas gravísimas.',
      'La solución técnica obligatoria no es apagar la analítica, sino migrar a Google Tag Manager Server-Side y adoptar Consent Mode v2. Esto asegura que ningún dato sensible o PII (Personally Identifiable Information) viaje directamente a servidores de terceros sin tokenización y consentimiento previo.'
    ],
    keyTakeaways: [
      'La prórroga otorga plazo para auditar la recolección de PII en formularios y carritos.',
      'El etiquetado del lado del servidor (Server-Side GTM) reduce el riesgo legal a cero.',
      'Las empresas que implementan Consent Mode v2 logran recuperar hasta un 30% de conversiones modeladas.'
    ]
  },
  {
    id: 'agencia-tradicional-vs-partner-martech',
    title: 'Agencia Tradicional o Partner MarTech: ¿Qué necesita realmente tu empresa para escalar?',
    category: 'ESTRATEGIA MARTECH',
    date: '31 Agosto 2024',
    readTime: '7 min lectura',
    author: 'Jose Valenzuela',
    summary: 'El mercado de servicios digitales en Chile se ha llenado de opciones entre agencias creativas y boutiques. Analizamos por qué el rigor de ingeniería de datos y la capacidad cloud son el verdadero diferenciador.',
    imageUrl: blogStrategyImg,
    imageAlt: 'Estrategia e ingeniería MarTech para escala corporativa',
    content: [
      'Durante la última década, las agencias de marketing se concentraron en comprar medios y producir contenido visual. Sin embargo, en el entorno actual de subastas algorítmicas, la creatividad aislada sin ingeniería de datos pierde hasta el 40% de su eficiencia.',
      'Un Partner MarTech certificado (como Google Premier Partner en el Top 3%) aborda el crecimiento desde las raíces del código: pipelines en BigQuery, algoritmos de First-Party Data, integración con CRM corporativos y automatización de audiencias.',
      'Cuando el algoritmo de puja de Google Ads o DV360 se alimenta con datos de margen real en lugar de clics superficiales, el retorno sobre la inversión publicitaria experimenta un salto cuántico.'
    ],
    keyTakeaways: [
      'Las agencias creativas optimizan clics; los partners MarTech optimizan margen y CPA neto.',
      'La capacidad de desplegar arquitectura en Google Cloud Platform es un requisito indispensable.',
      'La integración nativa entre CRM y plataformas de medios elimina discrepancias en los comités ejecutivos.'
    ]
  },
  {
    id: 'sobrecarga-datos-estrategia-comercial',
    title: 'De la Sobrecarga de Datos a la Estrategia Comercial: El Valor de la Consultoría Analítica',
    category: 'ANALÍTICA COMERCIAL',
    date: '24 Agosto 2024',
    readTime: '6 min lectura',
    author: 'Jose Valenzuela',
    summary: 'A pesar de tener acceso a más información que en cualquier otro momento, los tomadores de decisiones enfrentan una ceguera de dashboards. Cómo estructurar KPIs accionables en Looker Studio y Power BI.',
    imageUrl: blogAnalyticsImg,
    imageAlt: 'Dashboards analíticos y estrategia comercial en Looker Studio',
    content: [
      'Vivimos en la era de la hiperabundancia de datos, pero la mayoría de los directores comerciales y gerentes de marketing confiesan que pasan más tiempo buscando el número correcto que tomando decisiones estratégicas.',
      'El síntoma clásico es el dashboard de 15 páginas con 60 gráficos diferentes donde nadie sabe qué palanca mover si las ventas caen un martes por la tarde.',
      'La consultoría analítica moderna aplica una disciplina de pirámide de decisión: 3 KPIs macro en la cúspide (ROAS, CAC, LTV), indicadores diagnósticos intermedios y alertas tempranas automatizadas que notifican desvíos antes de que finalice el mes comercial.'
    ],
    keyTakeaways: [
      'Menos es más: un dashboard ejecutivo no debe tener más de 4 métricas prioritarias en la primera vista.',
      'La atribución multitáctil en BigQuery permite entender el rol real de los canales de asistencia.',
      'Automatizar la detección de anomalías libera cientos de horas de reportería manual al mes.'
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: '¿Tu empresa tiene implementado Google Tag Manager Server-Side y Consent Mode v2?',
    description: 'Crítico para el cumplimiento de la Ley 21.719 en Chile y la recuperación de modelado de conversiones.',
    options: [
      { label: 'Sí, 100% implementado en servidor propio y Consent Mode v2 activo', points: 25, description: 'Excelente nivel de cumplimiento y recuperación de señales.' },
      { label: 'Tenemos GTM estándar del lado del cliente (Client-Side) con banner de cookies simple', points: 15, description: 'Riesgo medio: susceptible a bloqueo de navegadores y observaciones regulatorias.' },
      { label: 'No estamos seguros o solo tenemos etiquetas insertadas directamente en el código', points: 5, description: 'Riesgo alto: pérdida de hasta 40% de conversiones y no conformidad legal.' }
    ]
  },
  {
    id: 2,
    question: '¿Cómo almacenan y explotan los datos de navegación de sus usuarios?',
    description: 'Base para la independencia de cookies de terceros y analítica avanzada.',
    options: [
      { label: 'Exportamos diariamente GA4 a BigQuery / Google Cloud Platform con consultas SQL propias', points: 25, description: 'Máxima madurez: datos 100% de propiedad de tu empresa sin límites de muestreo.' },
      { label: 'Revisamos reportes estándar dentro de la interfaz de Google Analytics 4', points: 15, description: 'Nivel intermedio: útil para el día a día pero limitado para cruces con CRM y modelos predictivos.' },
      { label: 'Descargamos planillas Excel / CSV manualmente para preparar informes mensuales', points: 5, description: 'Nivel básico: alta fricción operativa, propenso a errores y sin visión en tiempo real.' }
    ]
  },
  {
    id: 3,
    question: '¿Qué nivel de integración existe entre su inversión en pauta y su CRM comercial?',
    description: 'Permite alimentar a los algoritmos de subasta con el valor real de cierre de ventas.',
    options: [
      { label: 'Integración bidireccional automática (Offline Conversions, Enhanced Conversions, CRM sync)', points: 25, description: 'Óptimo: Smart Bidding optimiza hacia contratos cerrados, no solo formularios vacíos.' },
      { label: 'Cargamos conversiones offline de forma periódica o manual', points: 15, description: 'Bueno, pero con retrasos que dificultan la velocidad de aprendizaje algorítmico.' },
      { label: 'Medios y CRM son mundos separados; medimos éxito solo por clics o leads brutos', points: 5, description: 'Riesgo alto: desperdicio de presupuesto en leads no calificados.' }
    ]
  },
  {
    id: 4,
    question: '¿Utilizan modelos predictivos o Inteligencia Artificial para predecir valor de clientes (LTV / Churn)?',
    description: 'Diferenciador para anticiparse a la competencia y personalizar pauta publicitaria.',
    options: [
      { label: 'Sí, corremos algoritmos de Machine Learning en BigQuery para predecir propensión de compra', points: 25, description: 'Vanguardia MarTech: pauta hiperpersonalizada y retención proactiva.' },
      { label: 'Estamos explorando pilotos o usando segmentaciones manuales de audiencias', points: 15, description: 'En transición: excelente oportunidad para acelerar con soporte certificado.' },
      { label: 'No aplicamos modelos predictivos en marketing actualmente', points: 5, description: 'Gran margen de mejora para optimizar la eficiencia del presupuesto.' }
    ]
  }
];

export const FULL_CLIENTS_LIST: ClientProfile[] = [
  {
    id: 'uc',
    name: 'Pontificia Universidad Católica de Chile',
    shortName: 'UC Chile',
    industry: 'Educación Superior',
    sectorTag: 'EDUCACIÓN',
    highlight: 'Consolidación de postgrados y trazabilidad First-Party integral',
    scope: ['Google Analytics 4 360', 'GTM Server-Side en GCP', 'Atribución de Matrículas', 'Consent Mode v2'],
    metrics: '+42% tasa de matrículas validadas',
    techStack: ['GA4', 'GA360', 'BigQuery', 'GTM Server-Side', 'Looker Studio'],
    testimonial: {
      quote: 'Mentalidad Web nos permitió unificar la medición de más de 40 facultades sin perder el histórico y garantizando total cumplimiento de privacidad.',
      author: 'Dirección de Admisión y Marketing',
      role: 'Pontificia Universidad Católica de Chile'
    }
  },
  {
    id: 'bci',
    name: 'Banco de Crédito e Inversiones',
    shortName: 'BCI',
    industry: 'Servicios Financieros & Banca',
    sectorTag: 'BANCA & FINTECH',
    highlight: 'Arquitectura BigQuery ML y optimización de adquisición digital',
    scope: ['BigQuery ML Pipelines', 'Display & Video 360', 'Search Ads 360', 'Modelado First-Party'],
    metrics: '+55% atribución First-Party comprobada',
    techStack: ['BigQuery', 'DV360', 'Search Ads 360', 'Google Cloud', 'Python'],
    testimonial: {
      quote: 'El nivel de profundidad técnica en BigQuery y su conexión con GMP nos ha permitido reducir drásticamente el costo por adquisición de nuevos productos financieros.',
      author: 'Gerencia de Adquisición Digital',
      role: 'Banco de Crédito e Inversiones'
    }
  },
  {
    id: 'falabella',
    name: 'Falabella Retail',
    shortName: 'Falabella',
    industry: 'Retail & E-commerce',
    sectorTag: 'RETAIL',
    highlight: 'GTM Server-Side, Consent Mode v2 y atribución cross-device',
    scope: ['Consent Mode v2 Multinacional', 'Server-Side Tagging', 'Optimización CyberDays', 'Atribución ROPO'],
    metrics: '+32% conversiones recuperadas en Cyber',
    techStack: ['GA360', 'Consent Mode v2', 'GTM Server-Side', 'Cloud Run', 'Campaign Manager'],
    testimonial: {
      quote: 'En eventos de alta concurrencia como CyberDays, contar con el soporte y la arquitectura resiliente de Mentalidad Web marca una diferencia cuantitativa en el ROAS.',
      author: 'Líder Regional de Analítica E-commerce',
      role: 'Falabella Retail'
    }
  },
  {
    id: 'colun',
    name: 'Cooperativa Agrícola y Lechera de La Unión (Colun)',
    shortName: 'Colun',
    industry: 'Consumo Masivo / Alimentos',
    sectorTag: 'CONSUMO MASIVO',
    highlight: 'Inteligencia de medios, GA4 empresarial y dashboards Looker',
    scope: ['Full Stack GMP', 'Dashboards Directivos Looker', 'Medición Omnicanal', 'Brand Lift Studies'],
    metrics: '+29% recordación y reducción a 0 min en reportes',
    techStack: ['Looker Studio', 'GA4', 'DV360', 'Meta Ads', 'BigQuery'],
    testimonial: {
      quote: 'Pasamos de lidiar con múltiples informes aislados a tener un único panel en tiempo real que alinea nuestras agencias y comités comerciales.',
      author: 'Subgerencia de Marketing y Marca',
      role: 'Colun - La Magia del Sur'
    }
  },
  {
    id: 'lipigas',
    name: 'Empresas Lipigas S.A.',
    shortName: 'Lipigas',
    industry: 'Energía & Servicios Básicos',
    sectorTag: 'ENERGÍA',
    highlight: 'Trazabilidad omnicanal y orquestación de audiencias DV360',
    scope: ['Trazabilidad Apps y Web', 'DV360 Programmatic', 'Integración CRM Salesforce', 'Estrategia de Retención'],
    metrics: '-24% reducción en CPA de pedidos digitales',
    techStack: ['DV360', 'GA4 360', 'Salesforce CRM', 'BigQuery', 'Google Ads'],
    testimonial: {
      quote: 'Mentalidad Web entiende a fondo el ciclo de vida del cliente en apps y web, permitiéndonos automatizar la recompra con alta precisión.',
      author: 'Gerencia de Canales Digitales',
      role: 'Empresas Lipigas S.A.'
    }
  },
  {
    id: 'clinica-alemana',
    name: 'Clínica Alemana de Santiago',
    shortName: 'Clínica Alemana',
    industry: 'Salud & Medicina Privada',
    sectorTag: 'SALUD',
    highlight: 'Privacidad estricta de datos de pacientes, reserva médica online y GA4',
    scope: ['Privacidad Datos Médicos', 'Reserva de Horas y Telemedicina', 'GTM Server-Side Seguro', 'SEO Médico'],
    metrics: '+38% aumento en reservas online validadas',
    techStack: ['GA4', 'GTM Server-Side', 'Google Cloud', 'Looker Studio', 'Ley 21.719 Ready'],
    testimonial: {
      quote: 'El rigor ético y técnico con el que protegen los datos sensibles de nuestros pacientes mientras optimizan los flujos de atención médica es insuperable.',
      author: 'Dirección de Transformación Digital',
      role: 'Clínica Alemana'
    }
  },
  {
    id: 'sodimac',
    name: 'Sodimac Homecenter',
    shortName: 'Sodimac',
    industry: 'Mejoramiento del Hogar & Construcción',
    sectorTag: 'RETAIL',
    highlight: 'Medición de catálogos dinámicos, feeds DCO y Performance Max',
    scope: ['Feeds Dinámicos DCO', 'Performance Max SA360', 'Atribución Omnicanal', 'Segmentación por Proyectos'],
    metrics: '+45% ROAS en categorías especializadas',
    techStack: ['Search Ads 360', 'Google Studio', 'GA4', 'BigQuery', 'Merchant Center']
  },
  {
    id: 'mallplaza',
    name: 'Mallplaza Latinoamérica',
    shortName: 'Mallplaza',
    industry: 'Real Estate & Centros Comerciales',
    sectorTag: 'REAL ESTATE',
    highlight: 'Estrategia de audiencias omnicanal conectando visitas físicas y digitales',
    scope: ['Conexión Foot-Traffic con Pauta', 'GA4 Multi-país', 'Segmentación First-Party', 'Campañas Regionales'],
    metrics: '+60% precisión en atribución física-digital',
    techStack: ['DV360', 'GA4 360', 'Looker Studio', 'Meta Business']
  }
];

export const EXTENDED_CASE_STUDIES: CaseStudy[] = [
  ...CASE_STUDIES,
  {
    id: 'lipigas-case',
    client: 'Empresas Lipigas S.A.',
    industry: 'Energía & Utilities',
    categoryTag: 'ENERGÍA & SERVICIOS',
    techBadge: 'DV360 + Salesforce',
    title: 'Empresas Lipigas S.A.',
    summary: 'Orquestación de audiencias First-Party y automatización de recompra para canales móviles y web en todo Chile.',
    description: 'Lipigas requería interconectar su backend transaccional de pedidos de gas en línea y su CRM con las plataformas de compra programática para reducir el costo de reactivación de clientes inactivos.',
    highlightMetric: '-24%',
    highlightLabel: 'Reducción sostenida de CPA digital',
    roasMetric: '+52%',
    cpaMetric: '-24%',
    pipelineStatus: 'Atribución sincronizada en tiempo real con despachos a domicilio',
    keyAchievements: [
      'Conexión de señales de compra con DV360 y Google Ads para supresión inteligente de pauta.',
      'Aceleración de pedidos recurrentes en app móvil mediante deep-linking trazable.',
      'Segmentación de clientes por frecuencia de consumo y volumen domiciliario vs comercial.',
      'Soporte técnico continuo para campañas de temporada de invierno.'
    ]
  },
  {
    id: 'clinica-alemana-case',
    client: 'Clínica Alemana de Santiago',
    industry: 'Salud Privada',
    categoryTag: 'SALUD & TELEMEDICINA',
    techBadge: 'GTM Server-Side + Privacidad',
    title: 'Clínica Alemana de Santiago',
    summary: 'Arquitectura de analítica de alta seguridad y anonimización de datos de pacientes para reserva de consultas médicas.',
    description: 'La institución médica necesitaba modernizar su medición con GA4 garantizando que ningún dato de salud o identificador sensible sea transmitido a proveedores de terceros sin anonimización en el servidor.',
    highlightMetric: '+38%',
    highlightLabel: 'Incremento en reservas médicas completadas',
    roasMetric: '+35%',
    cpaMetric: '-19%',
    pipelineStatus: 'Infraestructura Server-Side 100% aislada en Google Cloud Santiago',
    keyAchievements: [
      'Implementación de GTM Server-Side en Cloud Run dentro de la región GCP Santiago (southamerica-west1).',
      'Anonimización previa de datos personales y síntomas clínicos en el borde de la red.',
      'Optimización del embudo de agendamiento reduciendo la tasa de abandono en un 28%.',
      'Cumplimiento preventivo total con la Ley 21.719 de datos sensibles de salud.'
    ]
  }
];

export const EXTENDED_BLOG_POSTS: BlogPost[] = [
  ...BLOG_POSTS,
  {
    id: 'gtm-server-side-guia-tecnica',
    title: 'GTM Server-Side en Google Cloud: La Guía de Arquitectura para el Fin de las Cookies de Terceros',
    category: 'ARQUITECTURA CLOUD',
    date: '18 Agosto 2024',
    readTime: '8 min lectura',
    author: 'Equipo Técnico Mentalidad Web',
    summary: 'Cómo desplegar un clúster de Cloud Run para ejecutar Google Tag Manager Server-Side, reduciendo la carga en el navegador, acelerando el LCP y protegiendo el 100% de los datos de conversión.',
    imageUrl: blogCloudImg,
    imageAlt: 'Arquitectura cloud para Google Tag Manager Server-Side',
    content: [
      'La pérdida de señal publicitaria debido a bloqueadores de contenido, restricciones de Safari ITP y la regulación de privacidad representa hoy el mayor drenaje invisible de presupuesto de marketing.',
      'Mover las etiquetas del navegador del usuario a un contenedor Server-Side alojado en Google Cloud transforma completamente la ecuación: el sitio web solo emite una única llamada limpia a un subdominio propio (ej. data.tudominio.com).',
      'Desde el servidor en Cloud Run, se distribuyen los datos hacia GA4, Meta CAPI, Google Ads y TikTok Events API, aplicando filtros de limpieza de PII y garantizando latencias inferiores a 50 milisegundos.'
    ],
    keyTakeaways: [
      'Reduce hasta un 40% el peso de scripts de JavaScript en el navegador del usuario.',
      'Extiende la vida útil de cookies First-Party frente a restricciones de navegadores modernos.',
      'Centraliza el gobierno del dato y previene fugas inadvertidas a proveedores externos.'
    ]
  },
  {
    id: 'bigquery-ml-marketing-predictivo',
    title: 'BigQuery ML para Marketers: Cómo Predecir la Propensión de Compra sin Escribir Python Complejo',
    category: 'INTELIGENCIA ARTIFICIAL',
    date: '10 Agosto 2024',
    readTime: '6 min lectura',
    author: 'Dirección de Data Science',
    summary: 'Aprovechar la exportación nativa de GA4 a BigQuery para entrenar modelos de regresión logística y árboles de decisión directamente con SQL estándar.',
    imageUrl: blogAiMlImg,
    imageAlt: 'Modelos de propensión de compra con BigQuery ML e Inteligencia Artificial',
    content: [
      'Tradicionalmente, implementar modelos de Machine Learning requería semanas de trabajo entre científicos de datos y semanas de integración posterior para conectar las predicciones con la pauta.',
      'Con BigQuery ML, un equipo de analítica puede entrenar modelos de propensión de compra directamente sobre las tablas de eventos de GA4 en cuestión de minutos usando la sintaxis CREATE MODEL.',
      'Las audiencias resultantes de alta probabilidad de compra se sincronizan automáticamente con Display & Video 360 y Google Ads para concentrar el presupuesto en los usuarios con mayor probabilidad de cerrar ventas.'
    ],
    keyTakeaways: [
      'Permite segmentar prospectos por valor futuro esperado (LTV predictivo).',
      'No requiere extraer los datos fuera del data warehouse corporativo.',
      'Aumenta la tasa de conversión en campañas de remarketing en más de un 45%.'
    ]
  },
  {
    id: 'ia-generativa-creatividad-rendimiento',
    title: 'IA Generativa y DCO: El Nuevo Paradigma Creativo en las Campañas de Display & Video 360',
    category: 'CREATIVIDAD & TECNOLOGÍA',
    date: '3 Agosto 2024',
    readTime: '5 min lectura',
    author: 'Área Creativa & Medios',
    summary: 'Cómo combinar Google Studio con modelos de lenguaje y visión computacional para generar variaciones hiperrelevantes de anuncios en tiempo real según el contexto de navegación.',
    imageUrl: blogCreativeAiImg,
    imageAlt: 'IA generativa y optimización creativa dinámica en Display & Video 360',
    content: [
      'El modelo clásico de producir 5 tamaños estáticos de banners para todo el país ha quedado obsoleto frente a los algoritmos de subasta contextual.',
      'El Dynamic Creative Optimization (DCO) integrado con Google Studio permite que un único template adapte titulares, ofertas, imágenes de producto y llamadas a la acción según la ubicación geográfica, el clima, la categoría navegada y el histórico de interacción.',
      'Los anunciantes que adoptan DCO experimentan incrementos superiores al 40% en CTR y reducciones de hasta un 30% en costos de producción de piezas publicitarias.'
    ],
    keyTakeaways: [
      'La creatividad dinámica multiplica la relevancia en el momento de la verdad del usuario.',
      'Integración fluida con feeds de producto y disponibilidad de inventario en tiempo real.',
      'Alineación perfecta entre la estrategia de medios y el mensaje persuasivo.'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'jose-valenzuela',
    name: 'José Valenzuela',
    role: 'CEO & Founder',
    department: 'Dirección General & Estrategia',
    bio: 'Pionero del marketing digital y la analítica web en Latinoamérica. Más de 18 años liderando la transformación de corporaciones en Chile, Perú y México hacia modelos de negocio basados en datos y tecnología.',
    certifications: ['Google Marketing Platform Certified', 'Google Cloud Partner', 'HubSpot Solutions'],
    experienceYears: 18,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#e53935'
  },
  {
    id: 'rodrigo-vera',
    name: 'Rodrigo Vera',
    role: 'Head of Operations & Solution Architecture',
    department: 'Operaciones & Tecnología',
    bio: 'Especialista en arquitectura cloud, orquestación de infraestructuras complejas MarTech y optimización de flujos de valor. Lidera el despliegue técnico de proyectos enterprise en GCP y soluciones de Server-Side Tagging.',
    certifications: ['Google Cloud Architect', 'Google Analytics 360', 'BigQuery Certified'],
    experienceYears: 14,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#00897b'
  },
  {
    id: 'carolina-munoz',
    name: 'Carolina Muñoz',
    role: 'Director of Analytics & Data Governance',
    department: 'Data & Analítica',
    bio: 'Experta en gobernanza de datos, diseño de Data Layers corporativos y adecuación a normativas de privacidad como la Ley 21.719 y GDPR. Ha liderado más de 80 migraciones exitosas a GA4 en la región.',
    certifications: ['GA4 Certified Professional', 'OneTrust Privacy Expert', 'Looker Certified'],
    experienceYears: 11,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#0288d1'
  },
  {
    id: 'felipe-araya',
    name: 'Felipe Araya',
    role: 'Director of Media Performance & Programmatic',
    department: 'Medios & Performance',
    bio: 'Estratega de compra algorítmica y performance publicitario. Administra carteras de inversión superiores a los $50M USD anuales con foco obsesivo en CPA neto, ROAS y acuerdos privados PMP.',
    certifications: ['Display & Video 360 Certified', 'Search Ads 360', 'Meta Certified Media Planner'],
    experienceYears: 12,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#455a64'
  },
  {
    id: 'valentina-castro',
    name: 'Valentina Castro',
    role: 'Lead CRM, Automation & Inbound',
    department: 'Inbound & Contenidos',
    bio: 'Especialista en ciclo de vida del cliente, automatización en HubSpot y sincronización de marketing con ventas B2B y B2C. Diseña arquitecturas de Lead Scoring que maximizan el cierre comercial.',
    certifications: ['HubSpot Certified Trainer', 'Salesforce Marketing Cloud', 'Inbound Specialist'],
    experienceYears: 9,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#7b1fa2'
  },
  {
    id: 'gonzalo-rios',
    name: 'Gonzalo Ríos',
    role: 'Lead Cloud Engineer & BigQuery Specialist',
    department: 'Ingeniería de Datos',
    bio: 'Ingeniero de software especializado en data pipelines distribuidos, modelado dbt y desarrollo de algoritmos predictivos en Google Cloud Platform y BigQuery ML.',
    certifications: ['Google Cloud Data Engineer', 'Python for ML', 'dbt Certified'],
    experienceYears: 8,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    badgeColor: '#303f9f'
  }
];

export const COMPANY_MILESTONES = [
  {
    year: '2007',
    title: 'Fundación de Mentalidad Web en Santiago',
    description: 'Nacemos en el barrio Lastarria con la visión pionera de que el marketing digital debe sustentarse en números reales y no en suposiciones creativas.'
  },
  {
    year: '2011',
    title: 'Primeros Google Analytics Certified Partners',
    description: 'Nos convertimos en una de las primeras consultoras de Latinoamérica certificadas oficialmente por Google para analítica web empresarial.'
  },
  {
    year: '2016',
    title: 'Alianza Google Marketing Platform Reseller',
    description: 'Adquisición de la categoría de resellers oficiales de la suite enterprise (GA360, DV360, SA360), atendiendo a los mayores bancos y retailers del país.'
  },
  {
    year: '2020',
    title: 'Especialización en Google Cloud & BigQuery',
    description: 'Integración definitiva de data engineering y machine learning a la gestión de medios y analítica, construyendo data lakes corporativos.'
  },
  {
    year: '2023',
    title: 'Liderazgo en Migración GA4 y Top 3% Google Premier',
    description: 'Reconocimiento como Google Premier Partner situándonos en el 3% superior de agencias de alto desempeño en la región.'
  },
  {
    year: '2026',
    title: 'Pioneros en Cumplimiento Ley 21.719 e IA Aplicada',
    description: 'Lanzamiento de frameworks propietarios de Server-Side Tagging, Consent Mode v2 y modelos predictivos que garantizan privacidad y máximo rendimiento.'
  }
];
