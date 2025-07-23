/**
 * Global type definitions for the Next.js starter template
 *
 * This file contains reusable types and interfaces that are used
 * throughout the application. It helps maintain consistency and
 * provides better TypeScript support.
 */

// Component variant types
export type ComponentSize = "sm" | "md" | "lg";
export type ComponentVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

// Theme types
export type Theme = "light" | "dark" | "system";

export interface ThemeConfig {
  attribute: "class" | "data-theme";
  defaultTheme: Theme;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

// Utility types for better component props
export type WithClassName<T = Record<string, never>> = T & {
  className?: string;
};

export type WithChildren<T = Record<string, never>> = T & {
  children: React.ReactNode;
};

export type WithOptionalChildren<T = Record<string, never>> = T & {
  children?: React.ReactNode;
};

// Common component props
export interface BaseComponentProps {
  className?: string;
  id?: string;
  "data-testid"?: string;
}

// Form-related types
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule;
  options?: Array<{ value: string; label: string }>; // For select fields
}

// API-related types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Loading and error states
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface AsyncState<T = unknown> extends LoadingState {
  data?: T;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
  external?: boolean;
}

// Modal and dialog types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// Table types
export interface TableColumn<T = unknown> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = unknown> extends BaseComponentProps {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
}

// Event handler types
export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// Generic CRUD operations
export interface CrudOperations<T = unknown> {
  create: (item: Omit<T, "id">) => Promise<T>;
  read: (id: string) => Promise<T>;
  update: (id: string, item: Partial<T>) => Promise<T>;
  delete: (id: string) => Promise<void>;
  list: (params?: Record<string, unknown>) => Promise<T[]>;
}

// Configuration types
export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository?: string;
  homepage?: string;
}

// Responsive breakpoint types
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ResponsiveValue<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}
