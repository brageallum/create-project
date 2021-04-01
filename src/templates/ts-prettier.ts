#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, Dependencies, exec, jsonedit } from '@lib';

await Dependencies.require('typescript');

console.log('[ts-prettier] Setting up prettier for typescript..');

Config.configure(
    new ConfigOptionsBuilder()
        .staticRootDirectoryFromImportMetaUrl(import.meta.url)
        .build()
);

console.log('[ts-prettier] Copying configuration files..');
copy('.');
console.log('[ts-prettier] Installing development packages..');
await exec(
    'npm install --save-dev eslint ' +
    '@typescript-eslint/eslint-plugin ' +
    '@typescript-eslint/parser ' +
    'eslint-config-prettier ' +
    'eslint-plugin-node ' +
    'eslint-plugin-prettier'
);

console.log('[ts-prettier] Adding linter scripts to package.json..');
jsonedit('package.json', 'scripts.lint', 'eslint \"**/*.{js,ts}\"')
jsonedit('package.json', ['scripts', 'lint:watch'], 'nodemon --config linter-nodemon.json')
jsonedit('package.json', 'scripts.lint', 'npm run lint -- --fix')
