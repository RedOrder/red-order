// migrations/2_deploy.js
const TheRedOrder = artifacts.require("TheRedOrder");

module.exports = async function (deployer) {
  await deployer.deploy(TheRedOrder);
};