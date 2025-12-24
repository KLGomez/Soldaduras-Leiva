import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCarouselProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export function ProjectCarousel({ image, title, category, description }: ProjectCarouselProps) {
  // Triple la imagen para simular contenido del slide
  const slides = [image, image, image];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
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
    <div className="group relative overflow-visible rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
      {/* Carrusel de imágenes */}
      <div
        className="relative overflow-hidden aspect-[4/3] cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Contenedor de slides */}
        <div
          className="flex h-full transition-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? '300ms' : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
            >
              <ImageWithFallback
                src={slide}
                alt={`${title} - Slide ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Botones de navegación - Discretos y elegantes */}
        <button
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            padding: '8px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
          }}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} className="text-white drop-shadow-lg" strokeWidth={2.5} />
        </button>

        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            padding: '8px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
          }}
          aria-label="Siguiente slide"
        >
          <ChevronRight size={20} className="text-white drop-shadow-lg" strokeWidth={2.5} />
        </button>

        {/* Indicadores de slide */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#F57C00] w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-6 flex-1 flex flex-col justify-end">
        <div className="mb-2">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#F57C00',
              color: 'white',
              paddingLeft: '14px',
              paddingRight: '14px',
              paddingTop: '6px',
              paddingBottom: '6px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '500',
            }}
          >
            {category}
          </span>
        </div>
        <h3 className="text-[#0D1B2A] font-semibold text-lg mb-2">{title}</h3>
        <p className="text-[#415A77] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
