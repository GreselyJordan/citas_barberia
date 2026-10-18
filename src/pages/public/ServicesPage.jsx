import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { SERVICES } from '../../constants/mockData';
import { Scissors, Clock, Check, Calendar, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Cabecera */}
        <section className="py-16 md:py-20 text-center border-b border-[#1c1e28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a366]">
              Catálogo de Servicios
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-zinc-100 mt-2">
              Tarifas & Tratamientos
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
              Descubre nuestra gama de servicios de corte, afeitado y estética masculina. Cada tratamiento incluye toalla caliente y productos premium.
            </p>
          </div>
        </section>

        {/* Lista de Servicios */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group ${
                    service.popular
                      ? 'bg-gradient-to-b from-[#181a24] to-[#12131b] border-[#c59b63] shadow-xl shadow-amber-950/20'
                      : 'bg-[#12131b] border-[#1d1f2b] hover:border-[#2f3244]'
                  }`}
                >
                  {service.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#c59b63] text-black font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Más Popular
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4a366]">
                          {service.category}
                        </span>
                        <h3 className="font-serif-luxury text-xl font-bold text-zinc-100 mt-0.5">
                          {service.name}
                        </h3>
                      </div>
                      <span className="font-serif-luxury font-bold text-lg text-[#d4a366] bg-[#c59b63]/10 px-3 py-1 rounded-lg border border-[#c59b63]/20 shrink-0">
                        {service.priceFormatted}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
                      <Clock className="w-4 h-4 text-[#d4a366]" />
                      <span>Duración: {service.duration}</span>
                    </div>

                    {/* Incluye */}
                    <div className="pt-3 border-t border-[#1d1f2b] space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Qué incluye:
                      </p>
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-[#d4a366] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={`/agendar?servicio=${service.id}`}
                      className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#d4a366]/20 to-[#c59b63]/10 hover:from-[#c59b63] hover:to-[#d4a366] text-[#e0b77e] hover:text-black font-semibold text-xs uppercase tracking-wider border border-[#c59b63]/40 transition-all duration-200 cursor-pointer"
                    >
                      Agendar este Servicio
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="py-16 bg-[#0e0f15] border-t border-[#1c1d29] text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h2 className="font-serif-luxury text-3xl font-bold text-zinc-100">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-zinc-400 text-sm">
              Pregunta por nuestros paquetes para bodas, eventos y servicios a domicilio VIP.
            </p>
            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171824] hover:bg-[#202230] text-zinc-200 font-semibold text-xs uppercase tracking-wider border border-[#2b2d3d] transition-colors"
              >
                Contáctanos Directamente
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
