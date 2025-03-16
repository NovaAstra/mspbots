import type { ESLintConfig } from "../../typings"

import PluginPromise from 'eslint-plugin-promise';
import { createConfig } from "../../create-config"

export const promise = createConfig(() => {
  return {
    name: "@sphere/promise/rules",
    plugins: {
      promise: PluginPromise,
    },
    rules: {
      "promise/param-names": "error",
      'promise/always-return': ['error', {
        ignoreAssignmentVariable: [
          'globalThis',
        ],
      }],
      "promise/no-return-wrap": "error",
      "promise/no-nesting": "error",
      "promise/no-promise-in-callback": "error",
      "promise/avoid-new": "error",
      'promise/no-callback-in-promise': ['error', {
        timeoutsErr: false,
      }],
      "promise/no-return-in-finally": "error",
      "promise/valid-params": "error",
      "promise/no-new-statics": "error",
      "promise/no-multiple-resolved": "error",
      'promise/prefer-await-to-then': 'off',
      'promise/prefer-await-to-callbacks': 'off',
      'promise/catch-or-return': ['error', {
        allowThen: false,
        allowThenStrict: false,
        allowFinally: true,
      }]
    }
  } as ESLintConfig
})