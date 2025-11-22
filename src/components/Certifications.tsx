'use client';

import { Award, CheckCircle } from 'lucide-react';

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
    }
  ];

  return (
    <section id="certificaciones" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Calificaciones<div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>

          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Garantizamos la máxima calidad técnica en nuestros trabajos de soldadura, cumpliendo con los estándares ASME y API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-shadow border border-[#778DA9]/20 h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 mb-4 bg-[#415A77] rounded-full flex items-center justify-center">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-[#0D1B2A] mb-2 font-semibold text-sm">{cert.title}</h3>
                <p className="text-[#415A77] text-xs">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
