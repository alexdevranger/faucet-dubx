import wallet from "./wallet";

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
    console.log(wallet, "wallet");
    console.log(address, "address");
    console.log(process.env.VALUE, "value");
    const transaction = await wallet.sendTransaction({
      to: address,
      value: process.env.VALUE as string,
    });
    console.log("transaction", transaction);
    return {
      success: true,
      message: transaction.hash,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to Send Transaction",
    };
  }
}
