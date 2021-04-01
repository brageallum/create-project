import path from 'path';
import { fileURLToPath } from 'url';
import { ConfigOptions } from './Config';

export class ConfigOptionsBuilder {
    public staticRootDirectory?: string;

    public build(): ConfigOptions {
        if (undefined === this.staticRootDirectory) {
            throw new Error('Missing required property staticRootDirectory.')
        }

        return <ConfigOptions>this;
    }

    public staticRootDirectoryFromImportMetaUrl(importMetaUrl: string): ConfigOptionsBuilder {
        const completePath = fileURLToPath(importMetaUrl);
        const directoryName = path.dirname(completePath);
        const fileName = ConfigOptionsBuilder._getFilename(completePath);

        this.staticRootDirectory = ConfigOptionsBuilder._getStaticRootDirectory(
            directoryName,
            fileName,
        );

        return this;
    }

    private static _getStaticRootDirectory(
        directoryName: string,
        fileName: string,
    ) {
        return path.resolve(
            directoryName,
            '../../static',
            fileName,
        );
    }

    private static _getFilename(completePath: string) {
        return path.basename(
            completePath,
            path.extname(completePath),
        );
    }

}