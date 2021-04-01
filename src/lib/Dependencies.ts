import * as child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Dependencies {
    private static appliedTemplates: string[] = [];

    public static require(...templates: string[]) {
        for (const template of templates) {
            if (this.appliedTemplates.includes(template)) continue;

            this.applyTemplate(template);
        }
    }

    private static applyTemplate(template: string) {
        const scriptPath: string = path.resolve(__dirname, '../templates', template + '.js');

        child_process.fork(scriptPath);
        this.appliedTemplates.push(template);
    }
}