/**
 * Submodul: 33_ternary_operator.ts
 * Topik: Operator ternary (? :)
 * Tujuan: Menyederhanakan penentuan ekspresi nilai dua arah secara ringkas.
 */

console.log("=== Operator Ternary di TypeScript ===");

const nilaiUjian: number = 78;
const ambangKelulusan: number = 75;

// Sintaks ternary: kondisi ? nilaiJikaTrue : nilaiJikaFalse
const statusKelulusan: string = nilaiUjian >= ambangKelulusan ? "LULUS" : "REMIDIAL";

console.log(`Nilai Siswa: ${nilaiUjian}`);
console.log(`Status Evaluasi: ${statusKelulusan}`);

// Ternary bersarang untuk penentuan grade (A, B, C)
const grade: string = nilaiUjian >= 85 ? "A" : nilaiUjian >= 75 ? "B" : "C";
console.log(`Grade Penilaian: ${grade}`);
