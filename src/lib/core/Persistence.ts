import * as fs from 'fs';
import path from 'path';
import { AppliedTemplatesRepository } from './repositories/AppliedTemplatesRepository';
import { RequestedTemplatesRepository } from './repositories/RequestedTemplatesRepository';

/**
 * A class for persisting data across templates. The persistence works by storing
 * the data in temporary files, which are deleted when all templates have been ran
 * and the new project is fully created.
 */
export class Persistence {
    public static BASE_DIRECTORY = path.resolve(
        process.cwd(),
        '.create-project-tmp-files',
    );

    public static readonly appliedTemplatesRepository = new AppliedTemplatesRepository();
    public static readonly requestedTemplatesRepository = new RequestedTemplatesRepository();

    public static cleanup(): void {
        fs.rmdirSync(this.BASE_DIRECTORY, {
            recursive: true,
        });
    }
}

if (!fs.existsSync(Persistence.BASE_DIRECTORY)) {
    fs.mkdirSync(Persistence.BASE_DIRECTORY);
}
