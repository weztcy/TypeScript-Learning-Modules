/**
 * Submodul: 78_array_type_annotations.ts
 * Topik: Tipe data array (T[] vs Array<T>)
 * Tujuan: Membandingkan sintaks kurung siku T[] dan format generic Array<T>.
 */

console.log("=== Anotasi Tipe Data Array ===");

// Sintaks 1: Menggunakan notasi kurung siku (rekomendasi umum)
const daftarNama: string[] = ["Budi", "Siti", "Ahmad"];

// Sintaks 2: Menggunakan generic type Array<T>
const daftarGaji: Array<number> = [5000000, 6500000, 7200000];

// Array dengan union type (elemen dapat berupa string atau number)
const dataCampuran: (string | number)[] = ["ID-01", 100, "ID-02", 200];

console.log("Daftar Nama :", daftarNama);
console.log("Daftar Gaji :", daftarGaji);
console.log("Campuran    :", dataCampuran);
