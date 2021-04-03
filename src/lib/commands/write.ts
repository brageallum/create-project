import * as fs from 'fs';

/**
 * Writes text to a file, always appending it at the end.
 * Can be used for adding files and directories to a .gitignore.
 */
export function write(filePath: string, text: string): void {
    fs.appendFileSync(filePath, `${text}\n`, { encoding: 'utf-8' });
}
