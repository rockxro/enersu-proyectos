export type QuotationStepId =
  | "cliente"
  | "consumo"
  | "dimensionamiento"
  | "productos"
  | "cotizacion";

export type AdminSectionId = "historial" | "catalogo" | "configuracion";

export type AppView = "workflow" | AdminSectionId;

export type QuotationStep = {
  description: string;
  id: QuotationStepId;
  label: string;
  order: number;
};

export const quotationSteps = [
  {
    description: "Datos base del cliente y tarifa.",
    id: "cliente",
    label: "Cliente",
    order: 1,
  },
  {
    description: "Consumos mensuales y datos de boleta.",
    id: "consumo",
    label: "Consumo",
    order: 2,
  },
  {
    description: "Generacion solar, paneles y resultados.",
    id: "dimensionamiento",
    label: "Dimensionamiento",
    order: 3,
  },
  {
    description: "Componentes, cantidades y precios.",
    id: "productos",
    label: "Productos",
    order: 4,
  },
  {
    description: "Vista previa, guardado y PDF.",
    id: "cotizacion",
    label: "Cotizacion",
    order: 5,
  },
] as const satisfies readonly QuotationStep[];

export const adminSections = [
  { id: "historial", label: "Historial" },
  { id: "catalogo", label: "Catalogo" },
  { id: "configuracion", label: "Configuracion" },
] as const satisfies readonly { id: AdminSectionId; label: string }[];
