# <h1 align="center"> Hardhat x Foundry Template </h1>

**Template repository for getting started quickly with Hardhat and Foundry in one project**

![Github Actions]()

### Getting Started

 * Use Foundry: 
```bash
forge install
forge test
```

 * Use Hardhat:
```bash
yarn
yarn test
```

### Features

 * Write / run tests with either Hardhat or Foundry:
```bash
forge test
# or
yarn test
```
* Use Truffle Dashboard:
```bash
truffle dashboard
```

* Deploy your smart-contract using testnet Truffle Dashboard:
```bash
yarn deploy --network truffle
```

* Use compile watch or test watch:
```bash
yarn hardhat compile:watch
yarn hardhat test:watch
```

 * Use Hardhat's task framework
```bash
npx hardhat example
```

 * Use Prettier
```bash
yarn prettier
```

 * Install libraries with Foundry which work with Hardhat.
```bash
forge install rari-capital/solmate # Already in this repo, just an example
```

* Configured gas cost with hardhat-gas-reporter

```bash
yarn add hardhat-gas-reporter # Already in this repo, just an example
```

### Notes
Fiz um conjunto de implementações para ficar mais fácil o uso de diversos frameworks necessários para iniciar qualquer projeto.

Whenever you install new libraries using Foundry, make sure to update your `remappings.txt` file by running `forge remappings > remappings.txt`. This is required because we use `hardhat-preprocessor` and the `remappings.txt` file to allow Hardhat to resolve libraries you install with Foundry.
