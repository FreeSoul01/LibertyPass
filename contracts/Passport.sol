pragma solidity ^0.8.0;

import "./USDT.sol";

contract VaccineStatus {
    mapping(address => bool) public hasReceivedVaccine;
    address public hospital;
    USDT public usdtToken;
    
    constructor(address _usdtToken) public {
        hospital = msg.sender;
        usdtToken = USDT(_usdtToken);
    }
    
    modifier onlyHospital() {
        require(msg.sender == hospital, "Only hospital can update vaccine status");
        _;
    }
    
    function setHospital(address _hospital) public {
        require(msg.sender == hospital, "Only hospital can set hospital address");
        hospital = _hospital;
    }
    
    function setVaccineStatus(address user, bool status) public onlyHospital {
        hasReceivedVaccine[user] = status;
    }
    
    function payForVaccine() public payable {
        require(msg.value > 0, "Please provide a valid amount of Ether");
        // Convert Ether to USDT using exchange rate API
        uint256 usdtAmount = msg.value * getExchangeRate();
        // Transfer USDT from user to hospital
        usdtToken.transferFrom(msg.sender, hospital, usdtAmount);
    }
    
    function getVaccineStatus(address user) public view returns (bool) {
        require(msg.sender == user || msg.sender == hospital || isChecker(msg.sender), "You are not authorized to access vaccine status");
        return hasReceivedVaccine[user];
    }
    
    function isChecker(address addr) private pure returns (bool) {
        // Check if the address is a checker, e.g. airport, government, etc.
        // Return true if it is a checker, false otherwise.
        return false;
    }
    
    function getExchangeRate() private view returns (uint256) {
        // Call external API to get current exchange rate of Ether to USDT
        // Return the exchange rate as a uint256 value
        return 1; // Placeholder value for demonstration purpose
    }
}
