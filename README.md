# EtherMe
A Node project to compile, test and deploy your solidity code to the Ethereum network(test/main)

Ethereum White Paper : http://web.archive.org/web/20131228111141/http://vbuterin.com/ethereum.html

## Install dependancies
```npm install```

Gotchas: hmm.. "npm install" always dont work as some of the dependancies are still in development and module inter-dependancies may create issues. So here are some tips.
Install nodeJS: https://tecadmin.net/install-latest-nodejs-npm-on-debian/
```
apt-get install git -y
sudo sudo npm install --save mocha 
npm install  --save solc@0.4.25
npm install  --save web3@1.0.0-beta.35
npm config set python $(which python)
npm install --save web3@1.0.0-beta.35 --unsafe-perm
npm config set registry="http://registry.npmjs.org/"
npm install --unsafe-perm --save ganache-cli@beta -g
# as we installed ganache in global - we may have to link the module to our project directory.
npm link ganache-cli
```

- copy your .sol file to the "contract/" directory
- copy your mocha tests files to the "test/" directory
- change the file & contract name in the compile.js (this will be made generic soon!)
- to run tests "npm run test"


### Notes 
* mocha - unit test framework for nodejs
* solc  - solidity compiler
* web3  - module used to communicate with Ethereum network
* ganache - module to create a ethereum network locally for unit tests
* Also feel free to explore these wonderful tools
* * https://remix.ethereum.org 
* * https://truffleframework.com/
