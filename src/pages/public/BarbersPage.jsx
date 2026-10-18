import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { BARBERS } from '../../constants/mockData';
import { Star, Award, Calendar, ChevronRight } from 'lucide-react';

export default function BarbersPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="py-16 md:py-20 text-center border-b border-[#1c1e28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a366]">
              Profesionales Especializados
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-zinc-100 mt-2">
              Nuestro Equipo de Barberos
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
              Cada uno de nuestros profesionales domina un estilo particular. Elige con quién deseas atenderte y reserva tu turno personalizado.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BARBERS.map((barber) => (
                <div
                  key={barber.id}
                  className="bg-[#12131b] border border-[#1e202c] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-[#c59b63]/60 transition-all duration-300"
                >
                  <div className="sm:w-44 shrink-0">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-full h-52 sm:h-full object-cover rounded-xl border border-[#2b2d3d]"
                    />
                  </div>

                  <div className="flex flex-col justify-between space-y-4 flex-grow">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#d4a366] uppercase tracking-wider">
                          {barber.experience}
                        </span>
                        <div className="flex items-center gap-1 bg-[#1a1c27] px-2.5 py-1 rounded-full border border-white/5 text-xs">
                          <Star className="w-3.5 h-3.5 fill-[#d4a366] text-[#d4a366]" />
                          <span className="font-bold text-zinc-100">{barber.rating}</span>
                          <span className="text-zinc-500">({barber.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100 mt-1">
                        {barber.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium">{barber.role}</p>

                      <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{barber.bio}</p>

                      <div className="mt-3 p-2.5 rounded-lg bg-[#161723] border border-[#232535] text-[11px] text-zinc-300">
                        <strong className="text-[#d4a366] block">Especialidad:</strong>
                        <span>{barber.specialty}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/agendar?barbero=${barber.id}`}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-950/30 transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Agendar Cita con {barber.name.split(' ')[0]}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
