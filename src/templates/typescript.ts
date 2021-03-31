import { Config, copy, exec } from '../lib';

Config.configure({
    rootScriptDirname: __dirname,
    rootScriptFilename: __filename,
});

copy('.');
exec('npm init -y')
exec('npm install --save-dev typescript @types/node');
