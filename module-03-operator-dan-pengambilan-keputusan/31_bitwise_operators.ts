/**
 * Submodul: 31_bitwise_operators.ts
 * Topik: Operator bitwise
 * Tujuan: Memahami manipulasi level bit (&, |, ^, ~, <<, >>) dalam TypeScript.
 */

console.log("=== Operator Bitwise di TypeScript ===");

// 5 dalam biner adalah 0101, 3 dalam biner adalah 0011
const x: number = 5; // 0101
const y: number = 3; // 0011

// Bitwise AND (&): Menghasilkan 1 jika kedua bit bernilai 1 -> 0001 (1)
const bitAnd: number = x & y;

// Bitwise OR (|): Menghasilkan 1 jika salah satu bit bernilai 1 -> 0111 (7)
const bitOr: number = x | y;

// Bitwise XOR (^): Menghasilkan 1 jika bit berbeda -> 0110 (6)
const bitXor: number = x ^ y;

// Bitwise NOT (~): Membalik seluruh bit -> -(x + 1)
const bitNot: number = ~x;

// Left Shift (<<): Menggeser bit ke kiri (mengalikan dengan 2^n) -> 5 << 1 = 10
const geserKiri: number = x << 1;

console.log(`5 & 3  = ${bitAnd}  (Biner: 0001)`);
console.log(`5 | 3  = ${bitOr}  (Biner: 0111)`);
console.log(`5 ^ 3  = ${bitXor}  (Biner: 0110)`);
console.log(`~5     = ${bitNot}`);
console.log(`5 << 1 = ${geserKiri} (Biner: 1010)`);
