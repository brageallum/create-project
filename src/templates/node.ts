#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, exec, exists, jsonedit, write } from '@lib';

console.log('[node] Setting up node project..');

Config.configure(
    new ConfigOptionsBuilder()
        .staticRootDirectoryFromImportMetaUrl(import.meta.url)
        .build()
)

const gitignore = `# Node files
/node_modules
`;

if (!exists('package.json')) await exec('npm init -y');
else console.log('[node] package.json already exists, skipping init.');

console.log('[node] Installing nodemon..');
await exec('npm install --save-dev nodemon')

console.log('[node] Updating config files..');
copy('.');
jsonedit('package.json', 'scripts.start', 'echo \"Error: no start script specified\" && exit 1')
write('.gitignore', gitignore);
