'use client';

import { Award, CheckCircle, Shield, FileCheck, Flame } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: 'ASME Sección IX',
      description: 'Calificación de soldadores',
    },
    {
      icon: CheckCircle,
      title: 'API STD 1104',
      description: 'Soldadura de tuberías',
    },
    {
      icon: Shield,
      title: 'Matriculación Metrogas',
      description: 'Proveedor certificado',
    },
    {
      icon: FileCheck,
      title: 'Matriculación Naturgy Argentina',
      description: 'Proveedor certificado',
    },
    {
      icon: Flame,
      title: 'Matriculación Camuzzi Gas Pampeana',
      description: 'Proveedor certificado',
    }
  ];

  // Duplicar las tarjetas para crear efecto infinito
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section id="certificaciones" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Certificaciones y estándares <div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>

          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Nuestros trabajos cumplen con los estándares de soldadura ASME/API y estamos habilitados oficialmente para operar en las redes de las principales distribuidoras de gas.
          </p>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
            }
          }
          
          .carousel-container {
            animation: scroll 20s linear infinite;
            display: inline-flex;
            gap: 1.5rem;
          }
          
          .carousel-container:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="w-full overflow-hidden">
          <div className="carousel-container">
            {duplicatedCerts.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="shrink-0"
                  style={{ width: '280px', minWidth: '280px' }}
                >
                  <div className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-shadow border border-[#778DA9]/20 h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mb-4 bg-[#415A77] rounded-full flex items-center justify-center shrink-0">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-[#0D1B2A] mb-2 font-semibold text-sm line-clamp-2">{cert.title}</h3>
                    <p className="text-[#415A77] text-xs line-clamp-2">{cert.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
