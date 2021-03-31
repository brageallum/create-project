import * as fs from 'fs';

export function write(filePath: string, text: string): void {
    if (writeIsUnnecessary(filePath, text)) return;
    fs.appendFileSync(filePath, `${text}\n`, { encoding: 'utf-8' });
}

function writeIsUnnecessary(filePath: string, text: string): boolean {
    const fileExists = fs.existsSync(filePath);
    if (!fileExists) return false;
    const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return !!new RegExp(text).exec(file);
}
