#!/usr/bin/env node
import fs from 'fs';
import * as child_process from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const completePath = fileURLToPath(import.meta.url);
const directoryPath = path.dirname(completePath);


const entrypoint = path.resolve(directoryPath, './out/cli/index.js');

if (!fs.existsSync(entrypoint)) {
    throw new Error('Project is not built, run "npm run build".');
}

const [,, ...args] = process.argv;
child_process.fork(entrypoint, args);
