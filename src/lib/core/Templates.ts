import * as child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { Persistence } from './Persistence';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Templates {
    public static async require(...templates: string[]): Promise<void> {
        for (const template of templates) {
            if (this.hasApplied(template)) continue;
            await this.applyTemplate(template);
        }
    }

    private static applyTemplate(template: string): Promise<void> {
        const scriptPath: string = path.resolve(
            __dirname,
            '../../templates',
            template + '.js',
        );

        return new Promise<void>((resolve, reject) => {
            const process = child_process.fork(scriptPath);
            process.on('exit', () => {
                this.addTemplateToAppliedTemplates(template);
                resolve();
            });
            process.on('error', (err) => reject(err));
        });
    }

    public static hasApplied(template: string): boolean {
        return Persistence.readAppliedTemplates().includes(template);
    }

    private static addTemplateToAppliedTemplates(template: string): void {
        const appliedTemplates = Persistence.readAppliedTemplates();
        Persistence.saveAppliedTemplates([...appliedTemplates, template]);
    }
}
