import type { ESLint } from "eslint"
import type { ESLintConfig } from "../../typings"
import type { JsoncOptions } from "./typings"

import { createConfig } from "../../create-config"
import { interopDefault } from "../../interop-default"

export const jsonc = createConfig(async (options: JsoncOptions = {}) => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: '@sphere/jsonc/setup',
    plugins: {
      jsonc: (await interopDefault(import("eslint-plugin-jsonc"))) as unknown as ESLint.Plugin
    }
  })

  const { files = [], overrides = {} } = options

  configs.push({
    name: '@sphere/jsonc/setup/parser',
    files: files,
    languageOptions: {
      parser: (await interopDefault(import("jsonc-eslint-parser")))
    }
  })

  configs.push({
    name: '@sphere/jsonc/rules',
    files: files,
    rules: {}
  })

  if (Object.keys(overrides).length > 0) {
    configs.push({
      name: '@sphere/jsonc/rules/overrides',
      files: files,
      rules: overrides
    })
  }

  return configs
})