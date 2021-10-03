const Migrations = artifacts.require("Migrations");
//const contract = require("truffle-contract");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
