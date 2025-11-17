import { Award, CheckCircle, Shield, FileCheck } from 'lucide-react';

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
      description: 'Habilitación oficial',
    },
    {
      icon: FileCheck,
      title: 'Matriculación Naturgy Argentina',
      description: 'Proveedor certificado',
    },
  ];

  return (
    <section id="certificaciones" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4">Certificaciones y Habilitaciones</h2>
          <div className="w-20 h-1 bg-[#F57C00] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-shadow border border-[#778DA9]/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#415A77] rounded-full flex items-center justify-center">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-[#0D1B2A] mb-2">{cert.title}</h3>
                <p className="text-[#415A77]">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
