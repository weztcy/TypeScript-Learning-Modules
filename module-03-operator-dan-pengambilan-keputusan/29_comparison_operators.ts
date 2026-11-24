/**
 * Submodul: 29_comparison_operators.ts
 * Topik: Operator perbandingan
 * Tujuan: Menguasai operator komparasi strict (===, !==) serta relasional (>, <, >=, <=).
 */

console.log("=== Operator Perbandingan di TypeScript ===");

const umurPelamar: number = 21;
const batasMinimal: number = 18;

// Perbandingan kesetaraan identik/ketat (strict equality ===)
const apakahSamaPersis: boolean = (umurPelamar === 21);

// Perbandingan ketidaksamaan identik/ketat (strict inequality !==)
const apakahBeda: boolean = (umurPelamar !== 20);

// Perbandingan relasional lebih besar (>) dan lebih besar sama dengan (>=)
const cukupUmur: boolean = umurPelamar >= batasMinimal;
const diBawahUmur: boolean = umurPelamar < batasMinimal;

console.log(`Umur Pelamar: ${umurPelamar}, Batas Minimal: ${batasMinimal}`);
console.log(`Apakah umur persis 21? (===) : ${apakahSamaPersis}`);
console.log(`Apakah umur bukan 20? (!==)  : ${apakahBeda}`);
console.log(`Apakah cukup umur? (>=)      : ${cukupUmur}`);
console.log(`Apakah di bawah umur? (<)    : ${diBawahUmur}`);
