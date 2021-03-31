import { Config, write } from '../../../src/lib';
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

describe('write', () => {
    it('writes to a file', () => {
        const textToWrite = 'TEXT TO WRITE';
        write('file.txt', textToWrite);

        const file = fs.readFileSync(outFilePath, { encoding: 'utf-8' });

        expect(file).toEqual(`${textToWrite}\n`);
    });
});
