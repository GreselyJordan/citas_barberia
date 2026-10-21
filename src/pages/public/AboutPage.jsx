import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import {
  Scissors,
  ShieldCheck,
  Award,
  Sparkles,
  Coffee,
  HeartHandshake,
  Calendar,
  CheckCircle,
} from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: Scissors,
      title: 'Oficio Artesanal',
      desc: 'Combinamos técnicas clásicas de navaja libre con las tendencias mundiales más vanguardistas.',
    },
    {
      icon: ShieldCheck,
      title: 'Higiene & Esterilización',
      desc: 'Protocolos hospitalarios de desinfección UV en cada herramienta y navajas 100% descartables.',
    },
    {
      icon: Coffee,
      title: 'Bar & Lounge Premium',
      desc: 'Disfruta de café de especialidad, bebidas de cortesía y un ambiente diseñado para desconectar.',
    },
    {
      icon: Award,
      title: 'Barberos Certificados',
      desc: 'Nuestro equipo cuenta con formación en academias de referencia en Londres, Milán y Buenos Aires.',
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
      caption: 'Sillones de cuero clásico de alta gama',
    },
    {
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      caption: 'Ritual tradicional de afeitado con toalla caliente',
    },
    {
      url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
      caption: 'Herramientas de precisión esterilizadas',
    },
    {
      url: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80',
      caption: 'Espacio sobrio, masculino y exclusivo',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Cabecera Hero Nosotros */}
        <section className="relative py-16 md:py-24 border-b border-[#1c1e28] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,155,99,0.1),transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.26em] text-[#d4a366] mb-3">
              Nuestra Historia & Esencia
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-zinc-100 max-w-3xl mx-auto leading-tight">
              Más que un Corte, <br />
              <span className="text-[#d4a366] italic font-normal">un Refugio de Distinción.</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Nacimos con una convicción clara: devolver al cuidado masculino el ritual, la pausa y la excelencia que el ritmo moderno le había arrebatado.
            </p>
          </div>
        </section>

        {/* Sección Historia y Filosofía */}
        <section className="py-20 border-b border-[#181923]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a366]">
                  El Arte de la Barbería
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100">
                  La perfecta armonía entre tradición y vanguardia
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  En <strong className="text-zinc-200">Barbería Exclusiva</strong> entendemos que cada hombre tiene una estructura facial y un estilo personal únicos. No creemos en cortes en serie ni en prisas innecesarias.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Cada sesión inicia con un diagnóstico personalizado, toallas calientes aromatizadas con aceites esenciales botánicos y navajas afiladas con maestría para garantizar contornos impecables sin irritación.
                </p>

                <div className="pt-2 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#d4a366]" />
                    <span>Asesoría de imagen facial personalizada según la forma de tu rostro.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#d4a366]" />
                    <span>Productos de barbería premium importados libres de sulfatos y parabenos.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#d4a366]" />
                    <span>Puntualidad rigurosa: tu tiempo es tan valioso como tu apariencia.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#232534] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
                    alt="Interior de Barbería Exclusiva"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-serif-luxury text-lg font-bold text-white block">
                      Espacio Diseñado para el Caballero Contemporáneo
                    </span>
                    <span className="text-xs text-[#d4a366]">Sede Principal Las Palmas, Esmeraldas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares y Valores */}
        <section className="py-20 bg-[#0e0f16] border-b border-[#181923]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a366]">
                Nuestros Pilares
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100">
                Por Qué Nos Eligen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#12131b] border border-[#1e202b] hover:border-[#c59b63]/50 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c59b63]/15 border border-[#c59b63]/30 flex items-center justify-center text-[#d4a366]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-base font-bold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Espacios */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a366]">
                Galería Visual
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100">
                El Ambiente que te Espera
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-72 rounded-2xl overflow-hidden border border-[#1e202c] shadow-lg"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-zinc-200">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner hacia Agendar */}
        <section className="py-16 bg-gradient-to-r from-[#171822] via-[#1a1b26] to-[#171822] border-y border-[#252737]">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <span className="w-10 h-10 rounded-full bg-[#c59b63]/20 border border-[#c59b63]/40 flex items-center justify-center text-[#d4a366] mx-auto">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-zinc-100">
              ¿Listo para vivir la experiencia?
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Reserva tu cita en menos de 2 minutos. Elige a tu barbero y tu horario ideal.
            </p>
            <div className="pt-2">
              <Link
                to="/agendar"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-950/40 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar mi Cita</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
