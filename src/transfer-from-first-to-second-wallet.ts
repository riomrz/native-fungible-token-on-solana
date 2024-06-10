import {
    getOrCreateAssociatedTokenAccount,
    transfer,
} from "@solana/spl-token";
import {
    Connection,
    Keypair,
    PublicKey,
} from "@solana/web3.js";
import firstTokenAccount from "../keys/first-token-account.json";
import wallet from "../keys/first-wallet.json";
import mintKey from "../keys/mint.json";
import secondWalletPubkey from "../keys/second-wallet-pubkey.json";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const firstWallet = Keypair.fromSecretKey(new Uint8Array(wallet));
const firstTokenAccountAddress = new PublicKey(firstTokenAccount);
const mint = new PublicKey(mintKey);
const secondWalletPublickey = new PublicKey(secondWalletPubkey);

(async () => {
    const secondTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        firstWallet,
        mint,
        secondWalletPublickey,
    );

    const amount = 10e4;
    await transfer(
        connection,
        firstWallet,
        firstTokenAccountAddress,
        secondTokenAccount.address,
        firstWallet,
        amount
    );

    console.log(`Transferred ${amount} to second Token Account: https://explorer.solana.com/address/${secondTokenAccount.address.toBase58()}?cluster=devnet`);
})()