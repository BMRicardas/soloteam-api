import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginN from "eslint-plugin-n";
import pluginSecurity from "eslint-plugin-security";
import configPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  pluginN.configs.recommended,
  configPrettier,
]);
