import { exec, log, write } from '@lib';

log('Setting up git..');

await exec('git init');

write(
    '.gitignore',
    `# IDE files
/.idea
`,
);
