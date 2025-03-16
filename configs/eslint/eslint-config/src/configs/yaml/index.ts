import type { ESLintConfig } from "../../typings"
import type { YamlOptions } from "./typings"
import { createConfig } from "../../create-config"
import { interopDefault } from "../../interop-default"

export const yaml = createConfig(async (options: YamlOptions = {}) => {
  const configs: ESLintConfig[] = []

  configs.push({
    name: '@sphere/yaml/setup',
    plugins: {
      yaml: await interopDefault(import("eslint-plugin-yml"))
    }
  })

  const { stylistic = true, files = [], overrides = {} } = options

  configs.push({
    name: '@sphere/yaml/rule',
    files,
    languageOptions: {
      parser: await interopDefault(import("yaml-eslint-parser")),
    },
    rules: {
      ...stylistic && {
        "yaml/block-mapping-question-indicator-newline": "error",
        "yaml/block-sequence-hyphen-indicator-newline": "error",
        "yaml/flow-mapping-curly-newline": "error",
        "yaml/flow-mapping-curly-spacing": "error",
        "yaml/flow-sequence-bracket-newline": "error",
        "yaml/flow-sequence-bracket-spacing": "error",
        "yaml/key-spacing": "error",
        "yaml/no-tab-indent": "error",
        "yaml/spaced-comment": "error",
      }
    }
  })

  if (Object.keys(overrides).length > 0) {
    configs.push({
      name: '@sphere/yaml/rule/overrides',
      files,
      rules: overrides
    })
  }

  return configs
})