import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ServiceCard from '../../components/common/ServiceCard';
import { SERVICES } from '../../constants/mockData';

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
                <ServiceCard key={service.id} service={service} showIncludes={true} />
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
