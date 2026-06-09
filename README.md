# Photovoltaic System Sizer & Quotation Generator

![Tauri](https://img.shields.io/badge/Tauri-2-24C8DB?style=for-the-badge&logo=tauri&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0B1220)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Offline-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

Offline desktop application for sizing photovoltaic systems and generating professional solar quotations. This project started as a personal initiative to solve a real technical-commercial workflow common in solar installation companies: estimate generation, select components, calculate system performance, and prepare a clear proposal for the final client.

The use case was applied to the context of a Chilean photovoltaic installation company. It considers monthly generation per selected panel, usually sourced from tools such as Chile's Solar Explorer, while keeping the generation source replaceable by any equivalent estimation method.

---

## What It Does

The app guides an installer through a structured quotation workflow:

1. **Client** - customer data, address, tariff and commercial context.
2. **Consumption** - monthly utility bill consumption, demand values and energy prices.
3. **System sizing** - panel generation, panel count, system type and calculation results.
4. **Products** - component selection from a local editable catalog.
5. **Quotation** - final preview, quotation history and PDF generation.

Supported system types:

- **On-grid photovoltaic systems** with net billing and injection credits.
- **Residential hybrid systems** with battery charge/discharge simulation.

---

## Tech Stack

| Area | Tools |
|---|---|
| Desktop shell | Tauri 2 |
| Frontend | React 19, Vite 7, TypeScript 5.8 |
| Styling | Tailwind CSS v4, shadcn/ui, Base UI, Geist font |
| State | Zustand |
| Forms and validation | react-hook-form, zod |
| Database | SQLite through `@tauri-apps/plugin-sql` / `tauri-plugin-sql` |
| PDF | `@react-pdf/renderer` |
| UI utilities | lucide-react, clsx, tailwind-merge, class-variance-authority |

---

## Architecture Snapshot

```text
src/
|-- app/                 # Application shell: sidebar, topbar, footer
|-- features/            # Domain modules and workflow steps
|-- store/               # Zustand stores
|-- services/            # Tauri, SQLite and PDF wrappers
|-- types/               # TypeScript domain models
|-- components/          # Shared UI and shadcn components
|-- lib/                 # Constants, formatters and helpers

src-tauri/
|-- src/                 # Rust entrypoint and future commands
|-- capabilities/        # Tauri permissions
```

The project is designed as an offline-first desktop app. The frontend owns the workflow, validation, calculations and PDF composition, while Tauri provides the native shell and local persistence capabilities.

---

## Project Status

This repository is in early architecture and implementation stage.

Already in place:

- Tauri + React + TypeScript setup.
- Tailwind CSS v4 and shadcn-compatible styling.
- Base app shell with sidebar, topbar and workflow footer.
- Initial feature-based folder structure.
- Zustand stores and domain type skeletons.
- SQLite plugin configuration.
- Product and technical documentation under `docs/`.

Next milestones:

- Build validated forms for each workflow step.
- Implement the photovoltaic calculation engine.
- Add SQLite schema migrations and catalog CRUD.
- Generate quotation PDFs with `@react-pdf/renderer`.
- Add tests for calculation rules and workflow behavior.

---

## Getting Started

### Requirements

- Node.js 20+
- Rust 1.88+
- Tauri prerequisites for your operating system

### Install

```bash
npm install
```

### Run the frontend

```bash
npm run dev
```

### Run the desktop app

```bash
npm run tauri dev
```

### Build

```bash
npm run build
npm run tauri build
```

---

## Documentation

The product and technical decisions live in the `docs/` directory:

- [`docs/README.md`](docs/README.md)
- [`docs/architecture.md`](docs/architecture.md)
- [`docs/database.md`](docs/database.md)
- [`docs/decisions.md`](docs/decisions.md)
- [`docs/solar-calculations.md`](docs/solar-calculations.md)
- [`docs/pdf-template.md`](docs/pdf-template.md)

---

## License

License not defined yet. This project is currently shared as a personal portfolio and learning project.
