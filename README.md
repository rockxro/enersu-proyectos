# Enersu Proyectos

Desktop application for professional solar quotation workflows in Chile. Enersu Proyectos is being built with Tauri, React and TypeScript as an offline-first tool for solar installers who need to prepare technical and commercial proposals quickly.

## What This App Will Do

The application will guide an installer through a structured quotation flow:

1. **Cliente** - client data, address, tariff and commercial context.
2. **Consumo** - monthly utility bill consumption, demand values and energy prices.
3. **Dimensionamiento** - solar generation data, panel count, system type and calculation results.
4. **Productos** - product and component selection from a local editable catalog.
5. **Cotizacion** - final preview, quotation history and PDF generation.

The goal is to support both on-grid and residential hybrid solar systems, including local SQLite storage and professional PDF output.

## Tech Stack

- **Tauri 2** for the desktop shell.
- **React 19 + Vite** for the frontend.
- **TypeScript** for typed application logic.
- **Tailwind CSS v4 + shadcn/ui** for the interface.
- **Zustand** for global quotation state.
- **react-hook-form + zod** for validated forms.
- **SQLite via tauri-plugin-sql** for offline persistence.
- **@react-pdf/renderer** for PDF generation.

## Project Status

This project is in early architecture and implementation stage. The base shell, documentation and project structure are being built before implementing the full quotation workflow, calculation engine, database migrations and PDF template.

## Development

Requirements:

- Node.js 20+
- Rust 1.88+
- Tauri prerequisites for your operating system

Install dependencies:

```bash
npm install
```

Run the Vite frontend:

```bash
npm run dev
```

Run the Tauri desktop app:

```bash
npm run tauri dev
```

Build:

```bash
npm run build
npm run tauri build
```

## Documentation

The product and technical decisions live in the `docs/` directory:

- `docs/README.md`
- `docs/architecture.md`
- `docs/database.md`
- `docs/decisions.md`
- `docs/solar-calculations.md`
- `docs/pdf-template.md`
