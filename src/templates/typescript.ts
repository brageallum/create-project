#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, Dependencies, exec, write } from '@lib';

Dependencies.require('node');

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
write('.gitignore', gitignore);
