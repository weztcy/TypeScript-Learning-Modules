/**
 * Submodul: 105_numeric_enum.ts
 * Topik: Numeric Enum
 * Tujuan: Mengontrol nilai angka eksplisit pada anggota enum dan memanfaatkan reverse mapping.
 */

console.log("=== Numeric Enum di TypeScript ===");

enum ResponStatus {
    Sukses = 200,
    Dibuat = 201,
    BadRequest = 400,
    TidakDitemukan = 404,
    InternalError = 500
}

const kodeHasil: ResponStatus = ResponStatus.Sukses;
console.log(`Kode Respon Sukses: ${kodeHasil}`);

// Numeric enum mendukung reverse mapping (mencari nama enum dari angkanya)
const namaStatus: string = ResponStatus[404];
console.log(`Nama Status untuk kode 404: ${namaStatus}`);
