import { Config, copy } from '../../../src/lib';
import * as fs from 'fs';
import * as path from 'path';

const outDir = path.resolve(__dirname, '../../static/to');
const outFilePath = path.resolve(outDir, 'file.txt');

beforeAll(() => {
    Config.configure({
        rootScriptDirname: __dirname,
        rootScriptFilename: 'from',
    });
    process.chdir(outDir);
});

afterEach(() => {
    fs.rmSync(outFilePath);
});

describe('copy', () => {
    it('copies a file to the current directory', () => {
        copy('file.txt');

        const fileExists = fs.existsSync(outFilePath);

        expect(fileExists).toBeTruthy();
    });
});
