/**
 * Submodul: 18_bigint_type.ts
 * Topik: Tipe data 'bigint'
 * Tujuan: Memahami penyimpanan bilangan bulat dengan presisi arbitrer di atas batas Number.MAX_SAFE_INTEGER.
 */

console.log("=== Tipe Data 'bigint' di TypeScript ===");

// Batas aman bilangan integer pada number standar
const batasAmanNumber: number = Number.MAX_SAFE_INTEGER;
console.log(`Batas aman integer standar: ${batasAmanNumber}`);

// Tipe BigInt ditandai dengan akhiran 'n' atau memanggil BigInt(...)
const angkaBesar1: bigint = 9007199254740991n;
const angkaBesar2: bigint = 10000000000000000n;

// Operasi matematika antar bigint
const totalBigInt: bigint = angkaBesar1 + angkaBesar2;

console.log(`Angka BigInt 1: ${angkaBesar1.toString()}`);
console.log(`Angka BigInt 2: ${angkaBesar2.toString()}`);
console.log(`Hasil Penjumlahan: ${totalBigInt.toString()}`);
