import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  // Array de imágenes locales de la carpeta public/assets/img-carrousel
  const carouselImages = [
    '11.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left - go to next
        goToNext();
      } else {
        // Swipe right - go to previous
        goToPrevious();
      }
    }
  };

  return (
    <section id="trabajos" className="py-16 md:py-20 bg-[#E0E1DD]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-[#0D1B2A] mb-4 font-bold"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
          >
            Trabajos Realizados
            <div className="w-20 h-1 bg-[#F57C00] mx-auto mt-4"></div>
          </h2>

          <p
            className="text-[#415A77] max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}
          >
            Proyectos ejecutados con los más altos estándares de calidad y seguridad.
          </p>
        </div>

        {/* Contenedor del carrusel - Responsivo y centrado */}
        <div className="flex justify-center w-full">
          <div className="w-full px-2 sm:px-4 relative" style={{ maxWidth: '600px' }}>
            {/* Carrusel wrapper */}
            <div
              className="relative rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-grab active:cursor-grabbing w-full"
              style={{ aspectRatio: '600 / 400' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Contenedor interno de slides - overflow-hidden */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <div
                  className="flex h-full w-full transition-transform"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transitionDuration: isTransitioning ? '300ms' : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                      <ImageWithFallback
                        src={`/assets/img-carrousel/${image}`}
                        alt={`Proyecto Soldaduras Leiva - Imagen ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>

                {/* Indicadores de slide */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10 flex-wrap justify-center px-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                      }}
                      className={`rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-[#F57C00] w-5 h-2 sm:w-6 sm:h-2'
                          : 'bg-white/50 hover:bg-white/75 w-2 h-2 sm:w-2.5 sm:h-2.5'
                      }`}
                      aria-label={`Ir al slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Botones de navegación - FUERA y encima del carrusel */}
            <button
              onClick={goToPrevious}
              style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 50,
              }}
              className="p-2.5 sm:p-3.5 rounded-full transition-all duration-300 hover:scale-110 bg-[#F57C00] hover:bg-[#E86C00] shadow-lg hover:shadow-xl"
              aria-label="Slide anterior"
            >
              <ChevronLeft
                size={24}
                className="text-white drop-shadow-lg"
                strokeWidth={3}
              />
            </button>

            <button
              onClick={goToNext}
              style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 50,
              }}
              className="p-2.5 sm:p-3.5 rounded-full transition-all duration-300 hover:scale-110 bg-[#F57C00] hover:bg-[#E86C00] shadow-lg hover:shadow-xl"
              aria-label="Siguiente slide"
            >
              <ChevronRight
                size={24}
                className="text-white drop-shadow-lg"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
