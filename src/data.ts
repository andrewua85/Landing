export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  amount: string;
  text: string;
  avatar: string;
  stars: number;
}

export interface FraudCategory {
  id: string;
  title: string;
  tag: string;
  icon: string;
  imageUrl: string;
  description: string;
  points: string[];
  trackMethod: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  evidence: string;
}

export interface PlatformItem {
  name: string;
  icon: string;
  category: string;
}

export const platformList: PlatformItem[] = [
  { name: "Binance", icon: "currency_bitcoin", category: "Exchange Cripto" },
  { name: "MetaTrader (MT4/MT5)", icon: "trending_up", category: "Broker Forex" },
  { name: "Coinbase", icon: "token", category: "Exchange Cripto" },
  { name: "Plus500", icon: "account_balance", category: "Broker Forex" },
  { name: "eToro", icon: "group", category: "Copy Trading" },
  { name: "Revolut", icon: "credit_card", category: "Banco Digital" },
  { name: "Brokers Offshore", icon: "public", category: "Paraísos Fiscales" }
];

export const fraudCategories: FraudCategory[] = [
  {
    id: "forex",
    title: "Mercado Forex & CFD",
    tag: "Divisas & Indices",
    icon: "trending_up",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXjCcphq-dgj7W7Q-gJbKz1B5qGN71yXkvLdu1LbaUhWGLhuBLFacRFCbf0FW7uhKLSBy5qZ4A3YKtjmCECDfleCdR_9MMAm1Z22KvlIxuwhBD1cEK98NaiicPC4Z64gPjwyrpnO1Y6awlE5cRPp4QBxL8tClCri7SAoNwC54M6jdaerL2E-qQPxUU9uKeLePnjVNSFzgyHIeQIZAGEeU4JQrAUhLwkx13Y9PthhOJHgHZMAbHutTXOGiTQVHO1HsFpceXu4Jfh124",
    description: "Brokers fraudulentos que operan sin licencias oficiales, manipulando gráficos de precios y algoritmos de ejecución internos para simular pérdidas y bloquear sistemáticamente los retiros de los inversores.",
    points: [
      "Manipulación algorítmica de spreads y deslizamiento de órdenes.",
      "Cuentas administradas ficticias (PAMM) que agotan el saldo misteriosamente.",
      "Brokers fantasmas domiciliados en islas caribeñas o paraísos fiscales remotos.",
      "Exigencia de 'tasas de liberación' o 'pagos de comisiones' antes de retirar."
    ],
    trackMethod: "Auditoría de plataforma de negociación, análisis pericial de discrepancia de precios históricos, y rastreo de procesadores de pago (mulas bancarias)."
  },
  {
    id: "crypto",
    title: "Criptoactivos & DeFi",
    tag: "Blockchain Forensics",
    icon: "currency_bitcoin",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoJ2QOqJKJ0tGTB8RhjAGkTjsBbp6j6GR3B0NpSHSX6utphyTo8Ck98jlRdBGYZ-0r2XJTmIlkUEeyM9HEiLqMN3NS_ebKtCrZRCl2oU_Mv-iyC66ukz1XwA22eKjmIimnKf7RLAguXvN852jGWbk52sUoeRdQmwKvuAGm8lTmpzdBySkIuyVd2MgS314roaSmGOf0SEn8Jx1tbOleKSMGvhyexlfswocPdtlqZSDjEuAffJjPnlKy-JDHH5UnvloAj003VV3O2es2",
    description: "Robos mediante transferencias de Bitcoin, Ethereum o USDT. Involucra esquemas de 'Pig Butchering' (ganarse la confianza afectiva de la víctima), estafas en DeFi, rug pulls y phishing de semillas de wallets.",
    points: [
      "Plataformas de minería o staking falsificadas con ganancias extraordinarias.",
      "Robos de wallets privadas mediante malware o falsos soportes técnicos.",
      "Redes de lavado de criptoactivos usando mixers descentralizados.",
      "Estafas afectivas ('Pig Butchering') dirigidas a depósitos masivos."
    ],
    trackMethod: "Análisis forense en la cadena de bloques (on-chain tracing). Identificación y monitorización de wallets de salida que operan en exchanges centralizados con verificación KYC obligatoria."
  },
  {
    id: "clones",
    title: "Sitios Web Clonados",
    tag: "Phishing Institucional",
    icon: "laptop_mac",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxpwN1tgS7SjJguqMYnFnqyvQgC3EVM7GkD2t-nHH1OCGWQKKLQaBJjc7gfK4YZNEuZVn0IVWdNIcDR-j37y0-ZP9bAuf9nwgALjhCjZrtmQC0hrKp_7ipM-wJcQdmDSP_g932SQOam7HVze1fPpzOFUsgGlJWBY0YwE8ryDHY2_amshbGcFzZ06XpEhpUEWF2VoSggUAsR86OAJQqaATM2caHJ6oXfVcpjTMd5bwLnZ3q8k7B2jKSciVg-3Tyc8etDlJLCjP1hTQe",
    description: "Interfaces sumamente profesionales que suplantan la identidad visual de bancos autorizados y brokers con excelente reputación para captar dinero haciéndose pasar por oficiales.",
    points: [
      "Dominios web sospechosos que alteran ligeramente nombres oficiales.",
      "Uso ilegal de números de licencia regulatorios de empresas reales.",
      "Soporte telefónico sumamente agresivo suplantando asesores bancarios.",
      "Sistemas de trading automatizados mediante Bots dirigidos por IA ficticia."
    ],
    trackMethod: "Investigación de hosts de dominio, rastreo de pasarelas de cobro e inicio de acciones conjuntas de desconexión y recuperación con reguladores como CNMV y FCA."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Recepción & Análisis Prioritario",
    description: "Estudiamos a fondo las transferencias, capturas y comunicaciones del fraude. Evaluamos la viabilidad técnica y legal del caso de forma gratuita en menos de 24h.",
    icon: "description",
    evidence: "Evaluación inicial de viabilidad"
  },
  {
    step: "02",
    title: "Rastreo Forense Digital",
    description: "Mapeamos el movimiento de sus fondos. Si es dinero fiat, rastreamos las mulas bancarias; si es cripto, aplicamos blockchain forensics para hallar las wallets de salida.",
    icon: "biotech",
    evidence: "Trazabilidad SWIFT y Cuentas KYC"
  },
  {
    step: "03",
    title: "Identificación de Cuentas",
    description: "Localizamos con precisión quirúrgica en qué exchanges centralizados o entidades bancarias se encuentran depositados sus activos bajo su nombre ficticio actual.",
    icon: "search_insights",
    evidence: "Localización de activos final"
  },
  {
    step: "04",
    title: "Litigio & Presión Regulatoria",
    description: "Activamos procedimientos extrajudiciales y judiciales internacionales. Exigimos la congelación de cuentas receptoras y plataformas responsables de forma urgente.",
    icon: "gavel",
    evidence: "Bloqueo preventivo de cuentas"
  },
  {
    step: "05",
    title: "Restitución de Fondos",
    description: "Culminamos el caso mediante sentencias definitivas o acuerdos de indemnización que transfieren los fondos recuperados con total seguridad a su cuenta bancaria legítima.",
    icon: "check_circle",
    evidence: "Transferencia de fondos de retorno"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cuánto tiempo tarda el proceso de recuperación?",
    answer: "El periodo varía según la naturaleza técnica de la estafa. El informe forense de trazabilidad y mapeo inicial toma de 15 a 30 días laborables. Una vez iniciada la fase legal o judicial internacional, la resolución y la orden de restitución de fondos suele tomar entre 3 y 12 meses."
  },
  {
    id: "faq-2",
    question: "¿Existe garantía de que recuperaré el 100% de mi capital?",
    answer: "Ningún buffet de abogados ético y serio puede garantizar el 100% de efectividad de antemano. Sin embargo, nuestra tasa de recuperación en casos que han sido calificados como 'Técnicamente Viables' es del 84%. Si su caso no tiene base técnica o viabilidad legal, se lo comunicaremos con absoluta honestidad en la consulta gratuita."
  },
  {
    id: "faq-3",
    question: "¿Se pueden rastrear y recuperar criptomonedas enviadas a carteras privadas?",
    answer: "Sí. Aunque la blockchain dificulta saber quién posee un wallet al principio, todas las transacciones son públicas. Mediante software forense institucional, rastreamos los saltos de wallet a wallet hasta que tocan un exchange regulado (Binance, Coinbase, etc.), donde las cuentas tienen identidades reales verificadas. En ese punto, procedemos al bloqueo legal inmediato."
  },
  {
    id: "faq-4",
    question: "¿Qué ocurre si los estafadores se encuentran en otro país o paraíso fiscal?",
    answer: "Es la situación habitual. El fraude tecnológico internacional utiliza redes transfronterizas. LegalRecovery cuenta con corresponsales legales, peritos locales de delincuencia web, y pericia de litigios en las principales jurisdicciones offshore (Chipre, San Vicente, Bahamas, etc.) para forzar a los reguladores y bancos locales a colaborar."
  },
  {
    id: "faq-5",
    question: "¿Cuáles son sus honorarios? ¿Tengo que pagar por adelantado?",
    answer: "El análisis de viabilidad inicial y el informe pericial preliminar son 100% gratuitos. Para los casos viables, manejamos una estructura mixta: una tasa de gestión para la tasa de apertura judicial y peritos informáticos, y un porcentaje predominante basado únicamente en los resultados exitosos obtenidos."
  },
  {
    id: "faq-6",
    question: "¿Qué documentación necesito presentar para iniciar mi caso?",
    answer: "La mayor cantidad de evidencias posibles. Esto incluye extractos de cuentas bancarias donde figuren las transferencias, hashes de transacciones blockchain (TXID), capturas de pantalla de la plataforma fraudulenta (saldos, correos de rechazo, etc.) de las comunicaciones sostenidas con sus supuestos gestores o asesores."
  }
];

export const testimonialList: Testimony[] = [
  {
    id: "test-1",
    name: "Ricardo M. J.",
    role: "Inversor y Administrador de PYME",
    amount: "€114,500 Recuperados",
    stars: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoxCem7XimwtNRmJpelV7olLVRJ_sih508dJiAvY37K9DWfBKUhvDYU32sZhfExftPxPsbJWZXaSuuPnEAbFqq9OcB1sKsgZYcyYHMimmdorJRX0-VX_HRZYv1iHaf7t1o8uHb1OTinmUe1LNr09InytxySZHDGED_f1dyTeFq2xyc_OWs8txCfC5TFdvaYMpsju7PcAVu0U9CyGU_ieJD2CXkdEoFVlFHmOpo3HkYXffTob-8yCiy_p5J6Y-9XwboqEP6tEFSpkbh",
    text: "Misteriosamente, mi cuenta en un broker de Forex offshore de Londres quedó bloqueada tras solicitar retirar mis ganancias. Me exigían un 20% adicional de impuestos ficticios. Gracias al peritaje de LegalRecovery en Chipre pudimos recuperar el fondo original en menos de 5 meses."
  },
  {
    id: "test-2",
    name: "Elena Rodríguez V.",
    role: "Afectada por Romance Cripto",
    amount: "2.4 BTC Recuperados",
    stars: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiXX-gGfR1QKommXbhe3jAbZe3QMdgVu7riEQWLmH68BbMYZxJKcDPZNrvh4NFtJUAGbQgu5-Kcq5BRgIlZvdfGWZ1NM7a9aupq40P8zzX3yowU7vmHcrBUCq8yCY-6YRBg1mFQNMl1LTAkL49quwg8YKuwSXRP4EN-US_lKhxLawBTE5VSaPzeNrRRYfCRaFY8S_X-yr1ocMGUmDlxGOROMOVfvEvQVGeEQ2-_W0d3R1kjXQ80J-KzM6OVj85QjMkMWn31POxtmlL",
    text: "Fui víctima de un sofisticado fraude emocional de WhatsApp y me convencieron de invertir mis Bitcoin en una wallet falsa. Pensé que las criptomonedas eran imposibles de denunciar y rastrear en la red. El equipo técnico mapeó el destino hasta un exchange de Asia y forzaron el reembolso."
  },
  {
    id: "test-3",
    name: "Carlos M. Sierra",
    role: "Jubilado y Pequeño Inversionista",
    amount: "€85,000 Recuperados",
    stars: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPHHVSQSgfzgdpLZOZmdDR8HN-D3UqswrgPxAl9B6bNPpkl3U4YBQ7dzLM5i_YGsJBVIo1uvnHlyeoIxFq5iymPjzAMMxr5T2b7hSlYjrXOldl1sX6xhMLzAt1WiYvwmkc3QIwgkMspJyQ96ukksidK4Pwf5KRgL0yu4JCCT0BN_2BUEmzfqkFF_IubsR_r9bGBKJQNq96unDH0emLXaDaO7Y3d_8UgTqOCMKhX6J5OnoIowpDPzj7P2i3SmgH79Hbl3QvX78wudOe",
    text: "Me captaron mediante una publicidad de bots falsos de trading automático y un supuesto asesor de un banco clonado. Al ver que no podía retirar mi capital presenté mi caso aquí. Su rapidez en entablar de inmediato la reclamación interbancaria fue crucial para salvar los fondos."
  }
];
