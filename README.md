# Node (Jest and Eslint) Unit Testing

Guided project for **Unit Testing** module.

In this module we will cover the basics of automated testing and use [jest](https://jestjs.io/docs/getting-started) and [eslint](https://eslint.org/) to write unit tests.

## Quick start `eslint` and `jest`

-   install `eslint` and `jest`
```
npm init @eslint/config@latest
```

```
npm install --save-dev jest
```

- create or update `eslint.config.mjs` (fully work with vscode)
```
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
```

- add or update `package.json`
```
  "scripts": {
    "test": "jest --watchAll --verbose",
    "lint": "eslint 'src/**/*.{js,jsx}'"
  },
```