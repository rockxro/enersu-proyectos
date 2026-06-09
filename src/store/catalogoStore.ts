import { create } from "zustand";

import type { Producto } from "@/types/producto";

type CatalogoState = {
  parametros: Record<string, string>;
  productos: Producto[];
  setParametros: (parametros: Record<string, string>) => void;
  setProductos: (productos: Producto[]) => void;
};

export const useCatalogoStore = create<CatalogoState>((set) => ({
  parametros: {},
  productos: [],
  setParametros: (parametros) => set({ parametros }),
  setProductos: (productos) => set({ productos }),
}));
