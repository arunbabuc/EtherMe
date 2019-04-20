// Fill in this config file with you setup info

// UPDATE: solidity file directory name
const directory = "contracts";
// UPDATE: solidity file to compile
const solFile = "example.sol";
// UPDATE: Solidity Contract starting with :
const contractName = ":Example";

// UPDATE: this should be the account meumonics - you can create it in metamask extension
const mneumonic = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx';
// UPDATE: this is the link to the infura node which you can create in infura.io account
const infuraNode = 'https://rinkeby.infura.io/v3/XYXXXXXXXYYYYXXXYYYXXXZZZZZ';


module.exports = {
    directory: directory,
    solFile: solFile,
    contractName: contractName,
    mneumonic: mneumonic,
    infuraNode: infuraNode
};
