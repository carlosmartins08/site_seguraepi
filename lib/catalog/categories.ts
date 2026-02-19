
export type CategoryKey = 
  | "protecao-maos" 
  | "protecao-respiratoria" 
  | "protecao-auditiva" 
  | "protecao-ocular" 
  | "trabalho-em-altura";

export interface CategoryPageData {
  key: CategoryKey;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  badges: string[];
  indications: { title: string; desc: string }[];
  commonUses: string[];
  commonMistakes: string[];
  segments: string[];
  faq: { q: string; a: string }[];
}

export const CATEGORY_PAGES: Record<CategoryKey, CategoryPageData> = {
  "protecao-maos": {
    key: "protecao-maos",
    name: "Proteção das Mãos",
    shortDescription: "Luvas de alta performance para riscos térmicos, químicos e mecânicos em ambientes industriais.",
    heroTitle: "PROTEÇÃO TÉCNICA PARA AS MÃOS",
    heroSubtitle: "Aumente a segurança e produtividade com luvas especificadas para o risco real da sua operação.",
    badges: ["NR-06", "Riscos Mecânicos", "Alta Destreza"],
    indications: [
      { title: "Manuseio de Agentes Químicos", desc: "Barreiras específicas para solventes, ácidos e óleos." },
      { title: "Operações de Corte e Abrasão", desc: "Fibras de alta resistência para proteção contra lâminas." },
      { title: "Ambientes de Alta Temperatura", desc: "Isolamento térmico certificado para calor de contato." }
    ],
    commonUses: ["Manutenção Industrial", "Linhas de Montagem", "Manipulação de Peças Oleosas", "Construção Civil"],
    commonMistakes: [
      "Usar luvas de tamanho inadequado, comprometendo a destreza.",
      "Ignorar o tempo de permeação em luvas químicas.",
      "Utilizar luvas de couro onde há risco de umidade constante.",
      "Não validar a resistência ao corte conforme a norma EN 388."
    ],
    segments: ["Indústria Metalmecânica", "Logística", "Química e Petroquímica", "Construção"],
    faq: [
      { q: "Como saber o tamanho correto?", a: "Meça a circunferência da palma da mão e consulte nossa tabela técnica." },
      { q: "Qual a durabilidade média?", a: "Depende da agressividade do uso, mas orientamos trocas preventivas baseadas no desgaste." },
      { q: "Todas têm CA?", a: "Sim, fornecemos apenas itens com Certificado de Aprovação válido." }
    ]
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
    name: "Trabalho em Altura",
    shortDescription: "Cinturões de segurança, talabartes e trava-quedas certificados para prevenção de quedas (NR-35).",
    heroTitle: "SEGURANÇA MÁXIMA PARA TRABALHO EM ALTURA",
    heroSubtitle: "Equipamentos de retenção e posicionamento com foco em ergonomia e segurança absoluta.",
    badges: ["NR-35", "NBR 15836", "Retenção de Queda"],
    indications: [
      { title: "Acesso a Telhados e Estruturas", desc: "Sistemas de ancoragem e linhas de vida temporárias." },
      { title: "Uso em Andaimes e Plataformas", desc: "Talabartes duplos para movimentação segura." },
      { title: "Espaços Confinados com Verticalidade", desc: "Cinturões com pontos de conexão para resgate." }
    ],
    commonUses: ["Limpeza de Fachadas", "Instalações Elétricas", "Montagem de Eventos", "Manutenção Industrial"],
    commonMistakes: [
      "Não calcular a Zona Livre de Queda (ZLQ).",
      "Utilizar equipamentos sem inspeção prévia de rotina.",
      "Ancoragem em pontos sem resistência estrutural validada.",
      "Não utilizar absorvedores de energia em quedas potenciais."
    ],
    segments: ["Construção Civil", "Telecomunicações", "Energia", "Manutenção Predial"],
    faq: [
      { q: "Qual a validade do cinturão?", a: "Geralmente 5 anos, mas deve ser descartado após qualquer queda real." },
      { q: "Precisa de treinamento?", a: "Sim, a NR-35 exige treinamento teórico e prático obrigatório." },
      { q: "O que é talabarte em Y?", a: "Permite que o usuário esteja sempre conectado a um ponto enquanto se move." }
    ]
  }
};
