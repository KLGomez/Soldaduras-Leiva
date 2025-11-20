import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative text-white py-16 sm:py-24 md:py-40 lg:py-56 overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/hero.gif"
          alt="Soldadura industrial de alta precisión"
          className="w-full h-full object-cover object-right"
        />

        {/* Capa oscura principal (mucho más fuerte) */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Gradiente agresivo desde la izquierda */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-20 w-full">
        <div className="max-w-2xl backdrop-blur-sm bg-black/30 p-6 sm:p-8 md:p-12 lg:p-16 ">
          <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl" style={{ color: '#FFE5CC', fontSize: 'clamp(1.75rem, 6vw, 4rem)', fontWeight: 'bold', textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            Soldaduras Leiva
          <div className="w-20 h-1 bg-[#F57C00]"></div>
          </h1>
          <h2 style={{ color: '#E0E1DD', textShadow: '0 2px 8px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,0.8)' }} className="mb-8 text-xl md:text-2xl lg:text-3xl font-semibold">
            Especialistas en soldadura industrial con certificaciones internacionales
          </h2>
          <p style={{ color: '#FFA500', textShadow: '0 2px 8px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,0.8)' }} className="text-xl md:text-2xl lg:text-2xl mb-8 font-bold">
            Precisión que garantiza seguridad
          </p>
{/*           <p style={{ color: '#FFA500', textShadow: '0 2px 8px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,0.8)' }} className="text-xl md:text-2xl lg:text-2xl mb-8 font-bold">
            Especialistas en soldadura industrial con certificaciones internacionales
          </p> */}
          {/*           <p style={{ color: '#E0E1DD', textShadow: '0 1px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)' }} className="mb-12 opacity-95 text-lg md:text-xl lg:text-xl leading-relaxed">
            Especialistas en soldadura industrial con certificaciones internacionales
            y habilitaciones de las principales empresas del sector energético.
          </p> */}
          <a
            href="#contacto"
            className="inline-block bg-[#F57C00] hover:bg-[#E86C00] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
