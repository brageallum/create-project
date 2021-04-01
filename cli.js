#!/usr/bin/env node
import { Dependencies } from './out/lib/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const completePath = fileURLToPath(import.meta.url);
const directoryName = path.dirname(completePath);

const [,, ...args] = process.argv;

if (0 === args.length) {
    const files = fs.readdirSync(path.resolve(directoryName, 'out/templates'));
    const templates = files.map(file => file.replace(/\.[^/.]+$/, ""))
    console.log("Available templates:\n" + templates.join('\t'));
    process.exit();
}

await Dependencies.require(...args);
console.log('Done.');