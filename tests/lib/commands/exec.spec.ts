import { exec } from '../../../src/lib';

describe('exec', () => {
    it('executes command and directs output to stdout', () => {
        return exec('echo Hello!').then((out) => {
            expect(out.stdout).toEqual('Hello!\n');
        });
    });
});
