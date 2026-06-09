import { PlaceholderPanel } from "@/components/common/PlaceholderPanel";
import { months } from "@/lib/months";

export function ConsumoStep() {
  return (
    <PlaceholderPanel
      description={`Tabla de 12 consumos mensuales: ${months.join(", ")}. Tambien viviran aqui demanda maxima, demanda HP y precios de energia.`}
      eyebrow="Paso 2"
      title="Consumo electrico"
    />
  );
}
