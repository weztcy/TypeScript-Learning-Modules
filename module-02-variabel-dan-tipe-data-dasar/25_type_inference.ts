/**
 * Submodul: 25_type_inference.ts
 * Topik: Type Inference
 * Tujuan: Memahami bagaimana TypeScript secara cerdas menebak tipe data secara otomatis tanpa anotasi manual.
 */

console.log("=== Type Inference di TypeScript ===");

// TypeScript otomatis menyimpulkan 'nama' sebagai string
let nama = "Budi Hartono";

// TypeScript otomatis menyimpulkan 'jumlahStok' sebagai number
let jumlahStok = 45;

// TypeScript menyimpulkan return type fungsi ini adalah number (karena operasi a + b)
function kalikan(a: number, b: number) {
    return a * b;
}

const total = kalikan(jumlahStok, 2);

console.log(`Produk: ${nama}`);
console.log(`Stok tersedia: ${jumlahStok}`);
console.log(`Hasil inferensi kalikan(): ${total}`);
