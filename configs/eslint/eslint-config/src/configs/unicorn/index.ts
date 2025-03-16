import type { ESLintConfig } from "../../typings"

import PluginUnicorn from 'eslint-plugin-unicorn';
import { createConfig } from "../../create-config"

export const unicorn = createConfig(() => {
  const configs: ESLintConfig[] = []

  configs.push({
    plugins: {
      unicorn: PluginUnicorn
    },
    rules: {
      "unicorn/custom-error-definition": "error",
      "unicorn/error-message": "error",
      "unicorn/throw-new-error": "error",
      "unicorn/prefer-array-flat-map": "error",
      "unicorn/prefer-array-some": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/no-array-push-push": ["error", {
        ignore: ['readable', 'this', 'this.stream'],
      }],
      "unicorn/prefer-string-starts-ends-with": "error",
      "unicorn/prefer-string-slice": "error",
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      "unicorn/prefer-string-trim-start-end": "error",
      "unicorn/prefer-dom-node-append": "error",
      "unicorn/prefer-dom-node-remove": "error",
      "unicorn/prefer-query-selector": "error",
      "unicorn/prefer-dom-node-text-content": "error",
      "unicorn/filename-case": [
        "error",
        {
          "cases": { "kebabCase": true, "pascalCase": true },
          "ignore": [/^[A-Z]+\..*$/, /import_map\.json/],
        }
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          "allowList": {
            "args": true,
            "ctx": true,
            "props": true,
            "Props": true,
            "req": true,
            "res": true,
            "env": true,
            "config": true
          },
          "ignore": ["\\.e2e$", "\\.e2e-spec$"],
          "checkShorthandProperties": true
        }
      ],
      "unicorn/numeric-separators-style": [
        "error",
        { onlyIfContainsSeparator: true, number: { minimumDigits: 0 } },
      ],
      "unicorn/prefer-modern-dom-apis": "error",
      "unicorn/prefer-module": "error",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      'unicorn/prefer-ternary': ['error', 'only-single-line'],
      "unicorn/no-null": "error",
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-for-loop': 'error',
      "unicorn/no-useless-spread": "error",
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/no-await-expression-member": "error",
      "unicorn/no-thenable": "error",
      "unicorn/no-this-assignment": "error",
      "unicorn/no-static-only-class": "error",
      "unicorn/no-lonely-if": "error",
      "unicorn/no-negated-condition": "error",
      "unicorn/no-negation-in-equality-check": "error",
      "unicorn/prefer-at": "error",
      "unicorn/prefer-blob-reading-methods": "error",
      "unicorn/prefer-set-size": "error",
      "unicorn/prefer-logical-operator-over-ternary": "error",
      "unicorn/prefer-event-target": "error",
      "unicorn/prefer-top-level-await": "error",
      "unicorn/prefer-native-coercion-functions": "error",
      "unicorn/prefer-structured-clone": "error",
      "unicorn/prefer-code-point": "error",
      "unicorn/prefer-object-from-entries": [
        "error",
        { "functions": ["fromPairs", "R.fromPairs"] }
      ],
      "unicorn/prefer-export-from": ["error", { "ignoreUsedVariables": true }],
      "unicorn/escape-case": "error",
      "unicorn/new-for-builtins": "error",
      "unicorn/no-abusive-eslint-disable": "error",
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-hex-escape": "error",
      "unicorn/no-new-buffer": "error",
      "unicorn/no-unreadable-array-destructuring": "error",
      "unicorn/no-unused-properties": "error",
      "unicorn/no-zero-fractions": "error",
      "unicorn/prefer-add-event-listener": "error",
      "unicorn/prefer-keyboard-event-key": "error",
      "unicorn/prefer-includes": "error",
      "unicorn/prefer-type-error": "error",
      "unicorn/better-regex": "error",
      'unicorn/consistent-function-scoping': ['error', {
        checkArrowFunctions: true,
      }],
      "unicorn/prefer-reflect-apply": "error",
      "unicorn/prefer-dom-node-dataset": "error",
      "unicorn/prefer-negative-index": "error",
      'unicorn/prefer-number-properties': ['error', {
        checkInfinity: true,
        checkNaN: true,
      }],
      "unicorn/no-object-as-default-parameter": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/prefer-math-trunc": "error",
      "unicorn/catch-error-name": "error",
      "unicorn/prefer-date-now": "error",
      "unicorn/prefer-default-parameters": "error",
      "unicorn/no-new-array": "error",
      "unicorn/prefer-array-index-of": "error",
      "unicorn/prefer-regexp-test": "error",
      "unicorn/consistent-destructuring": "error",
      'unicorn/no-keyword-prefix': ['off', {
        disallowedPrefixes: ['new', 'class'],
        checkProperties: true,
        onlyCamelCase: false,
      }],
      "unicorn/prefer-array-flat": "error",
      'unicorn/prefer-switch': ['error', {
        minimumCases: 3,
        emptyDefaultCase: 'do-nothing-comment',
      }],
      "unicorn/no-document-cookie": "error",
      "unicorn/require-array-join-separator": "error",
      "unicorn/require-number-to-fixed-digits-argument": "error",
      "unicorn/no-array-method-this-argument": "error",
      "unicorn/prefer-prototype-methods": "error",
      "unicorn/no-invalid-remove-event-listener": "error",
      "unicorn/no-empty-file": "error",
      "unicorn/relative-url-style": "error",
      "unicorn/text-encoding-identifier-case": "error",
      "unicorn/no-useless-switch-case": "error",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/no-unreadable-iife": "error",
      "unicorn/no-unnecessary-await": "error",
      'unicorn/string-content': 'off',
        'unicorn/switch-case-braces': 'off',
      'unicorn/no-typeof-undefined': ['error', {
        checkGlobalVariables: true,
      }],
      "unicorn/no-unnecessary-polyfills": "error",
      "unicorn/no-single-promise-in-promise-methods": "error",
      "unicorn/no-await-in-promise-methods": "error",
      "unicorn/no-anonymous-default-export": "error",
      "unicorn/consistent-empty-array-spread": "error",
      "unicorn/no-invalid-fetch-options": "error",
      "unicorn/no-magic-array-flat-depth": "error",
      'unicorn/no-useless-undefined': [
        'error',
        {
          checkArguments: false,
          checkArrowFunctionBody: false,
        },
      ],
    }
  })

  return configs
})