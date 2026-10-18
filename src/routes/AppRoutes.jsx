import { Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import HomePage from '../pages/public/HomePage';
import BookingPage from '../pages/booking/BookingPage';
import AboutPage from '../pages/public/AboutPage';
import ServicesPage from '../pages/public/ServicesPage';
import BarbersPage from '../pages/public/BarbersPage';
import ContactPage from '../pages/public/ContactPage';

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/barberos" element={<BarbersPage />} />
        <Route path="/contacto" element={<ContactPage />} />

        {/* Ruta de Agendamiento de Citas */}
        <Route path="/agendar" element={<BookingPage />} />

        {/* 404 No Encontrado */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col items-center justify-center p-4 text-center">
              <span className="font-serif-luxury text-7xl font-bold text-[#d4a366]">404</span>
              <h1 className="font-serif-luxury text-2xl font-bold mt-2">Página No Encontrada</h1>
              <p className="text-zinc-400 text-sm mt-2 max-w-sm">
                La página que estás buscando no existe o ha sido movida.
              </p>
              <Link
                to="/"
                className="mt-6 px-6 py-2.5 rounded-xl bg-[#c59b63] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d8ab74] transition-colors"
              >
                Volver al Inicio
              </Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}
