import css from "@eslint/css"
import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import prettier from "eslint-plugin-prettier/recommended"
import react from "eslint-plugin-react"
import sort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import ts from "typescript-eslint"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  ts.configs.recommended,
  react.configs.flat.recommended!,
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"]
  },
  {
    plugins: { "simple-import-sort": sort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  },
  prettier,
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": "off"
    }
  }
])
