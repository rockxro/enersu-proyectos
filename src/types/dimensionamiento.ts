export type TipoSistema = "ongrid" | "hibrido";

export type DimensionamientoData = {
  generacionMensualPorPanel: number[];
  numeroPaneles: number;
  potenciaPanelW: number;
  tipoSistema: TipoSistema;
};
