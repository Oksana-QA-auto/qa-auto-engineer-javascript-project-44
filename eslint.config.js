import * as js from '@eslint/js'
import globals from 'globals'
import * as stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
    plugins: {
      js,
      stylistic,
    },
    rules: {
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 0 }],
    },
  },
])
