import type { ESLintConfig } from "../../typings"
import type { JsxOptions } from "./typings"

import { createConfig } from "../../create-config"

export const jsx = createConfig((options: JsxOptions = {}) => {
  const configs: ESLintConfig[] = []

  const { files = [], overrides = {} } = options

  configs.push({
    name: '@sphere/jsx/setup',
    files: files,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  })

  if (Object.keys(overrides).length > 0) {
    configs.push({
      name: '@sphere/jsx/rules/overrides',
      files: files,
      rules: overrides
    })
  }

  return configs
})

