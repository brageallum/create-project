import { Config, copy, exec, write } from '@lib';

Config.configure({
    rootScriptDirname: __dirname,
    rootScriptFilename: __filename,
});

const gitignore = `
# Built files
/out`;

copy('.');
await exec('npm init -y');
exec('npm install --save-dev typescript @types/node');
write('.gitignore', gitignore);
