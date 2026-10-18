import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BarberCard from '../../components/common/BarberCard';
import { BARBERS } from '../../constants/mockData';

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
                <BarberCard key={barber.id} barber={barber} variant="detailed" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
