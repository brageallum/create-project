import { Config, copy, exec } from '../lib';
import { write } from '../lib/write';

Config.configure({
    rootScriptDirname: __dirname,
    rootScriptFilename: __filename,
});

copy('.');
exec('npm init -y');
exec('npm install --save-dev typescript @types/node');
write(
    '.gitignore',
    `
# Built files
/out`,
);
