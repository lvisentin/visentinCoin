const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "637553955e672c8907704fec9dec5bd29360424a468548096f435d2f90fe5da0"
);
const myWalletAddress = myKey.getPublic("hex");

const vsCoin = new Blockchain();
const ts1 = new Transaction(myWalletAddress, "test", 20);
ts1.signTransaction(myKey);
vsCoin.addTransaction(ts1);

console.log('\n Starting the miner...');
vsCoin.minePendingTransactions(myWalletAddress);

console.log('My Balance is:', vsCoin.getBalanceOfAddress(myWalletAddress));
