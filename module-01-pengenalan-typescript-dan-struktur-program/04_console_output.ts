/**
 * Submodul: 04_console_output.ts
 * Topik: Output menggunakan console
 * Tujuan: Mendemonstrasikan variasi metode console (log, info, warn, error, table) untuk debugging.
 */

console.log("=== Berbagai Macam Output Console ===");

// 1. console.log: Output standar informasi umum
console.log("Log: Menampilkan pesan standar aplikasi");

// 2. console.info: Output pesan bernada informasi informatif
console.info("Info: TypeScript berjalan dalam mode runtime Node.js");

// 3. console.warn: Output peringatan peringatan non-kritis
console.warn("Warn: Peringatan batas memori atau konfigurasi default");

// 4. console.error: Output pesan kesalahan sistem/eksepsi
console.error("Error: Simulasi pencatatan error pada sistem");

// 5. console.table: Menampilkan array atau objek dalam format tabel rapi
const daftarNilai = [
    { subjek: "TypeScript Dasar", nilai: 95 },
    { subjek: "Logika Pemrograman", nilai: 90 },
    { subjek: "Struktur Data", nilai: 88 }
];

console.log("Output Tabel Data:");
console.table(daftarNilai);
