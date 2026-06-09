export type CategoriaProducto =
  | "panel"
  | "inversor"
  | "bateria"
  | "estructura"
  | "cable"
  | "otro";

export type Producto = {
  activo: boolean;
  categoria: CategoriaProducto;
  id: number;
  nombre: string;
  potenciaW?: number;
  precio: number;
  unidad: string;
};

export type LineaProducto = {
  cantidad: number;
  precioUnitario: number;
  productoId: number;
};
