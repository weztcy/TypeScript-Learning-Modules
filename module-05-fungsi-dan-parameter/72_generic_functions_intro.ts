/**
 * Submodul: 72_generic_functions_intro.ts
 * Topik: Pengenalan Generic Functions (<T>)
 * Tujuan: Membuat fungsi fleksibel yang dapat bekerja dengan berbagai tipe data dengan tetap mempertahankan type safety.
 */

console.log("=== Pengenalan Generic Functions di TypeScript ===");

// Fungsi generic identity yang mengembalikan tipe yang persis sama dengan inputnya
function identitas<T>(argumen: T): T {
    return argumen;
}

// Fungsi generic untuk mengambil elemen pertama dari array tipe apa pun
function ambilElemenPertama<T>(koleksi: T[]): T | undefined {
    return koleksi[0];
}

const teksAsli = identitas<string>("TypeScript Generics Sangat Kuat!");
const angkaAsli = identitas<number>(2026);

const namaSiswa = ambilElemenPertama(["Alif", "Bambang", "Cici"]);
const nomorPunggung = ambilElemenPertama([10, 7, 9]);

console.log(`Hasil identitas string : ${teksAsli}`);
console.log(`Hasil identitas number : ${angkaAsli}`);
console.log(`Elemen pertama string  : ${namaSiswa}`);
console.log(`Elemen pertama number  : ${nomorPunggung}`);
