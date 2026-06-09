# Roadmap

This roadmap tracks the recommended implementation order for JouleX Solar Quotations.

---

## 1. Project Foundation and Workflow Baseline

**Goal:** Keep the architecture stable before implementing business logic.

**Tasks:**

- Keep JouleX as the software identity.
- Keep installer company data configurable and local.
- Maintain the feature-based folder structure.
- Keep `npm run build` and `cargo check` passing.

---

## 2. Runtime Configuration and Installer Profile

**Goal:** Define where software identity ends and installer company configuration begins.

**Tasks:**

- Add a software identity config for JouleX Solar Quotations.
- Add installer profile types.
- Prepare settings fields for company name, RUT, phone, email and address.
- Ensure PDFs and quotations use installer profile data instead of hardcoded company data.

---

## 3. Testing Foundation

**Goal:** Add a reliable test setup before implementing calculation logic.

**Tasks:**

- Add Vitest.
- Add test scripts.
- Add initial tests for formatters and workflow helpers.
- Keep calculation tests independent from UI.

---

## 4. Client and Consumption Forms

**Goal:** Replace placeholders with the first validated workflow steps.

**Tasks:**

- Implement `Cliente` form with `react-hook-form` and `zod`.
- Implement `Consumo` form with 12 monthly kWh inputs.
- Store valid data in Zustand.
- Keep forward navigation blocked until each step is valid.

---

## 5. On-Grid Calculation Engine

**Goal:** Implement the first pure solar calculation model.

**Tasks:**

- Define typed inputs and outputs.
- Calculate monthly generation, self-consumption, injection, savings and balance.
- Add annual summary metrics.
- Cover the model with unit tests.

---

## 6. Hybrid Calculation Engine

**Goal:** Add battery-aware residential hybrid calculations.

**Tasks:**

- Add battery module, DOD and capacity inputs.
- Simulate daily battery charge/discharge per month.
- Calculate grid consumption, injection and self-sufficiency.
- Cover hybrid scenarios with unit tests.

---

## 7. SQLite Schema and Catalog CRUD

**Goal:** Persist products, parameters and quotations locally.

**Tasks:**

- Add schema initialization.
- Seed default parameters.
- Implement product catalog CRUD.
- Store quotation snapshots in `cotizaciones`.

---

## 8. Quotation Preview and PDF

**Goal:** Generate a professional quotation document.

**Tasks:**

- Build quotation preview from current state.
- Generate PDF with `@react-pdf/renderer`.
- Use installer profile data in PDF headers.
- Save generated PDFs and link them to quotation history.
