// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Lottery {
    address public owner;
    address payable[] public players;
    address[] public winners;
    uint public lotteryId;

    constructor() {
        owner = msg.sender;
        lotteryId = 0;
    }

    function getWinners() public view returns (address[] memory){
        return winners;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public payable {
        require(msg.value >= .01 ether);

        // address of player entering lottery
        players.push(payable(msg.sender));
    }

    function getRandomNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function getLotteryId() public view returns(uint) {
        return lotteryId;
    }


    function pickWinner() public onlyOwner {
        uint randomIndex = getRandomNumber() % players.length;
        players[randomIndex].transfer(address(this).balance);
        winners.push(players[randomIndex]);
        lotteryId++;

        // Clear the players array. ['player1', 'player2'] 👉 []
        players = new address payable[](0);
    }

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
}
