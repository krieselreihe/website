import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import html from "eslint-plugin-html";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: { html },
    ignores: ["src/_includes", "_site"],
    languageOptions: {
      globals: {
        ...globals.browser,
        hljs: "readonly",
      },
    },
  },
];
