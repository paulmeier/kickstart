import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc3C28978f927DE26D45E3107Fe596d4a9D46734E"
);

export default instance;
