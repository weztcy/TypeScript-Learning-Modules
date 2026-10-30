/**
 * Submodul: 55_number_patterns.ts
 * Topik: Pola angka (Segitiga Angka)
 * Tujuan: Mengimplementasikan logika pembentukan pola piramida angka menggunakan nested loop.
 */

console.log("=== Pola Segitiga Angka ===");

const tinggiPola: number = 5;

for (let baris: number = 1; baris <= tinggiPola; baris++) {
    let deretBaris: string = "";
    for (let angka: number = 1; angka <= baris; angka++) {
        deretBaris += `${angka} `;
    }
    console.log(deretBaris.trim());
}
