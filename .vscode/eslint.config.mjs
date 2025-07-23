import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configurations
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),

  // Global ignores
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".kiro/**",
    ],
  },

  // Main configuration for TypeScript and React files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin")).default,
      react: (await import("eslint-plugin-react")).default,
      "react-hooks": (await import("eslint-plugin-react-hooks")).default,
      "jsx-a11y": (await import("eslint-plugin-jsx-a11y")).default,
      import: (await import("eslint-plugin-import")).default,
      prettier: (await import("eslint-plugin-prettier")).default,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // Prettier integration
      "prettier/prettier": "error",

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "warn",

      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Using TypeScript for prop validation
      "react/display-name": "warn",
      "react/no-unescaped-entities": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "off", // Not needed in Next.js
      "react/jsx-uses-vars": "error",
      "react/no-deprecated": "warn",
      "react/no-unsafe": "warn",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",

      // Import/Export rules - disabled in favor of Prettier automatic sorting
      "import/order": "off", // Handled by @trivago/prettier-plugin-sort-imports
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/no-unused-modules": "warn",
      "import/first": "error",
      "import/newline-after-import": "error",

      // General code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-duplicate-imports": "error",
      
      // Disable rules that conflict with Prettier
      "no-multiple-empty-lines": "off",
      "eol-last": "off",
      "comma-dangle": "off",
      "semi": "off",
      "quotes": "off",

      // Next.js specific rules (already included in next/core-web-vitals)
      "@next/next/no-img-element": "error",
      "@next/next/no-html-link-for-pages": "error",
    },
  },

  // Specific rules for configuration files
  {
    files: ["*.config.{js,mjs,ts}", "tailwind.config.{js,ts}"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  // Allow console.log in example and showcase files
  {
    files: ["**/examples/**/*.{js,jsx,ts,tsx}", "**/*showcase*.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;