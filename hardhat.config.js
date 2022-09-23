require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: ["b3393b4ba6400e7b4713f650401cdca19300a09bd88d1fd8345dec3909c061bb"]
    }
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: "./pages/artifacts"
  },
};