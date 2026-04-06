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
    name: "Luvas de Seguran�a",
    shortDescription: "Luvas t�cnicas para riscos mec�nicos, qu�micos, t�rmicos e biol�gicos com sensibilidade t�til.",
    heroTitle: "LUVAS DE SEGURAN�A E PROTE��O PARA AS M�OS",
    heroSubtitle: "As m�os s�o as ferramentas mais vers�teis e expostas do corpo. Portf�lio t�cnico com marcas como Danny, Volk, Super Safety e 3M.",
    badges: ["Risco Mec�nico", "Risco Qu�mico", "Alta Destreza"],
    indicationsSection: {
      subtitle: "Navegue por Risco",
      title: "Encontre a luva ideal para o perigo da sua atividade",
    },
    indications: [
      { title: "Risco Mec�nico", desc: "Luvas de vaqueta, raspa e malha para constru��o, carga e solda." },
      { title: "Risco Qu�mico", desc: "Luvas nitr�licas, neoprene e l�tex para �leos, solventes e �cidos." },
      { title: "Tato e Precis�o", desc: "Luvas banhadas em PU ou l�tex corrugado para manuseio de pe�as pequenas." },
      { title: "Anti-Corte", desc: "Fibras de alta tecnologia para l�minas, vidros e chapas met�licas." }
    ],
    spotlight: {
      subtitle: "Venda Corporativa",
      title: "Abastecimento Industrial e Atacado",
      description: "Luvas s�o itens de alto giro e reposi��o constante. Oferecemos condi��es diferenciadas para caixas fechadas ou contratos mensais.",
    },
    commonUses: ["Constru��o", "Manuten��o", "Ind�stria", "Log�stica"],
    commonMistakes: [
      "Escolher a luva sem considerar o risco predominante da atividade.",
      "Usar l�tex em ambientes com �leos, solventes ou �cidos.",
      "Ignorar a necessidade de sensibilidade t�til em tarefas de precis�o.",
      "N�o validar o tamanho correto para o calce da equipe."
    ],
    segments: ["Ind�stria", "Log�stica", "Constru��o", "Qu�mica"],
    faq: [
      { q: "Qual a diferen�a entre luva nitr�lica e l�tex?", a: "A nitr�lica oferece maior resist�ncia qu�mica e mec�nica e � hipoalerg�nica. A de l�tex tem mais elasticidade, mas menor resist�ncia a �leos." },
      { q: "Como saber o tamanho correto?", a: "Consulte nossa tabela de medidas ou solicite uma amostra para testes de calce com a equipe." }
    ],
    cta: {
      eyebrow: "Atendimento B2B",
      title: "Fale com um consultor sobre luvas para sua opera��o",
      description: "Oriente a escolha t�cnica e garanta reposi��o constante sem ruptura.",
      buttonLabel: "Falar com consultor",
      href: "/chat",
    }
  },
  "protecao-respiratoria": {
    key: "protecao-respiratoria",
    name: "Prote��o Respirat�ria",
    shortDescription: "M�scaras, respiradores e filtros para prote��o contra gases, vapores e particulados nocivos.",
    heroTitle: "SEGURAN�A RESPIRAT�RIA ESPECIALIZADA",
    heroSubtitle: "Proteja sua equipe contra contaminantes a�reos com filtros e m�scaras de alta efici�ncia.",
    badges: ["PFF2 / N95", "Vapores Org�nicos", "NR-15"],
    indications: [
      { title: "Presen�a de Poeiras e N�voas", desc: "Filtragem mec�nica para part�culas s�lidas e l�quidas." },
      { title: "Manipula��o de Solventes", desc: "Filtros qu�micos para adsor��o de vapores org�nicos." },
      { title: "Ambientes com Baixo Oxig�nio", desc: "Sistemas de ar mandado ou aut�nomos para �reas cr�ticas." }
    ],
    commonUses: ["Pintura Industrial", "Minera��o", "Ind�stria Farmac�utica", "Soldagem"],
    commonMistakes: [
      "N�o realizar o ensaio de veda��o (Fit Test) nos usu�rios.",
      "Usar filtros vencidos ou saturados por mais tempo que o recomendado.",
      "Utilizar respiradores sem manuten��o ou higieniza��o adequada.",
      "Confundir m�scaras descart�veis simples com respiradores certificados."
    ],
    segments: ["Sa�de", "Aliment�cia", "Ind�stria Qu�mica", "Agroneg�cio"],
    faq: [
      { q: "Quando trocar o filtro?", a: "Quando sentir cheiro do contaminante ou houver aumento da resist�ncia respirat�ria." },
      { q: "Pode usar com barba?", a: "N�o � recomendado para respiradores de veda��o facial, pois compromete a prote��o." },
      { q: "O que � PFF2?", a: "Pe�a Facial Filtrante com efici�ncia m�nima de 94% contra part�culas." }
    ]
  },
  "protecao-auditiva": {
    key: "protecao-auditiva",
    name: "Prote��o Auditiva",
    shortDescription: "Abafadores de ru�do e plugues de inser��o para preserva��o da sa�de auricular em ambientes ruidosos.",
    heroTitle: "CONSERVA��O AUDITIVA INDUSTRIAL",
    heroSubtitle: "Atenua��o de ru�dos com conforto para garantir o bem-estar e foco da sua equipe.",
    badges: ["Abafadores Shell", "Plugues de Silicone", "NR-15"],
    indications: [
      { title: "Exposi��o a Ru�do Cont�nuo", desc: "Prote��o para jornadas longas em ambientes com m�quinas barulhentas." },
      { title: "Ru�dos de Impacto", desc: "Atenua��o para opera��es de forjaria, britagem ou disparos." },
      { title: "Zonas de Conforto Ac�stico", desc: "Melhoria da concentra��o em escrit�rios industriais ou log�stica." }
    ],
    commonUses: ["Aeroportos", "Serralherias", "Usinas", "Eventos e Servi�os"],
    commonMistakes: [
      "N�o considerar o NRRsf (N�vel de Redu��o de Ru�do) real.",
      "Retirar o protetor durante a jornada de trabalho.",
      "Uso incorreto do plugue de inser��o (falta de selagem).",
      "N�o higienizar protetores tipo plugue, gerando infec��es."
    ],
    segments: ["Manufatura", "Log�stica", "Aeroportu�rio", "Constru��o"],
    faq: [
      { q: "Plugue ou abafador?", a: "Depende do n�vel de ru�do e da prefer�ncia de conforto do usu�rio." },
      { q: "Como limpar o abafador?", a: "Use apenas pano �mido e sab�o neutro nas almofadas." },
      { q: "O que � NRRsf?", a: "� o valor de atenua��o obtido em testes com usu�rios reais." }
    ]
  },
  "protecao-ocular": {
    key: "protecao-ocular",
    name: "Prote��o Ocular",
    shortDescription: "�culos de seguran�a e protetores faciais contra impactos, luminosidade intensa e respingos.",
    heroTitle: "VIS�O PROTEGIDA EM QUALQUER OPERA��O",
    heroSubtitle: "�culos t�cnicos com tratamento antiemba�ante e resist�ncia a impactos de alta velocidade.",
    badges: ["Anti-Risco", "UV 400", "Z87.1"],
    indications: [
      { title: "Risco de Proje��o de Part�culas", desc: "Lentes de policarbonato resistentes a estilha�os." },
      { title: "Radia��o Infravermelha e UV", desc: "Lentes escuras ou verdes para trabalhos ao ar livre ou solda." },
      { title: "Respingos de Produtos Qu�micos", desc: "Modelos com veda��o perif�rica ou ampla vis�o." }
    ],
    commonUses: ["Laborat�rios", "Oficinas Mec�nicas", "Jardinagem Profissional", "Constru��o Civil"],
    commonMistakes: [
      "Usar �culos sem tratamento antiemba�ante em �reas quentes.",
      "Utilizar �culos riscados que prejudicam a visibilidade.",
      "N�o considerar o uso de �culos de sobreposi��o para quem usa grau.",
      "Ignorar a prote��o lateral em ambientes de alto risco mec�nico."
    ],
    segments: ["Sa�de", "Ind�stria Naval", "Manuten��o", "Servi�os Gerais"],
    faq: [
      { q: "Lente incolor ou escura?", a: "Incolor para interiores; escura para �reas externas com sol intenso." },
      { q: "O policarbonato quebra?", a: "Ele � projetado para n�o estilha�ar, deformando-se sob impacto extremo." },
      { q: "Existe �culos com grau?", a: "Sim, trabalhamos com modelos que permitem inser��o de lentes corretivas." }
    ]
  },
  "trabalho-em-altura": {
    key: "trabalho-em-altura",
    name: "Trabalho em Altura (NR-35)",
    shortDescription: "Cintur�es, talabartes e ancoragens certificados para trabalho em altura com conformidade NR-35.",
    heroTitle: "EQUIPAMENTOS PARA TRABALHO EM ALTURA (NR-35)",
    heroSubtitle: "Quando o risco � a queda, a qualidade do equipamento � vital. Marcas como Carbografite e MG Cintos com certifica��o INMETRO e conformidade NR-35.",
    badges: ["NR-35", "INMETRO", "Prote��o Contra Quedas"],
    indicationsSection: {
      subtitle: "Linha Completa de Prote��o",
      title: "Cintos, talabartes e acess�rios para trabalho em altura",
    },
    indications: [
      { title: "Cintos Paraquedistas", desc: "Modelos com 1 a 5 pontos de conex�o e op��es para espa�o confinado ou solda." },
      { title: "Talabartes de Seguran�a", desc: "Simples, duplos (em Y) e com absorvedor de energia (ABS)." },
      { title: "Trava-Quedas", desc: "Para corda ou cabo de a�o, essenciais para movimenta��o vertical segura." },
      { title: "Acess�rios", desc: "Mosquet�es, polias, fitas de ancoragem e capacetes com jugular." }
    ],
    spotlight: {
      subtitle: "Conte�do T�cnico",
      title: "A Import�ncia da Inspe��o",
      description: "Equipamentos de altura exigem inspe��o rigorosa antes de cada uso. Indicamos o material correto conforme o ambiente (poli�ster ou para-aramida).",
    },
    commonUses: ["Constru��o", "Telecom", "Energia", "Manuten��o"],
    commonMistakes: [
      "Usar equipamento sem inspe��o pr�via de rotina.",
      "Escolher material inadequado para ambientes com calor ou solda.",
      "N�o descartar cintos que sofreram queda ou desgaste nas costuras.",
      "Ignorar o uso de absorvedor de energia em quedas com fator maior que 1."
    ],
    segments: ["Constru��o", "Telecomunica��es", "Energia", "Manuten��o"],
    faq: [
      { q: "Qual a validade de um cinto de seguran�a?", a: "Os fabricantes indicam entre 5 e 10 anos, mas a vida �til depende do estado de conserva��o. Se houve queda, descarte imediatamente." },
      { q: "O que � o Absorvedor de Energia?", a: "Dispositivo no talabarte que se abre em caso de queda para amortecer o impacto e evitar les�es graves." }
    ],
    cta: {
      eyebrow: "NR-35",
      title: "Garanta a seguran�a da sua equipe em altura.",
      description: "Fale com um especialista e monte o sistema correto para a sua opera��o.",
      buttonLabel: "Falar com Especialista NR-35",
      href: "/chat",
    }
  },
  "calcados": {
    key: "calcados",
    name: "Cal�ados de Seguran�a",
    shortDescription: "Botas e cal�ados de seguran�a com prote��o contra impactos, perfura��o, umidade e risco el�trico.",
    heroTitle: "CAL�ADOS DE SEGURAN�A E BOTAS DE PROTE��O",
    heroSubtitle: "A prote��o dos p�s � fundamental para a integridade do trabalhador e a produtividade da opera��o. Linha completa com NR-06 e marcas como Bracol, Vulcaflex, Marluvas e Fujiwara.",
    badges: ["NR-06", "Biqueira de A�o", "Isolamento El�trico"],
    indicationsSection: {
      subtitle: "Navegue por Aplica��o",
      title: "Escolha onde voc� vai usar",
    },
    indications: [
      { title: "Constru��o e Obra", desc: "Botinas de couro com biqueira de a�o e solado bidensidade." },
      { title: "Limpeza e Saneamento", desc: "Botas de PVC imperme�veis (galocha) de cano curto ou longo." },
      { title: "Eletricista", desc: "Cal�ados livres de metais (comp�sito) com isolamento el�trico." },
      { title: "Hospitalar e Aliment�cia", desc: "Sapatos brancos de f�cil higieniza��o e solado antiderrapante." }
    ],
    spotlight: {
      subtitle: "Destaque Tecnol�gico",
      title: "Conhe�a a Tecnologia Neo Evolution",
      description: "Palmilhas antiest�ticas moldadas a laser em 3 minutos para se adaptar � pisada e reduzir a fadiga muscular.",
      ctaLabel: "Saiba mais",
      ctaHref: "/chat",
    },
    compliance: {
      title: "Seguran�a Certificada (CA Ativo)",
      description: "Todos os cal�ados comercializados possuem Certificado de Aprova��o v�lido, garantindo rastreabilidade e qualidade t�cnica para auditorias.",
    },
    commonUses: ["Constru��o", "Ind�stria", "Limpeza", "El�trica"],
    commonMistakes: [
      "Escolher cal�ado sem considerar risco de perfura��o, impacto ou umidade.",
      "Usar modelo com metais em ambientes com risco el�trico.",
      "Ignorar necessidade de solado antiderrapante em �reas molhadas.",
      "N�o validar o CA ativo antes de fechar o pedido."
    ],
    segments: ["Constru��o", "Ind�stria", "Saneamento", "El�trica"],
    faq: [
      { q: "Qual a validade de uma bota de seguran�a?", a: "A validade do CA se refere � autoriza��o de venda. A vida �til depende do uso e conserva��o, variando em geral de 6 a 12 meses." },
      { q: "Voc�s vendem grade fechada?", a: "Sim. Atendemos desde a reposi��o de um par at� grades completas para ind�strias com condi��es especiais." }
    ],
    cta: {
      eyebrow: "Convers�o B2B",
      title: "Precisa cotar cal�ados para toda a equipe?",
      buttonLabel: "Falar com Consultor no WhatsApp",
      href: "/chat",
    }
  },
  "sinalizacao": {
    key: "sinalizacao",
    name: "Sinaliza��o e EPC",
    shortDescription: "Itens de sinaliza��o e prote��o coletiva para delimitar �reas e reduzir riscos em ambientes industriais.",
    heroTitle: "SINALIZA��O DE SEGURAN�A E PROTE��O COLETIVA (EPC)",
    heroSubtitle: "A seguran�a come�a pela organiza��o do ambiente. Oferecemos produtos robustos e de alta visibilidade em conformidade com normas t�cnicas.",
    badges: ["Alta Visibilidade", "Normas T�cnicas", "EPC"],
    indicationsSection: {
      subtitle: "Categorias de Produtos",
      title: "Tudo para organizar e sinalizar ambientes com seguran�a",
    },
    indications: [
      { title: "Delimita��o de �rea", desc: "Cones de borracha ou r�gidos, pedestais e correntes pl�sticas." },
      { title: "Fitas de Sinaliza��o", desc: "Fitas zebradas, antiderrapantes e de demarca��o de solo." },
      { title: "Sinaliza��o Visual", desc: "Placas de cuidado, EPI obrigat�rio, sa�da de emerg�ncia e cavaletes." },
      { title: "Prote��o Coletiva", desc: "Mantas isolantes, protetores de vergalh�o e telas de tapume." }
    ],
    commonUses: ["Obras", "Ind�stria", "Estacionamentos", "Log�stica"],
    commonMistakes: [
      "Usar cone r�gido em locais com tr�fego de ve�culos.",
      "N�o sinalizar riscos em �reas de circula��o.",
      "Ignorar a padroniza��o normativa das placas.",
      "Deixar fitas e demarca��es desgastadas sem reposi��o."
    ],
    segments: ["Constru��o", "Ind�stria", "Log�stica", "Servi�os"],
    faq: [
      { q: "Qual a diferen�a entre cone r�gido e flex�vel?", a: "O cone flex�vel � indicado para tr�fego de ve�culos, pois n�o quebra ao ser atropelado. O r�gido � para sinaliza��o est�tica." },
      { q: "Voc�s personalizam placas?", a: "Trabalhamos com o padr�o normativo de sinaliza��o. Consulte nosso time para projetos espec�ficos." }
    ],
    cta: {
      eyebrow: "Convers�o B2B",
      title: "Organize sua obra ou empresa hoje mesmo.",
      buttonLabel: "Solicitar Cota��o de Sinaliza��o",
      href: "/chat",
    }
  }
};
