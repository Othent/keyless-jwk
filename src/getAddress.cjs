import Arweave from "arweave";
import keys from "./derive.cjs";

const { privateKey, publicKey } = keys;

export async function getPublicKey() {
  const client = await Arweave.init({
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
  });

  return await client.wallets.jwkToAddress(privateKey);
}