import { parse } from '@babel/parser'
import types from '@babel/types'

const line1 = `import { Config, ConfigOptionsBuilder } from "../lib/index.js";`;
const line2 = `Config.configure(new ConfigOptionsBuilder().fromImportMetaUrl(import.meta.url).build());`

export default function() {
    return {
        visitor: {
            Program(path) {
                appendMultipleLinesAtBeginning(path, [
                    line1, line2
                ]);
                path.unshiftContainer('body', types.interpreterDirective('./usr/bin/env node'));
            },
        },
    };
};

function appendMultipleLinesAtBeginning(path, lines) {
    for (let i = lines.length - 1; i >= 0; i--) {
        appendLineAtBeginning(path, lines[i]);
    }
}

function appendLineAtBeginning(path, line) {
    const lineAst = parse(line,{ sourceType: 'module' });
    path.unshiftContainer('body', lineAst.program.body[0]);
}
