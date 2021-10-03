const VaultContract = artifacts.require("VaultContract");
//const contract = require("truffle-contract");
module.exports = function (deployer) {
  deployer.deploy(VaultContract);
};
