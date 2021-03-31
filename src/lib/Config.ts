import path from 'path';

interface ConfigOptions {
    rootScriptDirname: string;
    rootScriptFilename: string;
}

export class Config {
    private static _config?: Config;

    public staticRootDirectory: string;

    public static get instance(): Config {
        if (!Config._config) throw new Error('Not configured');
        return Config._config;
    }

    private constructor(options: ConfigOptions) {
        this.staticRootDirectory = Config._getStaticRootDirectory(
            options.rootScriptDirname,
            options.rootScriptFilename,
        );
    }

    private static _getStaticRootDirectory(
        rootScriptDirname: string,
        rootScriptFilename: string,
    ) {
        return path.resolve(
            rootScriptDirname,
            '../../static',
            Config._getFilename(rootScriptFilename),
        );
    }

    private static _getFilename(rootScriptFilename: string) {
        return path.basename(
            rootScriptFilename,
            path.extname(rootScriptFilename),
        );
    }

    public static configure(options: ConfigOptions): void {
        Config._config = new Config(options);
    }
}
