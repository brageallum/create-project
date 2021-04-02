import * as child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Dependencies {
    private static appliedTemplates: string[] = [];

    public static require(...templates: string[]): Promise<void> {
        const templatesToApply = templates.filter(
            (template) => !this.appliedTemplates.includes(template),
        );

        return <Promise<void>>(
            (<unknown>(
                Promise.all(
                    templatesToApply.map((template) =>
                        this.applyTemplate(template),
                    ),
                )
            ))
        );
    }

    private static applyTemplate(template: string): Promise<void> {
        const scriptPath: string = path.resolve(
            __dirname,
            '../templates',
            template + '.js',
        );

        return new Promise<void>((resolve, reject) => {
            const process = child_process.fork(scriptPath);
            process.on('exit', () => {
                this.appliedTemplates.push(template);
                resolve();
            });
            process.on('error', (err) => reject(err));
        });
    }
}
