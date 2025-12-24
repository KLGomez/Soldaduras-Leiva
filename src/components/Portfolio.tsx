import { ProjectCarousel } from './ProjectCarousel';

export function Portfolio() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwaXBlbGluZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjMzOTg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Gasoducto Principal',
      category: 'Alta Presión',
      description: 'Construcción y montaje de gasoducto de alta presión con los más rigurosos estándares de seguridad.',
    },
    {
      image: 'https://images.unsplash.com/photo-1652881984659-0eeb221fcb9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXBlbGluZSUyMHdlbGRpbmclMjB3b3JrfGVufDF8fHx8MTc2MzM5ODcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Soldadura de Tuberías',
      category: 'Instalación',
      description: 'Soldadura especializada de tuberías con certificación en procesos de soldadura industrial.',
    },
    {
      image: 'https://images.unsplash.com/photo-1694674818352-f6061a0561a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGxhbnQlMjBwaXBlc3xlbnwxfHx8fDE3NjMzOTg3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Planta Industrial',
      category: 'Montaje',
      description: 'Montaje integral de sistemas de tuberías para planta industrial de procesamiento.',
    },
    {
      image: 'https://images.unsplash.com/photo-1722496606648-624937a6ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdGVlbCUyMHBpcGUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYzMzk4NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tubería de Acero',
      category: 'Prefabricado',
      description: 'Fabricación y prefabricación de tuberías de acero de alta resistencia.',
    },
    {
      image: 'https://images.unsplash.com/photo-1707732067631-1f246e38ee94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWx3b3JrfGVufDF8fHx8MTc2MzMyNzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Trabajo de Precisión',
      category: 'Soldadura',
      description: 'Soldadura de precisión en componentes de alto rendimiento con control de calidad total.',
    },
    {
      image: 'https://images.unsplash.com/photo-1564182998571-fa75ffce6a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3NjMzOTMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Soldadura Industrial',
      category: 'Alta Temperatura',
      description: 'Trabajos de soldadura en ambientes de alta temperatura con materiales especializados.',
    },
  ];

  return (
    <section id="trabajos" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Trabajos Realizados <div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>
          
          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Proyectos ejecutados con los más altos estándares de calidad y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCarousel
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
