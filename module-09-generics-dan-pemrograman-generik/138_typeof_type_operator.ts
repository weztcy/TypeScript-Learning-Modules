/**
 * Submodul: 138_typeof_type_operator.ts
 * Topik: Type Operator 'typeof'
 * Tujuan: Mengekstrak definisi tipe TypeScript langsung dari sebuah variabel atau nilai JavaScript runtime.
 */

console.log("=== Type Operator 'typeof' di TypeScript ===");

const konfigurasiAplikasi = {
    namaAplikasi: "Portal Belajar TypeScript",
    portServer: 8080,
    fiturEksperimental: false,
    kontakDukungan: "support@belajarts.id"
};

// Mengekstrak tipe data dari variabel objek konfigurasiAplikasi
type TipeKonfigurasi = typeof konfigurasiAplikasi;

// Variabel baru dengan tipe yang di-infer langsung dari struktur konfigurasiAplikasi
const konfigurasiStaging: TipeKonfigurasi = {
    namaAplikasi: "Portal Staging",
    portServer: 8081,
    fiturEksperimental: true,
    kontakDukungan: "dev@belajarts.id"
};

console.log("Konfigurasi Staging Terverifikasi:");
console.log(konfigurasiStaging);
