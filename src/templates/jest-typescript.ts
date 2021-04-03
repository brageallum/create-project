import { Templates, exec, jsonedit, log, copy } from '@lib';

await Templates.require('node', 'typescript');

log('Setting up jest for typescript..');

log('Copying files..');
copy('.');
log('Installing development packages..');
await exec('npm install --save-dev jest ' + '@types/jest ' + 'ts-jest ');

log('Adding test scripts to package.json..');
jsonedit('package.json', 'scripts.test', 'jest');
jsonedit('package.json', ['scripts', 'test:watch'], 'jest --watch');
