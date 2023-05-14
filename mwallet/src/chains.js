const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: "",
  ticker: "ETH",
};

const MumbaiTestnet = {
  hex: "0x13881",
  name: "Mumbai Testnet",
  //rpcUrl: process.env.REACT_APP_MUMBAI_RPC_URL,
  rpcUr: "",
  ticker: "MATIC",
};

const SepoliaTestnet = {
  hex: "0xaa36a7",
  name: "Sepolia Testnet",
  //rpcUrl: process.env.REACT_APP_SEPOLIA_RPC_URL,
  rpcUrl: "",
  ticker: "ETH",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0x13881": MumbaiTestnet,
  "0xaa36a7": SepoliaTestnet,
};
