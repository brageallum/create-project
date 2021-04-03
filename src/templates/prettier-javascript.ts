import { copy, Templates, exec, jsonedit, log } from '@lib';

await Templates.require('node');

log('Setting up prettier..');

log('Copying configuration files..');
copy('.');
if (Templates.hasRequested('jest')) {
    jsonedit('.eslintrc.json', 'env.jest', 'true');
}

log('Installing development packages..');
await exec(
    'npm install --save-dev eslint ' +
        'prettier ' +
        'eslint-config-prettier ' +
        'eslint-plugin-node ' +
        'eslint-plugin-prettier',
);

log('Adding linter scripts to package.json..');
jsonedit('package.json', 'scripts.lint', 'eslint "**/*.js"');
jsonedit(
    'package.json',
    ['scripts', 'lint:watch'],
    'nodemon --config linter-nodemon.json',
);
jsonedit('package.json', 'scripts.lint:fix', 'npm run lint -- --fix');
