import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck,
  Scale, 
  Gavel, 
  Briefcase, 
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
  ChevronRight, 
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
  Activity, 
  ExternalLink 
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
  // Navigation & UI state
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("forex");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Form step states
  const [formStep, setFormStep] = useState(1);
  const [monto, setMonto] = useState("");
  const [tipoFraude, setTipoFraude] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [resumen, setResumen] = useState("");
  
  // Submit state handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active agents ticker state
  const [activeAgents, setActiveAgents] = useState(4);

  // Scroll event detector
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate forensic processing timeline when form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !telefono) {
      alert("Por favor, rellene los campos obligatorios del paso anterior.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitProgress(1);
    
    const interval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 4) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
          }, 800);
          return 4;
        }
        return prev + 1;
      });
    }, 1200);
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

  const handleNextStep = () => {
    if (formStep === 1 && !monto) {
      alert("Por favor, seleccione un rango de monto perdido.");
      return;
    }
    if (formStep === 2 && !tipoFraude) {
      alert("Por favor, seleccione el tipo de estafa.");
      return;
    }
    if (formStep === 3 && !plataforma.trim()) {
      alert("Por favor, indique la plataforma o sitio web.");
      return;
    }
    if (formStep === 4 && (!nombre.trim() || !email.trim() || !telefono.trim())) {
      alert("Por favor, rellene todos los campos de contacto.");
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

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg-light text-on-surface font-body antialiased flex flex-col selection:bg-brand-gold peer-selection:text-brand-blue">
      {/* TopNavBar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-outline-variant/30' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToElement('inicio')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg shadow-md group-hover:bg-brand-gold transition-colors duration-300">
              <Scale className="text-white w-5.5 h-5.5 group-hover:text-brand-blue transition-colors duration-300" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-brand-blue">LegalRecovery</span>
              <span className="block text-[10px] font-mono tracking-widest text-[#fcba53]/90 font-bold uppercase leading-tight">Forensic Law</span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-9">
            <span 
              onClick={() => scrollToElement('inicio')} 
              className="text-sm font-display font-medium text-brand-blue/80 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider text-[13px]"
            >
              Inicio
            </span>
            <span 
              onClick={() => scrollToElement('servicios')} 
              className="text-sm font-display font-medium text-brand-blue/80 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider text-[13px]"
            >
              Casos
            </span>
            <span 
              onClick={() => scrollToElement('proceso')} 
              className="text-sm font-display font-medium text-brand-blue/80 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider text-[13px]"
            >
              Cómo Trabajamos
            </span>
            <span 
              onClick={() => scrollToElement('testimonios')} 
              className="text-sm font-display font-medium text-brand-blue/80 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider text-[13px]"
            >
              Testimonios
            </span>
            <span 
              onClick={() => scrollToElement('faq')} 
              className="text-sm font-display font-medium text-brand-blue/80 hover:text-brand-blue transition-colors cursor-pointer uppercase tracking-wider text-[13px]"
            >
              Preguntas
            </span>

            <button 
              onClick={() => scrollToElement('contacto')}
              className="bg-brand-blue hover:bg-brand-gold hover:text-brand-blue text-white px-6 py-2.5 rounded-full font-display text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-md shadow-brand-blue/10 active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              Evaluación Prioritaria
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-brand-blue p-2 hover:bg-brand-blue/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6.5 h-6.5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />
            {/* Drawer container */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white p-8 flex flex-col justify-between shadow-2xl border-l border-outline-variant/30"
            >
              <div className="space-y-8">
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-6 border-b border-outline-variant/50">
                  <div className="flex items-center gap-2">
                    <Scale className="text-brand-blue w-6 h-6" />
                    <span className="font-display font-bold text-xl text-brand-blue">LegalRecovery</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 hover:bg-brand-blue/5 rounded-full transition-colors text-brand-blue"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Drawer Menu Links */}
                <nav className="flex flex-col gap-5">
                  <span 
                    onClick={() => scrollToElement('inicio')}
                    className="text-lg font-display font-bold text-brand-blue py-1 border-b border-outline-variant/10 cursor-pointer"
                  >
                    Inicio
                  </span>
                  <span 
                    onClick={() => scrollToElement('servicios')}
                    className="text-lg font-display font-medium text-brand-blue/80 py-1 border-b border-outline-variant/10 cursor-pointer"
                  >
                    Casos de Estafa
                  </span>
                  <span 
                    onClick={() => scrollToElement('proceso')}
                    className="text-lg font-display font-medium text-brand-blue/80 py-1 border-b border-outline-variant/10 cursor-pointer"
                  >
                    Nuestra Metodología
                  </span>
                  <span 
                    onClick={() => scrollToElement('testimonios')}
                    className="text-lg font-display font-medium text-brand-blue/80 py-1 border-b border-outline-variant/10 cursor-pointer"
                  >
                    Opiniones
                  </span>
                  <span 
                    onClick={() => scrollToElement('faq')}
                    className="text-lg font-display font-medium text-brand-blue/80 py-1 border-b border-outline-variant/10 cursor-pointer"
                  >
                    Preguntas Frecuentes
                  </span>
                </nav>
              </div>

              {/* Drawer Action */}
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToElement('contacto')}
                  className="w-full bg-brand-blue hover:bg-brand-gold text-white hover:text-brand-blue font-display font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all text-sm"
                >
                  <FileText className="w-5 h-5" />
                  Evaluación Prioritaria
                </button>
                <a 
                  href="https://wa.me/#"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#25D366] text-white font-display font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Directo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-20" id="inicio">
        {/* HERO SECTION with Elegant Split Layout */}
        <section className="relative overflow-hidden bg-brand-blue text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -right-20 -top-20 w-120 h-120 bg-brand-gold rounded-full filter blur-3xl opacity-20" />
            <div className="absolute -left-20 -bottom-20 w-120 h-120 bg-blue-400 rounded-full filter blur-3xl opacity-15" />
          </div>

          <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 bg-brand-fold-dark/30 border border-brand-gold/20 p-2 rounded-xl bg-white/5 backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[12px] font-mono tracking-widest text-[#fcba53] font-bold uppercase">
                  UNIDAD DE DELITOS TECNOLÓGICOS INTERNACIONALES
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                ¿HAS SIDO ESTAFADO EN <span className="text-brand-gold">FOREX</span> O <span className="text-brand-gold">CRIPTOMONEDAS</span>?
              </h1>

              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                No dé su inversión por perdida de inmediato. LegalRecovery es una firma jurídica internacional de alta especialización encargada de rastrear fondos robados mediante trazabilidad forense de Blockchain y exigir la devolución patrimonial a entidades bancarias y exchanges responsables.
              </p>

              {/* Core value bullet items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <ShieldCheck className="text-brand-gold w-6 h-6 shrink-0" />
                  <span className="text-[14px] text-slate-200 font-semibold tracking-wide">+15M€ recuperados a inversores</span>
                </div>
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Gavel className="text-brand-gold w-6 h-6 shrink-0" />
                  <span className="text-[14px] text-slate-200 font-semibold tracking-wide">Litigación en 25 jurisdicciones</span>
                </div>
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Activity className="text-brand-gold w-6 h-6 shrink-0" />
                  <span className="text-[14px] text-slate-200 font-semibold tracking-wide">Trazabilidad en tiempo real de wallets</span>
                </div>
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <Globe className="text-brand-gold w-6 h-6 shrink-0" />
                  <span className="text-[14px] text-slate-200 font-semibold tracking-wide">Sede Central Cusco IV, Madrid</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center gap-3.5 text-slate-300 text-sm bg-white/5 p-3 rounded-lg border-l-4 border-brand-gold max-w-md">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <p className="font-mono text-xs">
                  SOPORTE DE GUARDIA ACTIVO: <span className="font-bold text-white">{activeAgents} Analistas Senior disponibles</span> hoy. Respondiendo consultas en &lt;15 min.
                </p>
              </div>
            </div>

            {/* Right Multi-Step Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white text-brand-blue p-6 sm:p-8 rounded-2xl shadow-2xl border border-outline-variant/30 relative">
                {/* Header for submission states */}
                {!isSubmitted && (
                  <div className="mb-6">
                    {/* Step bar */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold">
                        ETAPA DE RECONSTRUCCIÓN: Paso {formStep} de 5
                      </span>
                      <span className="text-sm font-bold text-brand-gold-dark">{formStep * 20}% completado</span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-blue transition-all duration-500 rounded-full" 
                        style={{ width: `${formStep * 20}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Form interactive components wrapper */}
                <div className="min-h-[350px] flex flex-col justify-between">
                  {/* Step content switcher */}
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div 
                        key="submitting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="py-10 text-center space-y-6 flex flex-col justify-center items-center"
                      >
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                          <div className="absolute inset-0 rounded-full border-4 border-t-brand-blue border-r-brand-gold animate-spin" />
                        </div>
                        <div className="space-y-2">
                          <p className="font-display font-bold text-lg text-brand-blue">
                            {submitProgress === 1 && "Inicializando conexión segura pericial..."}
                            {submitProgress === 2 && "Escanenando mulas bancarias y wallets..."}
                            {submitProgress === 3 && "Generando hashes preliminares de viabilidad..."}
                            {submitProgress === 4 && "Finalizando informe de prioridad..."}
                          </p>
                          <p className="font-mono text-xs text-slate-500 tracking-wider">
                            Seguridad militar SSL activa. No cierre la pestaña.
                          </p>
                        </div>
                        {/* Fake system code terminal lines to show authenticity without slop */}
                        <div className="bg-slate-950 p-4 rounded-lg w-full text-left font-mono text-[10px] text-emerald-400 space-y-1 overflow-hidden h-24 select-none">
                          <p>&gt; SECURE_SSL_HANDSHAKE: OK</p>
                          {submitProgress >= 2 && <p>&gt; TRACING_ADDR: ETH_USDT_ADDR_DISCOVERED</p>}
                          {submitProgress >= 3 && <p>&gt; DETECTED_BANK_ROUTE: CYP_SEPA_REDIRECT</p>}
                          {submitProgress >= 4 && <p>&gt; REPORT_COMPILED: PRIORITY_QUEUED [RECV-9824]</p>}
                        </div>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div 
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10 text-center space-y-6 flex flex-col justify-center items-center"
                      >
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                          <Check className="w-8 h-8 stroke-[3]" />
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                            ¡Consulta de Prioridad Registrada con Éxito!
                          </h3>
                          <p className="text-slate-600 text-[14px]">
                            Estimado <strong>{nombre}</strong>, hemos compilado sus datos de <strong>{plataforma}</strong> con rango de pérdidas de <strong>{monto}</strong> para nuestro equipo forense.
                          </p>
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 inline-block">
                            <span className="text-xs text-slate-500 block uppercase tracking-wider font-semibold">CÓDIGO DE SEGUIMIENTO INTERNO:</span>
                            <span className="font-mono text-base font-bold text-[#815600] tracking-widest">RECV-9824-MDR</span>
                          </div>
                          <p className="text-[12px] text-slate-500">
                            Un peritador legal de guardia se pondrá en contacto por teléfono (<strong>{telefono}</strong>) o e-mail en un plazo máximo de 15 minutos para iniciar el análisis técnico gratuito.
                          </p>
                        </div>

                        <button 
                          onClick={resetForm}
                          className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue pt-4 border-t border-slate-100 w-full"
                        >
                          Rellenar otra evaluación
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Step 1: Loss Amount */}
                          {formStep === 1 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4"
                            >
                              <h3 className="text-lg font-bold font-display text-brand-blue mb-1">
                                ¿Cuánto capital aproximado transfirió a los estafadores?
                              </h3>
                              <p className="text-xs text-slate-500 mb-4 italic">
                                *Especifique la cantidad original depositada sin incluir falsos 'beneficios' mostrados en pantalla.
                              </p>
                              
                              <div className="grid grid-cols-1 gap-2.5">
                                {[
                                  "Menos de 5.000 €",
                                  "5.000 € – 15.000 €",
                                  "15.000 € – 50.000 €",
                                  "50.000 € – 100.000 €",
                                  "Más de 100.000 €"
                                ].map((val) => (
                                  <label 
                                    key={val}
                                    className={`flex items-center gap-4 p-3.5 border rounded-full cursor-pointer transition-all duration-200 select-none ${
                                      monto === val 
                                        ? 'border-brand-gold-dark bg-slate-50 font-bold scale-[1.01]' 
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
                                    <div className={`w-5.5 h-5.5 rounded-full border flex items-center justify-center shrink-0 ${
                                      monto === val ? 'bg-[#815600] border-[#815600] text-white' : 'border-slate-300'
                                    }`}>
                                      {monto === val && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                    </div>
                                    <span className="text-sm">{val}</span>
                                  </label>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* Step 2: Fraud Type */}
                          {formStep === 2 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4"
                            >
                              <h3 className="text-lg font-bold font-display text-brand-blue mb-1">
                                ¿Qué modalidad describe mejor su estafa financiera?
                              </h3>
                              <p className="text-xs text-slate-500 mb-4 block">
                                *Esto nos permite asignar su expediente al especialista sectorial pertinente.
                              </p>

                              <div className="grid grid-cols-1 gap-2.5">
                                {[
                                  { key: "Criptos", label: "Estafa con criptomonedas (Trazabilidad Blockchain)" },
                                  { key: "Forex", label: "Bróker de Trading / Forex fraudulentos (Litigación reguladores)" },
                                  { key: "Phishing", label: "Suplantación bancaria y Phishing (Retención interbancaria)" },
                                  { key: "Romance", label: "Estafa emocional de romance o amistad ('Pig Butchering')" },
                                  { key: "Otros", label: "Sistemas Ponzi automatizados o falsas compras" }
                                ].map((obj) => (
                                  <label 
                                    key={obj.key}
                                    className={`flex items-center gap-4 p-3.5 border rounded-full cursor-pointer transition-all duration-200 select-none ${
                                      tipoFraude === obj.key 
                                        ? 'border-brand-gold-dark bg-slate-50 font-bold scale-[1.01]' 
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
                                    <div className={`w-5.5 h-5.5 rounded-full border flex items-center justify-center shrink-0 ${
                                      tipoFraude === obj.key ? 'bg-[#815600] border-[#815600] text-white' : 'border-slate-300'
                                    }`}>
                                      {tipoFraude === obj.key && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                    </div>
                                    <span className="text-sm">{obj.label}</span>
                                  </label>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* Step 3: Platform Name */}
                          {formStep === 3 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4"
                            >
                              <h3 className="text-lg font-bold font-display text-brand-blue mb-1">
                                ¿Cuál es el nombre de la plataforma o dirección web fraudulenta?
                              </h3>
                              <p className="text-xs text-slate-500 mb-6">
                                *Incluso si la web ya no está operativa, conocer el nombre de dominio nos permite iniciar el escaneo en la caché de servidores históricos.
                              </p>

                              <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase block pl-1">Nombre Comercial de la estafa</label>
                                <input 
                                  type="text" 
                                  placeholder="Ej. 'ApexMarkets', 'MetaBTC', 'BrokerFictus.net'..."
                                  value={plataforma}
                                  onChange={(e) => setPlataforma(e.target.value)}
                                  className="w-full h-14 bg-slate-50 border border-slate-200 rounded-xl px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none transition-all text-base text-brand-blue font-medium"
                                  required
                                />
                              </div>

                              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/50 flex gap-3 text-amber-900 mt-6">
                                <AlertTriangle className="w-5.5 h-5.5 shrink-0 text-amber-700 mt-0.5" />
                                <p className="text-xs">
                                  <strong>Nota pericial:</strong> Aunque los estafadores tiendan a desconectar sus páginas web, los fondos suelen seguir bloqueados temporalmente en procesadores de pago o wallets puente que sus peritos pueden investigar.
                                </p>
                              </div>
                            </motion.div>
                          )}

                          {/* Step 4: Personal Info */}
                          {formStep === 4 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4"
                            >
                              <h3 className="text-lg font-bold font-display text-brand-blue mb-1">
                                ¿Cuáles son sus datos oficiales para la asignación jurídica?
                              </h3>
                              <p className="text-xs text-slate-500 mb-4">
                                *Por seguridad, sus datos personales son encriptados por protocolo AES-256 e incorporados bajo el Secreto Profesional de abogacía europea.
                              </p>

                              <div className="space-y-3.5">
                                <div>
                                  <label className="text-xs font-bold text-slate-500 uppercase block pl-1 mb-1">Nombre Completo*</label>
                                  <input 
                                    type="text" 
                                    placeholder="Ej. Juan Pérez García"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none transition-all text-sm"
                                    required
                                  />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-35">
                                  <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase block pl-1 mb-1">E-mail*</label>
                                    <input 
                                      type="email" 
                                      placeholder="juan@ejemplo.com"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none transition-all text-sm"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase block pl-1 mb-1">Teléfono Móvil*</label>
                                    <input 
                                      type="tel" 
                                      placeholder="+34 600 000 000"
                                      value={telefono}
                                      onChange={(e) => setTelefono(e.target.value)}
                                      className="w-full h-11 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none transition-all text-sm"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Step 5: Brief description */}
                          {formStep === 5 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="space-y-4"
                            >
                              <h3 className="text-lg font-bold font-display text-brand-blue mb-1">
                                Opcional: Describa brevemente cómo ocurrió la estafa
                              </h3>
                              <p className="text-xs text-slate-500 mb-4 font-body leading-relaxed">
                                *Si recuerda fechas clave, nombres de falsos asesores con los que trató o si usó transferencia bancaria o criptos, nos ayudará a acelerar el informe.
                              </p>

                              <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase block pl-1">Exposición rápida del caso</label>
                                <textarea 
                                  placeholder="Ej. 'Realicé 3 depósitos de USDT por Binance a una supuesta app llamada TokenA. Al pedir el retiro, me pidieron €4000 más y cortaron respuestas...'"
                                  value={resumen}
                                  onChange={(e) => setResumen(e.target.value)}
                                  className="w-full h-28 bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-gold-dark focus:border-transparent outline-none transition-all text-sm resize-none"
                                />
                              </div>

                              <div className="flex gap-3.5 bg-slate-50 border border-slate-200 p-4 rounded-xl items-start">
                                <Shield className="text-brand-gold-dark w-5 h-5 shrink-0 mt-0.5" />
                                <p className="text-[11px] text-slate-500 leading-relaxed font-body">
                                  Al enviar este formulario de viabilidad, usted autoriza a LegalRecovery el tratamiento estricto de sus activos de investigación en base a la ley de protección de datos RGPD de la Eurozona. No cedemos datos a terceros.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Navigation controls of form */}
                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                          {formStep > 1 && (
                            <button 
                              type="button"
                              onClick={handlePrevStep}
                              className="flex-1 h-12 bg-slate-100 hover:bg-slate-200 text-brand-blue font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                            >
                              Anterior
                            </button>
                          )}
                          
                          {formStep < 5 ? (
                            <button 
                              type="button"
                              onClick={handleNextStep}
                              className="flex-2 h-12 bg-brand-blue hover:bg-brand-gold hover:text-brand-blue text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                            >
                              Continuar
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : (
                            <button 
                              type="submit"
                              className="flex-2 h-12 bg-brand-gold-dark hover:bg-brand-blue hover:text-white text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-gold-dark/15 active:scale-[0.98]"
                            >
                              Enviar Caso a Prioridad
                              <ShieldCheck className="w-5 h-5 text-white" />
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
        </section>

        {/* TRUST SIGNALS BAR */}
        <section className="bg-bg-light border-y border-outline-variant/30 py-12 relative">
          <div className="max-w-container-max mx-auto px-gutter">
            {/* Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center sm:text-left space-y-2 border-l-4 border-brand-gold pl-5">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-brand-blue block">
                  94%
                </span>
                <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold block">
                  Caso Viables Ganados
                </span>
                <p className="text-xs text-slate-600 font-body">Resolución con éxito tras informe preliminar positivo.</p>
              </div>

              <div className="text-center sm:text-left space-y-2 border-l-4 border-brand-gold pl-5">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-brand-blue block">
                  €15M+
                </span>
                <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold block">
                  Capital Restituido
                </span>
                <p className="text-xs text-slate-600 font-body">Fondos retornados de carteras y exchanges bloqueados.</p>
              </div>

              <div className="text-center sm:text-left space-y-2 border-l-4 border-brand-gold pl-5">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-brand-blue block">
                  1.5k+
                </span>
                <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold block">
                  Inversores Ayudados
                </span>
                <p className="text-xs text-slate-600 font-body">Víctimas de Forex, Criptomonedas y Phishing representadas.</p>
              </div>

              <div className="text-center sm:text-left space-y-2 border-l-4 border-brand-gold pl-5">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-brand-blue block">
                  &lt;24h
                </span>
                <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold block">
                  Preinforme Informático
                </span>
                <p className="text-xs text-slate-600 font-body">Trazabilidad de fondos inicial y opinión regulatoria ágil.</p>
              </div>
            </div>

            {/* Platform Trust Logos Title */}
            <div className="mt-16 pt-8 border-t border-outline-variant/30 text-center space-y-8">
              <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-bold block">
                ORGANIZACIONES IMPLICADAS Y PLATAFORMAS REGULADAS MONITORIZADAS
              </span>
              
              {/* Platform badge list */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {platformList.map((platform) => (
                  <div 
                    key={platform.name}
                    className="flex items-center gap-2 bg-white px-5 py-3 border border-outline-variant/40 rounded-xl hover:border-brand-gold-dark/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded bg-brand-blue/5 flex items-center justify-center">
                      {platform.icon === "currency_bitcoin" && <Bitcoin className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "trending_up" && <TrendingUp className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "token" && <Zap className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "account_balance" && <Scale className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "group" && <Users className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "credit_card" && <Shield className="w-4.5 h-4.5 text-brand-blue" />}
                      {platform.icon === "public" && <Globe className="w-4.5 h-4.5 text-brand-blue" />}
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-800 block leading-tight">{platform.name}</span>
                      <span className="text-[9px] font-mono text-slate-400 block tracking-wide uppercase leading-tight">{platform.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RED FLAGS BENTO SECTION */}
        <section className="py-20 bg-white" id="señales">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="text-[12px] font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                ¿SOSPECHA DE UN BRÓKER FRAUDULENTO?
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-blue leading-tight">
                Señales de estafa que debe conocer urgentemente
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                Los sistemas de estafa se esconden tras diseños de primer nivel, pero siguen patrones comunes que revelan su ilicitud estructural. Si su plataforma presenta una o más de estas alertas, solicite investigación inmediata.
              </p>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-blue uppercase">Bloqueo de Retiros</h3>
                  <p className="text-slate-600 text-sm font-body leading-relaxed">
                    Es el indicio de mayor gravedad. Su manager de cuenta le solicita hacer un pago previo para abonar &quot;impuestos autonómicos&quot;, &quot;tarifas de red local&quot; o &quot;comisiones sobre depósito&quot; antes de liberar su saldo. Esta exigencia es rotundamente falsa y es el gancho final de la estafa.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/50 mt-6 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-red-600 uppercase">Alerta Crítica</span>
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-blue uppercase">Agresividad Telefónica</h3>
                  <p className="text-slate-600 text-sm font-body leading-relaxed">
                    Operadores que le llaman insistentemente a cualquier hora mediante telefonía IP para presionarle con &quot;oportunidades de oro de última hora&quot; o para convencerle de pedir préstamos personales para ingresar más fondos. Utilizan el miedo y el FOMO como arma psicológica.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/50 mt-6 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase">Ingeniería Social</span>
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-brand-gold">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-blue uppercase">Ausencia de Regulación</h3>
                  <p className="text-slate-600 text-sm font-body leading-relaxed">
                    Las plataformas y brókers de inversión de alta cuantía tienen la obligación de contar con el aval y registro ante entes como la CNMV, FCA o CySEC. Si operan a través de empresas instrumentales en las islas Seychelles, Vanuatu, Chipre offshore o San Vicente, Carecen de cobertura.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-200/50 mt-6 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-[#815600] uppercase">Falta de Licencia</span>
                  <Gavel className="w-4 h-4 text-[#fcba53]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED CATEGORIES TAB SECTION to avoid duplicates */}
        <section className="py-20 bg-bg-light border-y border-outline-variant/30" id="servicios">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
              <span className="text-[12px] font-mono tracking-widest text-[#815600] font-bold uppercase block">
                NUESTRA ESPECIALIZACIÓN JURÍDICA
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-blue leading-tight">
                Tipos de estafa bajo rastreo prioritario
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                Nuestros departamentos legales están especializados de forma estricta por tipos de delitos financieros, garantizando que el perito a cargo domine la regulación de su caso.
              </p>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-outline-variant/30 pb-6 max-w-xl mx-auto">
              {fraudCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === cat.id 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'bg-white hover:bg-slate-100 text-brand-blue border border-outline-variant/30'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Tab display content with motion */}
            <AnimatePresence mode="wait">
              {fraudCategories.map((cat) => {
                if (cat.id !== activeTab) return null;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-outline-variant/30 p-6 sm:p-10 rounded-2xl shadow-sm"
                  >
                    {/* Visual Panel */}
                    <div className="lg:col-span-5 relative">
                      <div className="aspect-square bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800">
                        <div 
                          className="w-full h-full bg-cover bg-center opacity-85 select-none hover:scale-105 transition-transform duration-700" 
                          style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white text-left">
                          <span className="bg-brand-gold text-brand-blue px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded">
                            {cat.tag}
                          </span>
                          <h4 className="text-xl font-display font-bold mt-1 text-white leading-tight">
                            Área Pericial {cat.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Explanatory Text */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                      <div className="space-y-2">
                        <span className="text-[12px] font-mono tracking-widest text-slate-500 uppercase font-bold">
                          DESCRIPCIÓN OPERATIVA DEL FRAUDE
                        </span>
                        <p className="text-slate-700 font-body leading-relaxed text-sm sm:text-base">
                          {cat.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[12px] font-mono tracking-widest text-[#815600] uppercase font-bold block">
                          INDICADORES DE ILICITUD DETECTADOS:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cat.points.map((pt, index) => (
                            <li key={index} className="flex gap-2.5 items-start">
                              <CheckCircle className="text-brand-gold-dark w-4 h-4 shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-600 font-semibold leading-normal">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-slate-50 border-l-4 border-brand-blue rounded-r-xl">
                        <span className="text-[11px] font-mono tracking-widest text-brand-blue uppercase font-bold block mb-1">
                          HERRAMIENTA FORENSE DE RECUPERACIÓN ASOCIADA:
                        </span>
                        <p className="text-xs text-slate-600 font-body leading-normal">
                          {cat.trackMethod}
                        </p>
                      </div>

                      <div className="pt-4 flex gap-4">
                        <button 
                          onClick={() => scrollToElement('contacto')}
                          className="bg-brand-blue hover:bg-brand-gold hover:text-brand-blue text-white px-6 py-3 rounded-lg font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
                        >
                          Rastrear Mis Fondos
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* HOW WE WORK (Step Process Timeline) */}
        <section className="py-20 bg-white" id="proceso">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="text-[12px] font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                NUESTRO PROTOCOLO OPERATIVO
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-blue leading-tight">
                El Camino hacia su Recuperación Patrimonial
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                Utilizamos un protocolo estructurado en 5 fases estandarizadas para evitar demoras burocráticas y maximizar la probabilidad de éxito ante bancos y tribunales internacionales.
              </p>
            </div>

            {/* Steps timeline layout */}
            <div className="relative">
              {/* Graphic line connection for tablets/desktops */}
              <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step) => (
                  <div key={step.step} className="group text-center space-y-4 flex flex-col items-center">
                    <div className="w-14 h-14 bg-brand-blue text-white font-display text-lg font-extrabold flex items-center justify-center rounded-full shadow-lg border-4 border-white group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors duration-300">
                      {step.step}
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl group-hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 text-center flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h4 className="font-display font-bold text-sm sm:text-base text-brand-blue group-hover:text-brand-gold-dark leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-body leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Evidence block */}
                      <div className="mt-4 pt-3.5 border-t border-slate-200/50 flex align-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 group-hover:text-brand-blue-dark">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                        <span className="font-bold tracking-wide uppercase">{step.evidence}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="mt-16 bg-brand-blue text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 border-l-8 border-brand-gold shadow-lg">
              <div className="text-left space-y-1.5">
                <p className="font-display font-bold text-lg sm:text-xl text-white">
                  ¿Quiere que iniciemos la Fase 1 hoy mismo?
                </p>
                <p className="text-sm text-slate-300 font-body leading-relaxed">
                  Solo tomamos casos que pasan el filtro inicial. Rellene la evaluación y reciba respuesta en &lt;15 min.
                </p>
              </div>
              <button 
                onClick={() => scrollToElement('contacto')}
                className="bg-brand-gold hover:bg-white text-brand-blue font-display font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-lg shadow-md shrink-0 transition-transform active:scale-[0.98]"
              >
                Evaluación Gratuita
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 bg-bg-light border-t border-outline-variant/30" id="testimonios">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="text-[12px] font-mono tracking-widest text-[#815600] font-bold uppercase block">
                OPINIONES Y CASOS RESUELTOS EN ESPAÑA
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-blue leading-tight">
                Voces de Recuperación Patrimonial
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                Nuestras mayores victorias no son cifras frías en un balance, sino la restitución de la tranquilidad emocional de familias y pymes víctimas de estafadores profesionales.
              </p>
            </div>

            {/* Testimonials Grid using clean masonry styles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialList.map((test) => (
                <div 
                  key={test.id}
                  className="bg-white border border-outline-variant/30 p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header: Rating & Amount */}
                    <div className="flex justify-between items-center sm:items-start mb-4">
                      {/* stars rating */}
                      <div className="flex gap-0.5 text-brand-gold">
                        {[...Array(test.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                        ))}
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg px-2.5 py-1 text-xs font-bold leading-none shrink-0 font-mono tracking-wide">
                        {test.amount}
                      </span>
                    </div>

                    <p className="font-body italic text-slate-700 text-sm leading-relaxed text-left">
                      &quot;{test.text}&quot;
                    </p>
                  </div>

                  {/* Profile section footer */}
                  <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-3 text-left">
                    <img 
                      src={test.avatar} 
                      alt={`Retrato de ${test.name}`}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full border border-slate-200 shadow-sm"
                    />
                    <div>
                      <p className="text-sm font-bold text-brand-blue leading-tight">{test.name}</p>
                      <p className="text-[11px] text-slate-500 font-mono leading-none tracking-tight uppercase mt-0.5">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Trust Rating */}
            <div className="mt-12 bg-white border border-outline-variant/30 p-6 rounded-xl text-center flex flex-col sm:flex-row justify-around items-center gap-6 max-w-3xl mx-auto shadow-sm">
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-3xl text-brand-blue">4.9</span>
                <div className="text-left">
                  <div className="flex gap-0.5 text-[#ffc107]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current shrink-0" />)}
                  </div>
                  <span className="text-xs text-slate-500 font-semibold uppercase">Calificación en Trustpilot</span>
                </div>
              </div>
              
              <div className="h-4 w-px bg-slate-200 hidden sm:block" />
              
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-3xl text-brand-blue">EXCELENTE</span>
                <div className="text-left">
                  <div className="flex gap-0.5 text-blue-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current shrink-0" />)}
                  </div>
                  <span className="text-xs text-slate-500 font-semibold uppercase">Google Customer Reviews</span>
                </div>
              </div>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-slate-600 font-mono text-[11px]">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-bold">SELLO RGPD EUROPEO ACTIVO</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACCORDION FAQ SECTION */}
        <section className="py-20 bg-white" id="faq">
          <div className="max-w-[760px] mx-auto px-gutter">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[12px] font-mono tracking-widest text-brand-gold-dark font-bold uppercase block">
                ZONA DE CONSULTAS TÉCNICAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-blue leading-tight text-center">
                Preguntas Frecuentes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed text-center">
                Respuestas inmediatas de nuestros abogados sobre plazos, costos, de seguridad informática y viabilidad técnica de reclamo de activos.
              </p>
            </div>

            {/* Custom Accordion list */}
            <div className="space-y-3">
              {faqItems.map((item) => {
                const isOpen = expandedFaq === item.id;
                return (
                  <div 
                    key={item.id}
                    className={`border rounded-xl transition-all duration-300 ${
                      isOpen ? 'border-[#815600] bg-slate-50/50' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : item.id)}
                      className="w-full flex justify-between items-center p-5 text-left text-brand-blue focus:outline-none focus:ring-0 active:bg-slate-50 rounded-xl"
                    >
                      <span className="font-display font-bold text-sm sm:text-base leading-snug">
                        {item.question}
                      </span>
                      <div className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-gold-dark/15 text-brand-gold-dark' : 'text-slate-500'
                      }`}>
                        <ChevronDown className="w-4 h-4 stroke-[3]" />
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 font-body text-slate-600 text-[13px] sm:text-[14px] leading-relaxed border-t border-slate-100/50 pt-3">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECURITY SEAL & GUARANTEES SECTION */}
        <section className="py-20 bg-brand-blue text-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          
          <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center space-y-12">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="bg-brand-gold text-brand-blue px-4 py-1.5 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase">
                GARANTÍA DE SEGURIDAD LEGAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
                Unión de Fuerza Informática y Jurídica
              </h2>
              <p className="text-slate-300 text-sm font-body leading-relaxed">
                Toda nuestra actuación operativa de rastreo y litigación digital está amparada por las máximas garantías institucionales de cumplimiento europeo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  <Lock className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-display font-bold text-white text-base">Cifrado de Datos AES-256</h4>
                <p className="text-xs text-slate-300 font-body leading-relaxed">
                  Los registros de hashes de carteras, e-mails y archivos de evidencias que nos proporcione son almacenados e investigados en servidores con encriptación offline militar para evitar represalias del bróker.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  <ShieldCheck className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-display font-bold text-white text-base">Tratamiento Confidencial RGPD</h4>
                <p className="text-xs text-slate-300 font-body leading-relaxed">
                  Cumplimos estrictamente la regulación de datos de la Unión Europea (UE) 2016/679. Su identidad permanece protegida y anónima en toda la fase de monitorización.
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  <Gavel className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-display font-bold text-white text-base">Secreto Profesional Puro</h4>
                <p className="text-xs text-slate-300 font-body leading-relaxed">
                  Como firma jurídica adscrita al consejo de abogacía, toda conversación inicial y posterior informe técnico queda regido bajo la salvaguarda de secreto profesional Abogado-Cliente inviolable.
                </p>
              </div>
            </div>

            {/* Call to action focused on help */}
            <div className="pt-4 space-y-4">
              <p className="text-sm font-body text-slate-300 font-mono tracking-normal">
                ¿Preparado para que analicemos su caso sin compromiso? El tiempo es el factor más crítico.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => scrollToElement('inicio')}
                  className="bg-[#fcba53] hover:bg-white text-brand-blue font-display text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-md transition-all active:scale-[0.98]"
                >
                  Rellenar Formulario de Consulta
                </button>
                <a
                  href="https://wa.me/#"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-display text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-md transition-all flex items-center gap-2 active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp de Urgencia 24/7
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED PRIORITARY CONTACT FORM FOR THOSE WHO SCROLL BELOW */}
        <section className="py-20 bg-bg-light relative" id="contacto">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Box details with Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4 text-left">
                <span className="text-[12px] font-mono tracking-widest text-[#815600] font-bold uppercase block">
                  CANALES DIRECTOS DE ASISTENCIA
                </span>
                <h2 className="text-3xl font-display font-bold text-brand-blue leading-tight">
                  Oficina Central LegalRecovery
                </h2>
                <p className="text-slate-600 text-sm font-body leading-relaxed">
                  Oficina Cusco IV, emplazada en el eje corporativo principal de Madrid, donde operamos de forma sincronizada con nuestro laboratorio forense blockchain.
                </p>
              </div>

              {/* Physical details block */}
              <div className="bg-white border border-outline-variant/30 p-6 rounded-2xl shadow-sm text-left space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#815600] flex items-center justify-center shrink-0">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-brand-blue">Dirección Física</h5>
                    <p className="text-xs text-slate-500 font-body leading-normal mt-0.5">
                      Paseo de la Castellana 141, Cusco IV<br />Código Postal 28046, Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#815600] flex items-center justify-center shrink-0">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-brand-blue">Correo Corporativo</h5>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      contacto@legalrecovery.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5.5 h-5.5 resize-none animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-red-700">Línea Telefónica Prioritaria</h5>
                    <p className="text-xs text-slate-500 font-semibold font-mono mt-0.5">
                      +34 900 123 456
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder as designed in custom static illustrations guidelines */}
              <div className="rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm aspect-video relative group cursor-pointer">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale opacity-90 transition-transform duration-700 group-hover:scale-105 select-none"
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVo7dkReun5NoD39IBuWetusdfeMV7nKhfmkeirV6VLWEnf8LJIsYl76uYzGNzUkEhWcIPr4Zal4cLUvfyryG3zeB-39F6a3lGDcZvoWgpkbcrBo63_4DPlR6-McKLMqVsoBOpQT2g9IrNAvHkYijEoejOIPfqpy89Cr4y41_VrYZRAkXq83A67QnXBnBq1efrM-YjM6joq5c3gokE1sGdSitIDGiqFO63_ncAThD2nvdyJHdfftq5OYDfLJvWsemj4624-03TxDDw')` }}
                />
                <div className="absolute inset-0 bg-brand-blue/15 group-hover:bg-brand-blue/0 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold text-brand-blue shadow-lg tracking-wider uppercase flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-brand-gold-dark" />
                  MADRID DISTRICT MAP
                </div>
              </div>
            </div>

            {/* Right Form Card duplicate avoid: Redirect or display form details nicely */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-outline-variant/30 rounded-2xl shadow-sm space-y-6 text-left">
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-2xl text-brand-blue">
                  Formulario de Solicitud de Análisis Prioritario
                </h3>
                <p className="text-slate-500 font-body text-xs sm:text-sm">
                  Complete los siguientes datos preliminares de su estafa. El sistema enviará la solicitud al analista de guardia para priorizar su llamada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Nombre Oficial*</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Andrés López" 
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Teléfono Móvil*</label>
                  <input 
                    type="tel" 
                    placeholder="Ej. +34 600 000 000" 
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm"
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email de contacto*</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Monto Perdido (€)*</label>
                  <select 
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm cursor-pointer"
                  >
                    <option value="">Seleccione rango...</option>
                    <option value="Menos de 5.000 €">Menos de 5.000 €</option>
                    <option value="5.000 € – 15.000 €">5.000 € – 15.000 €</option>
                    <option value="15.000 € – 50.000 €">15.000 € – 50.000 €</option>
                    <option value="50.000 € – 100.000 €">50.000 € – 100.000 €</option>
                    <option value="Más de 100.000 €">Más de 100.000 €</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Bróker o Plataforma implicada*</label>
                <input 
                  type="text" 
                  placeholder="Ej. ApexMarkets, CryptoClub, etc." 
                  className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm"
                  value={plataforma}
                  onChange={(e) => setPlataforma(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Breve resumen de cómo ocurrió (opcional)</label>
                <textarea 
                  placeholder="Describa brevemente cómo le estafaron o bloquearon los retiros..." 
                  className="w-full h-24 bg-slate-50 border border-slate-200 rounded-lg p-4 focus:ring-2 focus:ring-brand-gold-dark outline-none font-body text-sm resize-none"
                  value={resumen}
                  onChange={(e) => setResumen(e.target.value)}
                />
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-normal font-body">
                  LegalRecovery garantiza la protección de confidencialidad absoluta de sus archivos de evidencias. No recopilamos hashes con fines publicitarios. RGPD Cumplido.
                </p>
              </div>

              <button 
                onClick={() => {
                  if (!nombre || !email || !telefono || !monto || !plataforma) {
                    alert("Por favor, rellene todos los campos del formulario de asignación anterior.");
                  } else {
                    setFormStep(5);
                    scrollToElement('inicio');
                  }
                }}
                className="w-full bg-brand-gold-dark hover:bg-brand-blue text-white py-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-[0.98]"
              >
                Ingresar Caso en Prioridad
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-blue text-white py-16 border-t border-brand-gold/10">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="text-brand-gold w-6 h-6" />
              <span className="font-display font-bold text-2xl text-white tracking-tight">LegalRecovery</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-body leading-relaxed">
              Firma jurídica internacional y forense digital especializada de forma exclusiva en la restitución de capitales e investigación de ciberdelitos financieros.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#fcba53]">
              Servicios Forenses
            </h5>
            <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab("forex"); scrollToElement("servicios"); }}>
                Recuperación Mercado Forex
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab("crypto"); scrollToElement("servicios"); }}>
                Trazabilidad Blockchain
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab("clones"); scrollToElement("servicios"); }}>
                Sitios Web y Bancos Clonados
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab("crypto"); scrollToElement("servicios"); }}>
                Esquemas Romance Cripto
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#fcba53]">
              Garantía Jurídica
            </h5>
            <ul className="flex flex-col gap-3 font-body text-xs sm:text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Aviso Legal</li>
              <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</li>
              <li className="hover:text-white transition-colors cursor-pointer">Términos del Servicio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Uso de Cookies (RGPD)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Secreto Abogado-Cliente</li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-[#fcba53]">
              Sede Principal España
            </h5>
            <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
              Paseo de la Castellana, 141<br />
              Edificio Cusco IV, Planta 12<br />
              28046 Madrid, España
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="mailto:contacto@legalrecovery.com" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-300 hover:text-brand-gold hover:bg-white/10 transition-colors"
                title="Email direct support"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:+34900123456" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-300 hover:text-brand-gold hover:bg-white/10 transition-colors"
                title="Phone call alert"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Global Copyright bar */}
        <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/5 text-center text-xs text-slate-500 font-body">
          <p>© 2026 LegalRecovery. Todos los derechos reservados. Especialistas líderes en el rastreo y recuperación patrimonial de activos digitales transfronterizos.</p>
        </div>
      </footer>

      {/* WhatsApp Floating FAB (Mobile/Desktop consistent) */}
      <a 
        href="https://wa.me/#"
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4.5 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center justify-center group active:scale-95"
        title="Hablar con un Abogado por WhatsApp"
      >
        <MessageSquare className="w-6.5 h-6.5 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap hidden sm:block">
          Soporte Urgente WhatsApp
        </span>
      </a>
    </div>
  );
}
