import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Swal from 'sweetalert2';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);

      const response = await fetch('https://formspree.io/f/mwpyevbe', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: 'Mensaje enviado exitosamente. Nos pondremos en contacto pronto.',
          confirmButtonColor: '#F57C00',
        });
        formElement.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
          confirmButtonColor: '#F57C00',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
        confirmButtonColor: '#F57C00',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0D1B2A] mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Contacto <div className="w-20 h-1 bg-[#F57C00] mx-auto mb-4"></div></h2>
          
          <p className="text-[#415A77] max-w-2xl mx-auto" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)' }}>
            Solicite un presupuesto o consulte por nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#0D1B2A] mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#778DA9] rounded-lg focus:outline-none focus:border-[#F57C00] bg-white text-[#0D1B2A] disabled:bg-gray-100"
                  placeholder="Su nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#0D1B2A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-[#778DA9] rounded-lg focus:outline-none focus:border-[#F57C00] bg-white text-[#0D1B2A] disabled:bg-gray-100"
                  placeholder="su@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0D1B2A] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 border border-[#778DA9] rounded-lg focus:outline-none focus:border-[#F57C00] resize-none bg-white text-[#0D1B2A] disabled:bg-gray-100"
                  placeholder="Cuéntenos sobre su proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#F57C00] hover:bg-[#E86C00] disabled:bg-[#B0571B] text-white px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 transform hover:scale-105 disabled:hover:scale-100"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details */}
            <div className="bg-[#E0E1DD] p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#415A77] rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-1">Dirección</h3>
                  <p className="text-[#415A77]">
                    Dr. Carlos Pío Collivadino 670<br />
                    Temperley (1834)<br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#415A77] rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-1">Teléfono</h3>
{/*                   <a href="tel:+541139760464" className="text-[#F57C00] hover:underline">
                    +54 (011) 3976-0464
                  </a> */}
                  <a href="tel:+541139017592" className="text-[#F57C00] hover:underline">
                    +54 (011) 3901-7592
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#415A77] rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-1">Email</h3>
                  <a href="mailto:info.soldadurasleiva@gmail.com" className="text-[#F57C00] hover:underline">
                    info.soldadurasleiva@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6555.819356734265!2d-58.364672!3d-34.75786800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d3140c79533%3A0xbcb112872b66c391!2sDr.%20Carlos%20Collivadino%20670%2C%20B1834INP%20Temperley%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1763676937475!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Soldaduras Leiva"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
