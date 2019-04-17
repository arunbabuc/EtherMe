const path = require('path')
const fs = require('fs')
const solc = require('solc')

const filePath = path.resolve(__dirname, 'contracts', 'Example.sol')
const source = fs.readFileSync(filePath, 'utf8')

// compile the single source file
//console.log(solc.compile(source, 1))
module.exports = solc.compile(source, 1).contracts[':Example']
