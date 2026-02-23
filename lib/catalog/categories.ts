
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
    name: "Prote��o das M�os",
    shortDescription: "Luvas de alta performance para riscos t�rmicos, qu�micos e mec�nicos em ambientes industriais.",
    heroTitle: "PROTE��O T�CNICA PARA AS M�OS",
    heroSubtitle: "Aumente a seguran�a e produtividade com luvas especificadas para o risco real da sua opera��o.",
    badges: ["NR-06", "Riscos Mec�nicos", "Alta Destreza"],
    indications: [
      { title: "Manuseio de Agentes Qu�micos", desc: "Barreiras espec�ficas para solventes, �cidos e �leos." },
      { title: "Opera��es de Corte e Abras�o", desc: "Fibras de alta resist�ncia para prote��o contra l�minas." },
      { title: "Ambientes de Alta Temperatura", desc: "Isolamento t�rmico certificado para calor de contato." }
    ],
    commonUses: ["Manuten��o Industrial", "Linhas de Montagem", "Manipula��o de Pe�as Oleosas", "Constru��o Civil"],
    commonMistakes: [
      "Usar luvas de tamanho inadequado, comprometendo a destreza.",
      "Ignorar o tempo de permea��o em luvas qu�micas.",
      "Utilizar luvas de couro onde h� risco de umidade constante.",
      "N�o validar a resist�ncia ao corte conforme a norma EN 388."
    ],
    segments: ["Ind�stria Metalmec�nica", "Log�stica", "Qu�mica e Petroqu�mica", "Constru��o"],
    faq: [
      { q: "Como saber o tamanho correto?", a: "Me�a a circunfer�ncia da palma da m�o e consulte nossa tabela t�cnica." },
      { q: "Qual a durabilidade m�dia?", a: "Depende da agressividade do uso, mas orientamos trocas preventivas baseadas no desgaste." },
      { q: "Todas t�m CA?", a: "Sim, fornecemos apenas itens com Certificado de Aprova��o v�lido." }
    ]
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
    heroSubtitle: "�culos t�cnicos com tratamento anti-emba�ante e resist�ncia a impactos de alta velocidade.",
    badges: ["Anti-Risco", "UV 400", "Z87.1"],
    indications: [
      { title: "Risco de Proje��o de Part�culas", desc: "Lentes de policarbonato resistentes a estilha�os." },
      { title: "Radia��o Infravermelha e UV", desc: "Lentes escuras ou verdes para trabalhos ao ar livre ou solda." },
      { title: "Respingos de Produtos Qu�micos", desc: "Modelos com veda��o perif�rica ou ampla vis�o." }
    ],
    commonUses: ["Laborat�rios", "Oficinas Mec�nicas", "Jardinagem Profissional", "Constru��o Civil"],
    commonMistakes: [
      "Usar �culos sem tratamento anti-emba�ante em �reas quentes.",
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
    name: "Trabalho em Altura",
    shortDescription: "Cintur�es de seguran�a, talabartes e trava-quedas certificados para preven��o de quedas (NR-35).",
    heroTitle: "SEGURAN�A M�XIMA PARA TRABALHO EM ALTURA",
    heroSubtitle: "Equipamentos de reten��o e posicionamento com foco em ergonomia e seguran�a absoluta.",
    badges: ["NR-35", "NBR 15836", "Reten��o de Queda"],
    indications: [
      { title: "Acesso a Telhados e Estruturas", desc: "Sistemas de ancoragem e linhas de vida tempor�rias." },
      { title: "Uso em Andaimes e Plataformas", desc: "Talabartes duplos para movimenta��o segura." },
      { title: "Espa�os Confinados com Verticalidade", desc: "Cintur�es com pontos de conex�o para resgate." }
    ],
    commonUses: ["Limpeza de Fachadas", "Instala��es El�tricas", "Montagem de Eventos", "Manuten��o Industrial"],
    commonMistakes: [
      "N�o calcular a Zona Livre de Queda (ZLQ).",
      "Utilizar equipamentos sem inspe��o pr�via de rotina.",
      "Ancoragem em pontos sem resist�ncia estrutural validada.",
      "N�o utilizar absorvedores de energia em quedas potenciais."
    ],
    segments: ["Constru��o Civil", "Telecomunica��es", "Energia", "Manuten��o Predial"],
    faq: [
      { q: "Qual a validade do cintur�o?", a: "Geralmente 5 anos, mas deve ser descartado ap�s qualquer queda real." },
      { q: "Precisa de treinamento?", a: "Sim, a NR-35 exige treinamento te�rico e pr�tico obrigat�rio." },
      { q: "O que � talabarte em Y?", a: "Permite que o usu�rio esteja sempre conectado a um ponto enquanto se move." }
    ]
  }
};
