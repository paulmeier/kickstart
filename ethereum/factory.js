import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB0a547dDB8d104473Ca3987a7f6051a94705a397"
);

export default instance;
