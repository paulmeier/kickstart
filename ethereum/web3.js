import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //Inside the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //User is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/c6d430c80a4a4b4cb5a2485442bf997d"
  );
  web3 = new Web3(provider);
}

export default web3;
