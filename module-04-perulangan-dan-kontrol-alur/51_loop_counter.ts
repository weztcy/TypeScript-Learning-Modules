/**
 * Submodul: 51_loop_counter.ts
 * Topik: Penghitung perulangan (Loop Counter)
 * Tujuan: Mengakumulasi jumlah kejadian tertentu selama proses iterasi berlangsung.
 */

console.log("=== Akumulasi Penghitung (Loop Counter) ===");

const daftarNilaiSiswa: number[] = [85, 60, 92, 70, 55, 78, 90, 45, 88];
let jumlahLulus: number = 0;
let jumlahTidakLulus: number = 0;
const kkm: number = 75;

for (const nilai of daftarNilaiSiswa) {
    if (nilai >= kkm) {
        jumlahLulus++; // Menaikkan penghitung siswa lulus
    } else {
        jumlahTidakLulus++; // Menaikkan penghitung siswa tidak lulus
    }
}

console.log(`Total Siswa          : ${daftarNilaiSiswa.length}`);
console.log(`Jumlah Siswa Lulus   : ${jumlahLulus}`);
console.log(`Jumlah Perlu Remedial: ${jumlahTidakLulus}`);
