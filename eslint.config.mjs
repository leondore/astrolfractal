import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintTypescriptParser from "@typescript-eslint/parser";
import eslintTypescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  ...eslintPluginAstro.configs.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: eslintTypescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": eslintTypescriptPlugin,
    },
    rules: {
      ...eslintTypescriptPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: eslintTypescriptParser,
      },
    },
  },
];
