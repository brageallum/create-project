import { Templates } from '@lib';

if (Templates.hasRequested('typescript')) {
    await Templates.require('prettier-typescript');
} else {
    await Templates.require('prettier-javascript');
}
