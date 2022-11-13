// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Register {
    string public _name = "TurnOffToken";
    uint16 public index = 1;

    mapping(address => uint256) public userIndex;
    mapping (address => bool) public isRegistered;

    struct user {
        address addr;
        uint16 index;
    }

    user[] public userData;

    constructor() {

    }

    function register(address _addr, uint16 _index) public {
        isRegistered[_addr] = true;
        userData.push(user(_addr, _index));
        index++;
    }

    function left (address _addr) public {
        isRegistered[_addr] = false;
    }

    function showUser (address _addr) public {
        
    }
}