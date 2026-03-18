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
    name: "Luvas de Seguranca",
    shortDescription: "Luvas tecnicas para riscos mecanicos, quimicos, termicos e biologicos com sensibilidade tatil.",
    heroTitle: "LUVAS DE SEGURANCA E PROTECAO PARA AS MAOS",
    heroSubtitle: "As maos sao as ferramentas mais versateis e expostas do corpo. Portfolio tecnico com marcas como Danny, Volk, Super Safety e 3M.",
    badges: ["Risco Mecanico", "Risco Quimico", "Alta Destreza"],
    indicationsSection: {
      subtitle: "Navegue por Risco",
      title: "Encontre a luva ideal para o perigo da sua atividade",
    },
    indications: [
      { title: "Risco Mecanico", desc: "Luvas de vaqueta, raspa e malha para construcao, carga e solda." },
      { title: "Risco Quimico", desc: "Luvas nitrilicas, neoprene e latex para oleos, solventes e acidos." },
      { title: "Tato e Precisao", desc: "Luvas banhadas em PU ou latex corrugado para manuseio de pecas pequenas." },
      { title: "Anti-Corte", desc: "Fibras de alta tecnologia para laminas, vidros e chapas metalicas." }
    ],
    spotlight: {
      subtitle: "Venda Corporativa",
      title: "Abastecimento Industrial e Atacado",
      description: "Luvas sao itens de alto giro e reposicao constante. Oferecemos condicoes diferenciadas para caixas fechadas ou contratos mensais.",
    },
    commonUses: ["Construcao", "Manutencao", "Industria", "Logistica"],
    commonMistakes: [
      "Escolher a luva sem considerar o risco predominante da atividade.",
      "Usar latex em ambientes com oleos, solventes ou acidos.",
      "Ignorar a necessidade de sensibilidade tatil em tarefas de precisao.",
      "Nao validar o tamanho correto para o calce da equipe."
    ],
    segments: ["Industria", "Logistica", "Construcao", "Quimica"],
    faq: [
      { q: "Qual a diferenca entre luva nitrilica e latex?", a: "A nitrilica oferece maior resistencia quimica e mecanica e e hipoalergenica. A de latex tem mais elasticidade, mas menor resistencia a oleos." },
      { q: "Como saber o tamanho correto?", a: "Consulte nossa tabela de medidas ou solicite uma amostra para testes de calce com a equipe." }
    ],
    cta: {
      eyebrow: "Atendimento B2B",
      title: "Fale com um consultor sobre luvas para sua operacao",
      description: "Oriente a escolha tecnica e garanta reposicao constante sem ruptura.",
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
    heroSubtitle: "Óculos técnicos com tratamento anti-embaçante e resistência a impactos de alta velocidade.",
    badges: ["Anti-Risco", "UV 400", "Z87.1"],
    indications: [
      { title: "Risco de Projeção de Partículas", desc: "Lentes de policarbonato resistentes a estilhaços." },
      { title: "Radiação Infravermelha e UV", desc: "Lentes escuras ou verdes para trabalhos ao ar livre ou solda." },
      { title: "Respingos de Produtos Químicos", desc: "Modelos com vedação periférica ou ampla visão." }
    ],
    commonUses: ["Laboratórios", "Oficinas Mecânicas", "Jardinagem Profissional", "Construção Civil"],
    commonMistakes: [
      "Usar óculos sem tratamento anti-embaçante em áreas quentes.",
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
    shortDescription: "Cinturoes, talabartes e ancoragens certificados para trabalho em altura com conformidade NR-35.",
    heroTitle: "EQUIPAMENTOS PARA TRABALHO EM ALTURA (NR-35)",
    heroSubtitle: "Quando o risco e a queda, a qualidade do equipamento e vital. Marcas como Carbografite e MG Cintos com certificacao INMETRO e conformidade NR-35.",
    badges: ["NR-35", "INMETRO", "Protecao Contra Quedas"],
    indicationsSection: {
      subtitle: "Linha Completa de Protecao",
      title: "Cintos, talabartes e acessorios para trabalho em altura",
    },
    indications: [
      { title: "Cintos Paraquedistas", desc: "Modelos com 1 a 5 pontos de conexao e opcoes para espaco confinado ou solda." },
      { title: "Talabartes de Seguranca", desc: "Simples, duplos (em Y) e com absorvedor de energia (ABS)." },
      { title: "Trava-Quedas", desc: "Para corda ou cabo de aco, essenciais para movimentacao vertical segura." },
      { title: "Acessorios", desc: "Mosquetoes, polias, fitas de ancoragem e capacetes com jugular." }
    ],
    spotlight: {
      subtitle: "Conteudo Tecnico",
      title: "A Importancia da Inspecao",
      description: "Equipamentos de altura exigem inspecao rigorosa antes de cada uso. Indicamos o material correto conforme o ambiente (poliester ou para-aramida).",
    },
    commonUses: ["Construcao", "Telecom", "Energia", "Manutencao"],
    commonMistakes: [
      "Usar equipamento sem inspecao previa de rotina.",
      "Escolher material inadequado para ambientes com calor ou solda.",
      "Nao descartar cintos que sofreram queda ou desgaste nas costuras.",
      "Ignorar o uso de absorvedor de energia em quedas com fator maior que 1."
    ],
    segments: ["Construcao", "Telecomunicacoes", "Energia", "Manutencao"],
    faq: [
      { q: "Qual a validade de um cinto de seguranca?", a: "Os fabricantes indicam entre 5 e 10 anos, mas a vida util depende do estado de conservacao. Se houve queda, descarte imediatamente." },
      { q: "O que e o Absorvedor de Energia?", a: "Dispositivo no talabarte que se abre em caso de queda para amortecer o impacto e evitar lesoes graves." }
    ],
    cta: {
      eyebrow: "NR-35",
      title: "Garanta a seguranca da sua equipe em altura.",
      description: "Fale com um especialista e monte o sistema correto para a sua operacao.",
      buttonLabel: "Falar com Especialista NR-35",
      href: "/chat",
    }
  },
  "calcados": {
    key: "calcados",
    name: "Calcados de Seguranca",
    shortDescription: "Botas e calcados de seguranca com protecao contra impactos, perfuracao, umidade e risco eletrico.",
    heroTitle: "CALCADOS DE SEGURANCA E BOTAS DE PROTECAO",
    heroSubtitle: "A protecao dos pes e fundamental para a integridade do trabalhador e a produtividade da operacao. Linha completa com NR-06 e marcas como Bracol, Vulcaflex, Marluvas e Fujiwara.",
    badges: ["NR-06", "Biqueira de Aco", "Isolamento Eletrico"],
    indicationsSection: {
      subtitle: "Navegue por Aplicacao",
      title: "Escolha onde voce vai usar",
    },
    indications: [
      { title: "Construcao e Obra", desc: "Botinas de couro com biqueira de aco e solado bidensidade." },
      { title: "Limpeza e Saneamento", desc: "Botas de PVC impermeaveis (galocha) de cano curto ou longo." },
      { title: "Eletricista", desc: "Calcados livres de metais (composite) com isolamento eletrico." },
      { title: "Hospitalar e Alimenticia", desc: "Sapatos brancos de facil higienizacao e solado antiderrapante." }
    ],
    spotlight: {
      subtitle: "Destaque Tecnologico",
      title: "Conheca a Tecnologia Neo Evolution",
      description: "Palmilhas antiestaticas moldadas a laser em 3 minutos para se adaptar a pisada e reduzir a fadiga muscular.",
      ctaLabel: "Saiba mais",
      ctaHref: "/chat",
    },
    compliance: {
      title: "Seguranca Certificada (CA Ativo)",
      description: "Todos os calcados comercializados possuem Certificado de Aprovacao valido, garantindo rastreabilidade e qualidade tecnica para auditorias.",
    },
    commonUses: ["Construcao", "Industria", "Limpeza", "Eletrica"],
    commonMistakes: [
      "Escolher calcado sem considerar risco de perfuracao, impacto ou umidade.",
      "Usar modelo com metais em ambientes com risco eletrico.",
      "Ignorar necessidade de solado antiderrapante em areas molhadas.",
      "Nao validar o CA ativo antes de fechar o pedido."
    ],
    segments: ["Construcao", "Industria", "Saneamento", "Eletrica"],
    faq: [
      { q: "Qual a validade de uma bota de seguranca?", a: "A validade do CA se refere a autorizacao de venda. A vida util depende do uso e conservacao, variando em geral de 6 a 12 meses." },
      { q: "Voces vendem grade fechada?", a: "Sim. Atendemos desde a reposicao de um par ate grades completas para industrias com condicoes especiais." }
    ],
    cta: {
      eyebrow: "Conversao B2B",
      title: "Precisa cotar calcados para toda a equipe?",
      buttonLabel: "Falar com Consultor no WhatsApp",
      href: "/chat",
    }
  },
  "sinalizacao": {
    key: "sinalizacao",
    name: "Sinalizacao e EPC",
    shortDescription: "Itens de sinalizacao e protecao coletiva para delimitar areas e reduzir riscos em ambientes industriais.",
    heroTitle: "SINALIZACAO DE SEGURANCA E PROTECAO COLETIVA (EPC)",
    heroSubtitle: "A seguranca comeca pela organizacao do ambiente. Oferecemos produtos robustos e de alta visibilidade em conformidade com normas tecnicas.",
    badges: ["Alta Visibilidade", "Normas Tecnicas", "EPC"],
    indicationsSection: {
      subtitle: "Categorias de Produtos",
      title: "Tudo para organizar e sinalizar ambientes com seguranca",
    },
    indications: [
      { title: "Delimitacao de Area", desc: "Cones de borracha ou rigidos, pedestais e correntes plasticas." },
      { title: "Fitas de Sinalizacao", desc: "Fitas zebradas, antiderrapantes e de demarcacao de solo." },
      { title: "Sinalizacao Visual", desc: "Placas de cuidado, EPI obrigatorio, saida de emergencia e cavaletes." },
      { title: "Protecao Coletiva", desc: "Mantas isolantes, protetores de vergalao e telas de tapume." }
    ],
    commonUses: ["Obras", "Industria", "Estacionamentos", "Logistica"],
    commonMistakes: [
      "Usar cone rigido em locais com trafego de veiculos.",
      "Nao sinalizar riscos em areas de circulacao.",
      "Ignorar a padronizacao normativa das placas.",
      "Deixar fitas e demarcacoes desgastadas sem reposicao."
    ],
    segments: ["Construcao", "Industria", "Logistica", "Servicos"],
    faq: [
      { q: "Qual a diferenca entre cone rigido e flexivel?", a: "O cone flexivel e indicado para trafego de veiculos, pois nao quebra ao ser atropelado. O rigido e para sinalizacao estatica." },
      { q: "Voces personalizam placas?", a: "Trabalhamos com o padrao normativo de sinalizacao. Consulte nosso time para projetos especificos." }
    ],
    cta: {
      eyebrow: "Conversao B2B",
      title: "Organize sua obra ou empresa hoje mesmo.",
      buttonLabel: "Solicitar Cotacao de Sinalizacao",
      href: "/chat",
    }
  }
};



