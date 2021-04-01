#!/usr/bin/env node
import { Config, ConfigOptionsBuilder, copy, exec, write } from '@lib';

Config.configure(
    new ConfigOptionsBuilder()
        .staticRootDirectoryFromImportMetaUrl(import.meta.url)
        .build()
)

const gitignore = `# Node files
/node_modules
`;

copy('.');
await exec('npm init -y');
write('.gitignore', gitignore);
