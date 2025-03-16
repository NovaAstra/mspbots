import type { Arrayable } from "@sphere/typing"
import type { ESLintConfig } from "./typings"

import { toArray } from "@sphere/shared"
import { regexp } from "./configs"

export interface ESLintOptions {

}

export async function defineConfig(
  config: Arrayable<ESLintConfig> = []
) {
  const configs: ESLintConfig[] = []

  configs.push(
    ...regexp()
  )

  if (Object.keys(config).length > 0)
    configs.push(...toArray(config))

  return configs;
}