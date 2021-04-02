import { copy, Dependencies, exec, jsonedit, log } from '@lib';

await Dependencies.require('typescript');

log('Setting up prettier for typescript..');

log('Copying configuration files..');
copy('.');
log('Installing development packages..');
await exec(
    'npm install --save-dev eslint ' +
        '@typescript-eslint/eslint-plugin ' +
        '@typescript-eslint/parser ' +
        'eslint-config-prettier ' +
        'eslint-plugin-node ' +
        'eslint-plugin-prettier',
);

log('Adding linter scripts to package.json..');
jsonedit('package.json', 'scripts.lint', 'eslint "**/*.{js,ts}"');
jsonedit(
    'package.json',
    ['scripts', 'lint:watch'],
    'nodemon --config linter-nodemon.json',
);
jsonedit('package.json', 'scripts.lint', 'npm run lint -- --fix');
