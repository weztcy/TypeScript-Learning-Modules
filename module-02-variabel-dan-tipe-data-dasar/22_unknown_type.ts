/**
 * Submodul: 22_unknown_type.ts
 * Topik: Tipe data 'unknown'
 * Tujuan: Memahami alternatif 'any' yang aman (tipe aman tipe top-type), wajib diperiksa sebelum digunakan.
 */

console.log("=== Tipe Data 'unknown' di TypeScript ===");

// Tipe unknown dapat menampung nilai apa pun, namun tidak dapat langsung dipanggil metodenya
let dataMasuk: unknown = "Halo dari API eksternal";

// Upaya pemanggilan langsung seperti dataMasuk.toUpperCase() akan ditolak TypeScript
// Kita wajib melakukan pengecekan tipe (Type Narrowing) terlebih dahulu:
if (typeof dataMasuk === "string") {
    // Di dalam blok ini, TypeScript otomatis mengetahui bahwa dataMasuk bertipe string
    console.log(`Hasil verifikasi tipe string: ${dataMasuk.toUpperCase()}`);
} else if (typeof dataMasuk === "number") {
    console.log(`Hasil verifikasi tipe number: ${dataMasuk.toFixed(2)}`);
}
