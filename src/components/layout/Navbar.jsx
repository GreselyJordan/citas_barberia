import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Scissors, Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#1f212a] py-3.5 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4a366] to-[#a87438] p-[1px] flex items-center justify-center shadow-lg shadow-amber-950/30">
              <div className="w-full h-full bg-[#0d0e13] rounded-[7px] flex items-center justify-center group-hover:bg-[#14151c] transition-colors">
                <Scissors className="w-5 h-5 text-[#d4a366] transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg tracking-[0.2em] font-bold text-zinc-100 uppercase leading-none">
                Barbería
              </span>
              <span className="font-serif-luxury text-xs tracking-[0.35em] text-[#d4a366] uppercase font-semibold leading-tight">
                Exclusiva
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links con NavLink */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-[#d4a366] font-bold' : 'text-zinc-300 hover:text-[#d4a366]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c59b63] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/agendar"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#c59b63]/60 bg-[#c59b63]/10 hover:bg-[#c59b63] text-[#e0b77e] hover:text-black font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 shadow-md shadow-amber-950/20 hover:shadow-amber-500/25 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-[#232533] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm uppercase tracking-wider ${
                  isActive ? 'text-[#d4a366] font-bold' : 'text-zinc-300 hover:text-[#d4a366]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/agendar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-lg bg-[#c59b63] text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
          </Link>
        </div>
      )}
    </header>
  );
}
