import { Config } from '@lib';

export function log(...args: string[]) {
    console.log(`[${Config.instance.templateName}]`, ...args);
}