import type { Rules } from "eslint-define-config"

export interface JsoncOptions {
  stylistic?: boolean;
  files?: string[];
  overrides?: Partial<Rules>
}