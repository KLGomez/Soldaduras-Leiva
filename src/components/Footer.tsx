import { Phone, Mail, MapPin } from 'lucide-react';

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
              <div className="w-10 h-10 bg-[#F57C00] rounded flex items-center justify-center">
                <span className="text-white">SL</span>
              </div>
              <h3 className="text-white">Soldaduras Leiva</h3>
            </div>
            <p className="text-[#778DA9] mb-4">
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
                  className="block text-[#778DA9] hover:text-[#F57C00] transition-colors"
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
                <MapPin className="text-[#F57C00] flex-shrink-0" size={20} />
                <p className="text-[#778DA9]">
                  DR. Carlos Pío Collivadino 670<br />
                  Temperley (1834), Buenos Aires
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#F57C00] flex-shrink-0" size={20} />
                <a href="tel:+541139760464" className="text-[#778DA9] hover:text-[#F57C00]">
                  +54 (011) 3976-0464
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#F57C00] flex-shrink-0" size={20} />
                <a href="mailto:info@soldadurasleiva.com" className="text-[#778DA9] hover:text-[#F57C00]">
                  info@soldadurasleiva.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1B263B] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#778DA9] text-center md:text-left">
              © {currentYear} Soldaduras Leiva. Todos los derechos reservados.
            </p>
            <p className="text-[#778DA9] text-center md:text-right">
              Certificaciones ASME IX • API STD 1104
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
