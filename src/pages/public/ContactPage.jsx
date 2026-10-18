import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor completa nombre y teléfono.');
      return;
    }
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="py-16 md:py-20 text-center border-b border-[#1c1e28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a366]">
              Atención al Cliente
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-zinc-100 mt-2">
              Contacto & Ubicación
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              ¿Tienes alguna duda sobre nuestros servicios, eventos corporativos o reservas? Escríbenos o visítanos.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Información de Contacto */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-7 rounded-2xl bg-[#12131b] border border-[#1e202c] space-y-6">
                  <h3 className="font-serif-luxury text-xl font-bold text-zinc-100 pb-3 border-b border-[#1f212f]">
                    Información de la Barbería
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366] shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold">Dirección Principal</span>
                        <p className="text-zinc-200 text-sm mt-0.5">Cra. 15 # 85-32, Zona Rosa, Bogotá</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold">Teléfono / WhatsApp</span>
                        <p className="text-zinc-200 text-sm mt-0.5">+57 (300) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold">Correo Electrónico</span>
                        <p className="text-zinc-200 text-sm mt-0.5">contacto@barberiaexclusiva.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366] shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 block font-semibold">Horario de Operación</span>
                        <p className="text-zinc-200 text-sm mt-0.5">Lunes a Sábado: 09:00 - 20:00</p>
                        <p className="text-[#d4a366] text-xs mt-0.5">Domingo: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#161723] to-[#12131b] border border-[#232535]">
                  <h4 className="font-serif-luxury text-base font-bold text-zinc-100">
                    ¿Prefieres escribirnos directamente?
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 mb-4">
                    Respuesta rápida en menos de 10 minutos a través de nuestro canal de WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Chat de WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Formulario de Mensaje */}
              <div className="lg:col-span-7">
                <div className="p-8 rounded-2xl bg-[#12131b] border border-[#1e202c] shadow-xl">
                  {!formSent ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100">
                          Envíanos un Mensaje
                        </h3>
                        <p className="text-xs text-zinc-400">
                          Completa el formulario y te responderemos a la brevedad.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="block text-zinc-300 font-semibold mb-1">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-[#282a3b] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-zinc-300 font-semibold mb-1">
                            Teléfono / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Tu teléfono"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-[#282a3b] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="text-xs">
                        <label className="block text-zinc-300 font-semibold mb-1">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          placeholder="tu@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-[#282a3b] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                        />
                      </div>

                      <div className="text-xs">
                        <label className="block text-zinc-300 font-semibold mb-1">
                          Mensaje o Consulta
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-[#282a3b] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#c59b63]/20 border border-[#c59b63] flex items-center justify-center text-[#d4a366] mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100">
                        ¡Mensaje Recibido!
                      </h3>
                      <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                        Gracias por escribirnos, <strong className="text-zinc-200">{formData.name}</strong>. Nos comunicaremos contigo vía WhatsApp en breve.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSent(false);
                          setFormData({ name: '', phone: '', email: '', message: '' });
                        }}
                        className="py-2.5 px-6 rounded-xl bg-[#1d1f2c] text-zinc-200 font-semibold text-xs uppercase tracking-wider hover:bg-[#282a3b] transition-colors"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
