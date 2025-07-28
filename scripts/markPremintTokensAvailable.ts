// npx hardhat run scripts/markPremintTokensAvailable.ts --network sei
import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x1b91A07a9CBF02fE400a72752E1850353A7CFF91"; // Deployed  contract address

  // Get a typed instance of the deployed contract
  const blockusPremint = await ethers.getContractAt("BlockusPremint", contractAddress);

  console.log(`Connecting to contract at: ${contractAddress}`);

  // Call the markTokensAvailable function
  console.log(`Marking tokens as available for sale...`);
  const tx = await blockusPremint.markAllOwnedTokensAvailable();

  console.log("Transaction sent, waiting for confirmation...");
  await tx.wait();

  console.log("Tokens successfully marked as available!");
  console.log(`Transaction hash: ${tx.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });