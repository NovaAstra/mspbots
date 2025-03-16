import type { ESLintConfig } from "../../typings"

import { createConfig } from "../../create-config"


export interface VueOptions {
  files?: string | string[]
}

export const vue = createConfig(() => {
  const configs: ESLintConfig[] = []

  return configs;
})