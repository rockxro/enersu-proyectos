# Solar Calculation Logic

This document describes the business rules for the dimensioning engine. The implementation target is pure TypeScript functions under `src/features/dimensionamiento/`.

---

## System Types

### On-Grid Pure

Grid-tied system with net billing. The plant covers part of daytime consumption. Excess generation is injected into the grid and credited at an injection price lower than the retail buy tariff.

### Hybrid Residential

Same base model as On-Grid Pure, plus a battery bank that stores solar surplus for nighttime use.

---

## Inputs

From utility bill:

| Field | Unit | Notes |
|---|---|---|
| `consumoMensual[mes]` | kWh | 12 monthly values |
| `demandaMaxima` | kW | Maximum demand |
| `demandaHP` | kW | Peak-hour demand |
| `tarifa` | text | Example: BT 4.3 or BT 1/2 |
| `precioCompra` | CLP/kWh | Retail energy price |

From Explorador Solar:

| Field | Unit | Notes |
|---|---|---|
| `genPanel[mes]` | kWh/panel | Monthly generation per panel |

System parameters:

| Field | Unit | Notes |
|---|---|---|
| `potenciaPanel` | W | Rated panel wattage |
| `nPaneles` | count | Number of panels |
| `capInstalada` | kW | `nPaneles * potenciaPanel / 1000` |
| `precioInyeccion` | CLP/kWh | Net billing injection credit |
| `pctConsumoDiasLaborales` | fraction | Daytime consumption share on workdays |
| `pctConsumoDiasDescanso` | fraction | Daytime consumption share on rest days |

---

## Irradiation Input

The app supports two entry modes:

- Manual table with 12 inputs, one per month.
- Paste values copied from Excel or Explorador Solar.

The expected source is `explorador.minenergia.cl`.

---

## On-Grid Monthly Calculation

Plant generation:

```text
generacionPlanta[mes] = genPanel[mes] * nPaneles
```

Solar consumption estimate:

```text
diasTotalesMes = diasLaboralesMes + diasDescansoMes

fraccionSolar =
  (diasLaboralesMes * pctConsumoDiasLaborales
   + diasDescansoMes * pctConsumoDiasDescanso)
  / diasTotalesMes

consumoEstimadoSolar = consumoMensual[mes] * fraccionSolar
consumoSolar = min(consumoEstimadoSolar, generacionPlanta)
```

Net billing:

```text
inyeccion = generacionPlanta - consumoSolar
```

Economic results:

```text
ahorroAutoconsumo = consumoSolar * precioCompra
creditoInyeccion = inyeccion * precioInyeccion
ahorroTotalEnergia = ahorroAutoconsumo + creditoInyeccion
costoEnergiaRed = (consumoMensual - consumoSolar) * precioCompra
cobertura = creditoInyeccion / costoEnergiaRed
saldoMes = creditoInyeccion - costoEnergiaRed
saldoAcumulado = running sum of saldoMes
```

---

## Hybrid Daily Simulation

Monthly inputs are converted to daily values:

```text
consumoDiario = consumoMensual[mes] / diasMes
genDiaria = genPanel[mes] / diasMes
```

Solar coverage:

```text
consumoSolarDiario = min(consumoDiario * fraccionSolar, genDiaria)
excedenteSolar = genDiaria - consumoSolarDiario
```

Battery charge:

```text
capUtil = nModulos * capModulo * DOD
cargaBateria = min(excedenteSolar, capUtil)
```

Grid injection:

```text
inyeccionDiaria = excedenteSolar - cargaBateria
```

Nighttime discharge:

```text
consumoNocturno = consumoDiario - consumoSolarDiario
descargaBateria = min(consumoNocturno, cargaBateria)
consumoRed = consumoNocturno - descargaBateria
```

Self-sufficiency:

```text
autosuficiencia = (consumoSolarDiario + descargaBateria) / consumoDiario
```

Monthly aggregation:

```text
inyeccionMes = inyeccionDiaria * diasMes
consumoRedMes = consumoRed * diasMes
ahorroBateria = descargaBateria * diasMes * precioCompra
creditoInyeccion = inyeccionMes * precioInyeccion
costoRed = consumoRedMes * precioCompra
saldoMes = creditoInyeccion - costoRed
```

---

## Battery Sizing Helper

```text
consumoDiarioProm = sum(consumoMensual) / 365

modulosNecesarios = ceil(
  consumoDiarioProm * horasAutonomiaDeseadas
  / (capModulo * DOD * horasSolPeak)
)
```

`horasSolPeak` defaults to the annual average derived from Explorador Solar for the selected location.

---

## Annual Summary

Both models should output:

- `generacionAnual`
- `consumoSolarAnual`
- `inyeccionAnual`
- `ahorroTotalAnual`
- `saldoAcumuladoFinal`
- `autosuficienciaPromedio` for hybrid systems
