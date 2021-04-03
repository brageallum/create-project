import { copy, exec, exists, jsonedit, log, Templates, write } from '@lib';

log('Setting up a new node project..');

const gitignore = `# Node files
/node_modules
`;

if (!exists('package.json')) await exec('npm init -y');
else log('package.json already exists, skipping init.');

log('Installing nodemon..');
await exec('npm install --save-dev nodemon');

log('Updating config files..');
copy('nodemon.json');
write('.gitignore', gitignore);

if (!Templates.hasRequested('typescript')) {
    copy('./src');
    jsonedit('package.json', 'scripts.start', 'node src/index.js');
}
