import type { ESLint } from "eslint"
import type { ESLintConfig } from "../../typings"
import type { MarkdownOptions } from "./typings"

import { createConfig } from "../../create-config"
import { interopDefault } from "../../interop-default"

export const markdown = createConfig(async (options: MarkdownOptions = {}) => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: '@sphere/markdown/setup',
    plugins: {
      markdown: (await interopDefault(import("eslint-plugin-markdown"))) as unknown as ESLint.Plugin
    }
  })

  const { files = [], overrides = {} } = options

  configs.push({
    name: '@sphere/markdown/setup/parser',
    files: files,
    languageOptions: {
      parser: (await interopDefault(import("jsonc-eslint-parser")))
    }
  })

  if (Object.keys(overrides).length > 0) {
    configs.push({
      name: '@sphere/markdown/rules/overrides',
      files: files,
      rules: overrides
    })
  }

  return configs
})