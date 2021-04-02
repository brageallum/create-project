import { Config } from '@lib';

export function log(...args: string[]): void {
    console.log(`[${Config.instance.templateName}]`, ...args);
}
