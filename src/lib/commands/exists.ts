import * as fs from 'fs';
import path from 'path';

export function exists(filePath: string): boolean {
    const dir = process.cwd();
    const absoluteFilePath = path.resolve(dir, filePath);
    return fs.existsSync(absoluteFilePath);
}