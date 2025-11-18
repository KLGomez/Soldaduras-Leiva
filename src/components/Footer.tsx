import { Phone, Mail, MapPin } from 'lucide-react';
import faviconImage from '../assets/favicon_sl.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Certificaciones', href: '#certificaciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded flex items-center justify-center">
                <img src={faviconImage} alt="SL" className="text-white h-auto w-auto" />
              </div>
              <h2 className="text-white font-bold text-lg md:text-xl">Soldaduras Leiva</h2>
            </div>
            <p style={{ color: '#778DA9' }} className="mb-4">
              Especialistas en soldadura industrial con certificaciones internacionales 
              para gasoductos y plantas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-white mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block transition-colors hover:text-[#F57C00]"
                  style={{ color: '#778DA9' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0" style={{ color: '#F57C00' }} size={20} />
                <p style={{ color: '#778DA9' }}>
                  Dr. Carlos Pío Collivadino 670<br />
                  Temperley (1834), Buenos Aires
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0" style={{ color: '#F57C00' }} size={20} />
                <a href="tel:+541139760464" className="hover:text-[#F57C00] transition-colors" style={{ color: '#778DA9' }}>
                  +54 (011) 3976-0464
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0" style={{ color: '#F57C00' }} size={20} />
                <a href="mailto:info.soldadurasleiva@gmail.com" className="hover:text-[#F57C00] transition-colors" style={{ color: '#778DA9' }}>
                  info.soldadurasleiva@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1B263B] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: '#778DA9' }} className="text-center md:text-left">
              © {currentYear} Soldaduras Leiva. Todos los derechos reservados.
            </p>
            <p style={{ color: '#778DA9' }} className="text-center md:text-right">
              Certificaciones ASME IX • API STD 1104
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
