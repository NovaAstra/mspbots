import type { RegexpOptions } from "./typings"

export const possible = (options: RegexpOptions = {}) => {
  return {
    "regexp/no-contradiction-with-assertion": "error",
    "regexp/no-control-character": "error",
    "regexp/no-dupe-disjunctions": "error",
    "regexp/no-empty-alternative": "error",
    "regexp/no-empty-capturing-group": "error",
    "regexp/no-empty-character-class": "error",
    "regexp/no-empty-group": "error",
    "regexp/no-empty-lookarounds-assertion": "error",
    "regexp/no-escape-backspace": "error",
    "regexp/no-invalid-regexp": "error",
    "regexp/strict": "error",
    'regexp/prefer-regexp-exec': 'error',
    'regexp/prefer-regexp-test': 'error',
    'regexp/prefer-set-operation': 'error',
    'regexp/require-unicode-regexp': 'error',
    'regexp/require-unicode-sets-regexp': 'error',
    'regexp/simplify-set-operations': 'error',
    'regexp/sort-alternatives': 'error',
    'regexp/regexp/use-ignore-case': 'error',
  }
}