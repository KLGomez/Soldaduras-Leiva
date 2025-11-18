import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwaXBlbGluZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjMzOTg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Gasoducto Principal',
      category: 'Alta Presión',
    },
    {
      image: 'https://images.unsplash.com/photo-1652881984659-0eeb221fcb9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMHdlbGRpbmclMjB3b3JrfGVufDF8fHx8MTc2MzM5ODcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Soldadura de Tuberías',
      category: 'Instalación',
    },
    {
      image: 'https://images.unsplash.com/photo-1694674818352-f6061a0561a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGxhbnQlMjBwaXBlc3xlbnwxfHx8fDE3NjMzOTg3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Planta Industrial',
      category: 'Montaje',
    },
    {
      image: 'https://images.unsplash.com/photo-1722496606648-624937a6ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBpcGUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzMzk4NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tubería de Acero',
      category: 'Prefabricado',
    },
    {
      image: 'https://images.unsplash.com/photo-1707732067631-1f246e38ee94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWx3b3JrfGVufDF8fHx8MTc2MzMyNzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Trabajo de Precisión',
      category: 'Soldadura',
    },
    {
      image: 'https://images.unsplash.com/photo-1564182998571-fa75ffce6a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3NjMzOTMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Soldadura Industrial',
      category: 'Alta Temperatura',
    },
  ];

  return (
    <section id="trabajos" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Trabajos Realizados</h2>
          <div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div>
          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Proyectos ejecutados con los más altos estándares de calidad y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#F57C00] text-white rounded-full text-sm mb-2">
                  {project.category}
                </div>
                <h3 className="text-[#0D1B2A]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
