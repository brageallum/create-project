module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'plugin:prettier/recommended',
    ],
    "rules": {
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
                allowBoolean: true,
                allowAny: false,
                allowNullish: false,
            }
        ],
        "prettier/prettier": "warn",
    }
};
