/**
 * Submodul: 03_comments.ts
 * Topik: Komentar program
 * Tujuan: Mempelajari berbagai jenis komentar dalam TypeScript (single-line, multi-line, JSDoc).
 */

// Komentar satu baris (single-line): Digunakan untuk penjelasan singkat tepat sebelum baris kode
const bahasa: string = "TypeScript";

/*
  Komentar multi-baris (multi-line):
  Digunakan untuk penjelasan yang membutuhkan beberapa baris,
  misalnya penjelasan konteks algoritma atau konfigurasi sistem.
*/
const versiTarget: string = "ES2022";

/**
 * Komentar JSDoc / TSDoc:
 * Memberikan dokumentasi formal untuk fungsi, parameter, dan nilai kembalian.
 * Sangat berguna karena akan muncul sebagai tooltip intellisense di editor.
 * 
 * @param a - Angka pertama yang akan dijumlahkan
 * @param b - Angka kedua yang akan dijumlahkan
 * @returns Hasil penjumlahan antara a dan b
 */
function hitungTotal(a: number, b: number): number {
    return a + b;
}

console.log("=== Contoh Penggunaan Komentar di TypeScript ===");
console.log(`Bahasa: ${bahasa}, Target: ${versiTarget}`);
console.log(`Hasil 10 + 20 = ${hitungTotal(10, 20)}`);
