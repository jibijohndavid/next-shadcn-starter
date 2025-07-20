# Next.js Shadcn Starter Template -  WIP

A modern Next.js starter template with Tailwind CSS, shadcn/ui, and TypeScript for building scalable web applications.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 🧩 **shadcn/ui** components
- 🌙 **Dark mode** support with next-themes
- 📝 **TypeScript** with strict configuration
- 📦 **PNPM** for efficient package management
- 🔧 **ESLint** and **Prettier** for code quality

## Getting Started

This project uses [PNPM](https://pnpm.io/) as the package manager for better performance and disk efficiency.

### Prerequisites

- Node.js 18.0.0 or later
- PNPM 8.0.0 or later

### Installation

First, install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm type-check` - Run TypeScript type checking
- `pnpm clean` - Clean build artifacts and cache

### PNPM Configuration

This project is optimized for PNPM with:

- **Strict peer dependencies** for better dependency resolution
- **Auto-install peers** for convenience
- **Workspace configuration** for potential monorepo setup
- **Optimized caching** and **deduplication**

The `.npmrc` file contains PNPM-specific configurations for optimal performance.
