import type { ESLint } from "eslint"
import type { ESLintConfig } from "../../typings"
import type { JsdocOptions } from "./typings"

import { createConfig } from "../../create-config"
import { interopDefault } from "../../interop-default"

export const jsdoc = createConfig(async (options: JsdocOptions = {}) => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: '@sphere/jsdoc/setup',
    plugins: {
      jsdoc: await interopDefault(import("eslint-plugin-jsdoc")) as unknown as ESLint.Plugin
    }
  })

  const { files = [], overrides = {} } = options


  configs.push({
    name: '@sphere/jsdoc/rules',
    rules: {

    }
  })

  if (Object.keys(overrides).length > 0) {
    configs.push({
      name: '@sphere/jsdoc/rules/overrides',
      files: files,
      rules: overrides
    })
  }

  return configs
})