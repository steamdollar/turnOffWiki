const hre = require("hardhat");

async function main() {

  const TurnOffToken = await hre.ethers.getContractFactory("TurnOffToken");
  const turnOffToken = await TurnOffToken.deploy('TurnOffWiki','TOK');

  await turnOffToken.deployed();

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
