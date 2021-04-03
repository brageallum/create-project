import * as fs from 'fs';
import path from 'path';

/**
 * Checks whether a file exists or not.
 */
export function exists(filePath: string): boolean {
    const dir = process.cwd();
    const absoluteFilePath = path.resolve(dir, filePath);
    return fs.existsSync(absoluteFilePath);
}
