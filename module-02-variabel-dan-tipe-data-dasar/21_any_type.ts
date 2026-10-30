/**
 * Submodul: 21_any_type.ts
 * Topik: Tipe data 'any'
 * Tujuan: Memahami cara kerja tipe 'any' yang menonaktifkan pengecekan tipe statis (type-checking).
 */

console.log("=== Tipe Data 'any' di TypeScript ===");

// 'any' membolehkan variabel menyimpan tipe data apa pun dan berganti tipe kapan pun
let dataDinamis: any = "Teks Awal";
console.log(`Tipe string: ${dataDinamis}`);

dataDinamis = 42;
console.log(`Berubah jadi number: ${dataDinamis}`);

dataDinamis = { status: "OK", kode: 200 };
console.log(`Berubah jadi object:`, dataDinamis);

console.log("Catatan: Gunakan 'any' secara sangat terbatas karena menghilangkan proteksi keselamatan tipe TypeScript!");
