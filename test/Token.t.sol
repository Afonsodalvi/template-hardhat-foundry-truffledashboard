// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "forge-std/Test.sol";

import "../contracts/Token.sol";


contract TokenTest is Test {
    Afonso t;

    function setUp() public {
        t = new Afonso();
    }

    function testName() public {
        assertEq(t.name(), "Afonso");
    }
}
