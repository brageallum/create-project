import * as fs from 'fs';
import set from 'lodash.set';

export function jsonedit(
    filePath: string,
    jsonPath: string | string[],
    value: string,
): void {
    const json = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const obj = <Record<string, unknown>>JSON.parse(json);
    const newObj = set(obj, jsonPath, value);
    const newJson = JSON.stringify(newObj, null, '  ');

    fs.writeFileSync(filePath, newJson, { encoding: 'utf-8' });
}
