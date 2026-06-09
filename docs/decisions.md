# Design Decisions

Technical and product decisions used as the current source of truth.

---

## PDF Generation

**Library:** `@react-pdf/renderer`

**Reason:** Declarative layout with React components, vector output, and better design control than coordinate-heavy PDF generation.

---

## Quotation Flow

**Type:** Linear workflow with free backward navigation.

**Steps:**

```text
Cliente -> Consumo -> Dimensionamiento -> Productos -> Cotizacion
```

**Rules:**

- Moving forward requires complete validation of the active step with zod.
- Moving backward is free and keeps data.
- Jumping forward is blocked until previous steps are completed.

---

## App Layout

**Type:** Fixed sidebar plus main content shell.

```text
Sidebar | Topbar
        | Active step or section
        | Footer [Anterior] [Siguiente]
```

Sidebar includes:

- Workflow steps with completed, active and locked states.
- Historial.
- Catalogo.
- Configuracion.

Topbar shows:

- Current step or section.
- Selected system type.
- Active client data when available.

---

## Irradiation Data Input

**Method:** Dual input.

- Manual table with 12 inputs, one per month.
- Paste values copied from Excel.

**Expected source:** Explorador Solar (`explorador.minenergia.cl`).

---

## Currency and Localization

**Currency:** CLP only.

**Format:** `$#.###` without decimals.

---

## Multi-installer Scope

**Scope:** Single-tenant, Enersu only.

Company data is configurable from settings and stored in SQLite table `parametros`.

---

## PDF Visual Identity

**Status:** Deferred.

First version uses a fixed template with client data, calculation results, products and totals. Branding is developed in a later stage.
