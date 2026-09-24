import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
  colorClass: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  isVisible,
  colorClass,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out cubic function for smooth, premium deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-1 font-mono transition-transform duration-300 ${colorClass}`}>
      <span>{prefix}</span>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
};

export const MetricsBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, keep it active
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-[#0a0f1d] text-white border-y border-[#1e293b]"
      id="metricas-clave"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Metric 1 */}
          <div className="border-r border-[#1e293b] last:border-none px-4">
            <AnimatedCounter
              target={38}
              prefix="+"
              suffix=" %"
              duration={2200}
              isVisible={isVisible}
              colorClass="text-[#74bf28]"
            />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Métrica de resultado</p>
            <p className="text-[11px] text-slate-500 mt-0.5">ROAS Omnicanal Promedio</p>
          </div>

          {/* Metric 2 */}
          <div className="border-r border-[#1e293b] last:border-none px-4">
            <AnimatedCounter
              target={24}
              prefix="-"
              suffix="%"
              duration={1900}
              isVisible={isVisible}
              colorClass="text-white"
            />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Métrica de resultado</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Reducción de Costo de Adquisición</p>
          </div>

          {/* Metric 3 */}
          <div className="border-r border-[#1e293b] last:border-none px-4">
            <AnimatedCounter
              target={12}
              suffix="M"
              duration={2100}
              isVisible={isVisible}
              colorClass="text-[#8ce033]"
            />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Métrica de resultado</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Eventos & Conversiones Procesadas/día</p>
          </div>

          {/* Metric 4 */}
          <div className="px-4">
            <AnimatedCounter
              target={9}
              suffix=" años"
              duration={1800}
              isVisible={isVisible}
              colorClass="text-white"
            />
            <p className="text-xs sm:text-sm text-slate-300 font-medium">Métrica de resultado</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Liderando analítica avanzada en Chile</p>
          </div>

        </div>
      </div>
    </section>
  );
};

