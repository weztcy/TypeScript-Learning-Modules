/**
 * Submodul: 27_arithmetic_operators.ts
 * Topik: Operator aritmetika
 * Tujuan: Mempelajari operasi matematika standar (+, -, *, /, %, **) dalam TypeScript.
 */

console.log("=== Operator Aritmetika di TypeScript ===");

const angkaA: number = 20;
const angkaB: number = 6;

// Operasi penjumlahan (+)
const hasilTambah: number = angkaA + angkaB;

// Operasi pengurangan (-)
const hasilKurang: number = angkaA - angkaB;

// Operasi perkalian (*)
const hasilKali: number = angkaA * angkaB;

// Operasi pembagian riil (/)
const hasilBagi: number = angkaA / angkaB;

// Operasi sisa bagi / modulo (%)
const sisaBagi: number = angkaA % angkaB;

// Operasi perpangkatan / eksponensiasi (**)
const hasilPangkat: number = angkaB ** 2;

console.log(`${angkaA} + ${angkaB} = ${hasilTambah}`);
console.log(`${angkaA} - ${angkaB} = ${hasilKurang}`);
console.log(`${angkaA} * ${angkaB} = ${hasilKali}`);
console.log(`${angkaA} / ${angkaB} = ${hasilBagi.toFixed(2)}`);
console.log(`${angkaA} % ${angkaB} = ${sisaBagi} (Sisa bagi)`);
console.log(`${angkaB} ^ 2 = ${hasilPangkat}`);
