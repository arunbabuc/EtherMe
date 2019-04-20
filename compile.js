const path = require('path')
const fs = require('fs')
const solc = require('solc')
const config = require('./config');

const filePath = path.resolve(__dirname, config.directory, config.solFile)
const source = fs.readFileSync(filePath, 'utf8')

// compile the single source file - this is just for debugging
// I know its double compilation here :) 
console.log(solc.compile(source, 1));
//{ contracts:
//   { ':Example':
//      { assembly: [Object],
//        bytecode:
//         '608060405234801561001 .. ',
//        functionHashes: [Object],
//        gasEstimates: [Object],
//        interface:
//    '[{"constant":false,"...}]',
//        metadata:
//         '{"compiler"..}',
//        opcodes:         'PUSH1 0x80 .. ',
//         runtimeBytecode:'6080604...',
//        srcmap: '26:316:..',
//        srcmapRuntime: '26:316:0:-;;;;..' } },
//  sourceList: [ '' ],
//  sources: { '': { AST: [Object] } } }
module.exports = solc.compile(source, 1).contracts[config.contractName];
