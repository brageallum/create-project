import { exec, log } from '@lib';

log('Setting up git..');

await exec('git init');
