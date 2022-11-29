// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Lottery{

    address public owner;
    address payable[] public players;
    address[] public winners;
    uint public lotteryId;

    constructor(){
        owner = msg.sender;
        lotteryId = 0;
    }

    function enter() public payable{
        require(msg.value >= 0.1 ether);
        players.push(payable(msg.sender));
    }

    function getPlayers() public view returns(address payable[] memory){
        return players;
    }

    //get balance

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function getLotteryId() public view returns(uint){
        return lotteryId;
    }

    //get random number 
    function getRandomNumber() public view returns(uint){
        return uint(keccak256(abi.encodePacked(owner,block.timestamp)));
    }

    //pick winner

    function pickWinner() public {
        require(msg.sender == owner);
        uint randomIndex = getRandomNumber() % players.length;
        players[randomIndex].transfer(address(this).balance);
        winners.push(players[randomIndex]);
        lotteryId++;

        // clear the player array

        players = new address payable[](0);
    }

    function getWinner() public view returns(address[] memory){
        return winners;
    }



}