const HDWalletPro = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const config = require('./config');

const INITIAL_MESSAGE="Hawks";

const provider = new HDWalletPro(
    config.mneumonic,
    config.infuraNode
);

// set the provider
console.log("Setting web3 provider");
const web3 = new Web3(provider);

const deployfunction = async () => {
    // get the address of the account
    console.log("Inside the deployfunction");
    accounts = await web3.eth.getAccounts();
    console.log("Trying to deploy from account: ",accounts);
    // depoy to network
    // older versions of the truffle hdwallet does not need the 0x and may need the gas to be
    // specified the in the .send (v <= 0.0.3)
    contractInst = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: '0x' + bytecode, arguments:[INITIAL_MESSAGE]})
      .send({from: accounts[0], gas: 1000000});

    console.log("Deployed the Contract : ", contractInst.options.address);
    console.log("Txn Hash" : ", contractInst.options);


console.log("Initiating deploy. . . . ");
deployfunction();


// Deployed contract in rinkeby
// https://rinkeby.etherscan.io/tx/0x4de6ca95175af2fe9c5dd2312a88671bef16e853ec0e9e3a5532f6abe4c5da06
