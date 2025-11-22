import { 
  Flame, 
  Droplet, 
  Wrench, 
  GitMerge, 
  Layers, 
  Ruler, 
/*   HardHat,  */
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
    },
    {
      icon: GitMerge,
      title: 'Tee Williamson',
      description: 'Instalación de ramales en tuberías sin interrumpir el servicio.',
    },
    {
      icon: Droplet,
      title: 'Hot Tap',
      description: 'Perforaciones en línea sin detener la operación del sistema.',
    },
    {
      icon: Wrench,
      title: 'Empalmes especiales',
      description: 'Uniones técnicas para requerimientos específicos de cada proyecto.',
    },
    {
      icon: Layers,
      title: 'Prefabricado de cañerías',
      description: 'Fabricación de tramos de tubería según especificaciones técnicas.',
    },
    {
      icon: Ruler,
      title: 'Cañerías enterradas',
      description: 'Instalación subterránea con protección catódica y revestimientos.',
    },
    {
      icon: Cog,
      title: 'Cañerías encamisadas',
      description: 'Sistemas de doble tubería para mayor seguridad y protección.',
    },
    {
      icon: Gauge,
      title: 'Cañerías alta/baja presión',
      description: 'Instalaciones para diferentes rangos de presión operativa.',
    },
    {
      icon: TrendingUp,
      title: 'Plantas reguladoras',
      description: 'Montaje y mantenimiento de estaciones de regulación de gas.',
    },
    {
      icon: Mountain,
      title: 'Montaje en altura',
      description: 'Trabajos especializados en estructuras elevadas con certificación.',
    },
    {
      icon: Grid3x3,
      title: 'Fabricación de tapas de cámaras',
      description: 'Elementos de cierre para cámaras de válvulas y accesos.',
    },
/*     {
      icon: HardHat,
      title: 'Proyectos integrales',
      description: 'Soluciones completas desde el diseño hasta la puesta en marcha.',
    }, */
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-[#E0E1DD] p-6 rounded-lg hover:shadow-lg transition-all border-l-4 border-[#F57C00] hover:border-[#415A77]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#415A77] rounded-lg flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0D1B2A] mb-2">{service.title}</h3>
                    <p className="text-[#415A77]">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
