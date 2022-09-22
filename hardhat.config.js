require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/qqeWE9mz-fsYYk-nvSP2IUEU6Tixwc1S",
      accounts: [
        "341ff1cc75cc7a421982cc904c075c4819b528d80182f36cfab3530c953f3fb6",
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
