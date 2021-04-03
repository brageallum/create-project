import { Templates } from '@lib';

if (Templates.hasRequested('typescript')) {
    await Templates.require('jest-typescript');
} else {
    await Templates.require('jest-javascript');
}
