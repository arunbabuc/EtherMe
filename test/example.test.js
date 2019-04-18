const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor

//web3 instance with ganache as provider
//const provider = ganache.provider();
const web3 = new Web3(ganache.provider()); //web3 instance with gane
const {interface, bytecode} = require('../compile');
const INITIAL_MESSAGE='Hello World';
const UPDATE_MESSAGE='Hello Again'
// decleare the variables for beforeEach
let accounts;
let example;

beforeEach(async () => {
  // get all the unlocked accounts from ganache
  accounts = await web3.eth.getAccounts();

  //deploy the contract
  example = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments:[INITIAL_MESSAGE]})
    .send({from: accounts[0], gas: 1000000});

  //example.setProvider(provider);
});

describe ("Test Example", () => {
  it("Deploys the contract", () => {
    //console.log(accounts);
    //console.log(example);
    assert.ok(example.options.address);
  });

  it ("get message", async () => {
    const mess = await example.methods.getMessage().call();
    assert.equal(mess, INITIAL_MESSAGE);
  });

  it ("set & get message", async () => {
    await example.methods.setMessage(UPDATE_MESSAGE).send({ from : accounts[0]});
    const mess = await example.methods.getMessage().call();
    assert.equal(mess, UPDATE_MESSAGE);
  });
});
