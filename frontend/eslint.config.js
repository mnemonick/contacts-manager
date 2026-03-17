import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["./src/testing.ts"],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"]
    }
  }
];