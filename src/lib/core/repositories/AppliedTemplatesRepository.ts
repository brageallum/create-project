import * as fs from 'fs';
import path from 'path';
import { Persistence } from '../Persistence';

/**
 * A class for persisting data across templates. The persistence works by storing
 * the data in temporary files, which are deleted when all templates have been ran
 * and the new project is fully created.
 */
export class AppliedTemplatesRepository {
    private APPLIED_TEMPLATES_FILE = path.resolve(
        Persistence.BASE_DIRECTORY,
        '.applied-templates',
    );

    public saveAppliedTemplates(templates: string[]): void {
        fs.writeFileSync(this.APPLIED_TEMPLATES_FILE, templates.join('\n'), {
            encoding: 'utf-8',
        });
    }

    public readAppliedTemplates(): string[] {
        if (!fs.existsSync(this.APPLIED_TEMPLATES_FILE)) return [];
        const templates = fs.readFileSync(this.APPLIED_TEMPLATES_FILE, {
            encoding: 'utf-8',
        });
        return templates.split('\n');
    }
}
