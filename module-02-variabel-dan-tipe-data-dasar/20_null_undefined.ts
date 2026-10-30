/**
 * Submodul: 20_null_undefined.ts
 * Topik: Tipe 'null' dan 'undefined'
 * Tujuan: Memahami perbedaan makna null (sengaja dikosongkan) dan undefined (belum diinisialisasi).
 */

console.log("=== Tipe 'null' dan 'undefined' di TypeScript ===");

// undefined: Menandakan bahwa variabel telah dideklarasikan namun belum diberikan nilai
let dataKosong: undefined = undefined;

// null: Menandakan representasi ketiadaan nilai yang disengaja oleh programmer
let hasilPencarian: string | null = null;

console.log(`Nilai undefined: ${dataKosong}`);
console.log(`Nilai null awal: ${hasilPencarian}`);

// Simulasi setelah data ditemukan
hasilPencarian = "Dokumen_Kontrak_2026.pdf";
console.log(`Nilai setelah data ditemukan: ${hasilPencarian}`);
