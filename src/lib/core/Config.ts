export interface ConfigOptions {
    staticRootDirectory: string;
    templateName: string;
}

/**
 * Some commands need to know some basic information about the script. This
 * information is provided through the Config class.
 */
export class Config {
    private static _config?: Config;

    public staticRootDirectory: string;
    public templateName: string;

    public static get instance(): Config {
        if (!Config._config) throw new Error('Not configured');
        return Config._config;
    }

    private constructor(options: ConfigOptions) {
        this.staticRootDirectory = options.staticRootDirectory;
        this.templateName = options.templateName;
    }

    public static configure(options: ConfigOptions): void {
        Config._config = new Config(options);
    }
}
