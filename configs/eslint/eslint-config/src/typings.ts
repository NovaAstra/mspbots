import type { FlatESLintConfig } from 'eslint-define-config'

export type ESLintConfig = FlatESLintConfig & {
  name?: string;
}