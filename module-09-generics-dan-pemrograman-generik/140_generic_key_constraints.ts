/**
 * Submodul: 140_generic_key_constraints.ts
 * Topik: Generic Key Constraints (<T, K extends keyof T>)
 * Tujuan: Mengakses properti objek secara dinamis dan 100% aman dari salah ketik nama kunci.
 */

console.log("=== Generic Key Constraints di TypeScript ===");

// Fungsi getProperty menerima objek T dan kunci K yang dijamin merupakan properti dari T
function ambilProperti<T, K extends keyof T>(objek: T, kunci: K): T[K] {
    return objek[kunci];
}

const dataSiswa = {
    nis: "202611",
    nama: "Farhan Hakim",
    nilaiRataRata: 89.5
};

const namaSiswa = ambilProperti(dataSiswa, "nama");
const nilaiSiswa = ambilProperti(dataSiswa, "nilaiRataRata");

console.log(`Nama Siswa  : ${namaSiswa}`);
console.log(`Nilai Siswa : ${nilaiSiswa}`);
// ambilProperti(dataSiswa, "alamat"); // Error kompilasi: 'alamat' bukan properti dari dataSiswa!
