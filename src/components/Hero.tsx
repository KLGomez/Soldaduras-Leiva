import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-6 lg:col-span-6">
            <h1 className="text-[#E0E1DD] mb-6">
              Soldaduras de alta precisión para gasoductos y plantas
            </h1>
            <p className="text-[#778DA9] text-xl md:text-2xl mb-8">
              Precisión que garantiza seguridad
            </p>
            <p className="text-[#E0E1DD] mb-8 opacity-90">
              Especialistas en soldadura industrial con certificaciones internacionales 
              y habilitaciones de las principales empresas del sector energético.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-[#F57C00] hover:bg-[#E86C00] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Solicitar presupuesto
            </a>
          </div>

          {/* Right Column - Hero Image */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1564182998571-fa75ffce6a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3NjMzOTMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Soldadura industrial de alta precisión"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
