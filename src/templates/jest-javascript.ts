import { Templates, exec, jsonedit, log, copy } from '@lib';

await Templates.require('node');

log('Setting up jest..');

log('Copying files..');
copy('.');
log('Installing jest..');
await exec('npm install --save-dev jest ');

log('Adding test scripts to package.json..');
jsonedit('package.json', 'scripts.test', 'jest');
jsonedit('package.json', ['scripts', 'test:watch'], 'jest --watch');
