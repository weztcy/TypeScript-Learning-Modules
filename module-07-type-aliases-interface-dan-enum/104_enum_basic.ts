/**
 * Submodul: 104_enum_basic.ts
 * Topik: Enum Dasar
 * Tujuan: Mengelompokkan sekumpulan konstanta bernama yang saling berkaitan.
 */

console.log("=== Enum Dasar di TypeScript ===");

// Enum dasar (secara default bernilai angka mulai dari 0)
enum ArahMataAngin {
    Utara,  // 0
    Timur,  // 1
    Selatan,// 2
    Barat   // 3
}

const arahTujuan: ArahMataAngin = ArahMataAngin.Timur;

console.log(`Nilai Enum Timur: ${arahTujuan}`);
console.log(`Nama Enum dari indeks 1: ${ArahMataAngin[arahTujuan]}`);
