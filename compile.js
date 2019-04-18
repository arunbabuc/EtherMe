const path = require('path')
const fs = require('fs')
const solc = require('solc')

const filePath = path.resolve(__dirname, 'contracts', 'example.sol')
const source = fs.readFileSync(filePath, 'utf8')

// compile the single source file
console.log(solc.compile(source, 1))
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
module.exports = solc.compile(source, 1).contracts[':Example']
