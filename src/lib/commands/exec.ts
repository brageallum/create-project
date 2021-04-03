import { exec as executeCommand } from 'child_process';

/**
 * Executes an arbitrary command with the standard shell.
 */
export function exec(command: string): Promise<CommandOutput> {
    return new Promise<CommandOutput>((resolve, reject) => {
        executeCommand(command, (exception, stdout, stderr) => {
            if (exception) console.error(exception);
            if (exception) reject(exception);
            else resolve(new CommandOutput(stdout, stderr));
        });
    });
}

class CommandOutput {
    public stdout?: string;
    public stderr?: string;

    constructor(stdout?: string, stderr?: string) {
        this.stdout = stdout;
        this.stderr = stderr;
    }
}
