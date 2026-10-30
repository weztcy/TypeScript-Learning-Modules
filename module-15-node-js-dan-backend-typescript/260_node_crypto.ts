/**
 * Submodul: 260_node_crypto.ts
 * Topik: Crypto Module (Hashing & Random UUID)
 * Tujuan: Menghasilkan cryptographic hash (SHA-256) dan UUID aman menggunakan modul crypto bawaan.
 */

import * as crypto from "crypto";

console.log("=== Crypto Module di Node.js ===");

// 1. Menghasilkan UUID versi 4 yang acak dan unik
const idUnik = crypto.randomUUID();
console.log(`Random UUID v4 : ${idUnik}`);

// 2. Menghasilkan cryptographic hash SHA-256
const dataTeks = "KataSandiRahasia123";
const hash = crypto.createHash("sha256").update(dataTeks).digest("hex");

console.log(`Teks Asli      : "${dataTeks}"`);
console.log(`SHA-256 Hash   : ${hash}`);
