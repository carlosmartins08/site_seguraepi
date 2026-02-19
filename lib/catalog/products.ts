
export type Product = {
  id: string;
  name: string;
  categoryKey: string;
  segmentKeys: string[];
  shortDesc: string;
  tags: string[];
  isFeatured?: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  // Proteção das Mãos
  {
    id: "luva-multitatil-nitrilica",
    name: "Luva Multitátil Nitrílica",
    categoryKey: "protecao-maos",
    segmentKeys: ["industria", "logistica", "manutencao"],
    shortDesc: "Alta sensibilidade tátil e resistência a óleos e graxas.",
    tags: ["CA Ativo", "Alta Destreza"],
    isFeatured: true
  },
  {
    id: "luva-anti-corte-performance",
    name: "Luva Anti-Corte Performance",
    categoryKey: "protecao-maos",
    segmentKeys: ["industria", "construcao-civil", "manutencao"],
    shortDesc: "Fibra de alta resistência mecânica para manuseio de chapas.",
    tags: ["Nível 5", "Mecânico"]
  },
  {
    id: "luva-vaqueta-premium",
    name: "Luva Vaqueta Premium",
    categoryKey: "protecao-maos",
    segmentKeys: ["agronegocio", "construcao-civil", "manutencao"],
    shortDesc: "Couro tratado para maior durabilidade e conforto térmico.",
    tags: ["Couro", "Resistente"]
  },
  
  // Proteção Respiratória
  {
    id: "respirador-pff2-valvulado",
    name: "Respirador PFF2 Valvulado",
    categoryKey: "protecao-respiratoria",
    segmentKeys: ["saude", "industria", "construcao-civil"],
    shortDesc: "Proteção contra poeiras, névoas e fumos com exalação facilitada.",
    tags: ["NR-06", "Descartável"],
    isFeatured: true
  },
  {
    id: "mascara-semifacial-filtros",
    name: "Máscara Semifacial Reutilizável",
    categoryKey: "protecao-respiratoria",
    segmentKeys: ["alimenticia", "industria", "agronegocio"],
    shortDesc: "Sistema de filtros substituíveis para vapores e gases.",
    tags: ["Reutilizável", "Baixa Manutenção"]
  },

  // Proteção Auditiva
  {
    id: "abafador-concha-shell",
    name: "Abafador Concha Shell",
    categoryKey: "protecao-auditiva",
    segmentKeys: ["eventos-servicos", "industria", "logistica"],
    shortDesc: "Atenuação de ruído contínuo com ajuste ergonômico.",
    tags: ["22dB", "Conforto"]
  },
  {
    id: "plugue-silicone-cordao",
    name: "Plugue Silicone com Cordão",
    categoryKey: "protecao-auditiva",
    segmentKeys: ["alimenticia", "industria", "manutencao"],
    shortDesc: "Higiênico e reutilizável para proteção em áreas de ruído médio.",
    tags: ["Lavável", "Prático"]
  },

  // Proteção Ocular
  {
    id: "oculos-ampla-visao-quimico",
    name: "Óculos Ampla Visão Químico",
    categoryKey: "protecao-ocular",
    segmentKeys: ["saude", "agronegocio", "industria"],
    shortDesc: "Vedação periférica contra respingos e vapores químicos.",
    tags: ["Anti-Embaçante", "Vedado"],
    isFeatured: true
  },
  {
    id: "oculos-seguranca-incolor",
    name: "Óculos de Segurança Incolor",
    categoryKey: "protecao-ocular",
    segmentKeys: ["construcao-civil", "manutencao", "logistica"],
    shortDesc: "Proteção contra impactos frontais com lente de policarbonato.",
    tags: ["Anti-Risco", "Leve"]
  },

  // Trabalho em Altura
  {
    id: "cinturao-paraquedista-nr35",
    name: "Cinturão Paraquedista NR-35",
    categoryKey: "protecao-altural",
    segmentKeys: ["construcao-civil", "manutencao", "eventos-servicos"],
    shortDesc: "Padrão industrial para retenção de queda e posicionamento.",
    tags: ["NR-35", "5 Pontos"],
    isFeatured: true
  },
  {
    id: "talabarte-duplo-absorvedor",
    name: "Talabarte Duplo com Absorvedor",
    categoryKey: "protecao-altural",
    segmentKeys: ["construcao-civil", "industria"],
    shortDesc: "Garante ancoragem constante com redução de força de impacto.",
    tags: ["Y-Lanyard", "Segurança"]
  },

  // Outros (Misturados para Volume)
  {
    id: "botina-seguranca-composite",
    name: "Botina de Segurança Composite",
    categoryKey: "protecao-pes",
    segmentKeys: ["industria", "logistica", "alimenticia"],
    shortDesc: "Biqueira não metálica com solado antiderrapante bidensidade.",
    tags: ["Pés", "Eletricista"]
  },
  {
    id: "capacete-aba-frontal",
    name: "Capacete Aba Frontal",
    categoryKey: "protecao-cabeca",
    segmentKeys: ["construcao-civil", "manutencao"],
    shortDesc: "Proteção contra impactos de objetos sobre o crânio.",
    tags: ["Cabeça", "Ajustável"]
  }
];
