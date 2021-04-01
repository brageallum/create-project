export interface ConfigOptions {
    staticRootDirectory: string;
}

export class Config {
    private static _config?: Config;

    public staticRootDirectory: string;

    public static get instance(): Config {
        if (!Config._config) throw new Error('Not configured');
        return Config._config;
    }

    private constructor(options: ConfigOptions) {
        this.staticRootDirectory = options.staticRootDirectory;
    }

    public static configure(options: ConfigOptions): void {
        Config._config = new Config(options);
    }
}
