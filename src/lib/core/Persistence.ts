import * as fs from 'fs';
import path from 'path';

export class Persistence {
    public static BASE_DIRECTORY = path.resolve(
        process.cwd(),
        '.create-project-tmp-files',
    );
    private static APPLIED_TEMPLATES_FILE = path.resolve(
        Persistence.BASE_DIRECTORY,
        '.applied-templates',
    );

    public static saveAppliedTemplates(templates: string[]): void {
        fs.writeFileSync(this.APPLIED_TEMPLATES_FILE, templates.join('\n'), {
            encoding: 'utf-8',
        });
    }

    public static readAppliedTemplates(): string[] {
        if (!fs.existsSync(this.APPLIED_TEMPLATES_FILE)) return [];
        const templates = fs.readFileSync(this.APPLIED_TEMPLATES_FILE, {
            encoding: 'utf-8',
        });
        return templates.split('\n');
    }

    public static cleanup(): void {
        fs.rmdirSync(this.BASE_DIRECTORY, {
            recursive: true,
        });
    }
}

if (!fs.existsSync(Persistence.BASE_DIRECTORY)) {
    fs.mkdirSync(Persistence.BASE_DIRECTORY);
}
