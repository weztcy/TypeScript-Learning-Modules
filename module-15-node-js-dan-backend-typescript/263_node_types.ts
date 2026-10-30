/**
 * Submodul: 263_node_types.ts
 * Topik: Type Definitions Node.js (@types/node)
 * Tujuan: Memahami bagaimana paket @types/node menyediakan intellisense dan verifikasi tipe API Node.
 */

console.log("=== Type Definitions Node.js (@types/node) ===");

// Paket @types/node mengenali variabel global seperti __dirname, Buffer, process, dan NodeJS
const bufferContoh: Buffer = Buffer.from("Belajar Backend TypeScript", "utf-8");

console.log(`Panjang Buffer : ${bufferContoh.length} bytes`);
console.log(`Representasi Hex: ${bufferContoh.toString("hex")}`);
console.log(`Kembali ke Teks : "${bufferContoh.toString("utf-8")}"`);
