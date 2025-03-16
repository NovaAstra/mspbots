import type { Rules } from "eslint-define-config"

export interface YamlOptions {
  strict?: boolean;
  stylistic?: boolean;
  files?: string[];
  overrides?: Partial<Rules>
}