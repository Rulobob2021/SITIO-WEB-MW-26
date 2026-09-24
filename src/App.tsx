/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientTrustBar } from './components/ClientTrustBar';
import { ServicesSection } from './components/ServicesSection';
import { MetricsBanner } from './components/MetricsBanner';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { FeaturedCaseSection } from './components/FeaturedCaseSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ArticleModal } from './components/ArticleModal';
import { ConsultationModal } from './components/ConsultationModal';
import { DiagnosticToolModal } from './components/DiagnosticToolModal';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ClientsPage } from './components/ClientsPage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { ServiceItem, BlogPost } from './types';
import { SERVICES_LIST, SERVICES_CATEGORIES } from './data/martechData';
import { CheckCircle, X } from 'lucide-react';

type AppPage = 'home' | 'servicios' | 'casos' | 'clientes' | 'blog' | 'nosotros';

export default function App() {
  const allServices = useMemo(() => {
    const list: ServiceItem[] = [...SERVICES_LIST];
    SERVICES_CATEGORIES.forEach(cat => {
      cat.services.forEach(srv => {
        if (!list.some(s => s.id === s.id)) {
          list.push(srv);
        }
      });
    });
    return list;
  }, []);

  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['servicios', 'casos', 'clientes', 'blog', 'nosotros'].includes(hash)) {
        return hash as AppPage;
      }
      if (hash === 'inicio') {
        return 'home';
      }
    }
    // Default to 'servicios' or 'home'
    return 'servicios';
  });

  const [activeSection, setActiveSection] = useState<string>(() => {
    return currentPage === 'home' ? 'inicio' : currentPage;
  });

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('servicio-')) {
        const sId = hash.replace('servicio-', '');
        const found = SERVICES_LIST.find(s => s.id === sId) || 
          SERVICES_CATEGORIES.flatMap(c => c.services).find(s => s.id === sId);
        if (found) return found;
      }
    }
    return null;
  });

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [consultationServiceTopic, setConsultationServiceTopic] = useState<string | undefined>(undefined);
  
  // Toast notification for lead capture
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with browser hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('servicio-')) {
        const sId = hash.replace('servicio-', '');
        const found = allServices.find(s => s.id === sId);
        if (found) {
          setSelectedService(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const validPages: Record<string, AppPage> = {
        'servicios': 'servicios',
        'casos': 'casos',
        'clientes': 'clientes',
        'blog': 'blog',
        'nosotros': 'nosotros',
        'inicio': 'home'
      };

      if (validPages[hash]) {
        setSelectedService(null);
        setCurrentPage(validPages[hash]);
        setActiveSection(hash === 'inicio' ? 'inicio' : hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allServices]);

  const handleNavigate = (sectionId: string) => {
    setSelectedService(null);
    const validPages: Record<string, AppPage> = {
      'servicios': 'servicios',
      'casos': 'casos',
      'clientes': 'clientes',
      'blog': 'blog',
      'nosotros': 'nosotros',
      'inicio': 'home'
    };

    if (validPages[sectionId]) {
      const targetPage = validPages[sectionId];
      setCurrentPage(targetPage);
      setActiveSection(sectionId);
      window.location.hash = `#${sectionId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating to internal anchors (e.g. 'contacto')
    setActiveSection(sectionId);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = `#${sectionId}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    window.location.hash = `#servicio-${service.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadSuccess = (leadData: { name: string; email: string; company: string; service: string }) => {
    setToastMessage(`¡Gracias ${leadData.name}! Tu solicitud para ${leadData.company} (${leadData.service}) ha sido recibida.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleBookService = (serviceName: string) => {
    setConsultationServiceTopic(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#74bf28] selection:text-[#060a12]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0a0f1d] border border-[#74bf28] text-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-md">
          <CheckCircle className="w-5 h-5 text-[#74bf28] shrink-0" />
          <p className="text-xs text-slate-200 leading-snug">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-auto cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        onOpenConsultation={() => {
          setConsultationServiceTopic(undefined);
          setIsConsultationOpen(true);
        }}
      />

      {/* Main Page Flow Matching Wireframe & Screens */}
      <main className="flex-1">
        {selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            onBack={() => {
              setSelectedService(null);
              window.location.hash = '#servicios';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={(topic) => {
              setConsultationServiceTopic(topic || selectedService.title);
              setIsConsultationOpen(true);
            }}
            onSelectCaseStudy={() => {
              setSelectedService(null);
              handleNavigate('casos');
            }}
            onLeadSuccess={handleLeadSuccess}
          />
        ) : (
          <>
            {currentPage === 'servicios' && (
              <ServicesPage
                onSelectService={handleSelectService}
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic);
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'casos' && (
              <CaseStudiesPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Casos de Éxito');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'clientes' && (
              <ClientsPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Clientes y Alianzas');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'blog' && (
              <BlogPage
                onSelectArticle={(post) => setSelectedArticle(post)}
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Blog e Insights');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'nosotros' && (
              <AboutPage
                onOpenConsultation={(topic) => {
                  setConsultationServiceTopic(topic || 'Nosotros / Mentalidad Web');
                  setIsConsultationOpen(true);
                }}
                onNavigateHome={() => handleNavigate('inicio')}
              />
            )}

            {currentPage === 'home' && (
              <>
                {/* Screen 1: Hero with Live Telemetry, Ecosystem Badges & High-Tech Conversion Form */}
                <HeroSection
                  onNavigateToServices={() => handleNavigate('servicios')}
                  onLeadSuccess={handleLeadSuccess}
                  onSelectService={(sId) => {
                    const srv = allServices.find((s) => s.id === sId);
                    if (srv) {
                      handleSelectService(srv);
                    } else {
                      handleNavigate('servicios');
                    }
                  }}
                />

                {/* Client Validation Bar */}
                <ClientTrustBar
                  onSelectClientCase={() => handleNavigate('clientes')}
                />

                {/* Screen 2: MarTech Services Grid (3x2) */}
                <ServicesSection
                  onSelectService={handleSelectService}
                  onNavigateToAllServices={() => handleNavigate('servicios')}
                />

                {/* Quantitative Impact Metric Banner */}
                <MetricsBanner />

                {/* Screen 3: Methodology (Cómo Trabajamos) */}
                <HowWeWorkSection />

                {/* Screen 4: High Scale Featured Case Studies with Interactive Switcher */}
                <FeaturedCaseSection
                  onOpenConsultation={() => {
                    setConsultationServiceTopic('Caso de Éxito Similar');
                    setIsConsultationOpen(true);
                  }}
                  onNavigateToAllCases={() => handleNavigate('casos')}
                />

                {/* Screen 5: Mentalidad Insights Blog */}
                <BlogSection
                  onSelectArticle={(post) => setSelectedArticle(post)}
                  onNavigateToAllArticles={() => handleNavigate('blog')}
                />
              </>
            )}
          </>
        )}
      </main>

      {/* Screen 6: Full Footer with Office Address, Services & Certifications */}
      <Footer
        onOpenConsultation={() => {
          setConsultationServiceTopic(undefined);
          setIsConsultationOpen(true);
        }}
        onNavigate={handleNavigate}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
      />

      {/* Interactive Modals & Multi-Screen Tools */}
      
      {/* Modal 1: Blog Article Reader */}
      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => {
          setConsultationServiceTopic(selectedArticle?.title);
          setIsConsultationOpen(true);
        }}
      />

      {/* Modal 2: Consultation & Meeting Booking Calendar */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        defaultService={consultationServiceTopic}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Modal 3: Interactive Ley 21.719 & MarTech Diagnostic Tool */}
      <DiagnosticToolModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onOpenConsultation={() => {
          setConsultationServiceTopic('Resultado Test Ley 21.719');
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
