import type { Rules } from "eslint-define-config"

export interface JsxOptions {
  files?: string[];
  overrides?: Partial<Rules>
}