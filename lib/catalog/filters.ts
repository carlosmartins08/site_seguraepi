
import { Product, MOCK_PRODUCTS } from './products';

export function applyFilters(
  products: Product[],
  filters: { category?: string; segment?: string }
): Product[] {
  return products.filter((product) => {
    const matchCategory = filters.category 
      ? product.categoryKey === filters.category 
      : true;
    
    const matchSegment = filters.segment 
      ? product.segmentKeys.includes(filters.segment) 
      : true;

    return matchCategory && matchSegment;
  });
}

export const CATEGORIES_FILTER = [
  { label: "Todas", value: "" },
  { label: "Mãos", value: "protecao-maos" },
  { label: "Respiratória", value: "protecao-respiratoria" },
  { label: "Auditiva", value: "protecao-auditiva" },
  { label: "Ocular", value: "protecao-ocular" },
  { label: "Altura", value: "protecao-altural" }
];

export const SEGMENTS_FILTER = [
  { label: "Todos", value: "" },
  { label: "Indústria", value: "industria" },
  { label: "Logística", value: "logistica" },
  { label: "Construção", value: "construcao-civil" },
  { label: "Saúde", value: "saude" },
  { label: "Alimentícia", value: "alimenticia" },
  { label: "Agronegócio", value: "agronegocio" },
  { label: "Manutenção", value: "manutencao" },
  { label: "Eventos", value: "eventos-servicos" }
];
