import fs from 'fs-extra';
import path from 'path';
import { Config } from './Config';

export function copy(filePath: string): void {
    const srcBaseDir = Config.instance.staticRootDirectory;
    const srcPath = path.resolve(srcBaseDir, filePath);

    const outBaseDir = process.cwd();
    const outPath = path.resolve(outBaseDir, filePath);
    fs.copySync(srcPath, outPath);
}
