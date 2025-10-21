// Initial commit for Builders & Founders 🧱
// Simple script to simulate a Web3 connection

import { ethers } from "ethers";

async function connectWallet() {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log("Connected wallet address:", await signer.getAddress());
    } else {
      console.log("Please install MetaMask to connect.");
    }
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

connectWallet();
