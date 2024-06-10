import { Keypair } from "@solana/web3.js";
import fs from "fs";

const firstKeypair = Keypair.generate();
console.log(`First wallet Account: https://explorer.solana.com/address/${firstKeypair.publicKey.toBase58()}?cluster=devnet}`)
fs.writeFileSync("keys/first-wallet.json", JSON.stringify([...firstKeypair.secretKey]));

const secondKeypair = Keypair.generate();
console.log(`Second wallet Account: https://explorer.solana.com/address/${secondKeypair.publicKey.toBase58()}?cluster=devnet}`)
fs.writeFileSync("keys/second-wallet-pubkey.json", JSON.stringify(secondKeypair.publicKey.toBase58()));