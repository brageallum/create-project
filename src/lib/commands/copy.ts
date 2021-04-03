import fs from 'fs-extra';
import path from 'path';
import { Config } from '@lib';

/**
 * Copies a file in the static/{template} folder to the current working directory (CWD). The files relative position
 * is conserved when copying, meaning that a file located at static/{template}/dir/to/file
 * is moved to {CWD}/dir/to/file
 */
export function copy(filePath: string): void {
    const srcBaseDir = Config.instance.staticRootDirectory;
    const srcPath = path.resolve(srcBaseDir, filePath);

    const outBaseDir = process.cwd();
    const outPath = path.resolve(outBaseDir, filePath);
    fs.copySync(srcPath, outPath);
}
