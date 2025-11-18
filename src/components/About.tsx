import { Users, Wrench, Award, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Clock,
      title: 'Más de 15 años',
      description: 'De experiencia en el sector',
    },
    {
      icon: Users,
      title: 'Equipo calificado',
      description: 'Soldadores certificados',
    },
    {
      icon: Wrench,
      title: 'Equipamiento profesional',
      description: 'Tecnología de punta',
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Estándares internacionales',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="md:col-span-5">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/vertical.gif"
                alt="Equipo de trabajo profesional"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7">
            <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Experiencia y Profesionalismo</h2>
            <div className="w-20 h-1 bg-[#F57C00] mb-6"></div>
            
            <p className="text-[#E0E1DD] mb-6 opacity-90">
              En <strong>Soldaduras Leiva</strong> nos especializamos en soldaduras de alta precisión 
              para la industria del gas. Nuestro equipo de profesionales altamente capacitados 
              cuenta con todas las certificaciones necesarias para garantizar trabajos de máxima 
              calidad y seguridad.
            </p>
            
            <p className="text-[#778DA9] mb-8">
              Trabajamos con las principales empresas del sector energético, cumpliendo con los 
              más rigurosos estándares de calidad internacional. Nuestro compromiso es brindar 
              soluciones confiables que aseguren la integridad de cada instalación.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#F57C00] rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{feature.title}</h3>
                      <p className="text-[#778DA9]">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
