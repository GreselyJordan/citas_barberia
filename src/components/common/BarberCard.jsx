import { Link } from 'react-router-dom';
import { Star, Calendar } from 'lucide-react';

/**
 * Componente reutilizable para mostrar la tarjeta de un barbero.
 * @param {Object} props
 * @param {Object} props.barber - Datos del barbero (id, name, role, rating, image, etc.)
 * @param {'vertical' | 'detailed'} [props.variant='vertical'] - Variante visual
 */
export default function BarberCard({ barber, variant = 'vertical' }) {
  if (variant === 'detailed') {
    return (
      <div className="bg-[#12131b] border border-[#1e202c] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-[#c59b63]/60 transition-all duration-300">
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
                {barber.reviews && <span className="text-zinc-500">({barber.reviews})</span>}
              </div>
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100 mt-1">
              {barber.name}
            </h3>
            <p className="text-xs text-zinc-400 font-medium">{barber.role}</p>

            {barber.bio && (
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{barber.bio}</p>
            )}

            {barber.specialty && (
              <div className="mt-3 p-2.5 rounded-lg bg-[#161723] border border-[#232535] text-[11px] text-zinc-300">
                <strong className="text-[#d4a366] block">Especialidad:</strong>
                <span>{barber.specialty}</span>
              </div>
            )}
          </div>

          <div className="pt-2">
            <Link
              to={`/agendar?barbero=${barber.id}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-950/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita con {barber.name.split(' ')[0]}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Variante estándar vertical (para HomePage y grids)
  return (
    <div className="bg-[#12131b] border border-[#1e202b] rounded-2xl overflow-hidden group hover:border-[#c59b63]/60 transition-all duration-300 flex flex-col justify-between">
      <div className="relative h-64 overflow-hidden">
        <img
          src={barber.image}
          alt={barber.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131b] via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 text-xs">
          <Star className="w-3.5 h-3.5 fill-[#d4a366] text-[#d4a366]" />
          <span className="font-bold text-zinc-100">{barber.rating}</span>
        </div>
      </div>

      <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-serif-luxury text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
            {barber.name}
          </h3>
          <p className="text-xs text-[#d4a366] font-medium mt-0.5">{barber.role}</p>
        </div>

        <Link
          to={`/agendar?barbero=${barber.id}`}
          className="block text-center py-2.5 rounded-lg bg-[#181924] hover:bg-[#c59b63] text-zinc-300 hover:text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
        >
          Agendar con él
        </Link>
      </div>
    </div>
  );
}
