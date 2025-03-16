import type { ESLintConfig } from "../../typings"

import PluginComments from 'eslint-plugin-eslint-comments';
import { createConfig } from "../../create-config"

export interface CommentsOptions {
  stylistic?: boolean;
}

export const comments = createConfig((options: CommentsOptions = {}) => {
  const configs: ESLintConfig[] = [
    {
      name: "@sphere/eslint-comments/rules",
      plugins: {
        'eslint-comments': PluginComments
      },
      rules: {
        'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      }
    }
  ]

  const { stylistic: enableStylistic = true } = options

  if (enableStylistic) {
    configs.push({
      name: "@sphere/eslint-comments/rules/stylistic",
      rules: {
        'eslint-comments/no-restricted-disable': 'off',
        'eslint-comments/no-use': ['error', {
          allow: [
            'eslint-disable',
            'eslint-disable-next-line',
            'eslint-enable'
          ],
        }],
        'eslint-comments/require-description': ['error', {
          ignore: [
            'eslint-enable',
          ],
        }],
      }
    })
  }

  return configs
})