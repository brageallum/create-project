#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, Dependencies, exec, jsonedit, write } from '@lib';

await Dependencies.require('node');

console.log('[typescript] Setting up typescript project..');

Config.configure(
    new ConfigOptionsBuilder()
        .staticRootDirectoryFromImportMetaUrl(import.meta.url)
        .build()
)

const gitignore = `# Built files
/out
`;

copy('.');
await exec('npm install --save-dev typescript @types/node');
jsonedit('package.json', 'scripts.build', 'tsc')
jsonedit('package.json', 'scripts.start', 'npm run build && node ./out/index.js')
write('.gitignore', gitignore);
