#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, exec, exists, jsonedit, log, write } from '@lib';

Config.configure(
    new ConfigOptionsBuilder()
        .fromImportMetaUrl(import.meta.url)
        .build()
)

log('Setting up node project..');

const gitignore = `# Node files
/node_modules
`;

if (!exists('package.json')) await exec('npm init -y');
else log('package.json already exists, skipping init.');

log('Installing nodemon..');
await exec('npm install --save-dev nodemon')

log('Updating config files..');
copy('.');
jsonedit('package.json', 'scripts.start', 'echo \"Error: no start script specified\" && exit 1')
write('.gitignore', gitignore);
