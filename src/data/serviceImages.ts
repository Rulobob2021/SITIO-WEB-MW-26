import consultoriaImg from '../assets/images/blog_analytics_bi_1788811062892.jpg';
import dataImg from '../assets/images/blog_cloud_servers_1788811080452.jpg';
import marketingDigitalImg from '../assets/images/blog_martech_strategy_1788811047518.jpg';
import marketingContenidoImg from '../assets/images/blog_privacy_law_1788811029071.jpg';
import tecnologiaImg from '../assets/images/blog_ai_machinelearning_1788811098665.jpg';
import creatividadImg from '../assets/images/blog_creative_ai_1788811133436.jpg';

export const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  consultoria: {
    src: consultoriaImg,
    alt: 'Consultoría GA4, Analytics 360 y Tag Manager'
  },
  data: {
    src: dataImg,
    alt: 'BigQuery, Cloud Data Lakes y Dashboards en Tiempo Real'
  },
  'marketing-digital': {
    src: marketingDigitalImg,
    alt: 'Marketing Digital, DV360 Programmatic y Campañas Performance'
  },
  'marketing-contenido': {
    src: marketingContenidoImg,
    alt: 'Inbound Marketing, HubSpot CRM y Automatización de Contenidos'
  },
  tecnologia: {
    src: tecnologiaImg,
    alt: 'Tecnología, IA Aplicada y Modelos Predictivos'
  },
  'creatividad-desarrollo': {
    src: creatividadImg,
    alt: 'Creatividad, Desarrollo Web de Alta Conversión y Rich Media'
  }
};

export const getServiceImage = (serviceId: string) => {
  return SERVICE_IMAGES[serviceId] || {
    src: consultoriaImg,
    alt: 'Servicios de MarTech y Analítica Digital Mentalidad Web'
  };
};
