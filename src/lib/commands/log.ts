import { Config } from '@lib';

/**
 * Logs data to the console with some formatting.
 */
export function log(...args: string[]): void {
    console.log(`[${Config.instance.templateName}]`, ...args);
}
