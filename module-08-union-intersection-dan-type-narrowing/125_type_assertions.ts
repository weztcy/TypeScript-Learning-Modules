/**
 * Submodul: 125_type_assertions.ts
 * Topik: Type Assertions (as Type)
 * Tujuan: Memberitahu compiler bahwa programmer lebih mengetahui tipe data yang lebih spesifik.
 */

console.log("=== Type Assertions (as Type) di TypeScript ===");

// Nilai awal bertipe unknown (misalnya dari parsing JSON atau respon eksternal)
const dataMentah: unknown = "2026-FINAL-REPORT";

// Menggunakan type assertion 'as string' untuk memberi tahu compiler
const kodeLaporan = dataMentah as string;

console.log(`Kode Laporan : ${kodeLaporan}`);
console.log(`Panjang Karakter: ${kodeLaporan.length}`);
console.log(`Prefix: ${kodeLaporan.substring(0, 4)}`);
