import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative text-white py-16 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="public/img1.jpg"
          alt="Soldadura industrial de alta precisión"
          className="w-full h-full object-cover"
        />

        {/* Capa oscura principal (más fuerte) */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Gradiente para el lado izquierdo (hace que el texto destaque aún más) */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-4">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl" style={{ color: '#FFE5CC', fontSize: 'clamp(1.75rem, 6vw, 4rem)', fontWeight: 'bold' }}>
            Soldaduras Leiva
          </h1>
          <h2 style={{ color: '#E0E1DD' }} className="mb-4 text-lg md:text-xl font-semibold">
            Soldaduras de alta precisión para gasoductos y plantas
          </h2>
          <p style={{ color: '#FFA500' }} className="text-lg md:text-xl mb-6 font-semibold">
            Precisión que garantiza seguridad
          </p>
          <p style={{ color: '#E0E1DD' }} className="mb-8 opacity-95 text-base md:text-lg leading-relaxed">
            Especialistas en soldadura industrial con certificaciones internacionales
            y habilitaciones de las principales empresas del sector energético.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-[#F57C00] hover:bg-[#E86C00] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
