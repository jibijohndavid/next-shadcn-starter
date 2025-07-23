# Next.js Shadcn Starter

<p align="center">
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-deployment"><strong>Deployment</strong></a> ·
  <a href="#-getting-started"><strong>Getting started</strong></a> ·
  <a href="#%EF%B8%8F-scripts-overview"><strong>Scripts overview</strong></a> ·
  <a href="#-project-structure"><strong>Project structure</strong></a> ·
  <a href="#-contribution"><strong>Contribution</strong></a> ·
  <a href="#%EF%B8%8F-support"><strong>Support</strong></a>
</p>

## 🎉 Features

- 🚀 **Next.js 15** - Latest version with App Router and Turbopack
- ⚛️ **React 19** - Latest React with concurrent features
- 📘 **TypeScript** - Strict configuration with advanced type checking
- 🎨 **Tailwind CSS v4** - Latest version with CSS variables and optimizations
- 🛠️ **Shadcn/ui** - Beautiful, accessible UI components (10+ components included)
- 🌑 **Dark mode** - Seamless theme switching with next-themes
- 📦 **PNPM** - Fast, efficient package manager with workspace support
- 🔍 **Bundle Analyzer** - Built-in bundle analysis for optimization
- 📈 **Absolute Imports** - Clean imports using `@/` prefix with path mapping
- 💅 **Prettier** - Code formatting with import sorting and Tailwind class sorting
- 🧹 **ESLint** - Comprehensive linting with TypeScript, React, and accessibility rules
- 🐶 **Husky & Lint Staged** - Pre-commit hooks for code quality
- 🔹 **Lucide Icons** - Beautiful, consistent icon library
- ⚡ **Performance Optimized** - Image optimization, compression, and caching
- 🛡️ **Security Headers** - Built-in security headers and optimizations
- 🎯 **Developer Experience** - Hot reload, type checking, and debugging tools
- 📱 **Responsive Design** - Mobile-first approach with Tailwind utilities

## 🚀 Deployment

Easily deploy your Next.js app with <a href="https://vercel.com/">Vercel</a> by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jibijohndavid/next-shadcn-starter)

## 🎯 Getting started

### 1. Clone this template in one of three ways

1. **Using this repository as template**
   - Click the "Use this template" button on GitHub
   - Create a new repository from this template

2. **Using `create-next-app`**

   ```bash
   npx create-next-app -e https://github.com/jibijohndavid/next-shadcn-starter my-project-name
   ```

3. **Using `git clone`**
   ```bash
   git clone https://github.com/jibijohndavid/next-shadcn-starter my-project-name
   cd my-project-name
   ```

### 2. Install dependencies

This project uses PNPM for better performance and disk efficiency:

```bash
pnpm install
```

If you don't have PNPM installed:

```bash
npm install -g pnpm
```

### 3. Set up environment variables (optional)

Create `.env.local` file for any environment variables you need:

```bash
# Example environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Prepare development environment

Set up Husky for git hooks (recommended):

```bash
pnpm prepare
```

### 5. Run the development server

Start the development server with Turbopack:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project structure

```bash
.
├── .husky/                         # Git hooks configuration
├── docs/                           # Documentation files
├── public/                         # Static assets
└── src/
    ├── app/                        # Next.js App Router pages
    │   ├── globals.css            # Global styles with CSS variables
    │   ├── layout.tsx             # Root layout component
    │   └── page.tsx               # Home page
    ├── components/                 # React components
    │   ├── ui/                    # Shadcn/ui components
    │   │   ├── button.tsx         # Button component
    │   │   ├── card.tsx           # Card component
    │   │   ├── dialog.tsx         # Dialog component
    │   │   └── ...                # Other UI components
    │   └── theme-toggle.tsx       # Theme switcher component
    ├── lib/                       # Utility functions and configurations
    │   ├── utils.ts               # Utility functions (cn, etc.)
    │   ├── config.ts              # App configuration
    │   └── constants.ts           # App constants
    └── types/                     # TypeScript type definitions
        └── index.ts               # Global type definitions
```

## ⚙️ Scripts overview

The following scripts are available in the `package.json`:

### Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm dev:debug` - Start development server with Node.js inspector
- `pnpm dev:turbo` - Start development server with Turbopack (alias)

### Building & Production

- `pnpm build` - Build the application for production
- `pnpm build:analyze` - Build with bundle analyzer
- `pnpm build:debug` - Build with debug information
- `pnpm start` - Start production server
- `pnpm start:prod` - Start production server with NODE_ENV=production
- `pnpm preview` - Build and start production server

### Code Quality

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm lint:strict` - Run ESLint with zero warnings tolerance
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm type-check:watch` - Run type checking in watch mode

### Utilities

- `pnpm clean` - Clean build artifacts and cache
- `pnpm clean:all` - Clean everything and reinstall dependencies
- `pnpm analyze` - Analyze bundle size
- `pnpm bundle-size` - Check bundle size limits
- `pnpm health-check` - Run all quality checks
- `pnpm validate` - Validate code quality (type-check + lint + format)
- `pnpm check-all` - Run all checks without fixing
- `pnpm fix-all` - Run all fixes (lint + format)

### Performance

- `pnpm perf:build` - Measure build time
- `pnpm perf:type-check` - Measure type checking time
- `pnpm perf:dev` - Start dev server with increased memory
- `pnpm optimize` - Full optimization (clean + install + analyze)

### Git Hooks

- `pnpm prepare` - Set up Husky git hooks
- `pnpm pre-commit` - Run pre-commit checks manually

## 🛠️ Configuration

### Tailwind CSS

- **Version**: v4 (latest)
- **Features**: CSS variables, dark mode, custom animations
- **Plugins**: Class sorting, merging utilities
- **Config**: `tailwind.config.ts`

### TypeScript

- **Strict mode** enabled with advanced type checking
- **Path aliases** configured for clean imports
- **Build info** caching for faster compilation
- **Config**: `tsconfig.json`

### ESLint & Prettier

- **ESLint**: TypeScript, React, accessibility, and import rules
- **Prettier**: Import sorting, Tailwind class sorting
- **Integration**: Runs on pre-commit hooks
- **Configs**: `eslint.config.mjs`, `.prettierrc.json`

### Next.js Optimizations

- **Turbopack**: Enabled for faster development
- **Bundle optimization**: Code splitting and tree shaking
- **Image optimization**: WebP/AVIF support with caching
- **Security headers**: XSS protection, content type sniffing prevention
- **Performance**: Compression, caching, and bundle analysis

## 🎨 UI Components

This template includes 10+ pre-built shadcn/ui components:

- **Alert Dialog** - Modal dialogs for confirmations
- **Avatar** - User profile pictures with fallbacks
- **Button** - Various button styles and sizes
- **Card** - Content containers with headers and footers
- **Dialog** - Modal overlays for forms and content
- **Dropdown Menu** - Context menus and action lists
- **Input** - Form input fields with validation styles
- **Label** - Accessible form labels
- **Navigation Menu** - Complex navigation components
- **Sheet** - Slide-out panels and drawers

All components are:

- ✅ **Accessible** - ARIA compliant with keyboard navigation
- 🎨 **Customizable** - Easy to modify with CSS variables
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Theme-aware** - Automatic dark/light mode support

## 🤝 Contribution

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and ensure they pass all checks:
   ```bash
   pnpm validate  # Run type-check, lint, and format checks
   ```
4. **Commit your changes**: `git commit -m 'feat: add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Add TypeScript types for new features
- Ensure all components are accessible
- Test your changes in both light and dark modes
- Update documentation if needed
- Use conventional commit format: `<type>[optional scope]: <description>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`
  - Examples: `feat: add user authentication`, `fix(ui): resolve button styling issue`

## ❤️ Support

If you find this template helpful, please consider:

- ⭐ **Starring the repository**
- 🐛 **Reporting bugs** via GitHub issues
- 💡 **Suggesting improvements** via GitHub discussions
- 📢 **Sharing with others** who might find it useful

---

Made with ❤️ by <a href="https://jibi.dev">Jibi</a>
