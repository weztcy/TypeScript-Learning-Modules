/**
 * Submodul: 52_array_iteration.ts
 * Topik: Iterasi koleksi array
 * Tujuan: Membandingkan metode iterasi array (for loop tradisional, for...of, dan .forEach()).
 */

console.log("=== Berbagai Cara Iterasi Array di TypeScript ===");

const daftarKota: string[] = ["Jakarta", "Surabaya", "Medan", "Makassar"];

// 1. Menggunakan for-loop tradisional berbasis indeks
console.log("1. For Loop Berbasis Indeks:");
for (let i = 0; i < daftarKota.length; i++) {
    console.log(`   Indeks [${i}] -> ${daftarKota[i]}`);
}

// 2. Menggunakan for...of
console.log("2. For...of Loop:");
for (const kota of daftarKota) {
    console.log(`   Kota: ${kota}`);
}

// 3. Menggunakan metode forEach dengan callback terketik
console.log("3. Array.prototype.forEach():");
daftarKota.forEach((kota: string, idx: number) => {
    console.log(`   #${idx + 1} : ${kota.toUpperCase()}`);
});
