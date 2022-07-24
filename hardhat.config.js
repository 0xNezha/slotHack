require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  solidity:{ // 同时指定多个版本
    compilers:[
     {version: "0.8.9"},
     {version: "0.8.15"},
    ]
  }
};
