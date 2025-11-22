'use client';

import { Shield, FileCheck, Flame } from 'lucide-react';

export function Registrations() {
  const registrations = [
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

  return (
<section id="matriculaciones" className="pt-8 pb-0 md:pt-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Matrículas<div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>

          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Contamos con la habilitación oficial para operar en las redes de Metrogas, Naturgy y Camuzzi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrations.map((reg, index) => {
            const IconComponent = reg.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-shadow border border-[#778DA9]/20 h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 mb-4 bg-[#415A77] rounded-full flex items-center justify-center">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-[#0D1B2A] mb-2 font-semibold text-sm">{reg.title}</h3>
                <p className="text-[#415A77] text-xs">{reg.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
