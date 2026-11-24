/**
 * Submodul: 12_const_variable.ts
 * Topik: Deklarasi variabel dengan 'const'
 * Tujuan: Memahami konsep konstanta yang nilainya tidak dapat diubah setelah diinisialisasi.
 */

console.log("=== Deklarasi Konstanta dengan 'const' ===");

// Konstanta primitif: nilainya mutlak tidak dapat di-reassign
const NILAI_GRAVITASI: number = 9.8;
const NAMA_APLIKASI: string = "TypeScript Portal";

console.log(`Aplikasi: ${NAMA_APLIKASI}`);
console.log(`Nilai Gravitasi Bumi: ${NILAI_GRAVITASI} m/s^2`);

// Pada tipe referensi (seperti objek atau array), referensi alamat memorinya tetap (konstan),
// namun isi properti internalnya masih dapat dimutasi.
const pengguna = {
    id: 101,
    nama: "Fajar Pratama"
};

console.log(`Pengguna awal: ${pengguna.nama}`);
pengguna.nama = "Fajar Pratama, S.Kom."; // Ini diperbolehkan karena propertinya yang berubah
console.log(`Pengguna setelah gelar: ${pengguna.nama}`);
