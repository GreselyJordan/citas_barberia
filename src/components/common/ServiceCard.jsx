import { Link } from 'react-router-dom';
import { Clock, Check } from 'lucide-react';

/**
 * Componente reutilizable para mostrar un servicio de barbería.
 * @param {Object} props
 * @param {Object} props.service - Datos del servicio (id, name, priceFormatted, duration, description, etc.)
 * @param {boolean} [props.showIncludes=false] - Mostrar o no la lista de qué incluye
 */
export default function ServiceCard({ service, showIncludes = false }) {
  return (
    <div
      className={`p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative group ${
        service.popular
          ? 'bg-gradient-to-b from-[#181a24] to-[#12131b] border-[#c59b63] shadow-xl shadow-amber-950/20'
          : 'bg-[#12131b] border-[#1d1f2b] hover:border-[#2f3244]'
      }`}
    >
      {service.popular && (
        <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#c59b63] text-black font-bold text-[10px] uppercase tracking-wider shadow-md">
          Más Popular
        </span>
      )}

      <div className="space-y-4">
        <div className="flex justify-between items-start gap-3">
          <div>
            {service.category && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4a366]">
                {service.category}
              </span>
            )}
            <h3 className="font-serif-luxury text-xl font-bold text-zinc-100 mt-0.5">
              {service.name}
            </h3>
          </div>
          <span className="font-serif-luxury font-bold text-base text-[#d4a366] bg-[#c59b63]/10 px-2.5 py-1 rounded-md border border-[#c59b63]/20 shrink-0">
            {service.priceFormatted}
          </span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>

        <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
          <Clock className="w-3.5 h-3.5 text-[#d4a366]" />
          <span>{service.duration} de atención</span>
        </div>

        {showIncludes && service.includes && (
          <div className="pt-3 border-t border-[#1d1f2b] space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Qué incluye:
            </p>
            {service.includes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <Check className="w-3.5 h-3.5 text-[#d4a366] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6">
        <Link
          to={`/agendar?servicio=${service.id}`}
          className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#d4a366]/20 to-[#c59b63]/10 hover:from-[#c59b63] hover:to-[#d4a366] text-[#e0b77e] hover:text-black font-semibold text-xs uppercase tracking-wider border border-[#c59b63]/40 transition-all duration-200 cursor-pointer"
        >
          {showIncludes ? 'Agendar este Servicio' : 'Reservar este Turno'}
        </Link>
      </div>
    </div>
  );
}
