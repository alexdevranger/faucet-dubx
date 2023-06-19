import wallet from "./wallet";
import { ethers } from "ethers";

type TransferCoin = {
  success: boolean;
  message: string;
};

/*
 * Transfer coin to address. This is native token ie ETH
 * @param {string} address - The address to transfer to
 */
export default async function transferCoin(address: string): Promise<TransferCoin> {
  try {
    const val = ethers.utils.parseEther(process.env.VALUE);
    const transaction = await wallet.sendTransaction({
      to: address,
      value: val,
    });
    console.log("transaction", transaction);
    return {
      success: true,
      message: transaction.hash,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Unable to Send Transaction",
    };
  }
}
