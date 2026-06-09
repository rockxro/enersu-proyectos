import type { MonthName } from "@/lib/months";

export type ConsumoMensual = {
  kwh: number;
  mes: MonthName;
};

export type ConsumoData = {
  demandaHP?: number;
  demandaMaxima?: number;
  precioCompra?: number;
  precioInyeccion?: number;
  registros: ConsumoMensual[];
};
