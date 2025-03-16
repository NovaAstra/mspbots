import type { ESLintConfig } from "../../typings"

import PluginRegexp from 'eslint-plugin-regexp'
import type { RegexpOptions } from "./typings"
import { createConfig } from "../../create-config"
import { stylistic } from "./stylistic"
import { possible } from "./possible"


export const regexp = createConfig((options: RegexpOptions = {}) => {
  const configs: ESLintConfig[] = []

  const { stylistic: enableStylistic = true } = options

  configs.push({
    name: '@sphere/regexp/rules',
    rules: {
      "no-control-regex": "error",
      "no-misleading-character-class": "error",
      "no-regex-spaces": "error",
      "prefer-regex-literals": "error",
      "no-invalid-regexp": "off",
      "no-useless-backreference": "off",
      "no-empty-character-class": "off",
    }
  })

  configs.push({
    name: '@sphere/regexp/rules/setup',
    plugins: {
      "regexp": PluginRegexp
    },
    rules: possible(options)
  })

  if (enableStylistic) {
    configs.push({
      name: '@sphere/regexp/rules/stylistic',
      rules: stylistic(options)
    })
  }

  return configs
})