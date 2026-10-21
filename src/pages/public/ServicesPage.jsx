import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ServiceCard from '../../components/common/ServiceCard';
import BarberCard from '../../components/common/BarberCard';
import { SERVICES, BARBERS } from '../../constants/mockData';
import { Scissors, User, Calendar, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Corte', 'Barba', 'Combos', 'Detalles', 'Color'];

  const filteredServices =
    selectedCategory === 'Todos'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Cabecera Principal */}
        <section className="py-16 md:py-20 text-center border-b border-[#1c1e28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a366]">
              Experiencias & Maestros de la Navaja
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-zinc-100 mt-2">
              Nuestros Servicios & Barberos
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
              Explora nuestra gama de cortes y rituales de cuidado masculino, y conoce al equipo de barberos profesionales listos para atenderte en Esmeraldas.
            </p>

            {/* Accesos rápidos de navegación dentro de la página */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a
                href="#catalogo-servicios"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14151e] hover:bg-[#1a1c27] text-zinc-200 border border-[#262837] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Scissors className="w-4 h-4 text-[#d4a366]" />
                <span>Ver Catálogo de Servicios</span>
              </a>
              <a
                href="#equipo-barberos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14151e] hover:bg-[#1a1c27] text-zinc-200 border border-[#262837] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <User className="w-4 h-4 text-[#d4a366]" />
                <span>Conocer a los Barberos</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================= SECCIÓN 1: SERVICIOS ======================= */}
        <section id="catalogo-servicios" className="py-20 border-b border-[#181923]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a366]">
                  Tarifas en Dólares (USD)
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100 mt-1">
                  Catálogo de Tratamientos
                </h2>
                <p className="text-zinc-400 text-sm mt-1">
                  Todos los servicios incluyen toalla caliente aromatizada y productos de fijación.
                </p>
              </div>

              {/* Filtro por Categorías */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#c59b63] text-black font-bold shadow-md shadow-amber-950/30'
                        : 'bg-[#14151e] border border-[#232535] text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} showIncludes={true} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= SECCIÓN 2: BARBEROS ======================= */}
        <section id="equipo-barberos" className="py-20 border-b border-[#181923] bg-[#0c0d13]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a366]">
                Especialistas de la Casa
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100">
                Nuestro Equipo de Barberos
              </h2>
              <p className="text-zinc-400 text-sm">
                Profesionales certificados con años de trayectoria. Elige al especialista con quien deseas agendar tu turno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BARBERS.map((barber) => (
                <BarberCard key={barber.id} barber={barber} variant="detailed" />
              ))}
            </div>
          </div>
        </section>

        {/* ======================= BANNER CTA ======================= */}
        <section className="py-16 bg-gradient-to-r from-[#171822] via-[#1a1b26] to-[#171822] text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-5">
            <span className="w-10 h-10 rounded-full bg-[#c59b63]/20 border border-[#c59b63]/40 flex items-center justify-center text-[#d4a366] mx-auto">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="font-serif-luxury text-3xl font-bold text-zinc-100">
              ¿Listo para reservar tu experiencia?
            </h2>
            <p className="text-zinc-400 text-sm">
              Agenda tu cita en línea en menos de dos minutos. Elige el servicio, el barbero y tu horario preferido.
            </p>
            <div className="pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Turno Online</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
