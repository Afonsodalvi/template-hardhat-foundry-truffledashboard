import { expect } from "chai";
import { ethers } from "hardhat";
import {
  BigNumber,
  Contract,
  ContractFunction,
  ContractReceipt,
  ContractTransaction,
  Wallet,
} from "ethers";

describe("Afonso Token", function () {
  it("Should return name Token", async function () {
    const Token = await ethers.getContractFactory("Afonso");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("Afonso");
  });
});
