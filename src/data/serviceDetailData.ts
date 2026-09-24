import { ServiceItem } from '../types';

export interface ServicePillar {
  title: string;
  description: string;
  iconName: 'Compass' | 'Cpu' | 'FileText' | 'Sparkles' | 'Link' | 'TrendingUp' | 'ShieldCheck' | 'Database' | 'Layers';
}

export interface ServiceStep {
  step: number;
  title: string;
  timeframe: string;
  description: string;
  deliverable: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailExtended {
  heroTag: string;
  heroHeadline: string;
  heroDescription: string;
  downloadLabel: string;
  checklistTitle: string;
  whatWeDoTitle: string;
  whatWeDoSubtitle: string;
  pillars: ServicePillar[];
  steps: ServiceStep[];
  relatedCaseId: string;
  relatedCaseHighlight: string;
  relatedCaseContext: string;
  tools: Array<{ name: string; category: string }>;
  faqs: ServiceFaq[];
  ctaHeadline: string;
  ctaSubtitle: string;
}

export function getServiceExtendedData(service: ServiceItem): ServiceDetailExtended {
  const serviceId = service.id.toLowerCase();

  // Consultoría / GA4 / Medición
  if (serviceId.includes('consultoria') || serviceId.includes('ga4') || serviceId.includes('analytics-360')) {
    return {
      heroTag: 'SERVICIOS • CONSULTORÍA & DATA',
      heroHeadline: 'Empieza por donde te duele: data, campañas, contenido o web',
      heroDescription: 'Diseño de arquitecturas de medición sin pérdidas, Data Layer Specification corporativo, licenciamiento Google Analytics 360 y cumplimiento de la Ley 21.719 con trazabilidad First-Party.',
      downloadLabel: 'Descargar Checklist GA4 & GTM',
      checklistTitle: 'Guía de Auditoría de Medición 2026',
      whatWeDoTitle: '¿Qué hacemos por tu marca?',
      whatWeDoSubtitle: 'Estrategias de Consultoría y Data enfocadas en resultados reales, no en métricas vanidosas.',
      pillars: [
        {
          title: 'Estrategia de Medición',
          description: 'Auditoría, mapeo de KPIs de negocio y diseño de Data Layer Specification corporativo homologado.',
          iconName: 'Compass'
        },
        {
          title: 'Implementación Técnica',
          description: 'Configuración avanzada de Google Tag Manager web y Server-Side en Google Cloud Platform sin pérdidas.',
          iconName: 'Cpu'
        },
        {
          title: 'Gobernanza & Calidad',
          description: 'Monitoreo continuo de salud de etiquetas, prevención de discrepancias y deduplicación de eventos.',
          iconName: 'FileText'
        },
        {
          title: 'Consent Mode v2 & IA',
          description: 'Cumplimiento estricto Ley 21.719 y modelado algorítmico de conversiones asistido por Google AI.',
          iconName: 'Sparkles'
        },
        {
          title: 'Activación & GMP Stack',
          description: 'Sincronización nativa con BigQuery, DV360 y Google Ads para activar audiencias de alto valor.',
          iconName: 'Link'
        }
      ],
      steps: [
        {
          step: 1,
          title: 'Kickoff & Mapeo',
          timeframe: 'Semana 1',
          description: 'Alineación de objetivos de negocio, revisión de accesos y levantamiento de requerimientos clave.',
          deliverable: 'Matriz de KPIs y Documento de Requerimientos Iniciales'
        },
        {
          step: 2,
          title: 'Auditoría Técnica',
          timeframe: 'Semanas 1-2',
          description: 'Inspección forense de etiquetas, scripts, Data Layer y flujo de consentimiento Ley 21.719.',
          deliverable: 'Informe de Salud de Medición y Plan de Remediación'
        },
        {
          step: 3,
          title: 'Implementación',
          timeframe: 'Semanas 3-5',
          description: 'Despliegue de esquemas de eventos en GTM Server-Side, validación de eCommerce y BigQuery export.',
          deliverable: 'Contenedores GTM certificados y Data Layer en producción'
        },
        {
          step: 4,
          title: 'Handover & QA',
          timeframe: 'Semana 6',
          description: 'Verificación de datos en vivo, sesión de capacitación técnica y entrega de manual de gobernanza.',
          deliverable: 'Guía de Mantenimiento y Dashboard de Calidad de Datos'
        }
      ],
      relatedCaseId: 'uc',
      relatedCaseHighlight: 'Pontificia Universidad Católica de Chile: +42% eficiencia y 0% pérdida de datos',
      relatedCaseContext: 'Migración integral hacia GA4 y GTM Server-Side en Google Cloud para más de 40 programas académicos con deduplicación del 94% en registros.',
      tools: [
        { name: 'Google Analytics 4', category: 'Analítica' },
        { name: 'Google Tag Manager', category: 'Tagging' },
        { name: 'Looker Studio', category: 'BI' },
        { name: 'BigQuery', category: 'Cloud Lake' },
        { name: 'Google Cloud Platform', category: 'Infraestructura' },
        { name: 'OneTrust', category: 'Privacidad' }
      ],
      faqs: [
        {
          question: '¿Cuánto tarda la implementación?',
          answer: 'Un despliegue corporativo promedio toma entre 4 y 6 semanas divididas en Kickoff, Auditoría forense, Implementación técnica en GTM/Cloud y Handover con capacitación del equipo.'
        },
        {
          question: '¿Necesito Analytics 360?',
          answer: 'La versión gratuita de GA4 soporta hasta 1 millón de eventos diarios a BigQuery. Analytics 360 se recomienda para empresas con alto tráfico, necesidad de SLA garantizado (99.9%), datos sin muestreo y soporte prioritario de Google.'
        },
        {
          question: '¿Trabajan con mi equipo interno?',
          answer: 'Sí. Actuamos en modalidad co-equipo junto a tus desarrolladores, analistas de BI y gerencias de marketing, asegurando transferencia de conocimiento y autonomía técnica.'
        },
        {
          question: '¿Cómo garantizan el cumplimiento de la Ley 21.719 de protección de datos?',
          answer: 'Implementamos Google Consent Mode v2 de forma estricta, mapeamos las cookies del sitio y configuramos GTM Server-Side para encriptar identificadores de usuario antes de enviarlos a plataformas analíticas.'
        },
        {
          question: '¿Qué tipo de soporte ofrecen posterior a la entrega?',
          answer: 'Ofrecemos contratos de soporte continuo con SLA de respuesta en menos de 2 horas (Tier 1), monitoreo de etiquetas y horas de consultoría mensual para nuevas implementaciones.'
        }
      ],
      ctaHeadline: 'Listo para la visibilidad y precisión total de tu data',
      ctaSubtitle: 'Sin compromiso. Salimos de la llamada con 3 acciones técnicas concretas para tu negocio.'
    };
  }

  // Data / BigQuery / Cloud
  if (serviceId.includes('bigquery') || serviceId.includes('data') || serviceId.includes('tecnologia')) {
    return {
      heroTag: 'SERVICIOS • DATA ENGINEERING & CLOUD',
      heroHeadline: 'Centraliza tu data dispersa en un Data Lake escalable y accionable',
      heroDescription: 'Streaming de eventos raw en BigQuery, modelos de atribución algorítmica First-Party y tableros en tiempo real para decisiones comerciales de alta dirección.',
      downloadLabel: 'Descargar Blueprint BigQuery ML',
      checklistTitle: 'Arquitectura de Datos Corporativos 2026',
      whatWeDoTitle: '¿Qué hacemos por tu marca?',
      whatWeDoSubtitle: 'Estrategias de Data Engineering e Inteligencia Artificial enfocadas en rentabilidad neta.',
      pillars: [
        {
          title: 'Arquitectura Data Lake',
          description: 'Diseño e ingesta automatizada de datos desde GA4, CRM, ERP y plataformas publicitarias a Google Cloud.',
          iconName: 'Database'
        },
        {
          title: 'Modelado Algorítmico',
          description: 'Modelos de atribución multitáctil basados en datos (DDA) y cadenas de Markov para medir impacto real.',
          iconName: 'Cpu'
        },
        {
          title: 'Pipelines ETL con dbt',
          description: 'Transformación y limpieza automatizada de registros con pruebas de consistencia y versionamiento.',
          iconName: 'Layers'
        },
        {
          title: 'Machine Learning Aplicado',
          description: 'Predicción de propensión de compra (Propensity to Buy) y detección temprana de fuga de clientes (Churn).',
          iconName: 'Sparkles'
        },
        {
          title: 'Dashboards Ejecutivos',
          description: 'Modelado de dashboards en Looker Studio y Power BI conectados en vivo a fuentes de verdad única.',
          iconName: 'TrendingUp'
        }
      ],
      steps: [
        {
          step: 1,
          title: 'Levantamiento de Fuentes',
          timeframe: 'Semana 1',
          description: 'Auditoría de esquemas de bases de datos, APIs disponibles y requerimientos de almacenamiento.',
          deliverable: 'Diagrama de Arquitectura Cloud y Diccionario de Datos'
        },
        {
          step: 2,
          title: 'Ingesta & Conexiones',
          timeframe: 'Semanas 1-2',
          description: 'Activación de streaming GA4 a BigQuery y conectores automatizados para medios publicitarios.',
          deliverable: 'Pipeline de ingesta continua en Google Cloud Platform'
        },
        {
          step: 3,
          title: 'Modelado & Limpieza',
          timeframe: 'Semanas 3-5',
          description: 'Desarrollo de transformaciones SQL, vistas materializadas y reglas de deduplicación de usuarios.',
          deliverable: 'Data Marts analíticos validados y listos para consumo'
        },
        {
          step: 4,
          title: 'Visualización & Activación',
          timeframe: 'Semana 6',
          description: 'Construcción de dashboards ejecutivos y exportación de audiencias hacia el ecosistema publicitario.',
          deliverable: 'Dashboards Looker Studio en vivo y capacitación del equipo'
        }
      ],
      relatedCaseId: 'bci',
      relatedCaseHighlight: 'BCI Banca Digital: +55% en atribución First-Party y predicción de créditos',
      relatedCaseContext: 'Implementación de un Data Lake en BigQuery con 1.2M de eventos diarios sincronizados con DV360 para activación de audiencias con alto score crediticio.',
      tools: [
        { name: 'Google BigQuery', category: 'Data Warehouse' },
        { name: 'Google Cloud Platform', category: 'Infraestructura' },
        { name: 'Looker Studio', category: 'BI & Reporting' },
        { name: 'dbt (data build tool)', category: 'Modelado' },
        { name: 'Python / Vertex AI', category: 'Machine Learning' },
        { name: 'Google Tag Manager', category: 'Ingesta' }
      ],
      faqs: [
        {
          question: '¿Qué costos asociados tiene Google Cloud para este proyecto?',
          answer: 'Google Cloud opera bajo modelo de pago por uso. En la fase inicial diseñamos particiones optimizadas y clustering de tablas para que el costo operativo mensual sea mínimo y predecible.'
        },
        {
          question: '¿Podemos integrar nuestro CRM (Salesforce / HubSpot)?',
          answer: 'Sí. Integramos CRM y sistemas transaccionales mediante Cloud Functions o conectores de datos para cruzar el comportamiento web con ventas cerradas offline.'
        },
        {
          question: '¿Cómo nos capacitan para mantener los queries?',
          answer: 'Incluimos workshops prácticos de BigQuery y SQL aplicados a marketing para que tu equipo aprenda a consultar, crear dashboards y mantener los modelos con total autonomía.'
        }
      ],
      ctaHeadline: 'Listo para transformar tus datos en decisiones comerciales de alto impacto',
      ctaSubtitle: 'Agenda una sesión técnica con un Data Architect de Mentalidad Web sin costo.'
    };
  }

  // Campañas / Performance / DV360 / Google Ads
  if (serviceId.includes('performance') || serviceId.includes('campanas') || serviceId.includes('marketing-digital')) {
    return {
      heroTag: 'SERVICIOS • PERFORMANCE & PROGRAMMATIC',
      heroHeadline: 'Empieza por donde te duele: data, campañas, contenido o web',
      heroDescription: 'Optimización algorítmica de pauta en Google Ads, Meta Ads y Display & Video 360 (DV360). Enfoque intransigente en costo por adquisición (CPA) y retorno de inversión sobre margen neto.',
      downloadLabel: 'Descargar Matriz de Eficiencia de Pauta',
      checklistTitle: 'Guía de Optimización Algorítmica 2026',
      whatWeDoTitle: '¿Qué hacemos por tu marca?',
      whatWeDoSubtitle: 'Estrategias de Performance y Programática enfocadas en resultados reales, no en impresiones vacías.',
      pillars: [
        {
          title: 'Estrategia de Adquisición',
          description: 'Roadmap de captación multicanal alineado al embudo completo de conversión y valor de vida (LTV).',
          iconName: 'Compass'
        },
        {
          title: 'Compra Programática DV360',
          description: 'Acceso a inventarios prémium y acuerdos preferenciales (PMP) con segmentación avanzada por First-Party data.',
          iconName: 'Cpu'
        },
        {
          title: 'Smart Bidding & Señales',
          description: 'Alimentación de algoritmos con conversiones offline y valores de margen para optimizar por rentabilidad neta.',
          iconName: 'TrendingUp'
        },
        {
          title: 'IA Generativa Creativa',
          description: 'Creatividades dinámicas (DCO) adaptadas a la audiencia y pruebas multivariables continuas de copies.',
          iconName: 'Sparkles'
        },
        {
          title: 'Auditoría de Brand Safety',
          description: 'Control estricto de exclusiones de inventario, detección de fraude publicitario y optimización de presupuesto.',
          iconName: 'ShieldCheck'
        }
      ],
      steps: [
        {
          step: 1,
          title: 'Auditoría de Cuentas',
          timeframe: 'Semana 1',
          description: 'Revisión técnica de configuraciones de puja, estructuras de campaña, atribución y fugas de presupuesto.',
          deliverable: 'Auditoría Forense de Campañas y Diagnóstico de Ahorro'
        },
        {
          step: 2,
          title: 'Reestructuración & Medición',
          timeframe: 'Semanas 1-2',
          description: 'Configuración de conversiones mejoradas (Enhanced Conversions) y vinculación con GA4 / BigQuery.',
          deliverable: 'Nueva estructura de cuentas y protocolo de etiquetado'
        },
        {
          step: 3,
          title: 'Lanzamiento & A/B Testing',
          timeframe: 'Semanas 3-5',
          description: 'Activación de campañas en Search Ads 360, Meta y DV360 con Smart Bidding y audiencias predictivas.',
          deliverable: 'Campañas optimizadas con monitoreo diario de CPA/ROAS'
        },
        {
          step: 4,
          title: 'Escalamiento Rentable',
          timeframe: 'Semana 6 en adelante',
          description: 'Reasignación dinámica de presupuesto hacia los canales con mayor contribución marginal y menor CPA.',
          deliverable: 'Dashboard de Performance en tiempo real e informes ejecutivos'
        }
      ],
      relatedCaseId: 'falabella',
      relatedCaseHighlight: 'Falabella Retail: +39% ROAS y +32% conversiones recuperadas con Consent Mode',
      relatedCaseContext: 'Despliegue de compra programática en Display & Video 360 con modelado predictivo para recuperación de señales ante la pérdida de cookies de terceros.',
      tools: [
        { name: 'Display & Video 360', category: 'Programática' },
        { name: 'Google Ads', category: 'Buscadores & PMax' },
        { name: 'Search Ads 360', category: 'Búsqueda Avanzada' },
        { name: 'Meta Ads Manager', category: 'Paid Social' },
        { name: 'Campaign Manager 360', category: 'Ad Server' },
        { name: 'Google Analytics 4', category: 'Atribución' }
      ],
      faqs: [
        {
          question: '¿Cuál es la inversión mínima recomendada en medios?',
          answer: 'Gestionamos carteras de inversión desde medianas empresas hasta grandes corporaciones. La inversión recomendada depende del volumen de búsquedas de tu industria y el costo por clic del sector.'
        },
        {
          question: '¿Qué ventaja tiene comprar con DV360 frente a Google Ads estándar?',
          answer: 'DV360 permite acceder a acuerdos privados (Private Marketplaces), inventario de Connected TV (YouTube en TV, streaming), trazabilidad cruzada sin duplicar impresiones y tarifas mayoristas.'
        },
        {
          question: '¿Cómo garantizan que no haya fraude publicitario?',
          answer: 'Aplicamos filtros de Brand Safety y herramientas de verificación de visibilidad (IAS / DoubleVerify) en todas nuestras compras programáticas.'
        }
      ],
      ctaHeadline: 'Listo para escalar tus conversiones reduciendo el costo por adquisición',
      ctaSubtitle: 'Revisamos tus cuentas actuales en 30 minutos y detectamos oportunidades inmediatas de optimización.'
    };
  }

  // Marketing de Contenidos / SEO / GEO / HubSpot
  return {
    heroTag: 'SERVICIOS • CONTENIDOS, SEO & INBOUND',
    heroHeadline: 'Empieza por donde te duele: data, campañas, contenido o web',
    heroDescription: 'Visibilidad orgánica en Google y nuevos motores de inteligencia artificial (GEO), contenidos de alta retención B2B y automatización de embudos de ventas con HubSpot.',
    downloadLabel: 'Descargar Checklist SEO & GEO 2026',
    checklistTitle: 'Guía de Optimización para Motores de IA',
    whatWeDoTitle: '¿Qué hacemos por tu marca?',
    whatWeDoSubtitle: 'Estrategias SEO y GEO enfocadas en resultados reales, no en métricas vanidosas.',
    pillars: [
      {
        title: 'Estrategia SEO / GEO',
        description: 'Investigación, análisis semántico y roadmap personalizado para capturar intención de búsqueda calificada.',
        iconName: 'Compass'
      },
      {
        title: 'SEO Técnico & Core Web Vitals',
        description: 'Optimizamos la estructura de tu sitio para mejor rastreo, indexación, velocidad y rendimiento móvil.',
        iconName: 'Cpu'
      },
      {
        title: 'Contenido Optimizado',
        description: 'Creamos y optimizamos contenido alineado a intención de búsqueda comercial y formatos de alta autoridad.',
        iconName: 'FileText'
      },
      {
        title: 'GEO (AI Visibility)',
        description: 'Optimizamos tu contenido para que aparezca citado como fuente autorizada en ChatGPT, Gemini y Perplexity.',
        iconName: 'Sparkles'
      },
      {
        title: 'Link Building & Automatización',
        description: 'Construimos autoridad de dominio mediante relaciones públicas digitales y nutrimos prospectos con HubSpot.',
        iconName: 'Link'
      }
    ],
    steps: [
      {
        step: 1,
        title: 'Kickoff',
        timeframe: 'Semana 1',
        description: 'Alineación de objetivos de negocio, identificación de buyer personas y benchmarking de competidores directos.',
        deliverable: 'Matriz de Oportunidades Orgánicas y Competencia'
      },
      {
        step: 2,
        title: 'Auditoría',
        timeframe: 'Semanas 1-2',
        description: 'Auditoría técnica de rastreo (Screaming Frog), análisis de indexación y diagnóstico de visibilidad en IA.',
        deliverable: 'Auditoría Técnica Completa y Matriz de Palabras Clave'
      },
      {
        step: 3,
        title: 'Implementación',
        timeframe: 'Semanas 3-5',
        description: 'Corrección de errores técnicos, optimización de contenidos clave y configuración de flujos en HubSpot.',
        deliverable: 'Páginas optimizadas, schema markup y automatizaciones activas'
      },
      {
        step: 4,
        title: 'Handover',
        timeframe: 'Semana 6',
        description: 'Monitoreo de posicionamiento, capacitación del equipo de redacción y reporte de crecimiento orgánico.',
        deliverable: 'Dashboard de Posicionamiento Orgánico y Plan de Publicación Trimestral'
      }
    ],
    relatedCaseId: 'colun',
    relatedCaseHighlight: 'Colun Alimentos: +120% en engagement orgánico y autoridad de marca',
    relatedCaseContext: 'Estrategia integral de contenidos multicanal y posicionamiento orgánico orientada a intención de búsqueda de consumidores y profesionales de la salud.',
    tools: [
      { name: 'Google Search Console', category: 'Indexación' },
      { name: 'Google Analytics 4', category: 'Analítica' },
      { name: 'SEMrush', category: 'Research' },
      { name: 'Screaming Frog', category: 'SEO Técnico' },
      { name: 'Ahrefs', category: 'Backlinks' },
      { name: 'Looker Studio', category: 'Reporting' },
      { name: 'HubSpot Marketing Hub', category: 'Inbound' }
    ],
    faqs: [
      {
        question: '¿Cuánto tarda la implementación?',
        answer: 'La fase de auditoría y remediación técnica toma 6 semanas. Los resultados en posicionamiento orgánico y visibilidad en IA comienzan a manifestarse de forma sostenida entre el segundo y tercer mes.'
      },
      {
        question: '¿Qué es GEO (Generative Engine Optimization)?',
        answer: 'GEO es la disciplina que optimiza la estructura, datos estructurados y citas de tu contenido para que motores de IA generativa (ChatGPT, Gemini, Copilot, Perplexity) elijan a tu marca como fuente de respuesta directa.'
      },
      {
        question: '¿Trabajan con mi equipo interno de redacción y desarrollo?',
        answer: 'Sí. Proveemos briefs detallados de contenido, capacitamos a tus redactores y entregamos tickets técnicos listos para que tu equipo de desarrollo los implemente con facilidad.'
      },
      {
        question: '¿Cómo miden el retorno de la inversión (ROI)?',
        answer: 'Conectamos el tráfico orgánico con eventos de conversión de negocio en GA4 y CRM para rastrear ingresos atribuidos a visitas orgánicas.'
      }
    ],
    ctaHeadline: 'Listo para la visibilidad orgánica en Google y las IAS',
    ctaSubtitle: 'Sin compromiso. Salimos de la llamada con 3 acciones concretas.'
  };
}
