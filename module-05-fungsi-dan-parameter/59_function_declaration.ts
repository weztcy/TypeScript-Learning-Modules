/**
 * Submodul: 59_function_declaration.ts
 * Topik: Function Declaration
 * Tujuan: Memahami sintaks deklarasi fungsi standar dengan anotasi tipe parameter dan return value.
 */

console.log("=== Function Declaration di TypeScript ===");

// Deklarasi fungsi formal dengan kata kunci 'function'
// Mendukung mekanisme hoisting pada tingkat JavaScript runtime
function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
    return panjang * lebar;
}

const p: number = 12;
const l: number = 5;
const luas = hitungLuasPersegiPanjang(p, l);

console.log(`Panjang = ${p}, Lebar = ${l}`);
console.log(`Luas Persegi Panjang: ${luas}`);
