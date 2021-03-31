import { exec as executeCommand } from 'child_process';

export function exec(command: string): void {
    executeCommand(command);
}
