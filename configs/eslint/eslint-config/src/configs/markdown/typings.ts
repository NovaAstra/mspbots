import type { Rules } from "eslint-define-config"

export interface MarkdownOptions {
  files?: string[];
  overrides?: Partial<Rules>
}