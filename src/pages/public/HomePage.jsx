import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BarberCard from '../../components/common/BarberCard';
import ServiceCard from '../../components/common/ServiceCard';
import { SERVICES, BARBERS } from '../../constants/mockData';
import {
  Scissors,
  Calendar,
  Clock,
  Star,
  Award,
  CreditCard,
  Armchair,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('todos'); // 'todos' | 'servicios' | 'barberos'
  const featuredServices = SERVICES.slice(0, 3);
  const featuredBarbers = BARBERS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* ======================= HERO SECTION ======================= */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#1b1c26]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,155,99,0.14),rgba(11,12,16,0))] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Texto Izquierdo */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161720] border border-[#2b2d3d] text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a366]">
                  <span>Estilo</span>
                  <span className="w-1 h-1 rounded-full bg-[#d4a366]" />
                  <span>Confianza</span>
                  <span className="w-1 h-1 rounded-full bg-[#d4a366]" />
                  <span>Actitud</span>
                </div>

                <h1 className="font-serif-luxury text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08]">
                  Tu estilo, <br />
                  <span className="text-[#d4a366] font-normal italic">nuestra pasión.</span>
                </h1>

                <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Agenda tu horario y vive la mejor experiencia de barbería tradicional y moderna en un ambiente exclusivo diseñado para tu comodidad y distinción.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    to="/agendar"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a366] via-[#c59b63] to-[#ad7e46] hover:from-[#e0b77e] hover:to-[#be8c50] text-[#0b0c10] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-950/40 hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar Ahora</span>
                  </Link>

                  <Link
                    to="/servicios"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#14151d] hover:bg-[#1a1c27] text-zinc-300 hover:text-white border border-[#262837] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200"
                  >
                    Ver Servicios
                  </Link>
                </div>

                <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 border-t border-[#1c1d29]/80">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a366] text-[#d4a366]" />
                    ))}
                  </div>
                  <div className="text-xs text-zinc-400">
                    <span className="font-bold text-zinc-200">4.9 / 5.0</span> en más de 1,200 reseñas
                  </div>
                </div>
              </div>

              {/* Imagen Derecha */}
              <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#c59b63]/25 via-transparent to-[#c59b63]/10 blur-sm -z-10" />

                  <div className="relative rounded-2xl overflow-hidden border border-[#2a2c3a] bg-[#12131b] shadow-2xl shadow-black/80">
                    <img
                      src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80"
                      alt="Barbero profesional realizando corte de precisión"
                      className="w-full h-[440px] sm:h-[500px] object-cover object-center filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0f1017]/90 backdrop-blur-md border border-[#272938] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#c59b63]/20 flex items-center justify-center text-[#d4a366]">
                          <Scissors className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                            Corte & Barba Exclusiva
                          </p>
                          <p className="text-[11px] text-zinc-400">
                            Toalla caliente y perfilado a navaja
                          </p>
                        </div>
                      </div>
                      <Link
                        to="/agendar"
                        className="text-xs font-bold text-[#d4a366] bg-[#c59b63]/15 px-3 py-1.5 rounded-md border border-[#c59b63]/30 hover:bg-[#c59b63] hover:text-black transition-colors"
                      >
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= STRIP DE BENEFICIOS ======================= */}
        <section className="py-14 bg-[#0e0f15] border-b border-[#1a1c25]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calendar,
                  title: 'Agendamiento rápido',
                  desc: 'Marca tu horario en pocos clics sin llamadas ni esperas.',
                },
                {
                  icon: Award,
                  title: 'Profesionales calificados',
                  desc: 'Barberos experimentados con técnicas tradicionales y modernas.',
                },
                {
                  icon: Armchair,
                  title: 'Ambiente premium',
                  desc: 'Música selecta, café de cortesía y toallas calientes aromatizadas.',
                },
                {
                  icon: CreditCard,
                  title: 'Pagos facilitados',
                  desc: 'Aceptamos transferencias, tarjetas de crédito y efectivo.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#12131b] border border-[#1c1e28] hover:border-[#2a2c3a] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366] shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= SERVICIOS Y BARBEROS (SECCIÓN UNIFICADA) ======================= */}
        <section id="servicios-barberos" className="py-20 bg-[#0b0c10] border-b border-[#181923]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Cabecera Principal de la Sección */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a366]">
                  Experiencias & Maestros
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-zinc-100 mt-1">
                  Servicios & Equipo de Barberos
                </h2>
                <p className="text-zinc-400 text-sm max-w-xl mt-2 leading-relaxed">
                  Cortes de autor, rituales tradicionales y los mejores profesionales en un solo lugar. Elige tu tratamiento preferido o al especialista de tu confianza.
                </p>
              </div>

              {/* Selector de Pestañas / Filtro */}
              <div className="flex items-center p-1.5 rounded-xl bg-[#14151e] border border-[#232535] shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('todos')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'todos'
                      ? 'bg-[#c59b63] text-black shadow-md shadow-amber-950/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Ver Todo
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('servicios')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'servicios'
                      ? 'bg-[#c59b63] text-black shadow-md shadow-amber-950/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Servicios ({featuredServices.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('barberos')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'barberos'
                      ? 'bg-[#c59b63] text-black shadow-md shadow-amber-950/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Barberos ({featuredBarbers.length})
                </button>
              </div>
            </div>

            {/* CONTENIDO DE SERVICIOS */}
            {(activeTab === 'todos' || activeTab === 'servicios') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-[#1c1d29]">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#d4a366]" />
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-200">
                      Servicios Principales
                    </h3>
                  </div>
                  <Link
                    to="/servicios"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#d4a366] hover:text-[#e0b77e] transition-colors"
                  >
                    <span>Ver catálogo completo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredServices.map((srv) => (
                    <ServiceCard key={srv.id} service={srv} />
                  ))}
                </div>
              </div>
            )}

            {/* Divisor si se muestran ambos */}
            {activeTab === 'todos' && (
              <div className="border-t border-[#1c1d29] pt-4" />
            )}

            {/* CONTENIDO DE BARBEROS */}
            {(activeTab === 'todos' || activeTab === 'barberos') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-[#1c1d29]">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#d4a366]" />
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-200">
                      Nuestros Maestros Barberos
                    </h3>
                  </div>
                  <Link
                    to="/barberos"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#d4a366] hover:text-[#e0b77e] transition-colors"
                  >
                    <span>Conocer a todo el equipo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredBarbers.map((barber) => (
                    <BarberCard key={barber.id} barber={barber} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ======================= CTA GLOBAL ======================= */}
        <section className="py-20 bg-gradient-to-b from-[#13141f] to-[#0b0c10] text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <span className="inline-block p-3 rounded-2xl bg-[#c59b63]/15 text-[#d4a366] border border-[#c59b63]/30">
              <Sparkles className="w-6 h-6" />
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-zinc-100">
              Tu turno te está esperando
            </h2>
            <p className="text-zinc-400 text-base max-w-lg mx-auto">
              Elige tu horario en tiempo real a través de nuestra plataforma online. Sin demoras ni llamadas.
            </p>
            <div className="pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-950/40 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Ahora</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
