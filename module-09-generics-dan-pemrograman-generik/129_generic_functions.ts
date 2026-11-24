/**
 * Submodul: 129_generic_functions.ts
 * Topik: Generic Functions (<T>)
 * Tujuan: Membuat fungsi yang dapat menangani berbagai tipe data sambil mempertahankan konsistensi tipe.
 */

console.log("=== Generic Functions di TypeScript ===");

// Fungsi generic yang menduplikasi elemen ke dalam array berukuran n
function buatDuplikasi<T>(item: T, kali: number): T[] {
    const hasil: T[] = [];
    for (let i = 0; i < kali; i++) {
        hasil.push(item);
    }
    return hasil;
}

const deretString = buatDuplikasi<string>("TypeScript", 3);
const deretNumber = buatDuplikasi<number>(99, 4);

console.log("Duplikasi String:", deretString);
console.log("Duplikasi Number:", deretNumber);
