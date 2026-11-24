/**
 * Submodul: 45_do_while_loop.ts
 * Topik: Perulangan 'do-while'
 * Tujuan: Memastikan blok kode dieksekusi minimal satu kali sebelum kondisi dievaluasi.
 */

console.log("=== Perulangan 'do-while' di TypeScript ===");

let percobaanKoneksi: number = 0;
const batasMaksimalCoba: number = 3;

do {
    percobaanKoneksi++;
    console.log(`Menjalankan percobaan ping server ke-${percobaanKoneksi}...`);
    // Simulasi: blok do selalu berjalan minimal 1 kali meskipun kondisi awal false
} while (percobaanKoneksi < batasMaksimalCoba);

console.log(`Pemeriksaan selesai setelah ${percobaanKoneksi} kali percobaan.`);
