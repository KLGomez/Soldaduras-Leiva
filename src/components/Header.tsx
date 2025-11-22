import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/favicon_sl.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Certificaciones', href: '#matriculaciones' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-[#0D1B2A] sticky top-0 z-50 border-b border-[#1B263B]" style={{ borderBottomWidth: '0.5px' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Izquierda */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Soldaduras Leiva Logo"
              className="h-12 w-auto"
            />
            <span className="text-white text-xl hidden sm:inline-block">

            </span>
          </a>

          {/* Desktop Menu - Derecha */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#E0E1DD] hover:text-[#F57C00] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Derecha */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#F57C00] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Desplegable */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#E0E1DD] hover:text-[#F57C00] transition-colors duration-300 py-2 border-b border-[#1B263B]/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}