import { Link } from 'react-router-dom';
import { Scissors, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08080c] border-t border-[#1c1e27] pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#181922]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c59b63]/20 border border-[#c59b63]/40 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-[#d4a366]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-base tracking-[0.2em] font-bold text-zinc-100 uppercase leading-none">
                  Barbería
                </span>
                <span className="font-serif-luxury text-[11px] tracking-[0.3em] text-[#d4a366] uppercase font-semibold">
                  Exclusiva
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Más que un corte, una experiencia diseñada para hombres que valoran la excelencia, el detalle y la distinción.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14151d] hover:bg-[#c59b63] hover:text-black border border-[#222431] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14151d] hover:bg-[#c59b63] hover:text-black border border-[#222431] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#14151d] hover:bg-[#c59b63] hover:text-black border border-[#222431] flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#d4a366] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-[#d4a366] transition-colors">
                  Servicios & Barberos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#d4a366] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="text-[#d4a366] font-semibold hover:underline">
                  Agendar Turno Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4a366] shrink-0 mt-0.5" />
                <span>+593 99 123 4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4a366] shrink-0 mt-0.5" />
                <span>contacto@barberiaexclusiva.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4a366] shrink-0 mt-0.5" />
                <span>Malecón Las Palmas, Esmeraldas - Ecuador</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 mb-4">
              Horario de Atención
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="text-zinc-200 font-medium">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="text-zinc-200 font-medium">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between pt-1 border-t border-[#1a1c25]">
                <span>Domingos</span>
                <span className="text-[#d4a366] font-medium">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Barbería Exclusiva. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Desarrollado con dedicación para una experiencia de primer nivel.
          </p>
        </div>
      </div>
    </footer>
  );
}
