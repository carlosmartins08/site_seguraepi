export type CategoryKey =
  | "protecao-maos"
  | "protecao-respiratoria"
  | "protecao-auditiva"
  | "protecao-ocular"
  | "trabalho-em-altura"
  | "calcados"
  | "sinalizacao";

export interface CategoryPageData {
  key: CategoryKey;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  badges: string[];
  indicationsSection?: { subtitle?: string; title: string; description?: string };
  indications: { title: string; desc: string }[];
  spotlight?: { subtitle?: string; title: string; description: string; ctaLabel?: string; ctaHref?: string };
  compliance?: { title: string; description: string };
  commonUses: string[];
  commonMistakes: string[];
  segments: string[];
  faq: { q: string; a: string }[];
  cta?: { eyebrow?: string; title: string; description?: string; buttonLabel: string; href: string };
}

export const CATEGORY_ORDER: CategoryKey[] = [
  "protecao-maos",
  "protecao-respiratoria",
  "protecao-auditiva",
  "protecao-ocular",
  "trabalho-em-altura",
  "calcados",
  "sinalizacao",
];

export const CATEGORY_PAGES: Record<CategoryKey, CategoryPageData> = {
  "protecao-maos": {
    key: "protecao-maos",
    name: "Luvas de Segurança",
    shortDescription: "Luvas técnicas para riscos mecânicos, químicos, térmicos e biológicos com sensibilidade tátil.",
    heroTitle: "LUVAS DE SEGURANÇA E PROTEÇÃO PARA AS MÃOS",
    heroSubtitle: "As mãos são as ferramentas mais versáteis e expostas do corpo. Portfólio técnico com marcas como Danny, Volk, Super Safety e 3M.",
    badges: ["Risco Mecânico", "Risco Químico", "Alta Destreza"],
    indicationsSection: {
      subtitle: "Navegue por Risco",
      title: "Encontre a luva ideal para o perigo da sua atividade",
    },
    indications: [
      { title: "Risco Mecânico", desc: "Luvas de vaqueta, raspa e malha para construção, carga e solda." },
      { title: "Risco Químico", desc: "Luvas nitrílicas, neoprene e látex para óleos, solventes e ácidos." },
      { title: "Tato e Precisão", desc: "Luvas banhadas em PU ou látex corrugado para manuseio de peças pequenas." },
      { title: "Anti-Corte", desc: "Fibras de alta tecnologia para lâminas, vidros e chapas metálicas." }
    ],
    spotlight: {
      subtitle: "Venda Corporativa",
      title: "Abastecimento Industrial e Atacado",
      description: "Luvas são itens de alto giro e reposição constante. Oferecemos condições diferenciadas para caixas fechadas ou contratos mensais.",
    },
    commonUses: ["Construção", "Manutenção", "Indústria", "Logística"],
    commonMistakes: [
      "Escolher a luva sem considerar o risco predominante da atividade.",
      "Usar látex em ambientes com óleos, solventes ou ácidos.",
      "Ignorar a necessidade de sensibilidade tátil em tarefas de precisão.",
      "Não validar o tamanho correto para o calce da equipe."
    ],
    segments: ["Indústria", "Logística", "Construção", "Química"],
    faq: [
      { q: "Qual a diferença entre luva nitrílica e látex?", a: "A nitrílica oferece maior resistência química e mecânica e é hipoalergênica. A de látex tem mais elasticidade, mas menor resistência a óleos." },
      { q: "Como saber o tamanho correto?", a: "Consulte nossa tabela de medidas ou solicite uma amostra para testes de calce com a equipe." }
    ],
    cta: {
      eyebrow: "Atendimento B2B",
      title: "Fale com um consultor sobre luvas para sua operação",
      description: "Oriente a escolha técnica e garanta reposição constante sem ruptura.",
      buttonLabel: "Falar com consultor",
      href: "/chat",
    }
  },
  "protecao-respiratoria": {
    key: "protecao-respiratoria",
    name: "Proteção Respiratória",
    shortDescription: "Máscaras, respiradores e filtros para proteção contra gases, vapores e particulados nocivos.",
    heroTitle: "SEGURANÇA RESPIRATÓRIA ESPECIALIZADA",
    heroSubtitle: "Proteja sua equipe contra contaminantes aéreos com filtros e máscaras de alta eficiência.",
    badges: ["PFF2 / N95", "Vapores Orgânicos", "NR-15"],
    indications: [
      { title: "Presença de Poeiras e Névoas", desc: "Filtragem mecânica para partículas sólidas e líquidas." },
      { title: "Manipulação de Solventes", desc: "Filtros químicos para adsorção de vapores orgânicos." },
      { title: "Ambientes com Baixo Oxigênio", desc: "Sistemas de ar mandado ou autônomos para áreas críticas." }
    ],
    commonUses: ["Pintura Industrial", "Mineração", "Indústria Farmacêutica", "Soldagem"],
    commonMistakes: [
      "Não realizar o ensaio de vedação (Fit Test) nos usuários.",
      "Usar filtros vencidos ou saturados por mais tempo que o recomendado.",
      "Utilizar respiradores sem manutenção ou higienização adequada.",
      "Confundir máscaras descartáveis simples com respiradores certificados."
    ],
    segments: ["Saúde", "Alimentícia", "Indústria Química", "Agronegócio"],
    faq: [
      { q: "Quando trocar o filtro?", a: "Quando sentir cheiro do contaminante ou houver aumento da resistência respiratória." },
      { q: "Pode usar com barba?", a: "Não é recomendado para respiradores de vedação facial, pois compromete a proteção." },
      { q: "O que é PFF2?", a: "Peça Facial Filtrante com eficiência mínima de 94% contra partículas." }
    ]
  },
  "protecao-auditiva": {
    key: "protecao-auditiva",
    name: "Proteção Auditiva",
    shortDescription: "Abafadores de ruído e plugues de inserção para preservação da saúde auricular em ambientes ruidosos.",
    heroTitle: "CONSERVAÇÃO AUDITIVA INDUSTRIAL",
    heroSubtitle: "Atenuação de ruídos com conforto para garantir o bem-estar e foco da sua equipe.",
    badges: ["Abafadores Shell", "Plugues de Silicone", "NR-15"],
    indications: [
      { title: "Exposição a Ruído Contínuo", desc: "Proteção para jornadas longas em ambientes com máquinas barulhentas." },
      { title: "Ruídos de Impacto", desc: "Atenuação para operações de forjaria, britagem ou disparos." },
      { title: "Zonas de Conforto Acústico", desc: "Melhoria da concentração em escritórios industriais ou logística." }
    ],
    commonUses: ["Aeroportos", "Serralherias", "Usinas", "Eventos e Serviços"],
    commonMistakes: [
      "Não considerar o NRRsf (Nível de Redução de Ruído) real.",
      "Retirar o protetor durante a jornada de trabalho.",
      "Uso incorreto do plugue de inserção (falta de selagem).",
      "Não higienizar protetores tipo plugue, gerando infecções."
    ],
    segments: ["Manufatura", "Logística", "Aeroportuário", "Construção"],
    faq: [
      { q: "Plugue ou abafador?", a: "Depende do nível de ruído e da preferência de conforto do usuário." },
      { q: "Como limpar o abafador?", a: "Use apenas pano úmido e sabão neutro nas almofadas." },
      { q: "O que é NRRsf?", a: "É o valor de atenuação obtido em testes com usuários reais." }
    ]
  },
  "protecao-ocular": {
    key: "protecao-ocular",
    name: "Proteção Ocular",
    shortDescription: "Óculos de segurança e protetores faciais contra impactos, luminosidade intensa e respingos.",
    heroTitle: "VISÃO PROTEGIDA EM QUALQUER OPERAÇÃO",
    heroSubtitle: "Óculos técnicos com tratamento antiembaçante e resistência a impactos de alta velocidade.",
    badges: ["Anti-Risco", "UV 400", "Z87.1"],
    indications: [
      { title: "Risco de Projeção de Partículas", desc: "Lentes de policarbonato resistentes a estilhaços." },
      { title: "Radiação Infravermelha e UV", desc: "Lentes escuras ou verdes para trabalhos ao ar livre ou solda." },
      { title: "Respingos de Produtos Químicos", desc: "Modelos com vedação periférica ou ampla visão." }
    ],
    commonUses: ["Laboratórios", "Oficinas Mecânicas", "Jardinagem Profissional", "Construção Civil"],
    commonMistakes: [
      "Usar óculos sem tratamento antiembaçante em áreas quentes.",
      "Utilizar óculos riscados que prejudicam a visibilidade.",
      "Não considerar o uso de óculos de sobreposição para quem usa grau.",
      "Ignorar a proteção lateral em ambientes de alto risco mecânico."
    ],
    segments: ["Saúde", "Indústria Naval", "Manutenção", "Serviços Gerais"],
    faq: [
      { q: "Lente incolor ou escura?", a: "Incolor para interiores; escura para áreas externas com sol intenso." },
      { q: "O policarbonato quebra?", a: "Ele é projetado para não estilhaçar, deformando-se sob impacto extremo." },
      { q: "Existe óculos com grau?", a: "Sim, trabalhamos com modelos que permitem inserção de lentes corretivas." }
    ]
  },
  "trabalho-em-altura": {
    key: "trabalho-em-altura",
    name: "Trabalho em Altura (NR-35)",
    shortDescription: "Cinturões, talabartes e ancoragens certificados para trabalho em altura com conformidade NR-35.",
    heroTitle: "EQUIPAMENTOS PARA TRABALHO EM ALTURA (NR-35)",
    heroSubtitle: "Quando o risco é a queda, a qualidade do equipamento é vital. Marcas como Carbografite e MG Cintos com certificação INMETRO e conformidade NR-35.",
    badges: ["NR-35", "INMETRO", "Proteção Contra Quedas"],
    indicationsSection: {
      subtitle: "Linha Completa de Proteção",
      title: "Cintos, talabartes e acessórios para trabalho em altura",
    },
    indications: [
      { title: "Cintos Paraquedistas", desc: "Modelos com 1 a 5 pontos de conexão e opções para espaço confinado ou solda." },
      { title: "Talabartes de Segurança", desc: "Simples, duplos (em Y) e com absorvedor de energia (ABS)." },
      { title: "Trava-Quedas", desc: "Para corda ou cabo de aço, essenciais para movimentação vertical segura." },
      { title: "Acessórios", desc: "Mosquetões, polias, fitas de ancoragem e capacetes com jugular." }
    ],
    spotlight: {
      subtitle: "Conteúdo Técnico",
      title: "A Importância da Inspeção",
      description: "Equipamentos de altura exigem inspeção rigorosa antes de cada uso. Indicamos o material correto conforme o ambiente (poliéster ou para-aramida).",
    },
    commonUses: ["Construção", "Telecom", "Energia", "Manutenção"],
    commonMistakes: [
      "Usar equipamento sem inspeção prévia de rotina.",
      "Escolher material inadequado para ambientes com calor ou solda.",
      "Não descartar cintos que sofreram queda ou desgaste nas costuras.",
      "Ignorar o uso de absorvedor de energia em quedas com fator maior que 1."
    ],
    segments: ["Construção", "Telecomunicações", "Energia", "Manutenção"],
    faq: [
      { q: "Qual a validade de um cinto de segurança?", a: "Os fabricantes indicam entre 5 e 10 anos, mas a vida útil depende do estado de conservação. Se houve queda, descarte imediatamente." },
      { q: "O que é o Absorvedor de Energia?", a: "Dispositivo no talabarte que se abre em caso de queda para amortecer o impacto e evitar lesões graves." }
    ],
    cta: {
      eyebrow: "NR-35",
      title: "Garanta a segurança da sua equipe em altura.",
      description: "Fale com um especialista e monte o sistema correto para a sua operação.",
      buttonLabel: "Falar com Especialista NR-35",
      href: "/chat",
    }
  },
  "calcados": {
    key: "calcados",
    name: "Calçados de Segurança",
    shortDescription: "Botas e calçados de segurança com proteção contra impactos, perfuração, umidade e risco elétrico.",
    heroTitle: "CALÇADOS DE SEGURANÇA E BOTAS DE PROTEÇÃO",
    heroSubtitle: "A proteção dos pés é fundamental para a integridade do trabalhador e a produtividade da operação. Linha completa com NR-06 e marcas como Bracol, Vulcaflex, Marluvas e Fujiwara.",
    badges: ["NR-06", "Biqueira de Aço", "Isolamento Elétrico"],
    indicationsSection: {
      subtitle: "Navegue por Aplicação",
      title: "Escolha onde você vai usar",
    },
    indications: [
      { title: "Construção e Obra", desc: "Botinas de couro com biqueira de aço e solado bidensidade." },
      { title: "Limpeza e Saneamento", desc: "Botas de PVC impermeáveis (galocha) de cano curto ou longo." },
      { title: "Eletricista", desc: "Calçados livres de metais (compósito) com isolamento elétrico." },
      { title: "Hospitalar e Alimentícia", desc: "Sapatos brancos de fácil higienização e solado antiderrapante." }
    ],
    spotlight: {
      subtitle: "Destaque Tecnológico",
      title: "Conheça a Tecnologia Neo Evolution",
      description: "Palmilhas antiestáticas moldadas a laser em 3 minutos para se adaptar à pisada e reduzir a fadiga muscular.",
      ctaLabel: "Saiba mais",
      ctaHref: "/chat",
    },
    compliance: {
      title: "Segurança Certificada (CA Ativo)",
      description: "Todos os calçados comercializados possuem Certificado de Aprovação válido, garantindo rastreabilidade e qualidade técnica para auditorias.",
    },
    commonUses: ["Construção", "Indústria", "Limpeza", "Elétrica"],
    commonMistakes: [
      "Escolher calçado sem considerar risco de perfuração, impacto ou umidade.",
      "Usar modelo com metais em ambientes com risco elétrico.",
      "Ignorar necessidade de solado antiderrapante em áreas molhadas.",
      "Não validar o CA ativo antes de fechar o pedido."
    ],
    segments: ["Construção", "Indústria", "Saneamento", "Elétrica"],
    faq: [
      { q: "Qual a validade de uma bota de segurança?", a: "A validade do CA se refere à autorização de venda. A vida útil depende do uso e conservação, variando em geral de 6 a 12 meses." },
      { q: "Vocês vendem grade fechada?", a: "Sim. Atendemos desde a reposição de um par até grades completas para indústrias com condições especiais." }
    ],
    cta: {
      eyebrow: "Conversão B2B",
      title: "Precisa cotar calçados para toda a equipe?",
      buttonLabel: "Falar com Consultor no WhatsApp",
      href: "/chat",
    }
  },
  "sinalizacao": {
    key: "sinalizacao",
    name: "Sinalização e EPC",
    shortDescription: "Itens de sinalização e proteção coletiva para delimitar áreas e reduzir riscos em ambientes industriais.",
    heroTitle: "SINALIZAÇÃO DE SEGURANÇA E PROTEÇÃO COLETIVA (EPC)",
    heroSubtitle: "A segurança começa pela organização do ambiente. Oferecemos produtos robustos e de alta visibilidade em conformidade com normas técnicas.",
    badges: ["Alta Visibilidade", "Normas Técnicas", "EPC"],
    indicationsSection: {
      subtitle: "Categorias de Produtos",
      title: "Tudo para organizar e sinalizar ambientes com segurança",
    },
    indications: [
      { title: "Delimitação de Área", desc: "Cones de borracha ou rígidos, pedestais e correntes plásticas." },
      { title: "Fitas de Sinalização", desc: "Fitas zebradas, antiderrapantes e de demarcação de solo." },
      { title: "Sinalização Visual", desc: "Placas de cuidado, EPI obrigatório, saída de emergência e cavaletes." },
      { title: "Proteção Coletiva", desc: "Mantas isolantes, protetores de vergalhão e telas de tapume." }
    ],
    commonUses: ["Obras", "Indústria", "Estacionamentos", "Logística"],
    commonMistakes: [
      "Usar cone rígido em locais com tráfego de veículos.",
      "Não sinalizar riscos em áreas de circulação.",
      "Ignorar a padronização normativa das placas.",
      "Deixar fitas e demarcações desgastadas sem reposição."
    ],
    segments: ["Construção", "Indústria", "Logística", "Serviços"],
    faq: [
      { q: "Qual a diferença entre cone rígido e flexível?", a: "O cone flexível é indicado para tráfego de veículos, pois não quebra ao ser atropelado. O rígido é para sinalização estática." },
      { q: "Vocês personalizam placas?", a: "Trabalhamos com o padrão normativo de sinalização. Consulte nosso time para projetos específicos." }
    ],
    cta: {
      eyebrow: "Conversão B2B",
      title: "Organize sua obra ou empresa hoje mesmo.",
      buttonLabel: "Solicitar Cotação de Sinalização",
      href: "/chat",
    }
  }
};
