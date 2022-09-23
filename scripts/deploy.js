// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const StartMint = await hre.ethers.getContractFactory("StartMint");
  const startmint = await StartMint.deploy();

  await startmint.deployed();
  console.log(
      `Contract deployed. The contract address is ${startmint.address} and you can get it on https://mumbai.polygonscan.com/address/${startmint.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
