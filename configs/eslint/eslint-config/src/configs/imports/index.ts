import type { ESLintConfig } from "../../typings"

import PluginImports from 'eslint-plugin-import';
import { createConfig } from "../../create-config"

export interface ImportsOptions {
  stylistic?: boolean;
}

export const imports = createConfig(() => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: "@sphere/imports/rules",
    plugins: {
      "import": PluginImports
    }
  })

  return configs
})