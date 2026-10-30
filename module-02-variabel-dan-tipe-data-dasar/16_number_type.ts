/**
 * Submodul: 16_number_type.ts
 * Topik: Tipe data 'number'
 * Tujuan: Memahami representasi angka di TypeScript (desimal, heksadesimal, biner, oktal, dan nilai khusus).
 */

console.log("=== Tipe Data 'number' di TypeScript ===");

// TypeScript mendukung berbagai format bilangan
const desimal: number = 42;
const pecahan: number = 3.14159;
const heksadesimal: number = 0xff; // 255 dalam basis 16
const biner: number = 0b1010;       // 10 dalam basis 2
const oktal: number = 0o744;        // 484 dalam basis 8

console.log(`Desimal       : ${desimal}`);
console.log(`Pecahan       : ${pecahan}`);
console.log(`Heksadesimal  : ${heksadesimal}`);
console.log(`Biner         : ${biner}`);
console.log(`Oktal         : ${oktal}`);

// Nilai khusus dalam tipe number
const bukanAngka: number = NaN;
const takHingga: number = Infinity;
console.log(`Nilai Khusus  : NaN=${bukanAngka}, Infinity=${takHingga}`);
