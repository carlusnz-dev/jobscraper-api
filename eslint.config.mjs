import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            "no-console": "warn",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^-", varsIgnorePattern: "^-" },
            ],
            "prefer-const": "error",
        },
    },
    prettierConfig,
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "**/*.config.js",
        "**/*.config.mjs",
    ]),
]);

export default eslintConfig;
