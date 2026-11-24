/**
 * Submodul: 15_string_type.ts
 * Topik: Tipe data 'string'
 * Tujuan: Memahami manipulasi teks primitif (single quotes, double quotes, dan template literals).
 */

console.log("=== Tipe Data 'string' di TypeScript ===");

// String dapat menggunakan kutip tunggal ('') atau ganda ("")
const judulBuku: string = "Belajar TypeScript Cepat dan Praktis";
const penulis: string = 'Tim Guru IT';

// Template literals menggunakan backtick (`) mendukung interpolasi variabel dan multi-line text
const ringkasanBuku: string = `
Buku: "${judulBuku}"
Karya: ${penulis}
Jumlah Karakter Judul: ${judulBuku.length}
Huruf Kapital: ${judulBuku.toUpperCase()}
`;

console.log(ringkasanBuku.trim());
