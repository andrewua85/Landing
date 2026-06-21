import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck,
  Scale, 
  Gavel, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Bitcoin, 
  Laptop, 
  Star, 
  CheckCircle, 
  ChevronDown, 
  Lock, 
  ArrowRight, 
  AlertTriangle, 
  Menu, 
  X, 
  Check, 
  FileText, 
  Globe, 
  Users, 
  Zap, 
  Activity 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  faqItems, 
  testimonialList, 
  fraudCategories, 
  processSteps, 
  platformList 
} from './data';

export default function App() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("forex");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Multistep Form states
  const [formStep, setFormStep] = useState(1);
  const [monto, setMonto] = useState("");
  const [tipoFraude, setTipoFraude] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [resumen, setResumen] = useState("");
  
  // Submit animation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulated active operators
  const [activeAgents, setActiveAgents] = useState(4);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate active agents shifting to keep the site alive
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgents(prev => {
        const offset = Math.random() > 0.5 ? 1 : -1;
        const net = prev + offset;
        return net >= 2 && net <= 6 ? net : prev;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Multistep handler
  const handleNextStep = () => {
    if (formStep === 1 && !monto) {
      alert("Por favor, seleccione un rango para el dinero perdido.");
      return;
    }
    if (formStep === 2 && !tipoFraude) {
      alert("Por favor, elija la categoría del fraude.");
      return;
    }
    if (formStep === 3 && !plataforma.trim()) {
      alert("Por favor, escriba el nombre o dominio de la plataforma.");
      return;
    }
    if (formStep === 4 && (!nombre.trim() || !email.trim() || !telefono.trim())) {
      alert("Por favor, complete sus datos de contacto prioritarios.");
      return;
    }
    if (formStep < 5) {
      setFormStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(prev => prev - 1);
    }
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !telefono.trim()) {
      alert("Por favor, complete sus datos de enlace indispensables.");
      return;
    }

    setIsSubmitting(true);
    setSubmitProgress(1);

    const intv = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 4) {
          clearInterval(intv);
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
          }, 600);
          return 4;
        }
        return prev + 1;
      });
    }, 900);
  };

  const resetForm = () => {
    setMonto("");
    setTipoFraude("");
    setPlataforma("");
    setNombre("");
    setEmail("");
    setTelefono("");
    setResumen("");
    setFormStep(1);
    setIsSubmitted(false);
    setSubmitProgress(0);
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const offsetPos = elRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg-light text-on-surface font-body antialiased flex flex-col">
      
      {/* HEADER: Dynamic Desktop & Mobile Friendly */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-slate-200/50' 
          : 'bg-brand-blue py-5 sm:py-6 border-b border-white/5'
      }`}>
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo with interactive click */}
          <div 
            onClick={() => scrollToElement('inicio')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-lg shadow-md group-hover:bg-white transition-colors duration-300">
              <Scale className="text-brand-blue w-5.5 h-5.5" />
            </div>
            <div>
              <span className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-brand-blue' : 'text-white'
              }`}>
                LegalRecovery
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-[#fcba53] font-bold uppercase leading-none mt-0.5">
                Investigación Informática
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { id: 'señales', label: 'Alertas de Fraude' },
              { id: 'servicios', label: 'Especialidades' },
              { id: 'proceso', label: 'Metodología' },
              { id: 'testimonios', label: 'Experiencias' },
              { id: 'faq', label: 'FAQ' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToElement(item.id)} 
                className={`text-xs font-display font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  isScrolled 
                    ? 'text-brand-blue/80 hover:text-brand-blue' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button 
              onClick={() => scrollToElement('evaluacion')}
              className={`px-5 py-2.5 rounded-full font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-md ${
                isScrolled
                  ? 'bg-brand-blue text-white hover:bg-brand-gold hover:text-brand-blue'
                  : 'bg-brand-gold text-brand-blue hover:bg-white hover:text-brand-blue shadow-brand-gold/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Burger Icon */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-brand-blue hover:bg-brand-blue/5' 
                : 'text-white hover:bg-white/5'
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Drawer Body */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-blue flex items-center justify-center rounded">
                      <Scale className="text-white w-4.5 h-4.5" />
                    </div>
                    <span className="font-display font-bold text-lg text-brand-blue leading-none">LegalRecovery</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                    aria-label="Cerrar Menú"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {[
                    { id: 'señales', label: 'Alertas de Fraude' },
                    { id: 'servicios', label: 'Especialidades' },
                    { id: 'proceso', label: 'Metodología' },
                    { id: 'testimonios', label: 'Casos Reales' },
                    { id: 'faq', label: 'FAQ' }
                  ].map(item => (
                    <button 
                      key={item.id}
                      onClick={() => scrollToElement(item.id)}
                      className="text-left font-display font-semibold text-lg text-brand-blue py-3 border-b border-slate-100 hover:text-[#fcba53]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => scrollToElement('evaluacion')}
                  className="w-full bg-brand-blue hover:bg-[#fcba53] text-white hover:text-brand-blue font-display font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all text-xs"
                >
                  Consulta Prioritaria
                </button>
                <a 
                  href="https://wa.me/#"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#25D366] text-white font-display font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  WhatsApp Directo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-20" id="inicio">
        
        {/* HERO SECTION / MULTISTEP FORM INTEGRATION */}
        <section className="relative bg-brand-blue text-white py-12 sm:py-16 lg:py-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-gold rounded-full filter blur-3xl opacity-20" />
            <div className="absolute -left-16 -bottom-16 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-15" />
          </div>

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left text value prop column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#fcba53] font-bold uppercase">
                    Unidad Pericial de Delitos Tecnológicos
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
                  ¿HA SIDO ESTAFADO EN <span className="text-brand-gold">FOREX</span> O <span className="text-brand-gold text-nowrap">CRIPTOMONEDAS</span>?
                </h1>

                <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  No dé sus fondos por perdidos. LegalRecovery reúne un equipo internacional multidisciplinar de abogados informáticos y peritos de blockchain forense orientados a bloquear el movimiento fraudulento de depósitos en el extranjero y exigir el retorno forzado del capital.
                </p>

                {/* Core trust signals badge */}
                <div className="bg-[#fcba53]/15 border-l-4 border-brand-gold p-4 rounded-r-xl max-w-lg select-none">
                  <p className="text-xs font-mono text-slate-200 leading-normal flex items-start gap-3">
                    <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span>
                      MONITOR DE CONEXIÓN: <strong>{activeAgents} analistas senior activos</strong> listos para revisión inmediata de evidencias. Respuesta en menos de 15 minutos garantizada.
                    </span>
                  </p>
                </div>

                {/* Bullets with icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3">
                    <ShieldCheck className="text-brand-gold w-5.5 h-5.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-semibold">+15M€ de Devoluciones Tramitadas</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3">
                    <Gavel className="text-brand-gold w-5.5 h-5.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-semibold">Litigio Directo en 25 Jurisdicciones</span>
                  </div>
                </div>
              </div>

              {/* Right interactive Multistep Form Block */}
              <div className="lg:col-span-6" id="evaluacion">
                <div className="bg-white text-brand-blue p-5 sm:p-8 rounded-2xl shadow-2xl border border-slate-200/50">
                  
                  {/* Step Progress indicators */}
                  {!isSubmitted && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                          Fase Pre-Litigio: Paso {formStep} de 5
                        </span>
                        <span className="text-xs font-bold text-brand-gold-dark">{formStep * 20}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-blue transition-all duration-300 rounded-full" 
                          style={{ width: `${formStep * 20}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Container */}
                  <div className="min-h-[360px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      
                      {isSubmitting ? (
                        <motion.div 
                          key="submitting"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="py-10 text-center space-y-6 flex flex-col justify-center items-center"
                        >
                          <div className="relative w-16 h-16">
                            <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                            <div className="absolute inset-0 rounded-full border-4 border-t-brand-blue border-r-brand-gold animate-spin" />
                          </div>
                          <div className="space-y-1">
                            <p className="font-display font-bold text-base text-brand-blue">
                              {submitProgress === 1 && "Verificando hashes de red..."}
                              {submitProgress === 2 && "Escaneando mulas bancarias..."}
                              {submitProgress === 3 && "Trazabilidad sobre blockchain..."}
                              {submitProgress === 4 && "Generando informe final..."}
                            </p>
                            <p className="font-mono text-[10px] text-slate-400">
                              SSL Handshake Tunnel: Encriptado AES-256
                            </p>
                          </div>
                          <div className="bg-slate-950 p-4 rounded-xl w-full text-left font-mono text-[10px] text-emerald-400 space-y-1 overflow-hidden h-24 select-none">
                            <p>&gt; CADENA_SSL: PROCESANDO</p>
                            {submitProgress >= 2 && <p>&gt; DETECTADO_BROKER: {plataforma}</p>}
                            {submitProgress >= 3 && <p>&gt; BLOCKCHAIN_KYC: MAPA_STABLECOIN_OK</p>}
                            {submitProgress >= 4 && <p>&gt; INFORME: GENERADO [RECV-9824]</p>}
                          </div>
                        </motion.div>
                      ) : isSubmitted ? (
                        <motion.div 
                          key="submitted"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-8 text-center space-y-5 flex flex-col justify-center items-center"
                        >
                          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                            <Check className="w-8 h-8 stroke-[3]" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                              Análisis de Prioridad Registrado
                            </h3>
                            <p className="text-slate-655 text-sm font-body">
                              Estimado <strong>{nombre}</strong>, hemos asignado su estafa en <strong>{plataforma}</strong> de <strong>{monto}</strong> al departamento técnico.
                            </p>
                            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 inline-block">
                              <span className="text-[10px] text-slate-505 block uppercase tracking-wider font-bold">Identificador de Ticket:</span>
                              <span className="font-mono text-base font-bold text-[#815600] tracking-widest block mt-0.5">RECV-9824-MDR</span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed font-body">
                              Un perito de guardia le contactará telefónicamente al número (<strong>{telefono}</strong>) o e-mail (<strong>{email}</strong>) en un plazo aproximado de 15 minutos para iniciar la investigación técnica gratuita.
                            </p>
                          </div>
                          <button 
                            type="button"
                            onClick={resetForm}
                            className="font-display text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue pt-3 border-t border-slate-100 w-full hover:underline"
                          >
                            Hacer otra consulta de viabilidad
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                          <div>
                            
                            {/* STEP 1: Loss scale */}
                            {formStep === 1 && (
                              <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                className="space-y-4"
                              >
                                <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue leading-snug">
                                  ¿Cuál es la cuantía aproximada que ha perdido?
                                </h3>
                                <p className="text-[10px] text-slate-500 block italic leading-normal">
                                  *Por favor, cuente solo el depósito que usted transfirió originalmente (dinero real de sus cuentas bancarias o criptomonedas).
                                </p>

                                <div className="grid grid-cols-1 gap-2">
                                  {[
                                    "Menos de 5.000 €",
                                    "5.000 € – 15.000 €",
                                    "15.000 € – 50.000 €",
                                    "50.050 € – 100.000 €",
                                    "Más de 100.000 €"
                                  ].map((val) => (
                                    <label 
                                      key={val}
                                      className={`flex items-center gap-3 p-3.5 border rounded-full cursor-pointer transition-all duration-200 select-none ${
                                        monto === val 
                                          ? 'border-[#815600] bg-slate-50 font-bold scale-[1.01]' 
                                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                                      }`}
                                    >
                                      <input 
                                        type="radio" 
                                        name="monto" 
                                        value={val}
                                        checked={monto === val}
                                        onChange={() => setMonto(val)}
                                        className="hidden"
                                      />
                                      <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                                        monto === val ? 'bg-[#815600] border-[#815600] text-white' : 'border-slate-350 bg-white'
                                      }`}>
                                        {monto === val && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                      </div>
                                      <span className="text-xs sm:text-sm">{val}</span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* STEP 2: Scam Type */}
                            {formStep === 2 && (
                              <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                className="space-y-4"
                              >
                                <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue leading-snug">
                                  ¿Qué tipo de instrumento o estafa sufrió?
                                </h3>
                                <p className="text-[10px] text-slate-500 italic block">
                                  *Esto determina los peritos informáticos que analizarán la trazabilidad de sus depósitos.
                                </p>

                                <div className="grid grid-cols-1 gap-2">
                                  {[
                                    { key: "Criptos", label: "Criptomonedas / Bitcoin / Stablecoins (Rastreo Blockchain)" },
                                    { key: "Forex", label: "Falso Bróker de Forex o Plataforma de Trading (Litigio Regulatorio)" },
                                    { key: "Phishing", label: "Falsa cuenta de seguridad bancaria o phishing (Restitución Directa)" },
                                    { key: "Otros", label: "Otros tipos (estafa afectiva o de romance, fraude de factura, etc.)" }
                                  ].map((obj) => (
                                    <label 
                                      key={obj.key}
                                      className={`flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer transition-all duration-200 select-none ${
                                        tipoFraude === obj.key 
                                          ? 'border-[#815500] bg-slate-50 font-bold scale-[1.01]' 
                                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                                      }`}
                                    >
                                      <input 
                                        type="radio" 
                                        name="tipoFraude" 
                                        value={obj.key}
                                        checked={tipoFraude === obj.key}
                                        onChange={() => setTipoFraude(obj.key)}
                                        className="hidden"
                                      />
                                      <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                                        tipoFraude === obj.key ? 'bg-[#815600] border-[#815600] text-white' : 'border-slate-350 bg-white'
                                      }`}>
                                        {tipoFraude === obj.key && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                      </div>
                                      <span className="text-xs sm:text-sm leading-normal">{obj.label}</span>
                                    </label>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* STEP 3: Platform Domain */}
                            {formStep === 3 && (
                              <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                className="space-y-4"
                              >
                                <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue leading-snug">
                                  ¿Cuál es el nombre de la plataforma fraudulenta?
                                </h3>
                                <p className="text-[10px] text-slate-500 block">
                                  *Incluso si la página ha sido desconectada del servidor, indíquenos su nombre para rastrear la identidad histórica de los propietarios falsos en la caché de red.
                                </p>

                                <div className="space-y-1.5 pt-2">
                                  <label className="text-[10px] font-bold text-slate-400 block uppercase pl-1">Plataforma / Bróker Implicado*</label>
                                  <input 
                                    type="text" 
                                    placeholder="Ej. 'ApexMarkets', 'MetaBTC', 'BrokerFictus.net'..."
                                    value={plataforma}
                                    onChange={(e) => setPlataforma(e.target.value)}
                                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none text-sm font-medium text-brand-blue placeholder:text-slate-400"
                                    required
                                  />
                                </div>

                                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/50 flex gap-2.5 text-amber-900 mt-4">
                                  <AlertTriangle className="w-5 h-5 shrink-0 text-amber-700 mt-0.5" />
                                  <p className="text-[10.5px] leading-relaxed">
                                    <strong>Aviso Forense:</strong> Aunque los estafadores apaguen las interfaces gráficas, los fondos permanecen habitualmente bloqueados de manera preventiva en procesadores de pago o wallets de salida ya controladas.
                                  </p>
                                </div>
                              </motion.div>
                            )}

                            {/* STEP 4: Contact details */}
                            {formStep === 4 && (
                              <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                className="space-y-3"
                              >
                                <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue leading-snug">
                                  ¿A qué datos de contacto asignamos el informe de viabilidad?
                                </h3>
                                <p className="text-[10px] text-slate-500 block">
                                  *Sus datos de identificación oficial quedan amparados bajo el cifrado AES-256 de secreto profesional y la Regulación GDPR europea de protección.
                                </p>

                                <div className="space-y-2.5 pt-1">
                                  <div>
                                    <label className="text-[10px] font-bold text-slate-400 block uppercase pl-1 mb-1">Nombre y Apellidos*</label>
                                    <input 
                                      type="text" 
                                      placeholder="Ej. Juan Pérez García"
                                      value={nombre}
                                      onChange={(e) => setNombre(e.target.value)}
                                      className="w-full h-10.5 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none text-xs"
                                      required
                                    />
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                      <label className="text-[10px] font-bold text-slate-400 block uppercase pl-1 mb-1">E-mail de Contacto*</label>
                                      <input 
                                        type="email" 
                                        placeholder="ejemplo@correo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-10.5 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none text-xs"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="text-[10px] font-bold text-slate-400 block uppercase pl-1 mb-1">Móvil / Celular*</label>
                                      <input 
                                        type="tel" 
                                        placeholder="Ej. +34 600 000 000"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        className="w-full h-10.5 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none text-xs"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}

                            {/* STEP 5: Explanatory summary */}
                            {formStep === 5 && (
                              <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                className="space-y-4"
                              >
                                <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue leading-snug">
                                  Opcional: Resumen rápido de la estafa
                                </h3>
                                <p className="text-[10px] text-slate-500 leading-normal">
                                  *Detalles como nombres de falsos asesores con los que trató o si usó transferencia bancaria o criptos, nos ayudará a acelerar el informe.
                                </p>

                                <div className="space-y-1.5 pt-1">
                                  <label className="text-[10px] font-bold text-slate-400 block uppercase pl-1">Exposición rápida de los hechos</label>
                                  <textarea 
                                    placeholder="Ej. 'Me captaron en Instagram y me asignaron a una supuesta analista por WhatsApp. Tras depositar 5.000€ en Binance y transferirlos, me pidieron más tasas...'"
                                    value={resumen}
                                    onChange={(e) => setResumen(e.target.value)}
                                    className="w-full h-24 bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none text-xs resize-none"
                                  />
                                </div>

                                <div className="flex gap-2 bg-slate-50 border border-slate-200 p-3 rounded-xl items-start">
                                  <Lock className="text-slate-400 w-4 h-4 shrink-0 mt-0.5" />
                                  <p className="text-[9.5px] text-slate-500 leading-relaxed font-body">
                                    Al enviar, usted aprueba que LegalRecovery procesará los datos para el análisis preliminar preceptivo de su incidencia conforme al RGPD de la UE.
                                  </p>
                                </div>
                              </motion.div>
                            )}

                          </div>

                          {/* Navigation Buttons for the Form */}
                          <div className="pt-6 border-t border-slate-100 flex gap-3">
                            {formStep > 1 && (
                              <button 
                                type="button"
                                onClick={handlePrevStep}
                                className="flex-1 h-11 bg-slate-150 hover:bg-slate-200 text-brand-blue font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                              >
                                Atrás
                              </button>
                            )}
                            
                            {formStep < 5 ? (
                              <button 
                                type="button"
                                onClick={handleNextStep}
                                className="flex-[2] h-11 bg-brand-blue hover:bg-[#132c45] text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
                              >
                                Siguiente
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <button 
                                type="submit"
                                className="flex-[2] h-11 bg-brand-gold-dark hover:bg-brand-blue text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                              >
                                Iniciar Recuperación
                                <ShieldCheck className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </form>
                      )}

                    </AnimatePresence>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST BAR / COMPLIANCE CREDENTIALS */}
        <section className="bg-slate-900 py-8 relative select-none">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              <div className="flex flex-col items-center gap-1.5 py-4 sm:py-0">
                <Gavel className="text-[#fcba53] w-9 h-9" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fcba53]">Consulta de Viabilidad Gratuita</span>
                <p className="text-[11px] text-slate-350 max-w-xs font-light">Análisis forense preliminar de hashes o bancos sin coste inicial para usted.</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 py-4 sm:py-0">
                <ShieldCheck className="text-[#fcba53] w-9 h-9" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fcba53]">Respuesta en Menos de 24 Horas</span>
                <p className="text-[11px] text-slate-300 max-w-xs font-body">Asignación prioritaria a un analista o peritador informático senior de guardia.</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 py-4 sm:py-0">
                <Lock className="text-[#fcba53] w-9 h-9" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#fcba53]">Sin Éxito No Hay Cuota Final</span>
                <p className="text-[11px] text-slate-350 max-w-xs font-light">Estructura mixta transparente basada en el capital efectivamente devuelto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERT_TABBING_CATEGORIES SECTION */}
        <section className="py-20 bg-white" id="servicios">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                ÁREAS DE ALTA ESPECIALIZACIÓN JURÍDICA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-brand-blue leading-tight">
                Metodologías de Recuperación que Dominamos
              </h2>
              <p className="text-slate-600 text-sm font-body leading-relaxed">
                Cada fraude financiero en internet requiere herramientas específicas. Seleccione su caso para comprender nuestra vía investigadora.
              </p>
            </div>

            {/* Nav Tabs Bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-slate-200">
              {fraudCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`py-3 px-5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeTab === cat.id 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'text-brand-blue/70 hover:bg-slate-100 hover:text-brand-blue'
                  }`}
                >
                  {cat.id === "forex" && "Trading & Forex"}
                  {cat.id === "crypto" && "Criptoactivos & DeFi"}
                  {cat.id === "clones" && "Clones & Phishing"}
                </button>
              ))}
            </div>

            {/* Active Tab rendering */}
            <div>
              {fraudCategories.map(cat => (
                cat.id === activeTab && (
                  <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left detailed panel */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/50">
                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold-dark font-bold text-xs uppercase rounded-md tracking-wider">
                          {cat.tag}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-blue">{cat.title}</h3>
                        <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-body">
                          {cat.description}
                        </p>

                        <div className="space-y-3 pt-3">
                          <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">Sub-modalidades de Fraude involucradas:</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {cat.points.map((pt, idx) => (
                              <div key={idx} className="flex gap-2 items-start p-2 bg-white border border-slate-200/50 rounded-lg">
                                <CheckCircle className="text-[#815600] w-4.5 h-4.5 shrink-0 mt-0.5" />
                                <span className="text-xs text-slate-700 leading-normal">{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-5 border-t border-slate-200 space-y-2 bg-slate-100 -mx-6 -mb-6 p-6 rounded-b-2xl">
                        <span className="text-[10px] font-mono tracking-widest text-[#815600] font-bold uppercase block">
                          Metodología de Rastro Informático Aplicada:
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed font-body">{cat.trackMethod}</p>
                      </div>
                    </div>

                    {/* Right illustrative panel */}
                    <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
                      <img 
                        src={cat.imageUrl} 
                        alt={cat.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="bg-[#25D366] text-white text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded inline-flex items-center gap-1 shadow mb-2">
                          <Activity className="w-3.5 h-3.5" /> Rastro Viable
                        </span>
                        <p className="text-xs font-body text-slate-200 leading-snug">
                          Indicios y hashes detectables en bases de datos e informes institucionales históricos.
                        </p>
                      </div>
                    </div>

                  </div>
                )
              ))}
            </div>

          </div>
        </section>

        {/* WORKFLOW PROCESS: How we Work 5 Steps */}
        <section className="py-20 bg-bg-light border-y border-slate-200/50" id="proceso">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                NUESTRA METODOLOGÍA SISTEMÁTICA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-brand-blue leading-tight">
                El Camino Hacia Su Restitución Patrimonial
              </h2>
              <p className="text-slate-600 text-sm font-body leading-relaxed">
                Actuamos bajo plazos severos. Cada paso del expediente se somete a estricto control de auditoría para maximizar la efectividad en tribunales.
              </p>
            </div>

            {/* Steps list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div 
                  key={step.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md hover:border-brand-gold-dark/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 bg-brand-blue text-[#fcba53] rounded-xl flex items-center justify-center shadow-md">
                        {step.icon === "description" && <FileText className="w-5 h-5" />}
                        {step.icon === "biotech" && <Activity className="w-5 h-5" />}
                        {step.icon === "search_insights" && <Users className="w-5 h-5" />}
                        {step.icon === "gavel" && <Gavel className="w-5 h-5" />}
                        {step.icon === "check_circle" && <CheckCircle className="w-5 h-5" />}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">{step.step}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-display text-brand-blue pt-1">{step.title}</h3>
                    <p className="text-slate-655 text-xs leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col">
                    <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">Resultado Técnico:</span>
                    <span className="text-xs font-bold text-brand-blue tracking-normal mt-0.5">{step.evidence}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TESTIMONIALS: Clean grid, no cutoffs */}
        <section className="py-20 bg-white" id="testimonios">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                COMPROMISO CON LA TRANSPARENCIA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-brand-blue leading-tight">
                Casos de Éxito de Nuestros Clientes
              </h2>
              <p className="text-slate-600 text-sm font-body leading-relaxed">
                Le invitamos a leer testimonios reales de inversores de Forex o Criptomonedas que consiguieron recuperar su dinero tras nuestro análisis pericial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialList.map((test) => (
                <div 
                  key={test.id}
                  className="bg-bg-light p-6 sm:p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative"
                >
                  <div className="absolute -top-3 right-6 bg-[#25D366] text-white px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider shadow">
                    Recuperado
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-0.5 text-brand-gold">
                      {Array.from({ length: test.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold" />
                      ))}
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm font-body italic leading-relaxed">
                      &quot;{test.text}&quot;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/50 flex items-center gap-3">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-slate-300 object-cover shrink-0 bg-slate-200"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-display text-brand-blue leading-tight">{test.name}</h4>
                      <p className="text-[9px] text-slate-505 font-mono uppercase mt-0.5">{test.role}</p>
                      <span className="text-xs font-bold text-brand-gold-dark mt-0.5 block">{test.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ACCORDION FAQ SECTION */}
        <section className="py-20 bg-bg-light border-y border-outline-variant/30" id="faq">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                SOPORTE AL INVERSOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-brand-blue leading-tight">
                Resolución de dudas frecuentes
              </h2>
              <p className="text-slate-600 text-sm font-body leading-relaxed">
                Comprenda los plazos, viabilidad y el marco regulatorio europeo de las intervenciones.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqItems.map((faq) => {
                const isOpen = expandedFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-[#815600] bg-white shadow-sm' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <button 
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full flex justify-between items-center p-5 text-left font-display text-sm sm:text-base font-bold text-brand-blue focus:outline-none select-none transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`w-4.5 h-4.5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#815500]' : 'rotate-0'
                      }`} />
                    </button>

                    <div className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[350px] opacity-100 border-t border-slate-100 p-5' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}>
                      <p className="text-slate-655 text-xs sm:text-sm font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* FINAL HERO ACTION / MAPA & FORMULARIOS (NO DUPLICATES) */}
        <section className="py-20 bg-brand-blue text-white relative overflow-hidden" id="contacto">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #815600 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-2xl flex flex-col lg:flex-row gap-12">
              
              {/* Left explanation information panel */}
              <div className="lg:w-1/2 space-y-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-block bg-brand-gold text-brand-blue px-3 py-1 text-[10px] font-mono tracking-widest font-bold uppercase rounded">
                    Sede Central y Reclamaciones
                  </span>
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight block uppercase">
                    No permita que se queden con su futuro financiero.
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                    Los responsables del fraude mueven los activos puente con pasmosa celeridad a países sin tratado directo. Actuar dentro de las primeras horas o días es un factor de vital trascendencia para consolidar la retención preventiva de las cuentas y forzar judicialmente al reembolso.
                  </p>
                </div>

                {/* Direct info items */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-brand-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-[#fcba53] font-bold uppercase">Correo de Urgencias 24/7</p>
                      <p className="text-sm font-bold text-slate-100 mt-0.5">contacto@legalrecovery.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-gold w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#fcba53] block tracking-wider uppercase font-bold">Oficina Central de Enlace:</p>
                      <p className="text-sm text-slate-200 font-semibold font-display">Paseo de la Castellana 141, Edificio Cuzco IV, 28046 Madrid, España</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a 
                    href="https://wa.me/#"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-lg flex justify-center items-center gap-2 font-display text-xs font-bold uppercase tracking-wider w-full text-center"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    WhatsApp de Guardia
                  </a>
                </div>
              </div>

              {/* Right column: Interactive Map Visualization */}
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                  <h3 className="font-display font-bold text-lg text-brand-gold">Garantía Pericial</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    Cada expediente del inversor es tramitado bajo estrictos protocolos de protección de cifrado AES-256 informático de extremo a extremo, resguardando la anonimidad obligatoria de la víctima durante el rastreo de fondos.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-200">
                    <li className="flex items-center gap-3">
                      <Check className="text-[#25D366] w-4.5 h-4.5" />
                      <span>Cumplimiento del RGPD de la Eurozona</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-[#25D366] w-4.5 h-4.5" />
                      <span>Secreto Profesional Abogado-Cliente inviolable</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-[#25D366] w-4.5 h-4.5" />
                      <span>Auditoría de Transacciones Blockchain Certificada</span>
                    </li>
                  </ul>
                </div>

                {/* Aesthetic Map render */}
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative shadow-lg border border-white/10 group cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVo7dkReun5NoD39IBuWetusdfeMV7nKhfmkeirV6VLWEnf8LJIsYl76uYzGNzUkEhWcIPr4Zal4cLUvfyryG3zeB-39F6a3lGDcZvoWgpkbcrBo63_4DPlR6-McKLMqVsoBOpQT2g9IrNAvHkYijEoejOIPfqpy89Cr4y41_VrYZRAkXq83A67QnXBnBq1efrM-YjM6joq5c3gokE1sGdSitIDGiqFO63_ncAThD2nvdyJHdfftq5OYDfLJvWsemj4624-03TxDDw')" }}
                  />
                  <div className="absolute inset-0 bg-brand-blue/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-gold text-brand-blue p-2 rounded-full shadow-2xl relative z-10 animate-bounce">
                      <Scale className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-950/85 px-3 py-1.5 rounded text-[9px] font-mono font-bold text-white tracking-widest uppercase">
                    Paseo de la Castellana, 141
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#071321] text-slate-400 py-12 border-t border-white/5">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="text-brand-gold w-5 h-5" />
              <span className="font-display font-bold text-base text-white">LegalRecovery</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm font-body">
              Despacho internacional de abogados tecnológicos e ingenieros en seguridad financiera dedicados a la litigación y la forense digital para la restitución forzada de capitales atrapados en el extranjero.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3.5 col-start-6">
            <h4 className="text-slate-200 font-display font-bold text-xs uppercase tracking-wider">Enlaces Útiles</h4>
            <div className="flex flex-col gap-2 text-xs">
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToElement('inicio')}>Inicio</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToElement('señales')}>Señales de Alerta</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToElement('servicios')}>Especialidades</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollToElement('proceso')}>Cómo Trabajamos</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-slate-200 font-display font-bold text-xs uppercase tracking-wider">Acuerdo y Normativas</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-white/5 text-slate-300 border border-white/5 px-2.5 py-1 text-[10px] font-mono rounded">LOPD/RGPD Compliant</span>
              <span className="bg-white/5 text-white/90 border border-white/5 px-2.5 py-1 text-[10px] font-mono rounded">SSL 256-bit Link</span>
            </div>
            <p className="text-[10px] leading-tight text-slate-500">
              © 2026 LegalRecovery. Todos los derechos reservados. El uso de marcas de exchanges y brókers se realiza bajo el amparo de la Ley de Enjuiciamiento Civil para illustration pericial de abusos.
            </p>
          </div>

        </div>
      </footer>

      {/* FLOAT ACTION WHATSAPP (Always visible on mobile viewports for quick touch interaction) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <a 
          href="https://wa.me/#"
          target="_blank"
          referrerPolicy="no-referrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
          aria-label="Contactar por WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-white" />
        </a>
      </div>

    </div>
  );
}
