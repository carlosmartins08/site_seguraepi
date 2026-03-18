import { Locale } from './locales';

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctas: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  microProofs: string[];
  clarity: {
    subtitle: string;
    title: string;
    description: string;
    points: { title: string; description: string }[];
    cta: string;
  };
  sectors: {
    subtitle: string;
    title: string;
    description: string;
    items: { title: string; focus: string; description: string }[];
  };
  categories: {
    subtitle: string;
    title: string;
    description: string;
    items: { title: string; description: string; slug: string }[];
    cardAction: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  process: {
    subtitle: string;
    title: string;
    description: string;
    steps: { number: string; title: string; description: string }[];
  };
  center: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  cases: {
    subtitle: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  authority: {
    subtitle: string;
    title: string;
    description: string;
    leadLabel: string;
    sourcesLabel: string;
    updatedLabel: string;
  };
  faq: {
    subtitle: string;
    title: string;
    items: { q: string; a: string }[];
  };
  budget: {
    subtitle: string;
    title: string;
    description: string;
  };
  expansion: {
    subtitle: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

const HOME_CONTENT: Record<Locale, HomeContent> = {
  pt: {
    hero: {
      eyebrow: 'Distribuidor B2B - Conformidade - Logistica Agil',
      title: 'EPI com Conformidade Garantida, Especificacao Tecnica e Entrega Agil no Nordeste.',
      description:
        'Nos entregamos mais que equipamentos: entregamos seguranca com inteligencia, conhecimento e compromisso com a vida. Distribuidor B2B que garante C.A. ativo, atendimento consultivo e logistica preparada para empresas que tem o capital humano como prioridade.',
      ctas: {
        primary: 'Solicitar orcamento rapido',
        secondary: 'Validar especificacao tecnica',
        tertiary: 'Acessar catalogo B2B',
      },
    },
    microProofs: ['+1.500 empresas ativas', 'C.A. checado em base oficial', 'Logistica estrategica para a Paraiba'],
    clarity: {
      subtitle: 'O que realmente resolvemos',
      title: 'Seguranca e uma escolha tecnica. Menos risco, mais conhecimento.',
      description:
        'Seguranca do trabalho nao e compra, e investimento. Atuamos como parceiro tecnico para reduzir risco e garantir conformidade.',
      points: [
        {
          title: 'Risco Zero',
          description: 'Analise do risco real e especifico de cada atividade na sua operacao.',
        },
        {
          title: 'Conformidade Legal',
          description: 'Aderencia total a Norma Regulamentadora aplicavel ao seu setor.',
        },
        {
          title: 'Validade e Integridade',
          description: 'C.A. ativo com controle rigoroso de lote e rastreabilidade.',
        },
        {
          title: 'Previsibilidade',
          description: 'Agilidade na reposicao via logistica otimizada para o Nordeste.',
        },
      ],
      cta: 'Conheca nosso Centro Tecnico e Consultoria',
    },
    sectors: {
      subtitle: 'Setores atendidos',
      title: 'EPI especializado por setor: da NR-10 a NR-35.',
      description: 'Solucoes completas para riscos especificos, do chao de fabrica ao canteiro de obras.',
      items: [
        {
          title: 'Construcao Civil',
          focus: 'NR-18 - NR-35 - Trabalho em Altura',
          description:
            'Solucoes robustas para canteiro de obras, com foco em durabilidade, protecao em altura e reposicao programada.',
        },
        {
          title: 'Industria',
          focus: 'Risco Mecanico, Quimico e Termico',
          description:
            'Protecao de alta performance para ambientes fabris, garantindo integridade do colaborador e do processo produtivo.',
        },
        {
          title: 'Energia / Eletrica',
          focus: 'NR-10 - Protecao contra Arco Eletrico',
          description: 'Equipamentos especializados para eletricistas, com total aderencia as exigencias normativas.',
        },
        {
          title: 'Logistica / Armazenagem',
          focus: 'Ergonomia e Movimentacao',
          description: 'EPIs que unem protecao e conforto para rotinas intensas, reduzindo fadiga muscular.',
        },
        {
          title: 'Agronegocio',
          focus: 'Protecao Quimica e Solar',
          description: 'Solucoes contra intemperies, exposicao solar e riscos especificos de defensivos.',
        },
      ],
    },
    categories: {
      subtitle: 'Categorias de produto',
      title: 'Linha completa de EPI para sua operacao',
      description: 'Seu estoque nao pode falhar. Logistica regional e reposicao rapida para itens essenciais.',
      items: [
        { title: 'Capacetes de Seguranca', description: 'Protecao contra impacto com ajuste confiavel e C.A. ativo.', slug: 'capacetes' },
        { title: 'Luvas de Protecao Tecnica', description: 'Risco quimico, mecanico e corte com sensibilidade tatil.', slug: 'luvas' },
        { title: 'Respiratorios e Mascaras', description: 'PFF2, filtros e respiradores com orientacao de troca.', slug: 'respiratorios' },
        { title: 'Trabalho em Altura (NR-35)', description: 'Cintos, talabartes e trava-quedas certificados.', slug: 'altura' },
        { title: 'Auditivos e Abafadores', description: 'Reducao de ruido com conforto para turnos longos.', slug: 'auditivos' },
        { title: 'Vestimentas de Protecao', description: 'Uniformes e barreiras termicas para ambientes exigentes.', slug: 'vestimentas' },
        { title: 'Calcados de Seguranca', description: 'Conforto, grip e tecnologia Neo Evolution.', slug: 'calcados' },
        { title: 'Protecao Facial e Ocular', description: 'Oculos, viseiras e protetores contra impacto e respingos.', slug: 'ocular' },
      ],
      cardAction: 'Ver catalogo',
      ctaPrimary: 'Ver catalogo B2B completo',
      ctaSecondary: 'Solicitar orcamento por lista de itens',
    },
    process: {
      subtitle: 'Diferencial operacional',
      title: 'Nao e so fornecimento. E um processo de validacao B2B.',
      description:
        'Minimizamos falhas, reduzimos risco de autuacao e garantimos seguranca com um fluxo tecnico padronizado.',
      steps: [
        { number: '01', title: 'Validacao ativa de C.A.', description: 'Checagem constante na base oficial para garantir certificacao valida.' },
        { number: '02', title: 'Indicacao conforme norma', description: 'Recomendacao baseada na NR aplicavel e risco real da atividade.' },
        { number: '03', title: 'Controle de lote e validade', description: 'Gestao rigorosa para integridade, prazo e rastreabilidade.' },
        { number: '04', title: 'Logistica regional estrategica', description: 'Operacao otimizada para o Nordeste com prazos previsiveis.' },
        { number: '05', title: 'Processo estruturado B2B', description: 'Cotacao, pos-venda e fluxo formal de trocas e devolucoes.' },
      ],
    },
    center: {
      subtitle: 'Centro tecnico',
      title: 'Decisao tecnica com informacao confiavel',
      description:
        'Nosso centro de conhecimento reune orientacoes baseadas em NRs, boas praticas e experiencia de campo para apoiar sua equipe de seguranca.',
      cta: 'Acessar o Centro Tecnico Segura EPI',
    },
    cases: {
      subtitle: 'Prova social',
      title: 'Seguranca de verdade se prova com dados',
      description: 'Casos reais de execucao tecnica e previsibilidade operacional.',
      items: [
        {
          title: 'Construcao Civil - Obra vertical em Joao Pessoa',
          description:
            'Padronizacao de EPI para 60 colaboradores, reposicao quinzenal e cumprimento da NR-18 sem paradas operacionais.',
        },
        {
          title: 'Industria Quimica - Operacao de risco complexo',
          description:
            'Fornecimento de EPIs especiais com C.A. ativo e logistica just-in-time para a Paraiba, mantendo a operacao segura.',
        },
      ],
    },
    authority: {
      subtitle: 'Autoridade tecnica',
      title: 'Responsavel tecnico e normas consultadas',
      description: 'Conteudo baseado em experiencia de campo e normas oficiais de seguranca do trabalho.',
      leadLabel: 'Responsavel tecnico',
      sourcesLabel: 'Normas consultadas',
      updatedLabel: 'Ultima atualizacao',
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Duvidas rapidas',
      items: [
        { q: 'Como a Segura EPI garante a validade do C.A.?', a: 'Trabalhamos apenas com EPIs certificados e checamos a vigencia na base oficial antes de cada venda.' },
        { q: 'A Segura EPI realmente tem pronta entrega no Nordeste?', a: 'Sim. Estoque inteligente e logistica estrategica garantem reposicao agil em Joao Pessoa e em toda a regiao.' },
        { q: 'Qual o criterio para indicar o EPI certo para meu risco?', a: 'Analisamos atividade e risco especifico, indicando o EPI ideal em conformidade com a NR aplicavel.' },
        { q: 'Voces atendem apenas grandes empresas?', a: 'Atendemos empresas de todos os portes, mantendo o mesmo padrao tecnico e agilidade.' },
        { q: 'Quais as formas de pagamento B2B?', a: 'Compra a vista (cadastro rapido) e compra faturada com analise de credito em ate 24h.' },
      ],
    },
    budget: {
      subtitle: 'Orcamento rapido',
      title: 'Peca seu orcamento agora com atendimento tecnico especializado',
      description: 'Sua solicitacao sera analisada por um especialista tecnico antes mesmo do envio da cotacao.',
    },
    expansion: {
      subtitle: 'Expansao estruturada',
      title: 'Seja um guardiao da nossa marca no Nordeste',
      description: 'Estamos expandindo a rede de representantes com foco em etica, conhecimento tecnico e alto desempenho.',
      ctaPrimary: 'Seja parceiro',
      ctaSecondary: 'Quero entender o modelo estruturado',
    },
  },
  en: {
    hero: {
      eyebrow: 'B2B distributor - Compliance - Agile logistics',
      title: 'PPE with guaranteed compliance, technical specification and agile delivery in the Northeast.',
      description:
        'We deliver more than equipment: we deliver safety with intelligence, knowledge, and commitment to life. A B2B distributor that guarantees active CA, consultative support, and logistics prepared for companies that put human capital first.',
      ctas: {
        primary: 'Request fast quote',
        secondary: 'Validate technical specification',
        tertiary: 'Access B2B catalog',
      },
    },
    microProofs: ['1,500+ active companies', 'CA checked in official database', 'Strategic logistics for Paraiba'],
    clarity: {
      subtitle: 'What we really solve',
      title: 'Safety is a technical choice. Less risk, more knowledge.',
      description:
        'Occupational safety is not a purchase, it is an investment. We act as a technical partner to reduce risk and ensure compliance.',
      points: [
        {
          title: 'Risk Zero',
          description: 'Analysis of the real, specific risk of each activity in your operation.',
        },
        {
          title: 'Legal Compliance',
          description: 'Total adherence to the regulatory standard for your sector.',
        },
        {
          title: 'Validity and Integrity',
          description: 'Active CA with strict lot control and traceability.',
        },
        {
          title: 'Predictability',
          description: 'Fast replenishment via logistics optimized for the Northeast.',
        },
      ],
      cta: 'Meet our Technical Center and Consulting',
    },
    sectors: {
      subtitle: 'Sectors served',
      title: 'Specialized PPE by sector: from NR-10 to NR-35.',
      description: 'Complete solutions for specific risks, from the factory floor to the construction site.',
      items: [
        {
          title: 'Construction',
          focus: 'NR-18 - NR-35 - Work at Height',
          description:
            'Robust solutions for construction sites, focused on durability, height protection, and scheduled replenishment.',
        },
        {
          title: 'Industry',
          focus: 'Mechanical, Chemical and Thermal Risk',
          description:
            'High-performance protection for industrial environments, ensuring worker integrity and process safety.',
        },
        {
          title: 'Energy / Electrical',
          focus: 'NR-10 - Arc Flash Protection',
          description: 'Specialized equipment for electricians, with full adherence to regulatory requirements.',
        },
        {
          title: 'Logistics / Warehousing',
          focus: 'Ergonomics and Movement',
          description: 'PPE that combines protection and comfort for intense routines, reducing fatigue.',
        },
        {
          title: 'Agribusiness',
          focus: 'Chemical and Solar Protection',
          description: 'Solutions against weather, sun exposure, and specific risks from pesticides.',
        },
      ],
    },
    categories: {
      subtitle: 'Product categories',
      title: 'Complete PPE line for your operation',
      description: 'Your stock cannot fail. Regional logistics and fast replenishment for essential items.',
      items: [
        { title: 'Safety Helmets', description: 'Impact protection with reliable fit and active CA.', slug: 'capacetes' },
        { title: 'Technical Protection Gloves', description: 'Chemical, mechanical and cut risk with tactile sensitivity.', slug: 'luvas' },
        { title: 'Respirators and Masks', description: 'PFF2, filters and respirators with guidance for replacement.', slug: 'respiratorios' },
        { title: 'Work at Height (NR-35)', description: 'Certified harnesses, lanyards, and lifelines.', slug: 'altura' },
        { title: 'Hearing Protection', description: 'Noise reduction with comfort for long shifts.', slug: 'auditivos' },
        { title: 'Protective Clothing', description: 'Uniforms and thermal barriers for demanding environments.', slug: 'vestimentas' },
        { title: 'Safety Footwear', description: 'Comfort, grip and Neo Evolution technology.', slug: 'calcados' },
        { title: 'Face and Eye Protection', description: 'Goggles, visors and shields against impact and splashes.', slug: 'ocular' },
      ],
      cardAction: 'View catalog',
      ctaPrimary: 'View full B2B catalog',
      ctaSecondary: 'Request quote by item list',
    },
    process: {
      subtitle: 'Operational differential',
      title: 'Its not just supply. It is a B2B validation process.',
      description: 'We minimize failures, reduce compliance risk, and ensure safety with a standardized technical flow.',
      steps: [
        { number: '01', title: 'Active CA validation', description: 'Constant checks in the official database to ensure valid certification.' },
        { number: '02', title: 'Indication by standard', description: 'Recommendation based on the applicable NR and real activity risk.' },
        { number: '03', title: 'Lot and validity control', description: 'Strict management for integrity, validity, and traceability.' },
        { number: '04', title: 'Regional strategic logistics', description: 'Optimized operation for the Northeast with predictable deadlines.' },
        { number: '05', title: 'Structured B2B process', description: 'Quote, post-sales and formal exchange and return flow.' },
      ],
    },
    center: {
      subtitle: 'Technical center',
      title: 'Technical decisions with reliable information',
      description:
        'Our knowledge center brings guidance based on NRs, best practices, and field experience to support your safety team.',
      cta: 'Access the Segura EPI Technical Center',
    },
    cases: {
      subtitle: 'Social proof',
      title: 'Real safety is proven with data',
      description: 'Real cases of technical execution and operational predictability.',
      items: [
        {
          title: 'Construction - High-rise project in Joao Pessoa',
          description:
            'Standardized PPE for 60 workers, biweekly replenishment and NR-18 compliance without operational stoppages.',
        },
        {
          title: 'Chemical Industry - Complex risk operation',
          description:
            'Special PPE supply with active CA and just-in-time logistics for Paraiba, keeping operations safe.',
        },
      ],
    },
    authority: {
      subtitle: 'Technical authority',
      title: 'Technical lead and consulted standards',
      description: 'Content based on field experience and official occupational safety standards.',
      leadLabel: 'Technical lead',
      sourcesLabel: 'Standards consulted',
      updatedLabel: 'Last update',
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Quick questions',
      items: [
        { q: 'How does Segura EPI guarantee CA validity?', a: 'We work only with certified PPE and check validity in the official database before each sale.' },
        { q: 'Does Segura EPI really have ready stock in the Northeast?', a: 'Yes. Smart inventory and strategic logistics ensure fast replenishment in Joao Pessoa and across the region.' },
        { q: 'How do you indicate the right PPE for my risk?', a: 'We analyze the activity and risk, indicating the ideal PPE in compliance with the applicable NR.' },
        { q: 'Do you only serve large companies?', a: 'We serve companies of all sizes with the same technical standard and agility.' },
        { q: 'What B2B payment options are available?', a: 'Cash purchase (fast registration) and invoiced purchase with credit analysis in up to 24h.' },
      ],
    },
    budget: {
      subtitle: 'Quick quote',
      title: 'Request your quote now with specialized technical support',
      description: 'Your request will be reviewed by a technical specialist before the quote is sent.',
    },
    expansion: {
      subtitle: 'Structured expansion',
      title: 'Be a guardian of our brand in the Northeast',
      description: 'We are expanding the representative network focused on ethics, technical knowledge, and high performance.',
      ctaPrimary: 'Become a partner',
      ctaSecondary: 'I want to understand the structured model',
    },
  },
  es: {
    hero: {
      eyebrow: 'Distribuidor B2B - Conformidad - Logistica agil',
      title: 'EPI con conformidad garantizada, especificacion tecnica y entrega agil en el Nordeste.',
      description:
        'Entregamos mas que equipos: entregamos seguridad con inteligencia, conocimiento y compromiso con la vida. Distribuidor B2B que garantiza C.A. activo, atencion consultiva y logistica preparada para empresas que ponen el capital humano primero.',
      ctas: {
        primary: 'Solicitar cotizacion rapida',
        secondary: 'Validar especificacion tecnica',
        tertiary: 'Acceder al catalogo B2B',
      },
    },
    microProofs: ['+1.500 empresas activas', 'C.A. verificado en base oficial', 'Logistica estrategica para Paraiba'],
    clarity: {
      subtitle: 'Lo que realmente resolvemos',
      title: 'La seguridad es una eleccion tecnica. Menos riesgo, mas conocimiento.',
      description:
        'La seguridad laboral no es una compra, es una inversion. Actuamos como socio tecnico para reducir riesgos y garantizar conformidad.',
      points: [
        {
          title: 'Riesgo Cero',
          description: 'Analisis del riesgo real y especifico de cada actividad en su operacion.',
        },
        {
          title: 'Conformidad Legal',
          description: 'Adherencia total a la norma regulatoria aplicable a su sector.',
        },
        {
          title: 'Validez e Integridad',
          description: 'C.A. activo con control riguroso de lote y trazabilidad.',
        },
        {
          title: 'Previsibilidad',
          description: 'Reposicion agil con logistica optimizada para el Nordeste.',
        },
      ],
      cta: 'Conozca nuestro Centro Tecnico y Consultoria',
    },
    sectors: {
      subtitle: 'Sectores atendidos',
      title: 'EPI especializado por sector: de NR-10 a NR-35.',
      description: 'Soluciones completas para riesgos especificos, del piso de fabrica a la obra.',
      items: [
        {
          title: 'Construccion Civil',
          focus: 'NR-18 - NR-35 - Trabajo en Altura',
          description:
            'Soluciones robustas para obras, con foco en durabilidad, proteccion en altura y reposicion programada.',
        },
        {
          title: 'Industria',
          focus: 'Riesgo Mecanico, Quimico y Termico',
          description:
            'Proteccion de alto rendimiento para ambientes industriales, asegurando integridad y seguridad del proceso.',
        },
        {
          title: 'Energia / Electrica',
          focus: 'NR-10 - Proteccion contra Arco Electrico',
          description: 'Equipos especializados para electricistas, con total adherencia normativa.',
        },
        {
          title: 'Logistica / Almacenamiento',
          focus: 'Ergonomia y Movimiento',
          description: 'EPI que combina proteccion y confort para rutinas intensas, reduciendo fatiga.',
        },
        {
          title: 'Agronegocio',
          focus: 'Proteccion Quimica y Solar',
          description: 'Soluciones contra clima, exposicion solar y riesgos de defensivos.',
        },
      ],
    },
    categories: {
      subtitle: 'Categorias de producto',
      title: 'Linea completa de EPI para su operacion',
      description: 'Su stock no puede fallar. Logistica regional y reposicion rapida para items esenciales.',
      items: [
        { title: 'Cascos de Seguridad', description: 'Proteccion contra impacto con ajuste confiable y C.A. activo.', slug: 'capacetes' },
        { title: 'Guantes de Proteccion Tecnica', description: 'Riesgo quimico, mecanico y corte con sensibilidad tactil.', slug: 'luvas' },
        { title: 'Respiradores y Mascaras', description: 'PFF2, filtros y respiradores con orientacion de cambio.', slug: 'respiratorios' },
        { title: 'Trabajo en Altura (NR-35)', description: 'Arneses, eslingas y anticaidas certificados.', slug: 'altura' },
        { title: 'Proteccion Auditiva', description: 'Reduccion de ruido con confort para turnos largos.', slug: 'auditivos' },
        { title: 'Ropa de Proteccion', description: 'Uniformes y barreras termicas para ambientes exigentes.', slug: 'vestimentas' },
        { title: 'Calzado de Seguridad', description: 'Confort, agarre y tecnologia Neo Evolution.', slug: 'calcados' },
        { title: 'Proteccion Facial y Ocular', description: 'Gafas, visores y protectores contra impacto y salpicaduras.', slug: 'ocular' },
      ],
      cardAction: 'Ver catalogo',
      ctaPrimary: 'Ver catalogo B2B completo',
      ctaSecondary: 'Solicitar cotizacion por lista de items',
    },
    process: {
      subtitle: 'Diferencial operativo',
      title: 'No es solo suministro. Es un proceso de validacion B2B.',
      description: 'Minimizamos fallas, reducimos riesgo de sanciones y garantizamos seguridad con un flujo tecnico estandarizado.',
      steps: [
        { number: '01', title: 'Validacion activa de C.A.', description: 'Chequeo constante en la base oficial para garantizar certificacion valida.' },
        { number: '02', title: 'Indicacion conforme norma', description: 'Recomendacion basada en la NR aplicable y riesgo real de la actividad.' },
        { number: '03', title: 'Control de lote y validez', description: 'Gestion rigurosa para integridad, plazo y trazabilidad.' },
        { number: '04', title: 'Logistica regional estrategica', description: 'Operacion optimizada para el Nordeste con plazos previsibles.' },
        { number: '05', title: 'Proceso estructurado B2B', description: 'Cotizacion, postventa y flujo formal de cambios y devoluciones.' },
      ],
    },
    center: {
      subtitle: 'Centro tecnico',
      title: 'Decision tecnica con informacion confiable',
      description:
        'Nuestro centro de conocimiento reune orientaciones basadas en NRs, buenas practicas y experiencia de campo para apoyar su equipo de seguridad.',
      cta: 'Acceder al Centro Tecnico Segura EPI',
    },
    cases: {
      subtitle: 'Prueba social',
      title: 'La seguridad real se prueba con datos',
      description: 'Casos reales de ejecucion tecnica y previsibilidad operativa.',
      items: [
        {
          title: 'Construccion Civil - Obra vertical en Joao Pessoa',
          description:
            'Estandarizacion de EPI para 60 colaboradores, reposicion quincenal y cumplimiento de NR-18 sin paradas operativas.',
        },
        {
          title: 'Industria Quimica - Operacion de riesgo complejo',
          description:
            'Suministro de EPI especiales con C.A. activo y logistica just-in-time para Paraiba, manteniendo la operacion segura.',
        },
      ],
    },
    authority: {
      subtitle: 'Autoridad tecnica',
      title: 'Responsable tecnico y normas consultadas',
      description: 'Contenido basado en experiencia de campo y normas oficiales de seguridad laboral.',
      leadLabel: 'Responsable tecnico',
      sourcesLabel: 'Normas consultadas',
      updatedLabel: 'Ultima actualizacion',
    },
    faq: {
      subtitle: 'FAQ',
      title: 'Dudas rapidas',
      items: [
        { q: 'Como Segura EPI garantiza la validez del C.A.?', a: 'Trabajamos solo con EPI certificados y verificamos la vigencia en la base oficial antes de cada venta.' },
        { q: 'Segura EPI realmente tiene pronta entrega en el Nordeste?', a: 'Si. Inventario inteligente y logistica estrategica garantizan reposicion agil en Joao Pessoa y en toda la region.' },
        { q: 'Cual es el criterio para indicar el EPI correcto?', a: 'Analizamos la actividad y el riesgo, indicando el EPI ideal en conformidad con la NR aplicable.' },
        { q: 'Solo atienden grandes empresas?', a: 'Atendemos empresas de todos los tamanos con el mismo estandar tecnico y agilidad.' },
        { q: 'Que formas de pago B2B estan disponibles?', a: 'Compra al contado (registro rapido) y compra facturada con analisis de credito en hasta 24h.' },
      ],
    },
    budget: {
      subtitle: 'Cotizacion rapida',
      title: 'Solicite su cotizacion ahora con soporte tecnico especializado',
      description: 'Su solicitud sera analizada por un especialista tecnico antes de enviar la cotizacion.',
    },
    expansion: {
      subtitle: 'Expansion estructurada',
      title: 'Sea un guardian de nuestra marca en el Nordeste',
      description: 'Estamos expandiendo la red de representantes con foco en etica, conocimiento tecnico y alto desempeno.',
      ctaPrimary: 'Sea socio',
      ctaSecondary: 'Quiero entender el modelo estructurado',
    },
  },
};

export const getHomeContent = (locale: Locale) => HOME_CONTENT[locale] ?? HOME_CONTENT.pt;
