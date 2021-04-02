import { Dependencies, exec, jsonedit, log } from '@lib';

await Dependencies.require('git', 'node');

log('Setting up husky..');

await exec('npm install husky --save-dev');
await exec('npx husky install');
jsonedit('package.json', 'scripts.prepare', 'husky install');
jsonedit(
    'package.json',
    'scripts.pre-commit',
    'echo "Error: no pre-commit script specified in package.json, aborting commit" && exit 1',
);
await exec('npx husky add .husky/pre-commit "npm run pre-commit"');
