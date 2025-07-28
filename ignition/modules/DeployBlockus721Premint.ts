import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployBlockus721PremintModule = buildModule("DeployBlockus721PremintModule", (m) => {
  // Get parameters with default values
  const name = m.getParameter("name", "Blockus Premint NFT");
  const symbol = m.getParameter("symbol", "BPM");
  const baseURI = m.getParameter(
    "baseURI",
    "https://api.blockus.com/metadata/"
  );
  
  // Default addresses - these should be replaced with actual addresses in production
  const initialOwner = m.getParameter("initialOwner", "0xFB712f6712E701dc09F50E6373F230780a84eD7b");
  const trustedForwarder = m.getParameter("trustedForwarder", "0x593b7bdafe274a16bbf9ea266367829b38bafc96");
  
  // Default to soulbound tokens
  const isSoulbound = m.getParameter("isSoulbound", true);
  const totalSupply = m.getParameter("totalSupply", 10);

  console.log({
    name,
    symbol,
    baseURI,
    initialOwner,
    trustedForwarder,
    isSoulbound,
    totalSupply
  });

  // Deploy the BlockusPremint contract
  const blockusPremint = m.contract("BlockusPremint", [
    name,
    symbol,
    baseURI,
    initialOwner,
    trustedForwarder,
    isSoulbound,
    totalSupply
  ]);

  return { blockusPremint };
});

export default DeployBlockus721PremintModule;