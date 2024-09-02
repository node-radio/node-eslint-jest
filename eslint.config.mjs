import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,

    {
        files: ["**/*.js"], // Apply to all JS files
        languageOptions: {
            globals: {
                ...globals.node, // Adds Node.js global variables like `module` and `require`
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },

    {
        files: ["**/*.spec.js", "**/__tests__/**/*.js"], // Apply to test files
        languageOptions: {
            globals: {
                ...globals.jest, // Adds Jest global variables like `test` and `expect`
            },
        },
    },
];
