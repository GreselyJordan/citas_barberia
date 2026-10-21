import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { SERVICES, BARBERS, TIME_SLOTS } from '../../constants/mockData';
import {
  Scissors,
  Calendar,
  Clock,
  Star,
  Check,
  CheckCircle2,
  Lock,
  ChevronLeft,
  ChevronRight,
  Info,
  User,
  X,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('servicio');
  const barberParam = searchParams.get('barbero');

  // Inicializar servicio y barbero según query params si existen
  const initialService =
    SERVICES.find((s) => s.id === serviceParam) || SERVICES[2]; // Default: Combo
  const initialBarber =
    BARBERS.find((b) => b.id === barberParam) || BARBERS[0]; // Default: Lucas

  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedBarber, setSelectedBarber] = useState(initialBarber);
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedMonth, setSelectedMonth] = useState('Octubre 2026');
  const [selectedTime, setSelectedTime] = useState('16:00');

  // Estado del modal de confirmación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      const found = SERVICES.find((s) => s.id === serviceParam);
      if (found) setSelectedService(found);
    }
    if (barberParam) {
      const found = BARBERS.find((b) => b.id === barberParam);
      if (found) setSelectedBarber(found);
    }
  }, [serviceParam, barberParam]);

  const handleOpenBookingModal = () => {
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Por favor indica tu nombre y teléfono de contacto.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-sans-ui selection:bg-[#c59b63]/30 selection:text-[#f3d9b4]">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabecera de Navegación de Regreso */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-[#d4a366] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Link>
          </div>

          {/* Título de la Pantalla de Agendamiento */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1c1e29]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4a366]">
                Reserva Online Instantánea
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-zinc-100 mt-2">
                Agenda tu Horario
              </h1>
              <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                Personaliza cada detalle de tu visita. Elige el servicio ideal, tu barbero de confianza y el horario que mejor se adapte a tu agenda.
              </p>
            </div>

            {/* Horario de Atención */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#13141d] border border-[#232535] text-xs text-zinc-300">
              <Clock className="w-4 h-4 text-[#d4a366]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
                  Atención en Sede
                </span>
                <span className="font-medium text-zinc-200">LUN - SÁB: 09:00 a 20:00</span>
              </div>
            </div>
          </div>

          {/* Indicador de 4 Pasos Visuales */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { step: '1', title: 'Servicio', desc: 'Elige tu servicio' },
              { step: '2', title: 'Barbero', desc: 'Selecciona profesional' },
              { step: '3', title: 'Fecha y hora', desc: 'Día y bloque horario' },
              { step: '4', title: 'Confirmar', desc: 'Revisa y finaliza' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#12131b] border border-[#1e202c]"
              >
                <div className="w-8 h-8 rounded-full bg-[#c59b63] text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-md shadow-amber-900/30">
                  {item.step}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-zinc-200 uppercase tracking-wider truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-zinc-500 truncate">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Panel Principal de 4 Columnas */}
          <div className="bg-[#101118] border border-[#1e202b] rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/80">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {/* COLUMNA 1: SERVICIOS */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#1c1e29]">
                  <Scissors className="w-4 h-4 text-[#d4a366]" />
                  <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-zinc-200">
                    1. Elige el servicio
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {SERVICES.map((service) => {
                    const isSelected = selectedService.id === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer group ${
                          isSelected
                            ? 'bg-[#181924] border-[#c59b63] shadow-md shadow-amber-950/20'
                            : 'bg-[#13141d] border-[#1d1f2b] hover:border-[#2d2f40] hover:bg-[#161722]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-semibold text-zinc-100 group-hover:text-white">
                              {service.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-bold text-[#d4a366]">
                                {service.priceFormatted}
                              </span>
                              <span className="text-[10px] text-zinc-500">• {service.duration}</span>
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#c59b63] text-black'
                                : 'border border-[#2e3143] group-hover:border-[#42465e]'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#14151e] border border-[#1e202b] text-[11px] text-zinc-400">
                  <Info className="w-4 h-4 text-[#d4a366] shrink-0 mt-0.5" />
                  <span>Todos los servicios incluyen toalla caliente, hidratación y acabado premium.</span>
                </div>
              </div>

              {/* COLUMNA 2: BARBERO */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#1c1e29]">
                  <User className="w-4 h-4 text-[#d4a366]" />
                  <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-zinc-200">
                    2. Elige el barbero
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {BARBERS.map((barber) => {
                    const isSelected = selectedBarber.id === barber.id;
                    return (
                      <div
                        key={barber.id}
                        onClick={() => setSelectedBarber(barber)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                          isSelected
                            ? 'bg-[#181924] border-[#c59b63] shadow-md shadow-amber-950/20'
                            : 'bg-[#13141d] border-[#1d1f2b] hover:border-[#2d2f40] hover:bg-[#161722]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={barber.image}
                            alt={barber.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#2b2d3d]"
                          />
                          <div>
                            <p className="text-xs font-semibold text-zinc-100 group-hover:text-white">
                              {barber.name}
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Star className="w-3 h-3 fill-[#d4a366] text-[#d4a366]" />
                              <span className="text-[11px] font-bold text-zinc-300">
                                {barber.rating}
                              </span>
                              <span className="text-[10px] text-zinc-500">
                                ({barber.role})
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-[#c59b63] text-black'
                              : 'border border-[#2e3143] group-hover:border-[#42465e]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 text-center">
                  <Link
                    to="/barberos"
                    className="inline-flex items-center gap-1 text-xs text-[#d4a366] hover:text-[#e0b77e] font-medium transition-colors"
                  >
                    <span>Conocer más sobre el equipo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* COLUMNA 3: FECHA Y HORA */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#1c1e29]">
                  <Calendar className="w-4 h-4 text-[#d4a366]" />
                  <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-zinc-200">
                    3. Elige fecha y hora
                  </h3>
                </div>

                {/* Calendario mensual */}
                <div className="p-3.5 rounded-xl bg-[#13141d] border border-[#1e202b] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-[#20222f] text-zinc-400 hover:text-white"
                      aria-label="Mes anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-zinc-200">{selectedMonth}</span>
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-[#20222f] text-zinc-400 hover:text-white"
                      aria-label="Mes siguiente"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-zinc-500 uppercase">
                    <span>D</span>
                    <span>L</span>
                    <span>M</span>
                    <span>M</span>
                    <span>J</span>
                    <span>V</span>
                    <span>S</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => {
                      const isDaySelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          type="button"
                          onClick={() => setSelectedDate(day)}
                          className={`py-1.5 rounded-lg font-medium transition-all ${
                            isDaySelected
                              ? 'bg-[#c59b63] text-black font-bold shadow-sm'
                              : 'text-zinc-300 hover:bg-[#1f212d] hover:text-white'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selector de Horarios */}
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                    Horarios disponibles
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSlotSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isSlotSelected
                              ? 'bg-[#c59b63] text-black shadow-md shadow-amber-950/30'
                              : 'bg-[#14151d] border border-[#20222f] text-zinc-300 hover:border-[#333649] hover:bg-[#181924]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* COLUMNA 4: RESUMEN Y ACCIÓN */}
              <div className="lg:col-span-3 flex flex-col justify-between p-5 rounded-xl bg-[#14151e] border border-[#232534] space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#232534]">
                    <Calendar className="w-4 h-4 text-[#d4a366]" />
                    <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-zinc-100">
                      4. Resumen de la cita
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                        Servicio
                      </span>
                      <div className="flex justify-between items-center text-zinc-200 font-medium">
                        <span>{selectedService.name}</span>
                        <span className="text-[#d4a366] font-bold">
                          {selectedService.priceFormatted}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                        Barbero Asignado
                      </span>
                      <p className="text-zinc-200 font-medium">{selectedBarber.name}</p>
                    </div>

                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                        Fecha Seleccionada
                      </span>
                      <p className="text-zinc-200 font-medium">{selectedDate} de Octubre, 2026</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                          Hora
                        </span>
                        <p className="text-zinc-200 font-medium">{selectedTime}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                          Duración
                        </span>
                        <p className="text-zinc-200 font-medium">{selectedService.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#232534] flex justify-between items-baseline">
                    <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                      Total a Pagar
                    </span>
                    <span className="font-serif-luxury text-xl font-bold text-[#d4a366]">
                      {selectedService.priceFormatted}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleOpenBookingModal}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-[0.18em] shadow-lg shadow-amber-950/40 hover:shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    Confirmar Agendamiento
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
                    <Lock className="w-3.5 h-3.5 text-[#d4a366]" />
                    <span>Tus datos están protegidos y seguros.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL DE CONFIRMACIÓN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#12131b] border border-[#2a2d3d] rounded-2xl p-6 shadow-2xl text-zinc-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-[#20222e]"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4a366]">
                    Confirmación de Turno
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold">Datos del Cliente</h3>
                  <p className="text-xs text-zinc-400">
                    Ingresa tus datos para enviarte los detalles de tu cita y el recordatorio.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#161722] border border-[#232535] space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Servicio:</span>
                    <span className="font-semibold text-zinc-200">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Barbero:</span>
                    <span className="font-semibold text-zinc-200">{selectedBarber.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Horario:</span>
                    <span className="font-semibold text-[#d4a366]">
                      {selectedDate} Oct 2026 a las {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#232535]">
                    <span className="text-zinc-400 font-bold">Total:</span>
                    <span className="font-bold text-[#d4a366]">
                      {selectedService.priceFormatted}
                    </span>
                  </div>
                </div>

                <form onSubmit={handleConfirmReservation} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a26] border border-[#2b2e40] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 099 123 4567"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a26] border border-[#2b2e40] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-semibold mb-1">
                      Correo Electrónico (opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="carlos@correo.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a26] border border-[#2b2e40] text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#c59b63] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#d4a366] to-[#b38045] hover:from-[#e0b77e] hover:to-[#c59152] text-[#0b0c10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/40 transition-all cursor-pointer"
                  >
                    Confirmar Reserva
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c59b63]/20 border border-[#c59b63] flex items-center justify-center text-[#d4a366] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100">
                    ¡Cita Agendada con Éxito!
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 max-w-xs mx-auto">
                    Excelente, <strong className="text-zinc-200">{clientName}</strong>. Te esperamos el{' '}
                    <strong className="text-[#d4a366]">{selectedDate} de Octubre</strong> a las{' '}
                    <strong className="text-[#d4a366]">{selectedTime}</strong> con{' '}
                    <strong className="text-zinc-200">{selectedBarber.name}</strong>.
                  </p>
                </div>
                <div className="p-3 bg-[#171824] rounded-xl border border-[#242636] text-[11px] text-zinc-400">
                  Hemos enviado los detalles a tu WhatsApp{' '}
                  <span className="text-zinc-200 font-semibold">{clientPhone}</span>.
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 rounded-xl bg-[#c59b63] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#d8ab74] transition-all cursor-pointer"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
