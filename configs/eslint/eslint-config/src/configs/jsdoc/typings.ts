import type { Rules } from "eslint-define-config"

export interface JsdocOptions {
  stylistic?: boolean;
  files?: string[];
  overrides?: Partial<Rules>
}