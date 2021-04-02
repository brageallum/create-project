import { copy, Dependencies, exec, jsonedit, log, write } from '@lib';

await Dependencies.require('node');

log('Setting up typescript project..');

const gitignore = `# Built files
/out
`;

log('Copying config files..');
copy('.');
log('Installing TypeScript..');
await exec('npm install --save-dev typescript @types/node');
log('Adding build and run scripts..');
jsonedit('package.json', 'scripts.build', 'tsc');
jsonedit(
    'package.json',
    'scripts.start',
    'npm run build && node ./out/index.js',
);
log('Updating gitignore..');
write('.gitignore', gitignore);
