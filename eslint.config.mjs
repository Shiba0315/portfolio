import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get current file path for compatibility layer
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility layer for legacy ESLint configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend Next.js core web vitals ESLint configuration
const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
