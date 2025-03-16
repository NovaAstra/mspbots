import type { RegexpOptions } from "./typings"

export const stylistic = (options: RegexpOptions = {}) => {
  return {
    "regexp/hexadecimal-escape": ["error", options.strict ? 'always' : 'never'],
    "regexp/match-any": "error",
    "regexp/no-useless-escape": "error",
    "regexp/no-useless-non-capturing-group": "error",
    "regexp/prefer-character-class": "error",
    "regexp/prefer-d": "error",
    "regexp/prefer-named-backreference": "error",
    "prefer-named-capture-group": "error",
    'regexp/prefer-plus-quantifier': 'error',
    'regexp/prefer-question-quantifier': 'error',
    "regexp/prefer-result-array-groups": "error",
    'regexp/prefer-star-quantifier': 'error',
    "regexp/prefer-unicode-codepoint-escapes": "error",
    'regexp/prefer-w': 'error',
    "regexp/sort-flags": "error",

    ...(options.strict && {
      "regexp/grapheme-string-literal": "error",
      "regexp/letter-case": [
        "error",
        {
          "caseInsensitive": "lowercase",
          "unicodeEscape": "uppercase",
          "hexadecimalEscape": "lowercase",
          "controlEscape": "uppercase"
        }
      ],
      "regexp/prefer-lookaround": "error",
      'regexp/prefer-named-replacement': 'error',
      'regexp/sort-character-class-elements': 'error',
      "regexp/unicode-escape": ["error", "unicodeEscape"],
      "regexp/unicode-property": [
        "error",
        {
          "generalCategory": "never",
          "key": "long",
          "property": "long"
        }
      ],
    })
  }
}