import {
  Flame,
  Droplet,
  Wrench,
  GitMerge,
  Layers,
  Ruler,
  HardHat,
  TrendingUp,
  Gauge,
  Mountain,
  Grid3x3,
  Cog
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Flame,
      title: 'Soldadura de monturas',
      description: 'Instalación de conexiones en gasoductos activos con máxima precisión.',
      img: '/assets/serviceImage/soldadura-montura.png',
    },
    {
      icon: GitMerge,
      title: 'Tee Williamson',
      description: 'Instalación de ramales en tuberías sin interrumpir el servicio.',
      img: '/assets/serviceImage/tee-williamson.png',
    },
    {
      icon: Wrench,
      title: 'Empalmes especiales',
      description: 'Uniones técnicas para requerimientos específicos de cada proyecto.',
      img: '/assets/serviceImage/empalmes-especiales.png',
    },
    {
      icon: Layers,
      title: 'Prefabricado de cañerías',
      description: 'Fabricación de tramos de tubería según especificaciones técnicas.',
      img: '/assets/serviceImage/prefabricado-caneria.png',
    },
    {
      icon: Ruler,
      title: 'Gasoductos',
      description: 'Instalación de redes de distribución de gas seguras y eficientes.',
      img: '/assets/serviceImage/caneria-enterrada.png',
    },
/*     {
      icon: Cog,
      title: 'Cañerías encamisadas',
      description: 'Sistemas de doble tubería para mayor seguridad y protección.',
      img: '/assets/serviceImage/prefabricado-canerias.png',
    }, */
    {
      icon: TrendingUp,
      title: 'Plantas reguladoras',
      description: 'Montaje y mantenimiento de estaciones de regulación de gas.',
      img: '/assets/serviceImage/planta-reguladora.png',
    },
    {
      icon: Mountain,
      title: 'Montaje en altura',
      description: 'Trabajos especializados en estructuras elevadas con certificación.',
      img: '/assets/serviceImage/montaje-altura.png',
    },
    {
      icon: Grid3x3,
      title: 'Fabricación de tapas de cámaras',
      description: 'Elementos de cierre para cámaras de válvulas y accesos.',
      img: '/assets/serviceImage/tapa-camara.png',
    },
    {
      icon: Droplet,
      title: 'Puente de Medición',
      description: 'Estructuras para la medición y control de flujo en redes de gas.',
      img: '/assets/serviceImage/puente-medicion.png',
    },
    {
      icon: Gauge,
      title: 'Cañerías alta presión',
      description: 'Instalaciones para diferentes rangos de presión operativa.',
      img: '/assets/serviceImage/alta-presion.png',
    },
    {
      icon: HardHat,
      title: 'Subestaciones de gas',
      description: 'Construcción y mantenimiento de subestaciones para distribución segura.',
      img: '/assets/serviceImage/subestacion-gas.png',
    },
    {
      icon: Cog,
      title: 'Filtros FM',
      description: 'Fabricación e instalación de filtros para sistemas de gas.',
      img: '/assets/serviceImage/filtros-fm.png',
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Nuestros Servicios <div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>

          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Ofrecemos servicios especializados de soldadura industrial con los más altos
            estándares de calidad y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-[#E0E1DD] rounded-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-t-4 border-[#F57C00] hover:border-[#415A77] flex flex-col h-full"
              >
                {/* Imagen principal */}
                {service.img && (
                  <div className="w-full h-56 bg-gray-200 overflow-hidden flex items-center justify-center">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Contenido */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Título con icono */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 shrink-0 bg-[#F57C00] rounded-md flex items-center justify-center">
                      <IconComponent className="text-white" size={18} />
                    </div>
                    <h3 className="text-[#0D1B2A] font-semibold text-sm sm:text-base">{service.title}</h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-[#415A77] text-sm leading-relaxed flex-1">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
