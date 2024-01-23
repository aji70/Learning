const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

let a = Number(document.querySelector(".address1").value);
let b = Number(document.querySelector(".address2").value);
let c = Number(document.querySelector(".address3").value);
console.log(address1);

// const a = 0x4b20993bc481177ec7e8f571cecae8a9e22c02db;
// const b = 0x5b38da6a701c568545dcfcb03fcb875f56beddc4;
// const c = 0x17f6ad8ef982297579c203069c1dbffe4348c372;

const leaves = [a, b, c].map((x) => SHA256(x));
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString("hex");
const leaf = SHA256(b);
const proof = tree.getProof(leaf);
console.log(a);
const x = tree.verify(proof, leaf, root); // true

document.querySelector(".btn").addEventListener("click", function () {
  console.log(x);
});
