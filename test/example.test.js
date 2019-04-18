const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor

//web3 instance with ganache as provider 
const web3 = new Web3(ganache.provider()); //web3 instance with gane
