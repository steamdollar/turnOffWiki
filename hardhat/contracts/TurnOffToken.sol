// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TurnOffToken is ERC20 {
    string public _name = "TurnOffToken";
    string public _symbol = "TOK";
    uint256 public _totalSupply = 100000 * (10 ** decimals());

    mapping(address => uint256) public balance;

    constructor() ERC20(_name, _symbol) {
        _mint(msg.sender, _totalSupply);
        // 이러면 배포자에게 모든 토큰이 가게 되는데.. 컨트랙트에 가지고 있다가 나눠 줄 수는 없나?
    }

}
