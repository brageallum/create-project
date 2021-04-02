#!/usr/bin/env node
import { Templates } from '@lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Persistence } from '../lib/core/Persistence';

const completePath = fileURLToPath(import.meta.url);
const directoryPath = path.dirname(completePath);

const [, , ...args] = process.argv;

if (0 === args.length) {
    const files = fs.readdirSync(path.resolve(directoryPath, '../templates'));
    const templates = files.map((file) => file.replace(/\.[^/.]+$/, ''));
    console.log('Available templates:\n' + templates.join('\t'));
    process.exit();
}

await Templates.require(...args);
console.log('Cleaning up..');
Persistence.cleanup();
console.log('Done.');
