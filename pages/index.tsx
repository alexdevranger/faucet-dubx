import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Testnet DUBX Faucet</title>
        <meta name="description" content="Testnet DUBX Faucet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
