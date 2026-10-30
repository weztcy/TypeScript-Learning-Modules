/**
 * Submodul: 134_generic_type_aliases.ts
 * Topik: Generic Type Aliases
 * Tujuan: Membuat alias tipe generik pembungkus status nullable atau ketiadaan data.
 */

console.log("=== Generic Type Aliases di TypeScript ===");

// Type alias pembungkus data yang mungkin berhasil (Data) atau gagal (null)
type Kemungkinan<T> = T | null;

// Type alias struktur pohon biner (Binary Tree Node)
type SimpulPohon<T> = {
    nilai: T;
    kiri?: SimpulPohon<T>;
    kanan?: SimpulPohon<T>;
};

const angkaMungkin: Kemungkinan<number> = 42;
const teksKosong: Kemungkinan<string> = null;

const akarPohon: SimpulPohon<number> = {
    nilai: 50,
    kiri: { nilai: 30 },
    kanan: { nilai: 70 }
};

console.log(`Nilai angka: ${angkaMungkin}`);
console.log(`Teks status: ${teksKosong ?? "Nilai Tidak Tersedia"}`);
console.log(`Akar Pohon: ${akarPohon.nilai}, Anak Kiri: ${akarPohon.kiri?.nilai}, Anak Kanan: ${akarPohon.kanan?.nilai}`);
