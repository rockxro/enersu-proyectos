import type { Cliente } from "@/types/cliente";
import type { ConsumoData } from "@/types/consumo";
import type { DimensionamientoData, TipoSistema } from "@/types/dimensionamiento";
import type { LineaProducto } from "@/types/producto";

export type CotizacionDraft = {
  cliente: Cliente | null;
  consumo: ConsumoData | null;
  dimensionamiento: DimensionamientoData | null;
  productos: LineaProducto[];
  tipoSistema: TipoSistema;
};

export type CotizacionGuardada = CotizacionDraft & {
  fecha: string;
  id: number;
  pdfPath?: string;
  total: number;
};
