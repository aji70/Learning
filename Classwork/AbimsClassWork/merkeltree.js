const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

// const a = document.querySelector(".address1").value;
// const b = document.querySelector(".address2").value;
// const c = document.querySelector(".address3").value;

const a = "0x4b20993bc481177ec7e8f571cecae8a9e22c02db";
const b = "0x5b38da6a701c568545dcfcb03fcb875f56beddc4";
const c = "0x17f6ad8ef982297579c203069c1dbffe4348c372";
const leaves = [a, b, c].map((x) => SHA256(x));
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString("hex");
const leaf = SHA256(a);
const proof = tree.getProof(leaf);
console.log(tree.verify(proof, leaf, root)); // true

// document.querySelector(".calculate").addEventListener("click", x);
// document.querySelector(".verify").addEventListener("click", y);

// "0x4b20993bc481177ec7e8f571cecae8a9e22c02db"
// "0x5b38da6a701c568545dcfcb03fcb875f56beddc4"
// "0x17f6ad8ef982297579c203069c1dbffe4348c372"
