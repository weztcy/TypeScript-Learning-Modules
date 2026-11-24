/**
 * Submodul: 17_boolean_type.ts
 * Topik: Tipe data 'boolean'
 * Tujuan: Memahami tipe logika bernilai benar (true) atau salah (false).
 */

console.log("=== Tipe Data 'boolean' di TypeScript ===");

// Deklarasi nilai boolean murni
const serverAktif: boolean = true;
const dalamPerbaikan: boolean = false;

// Evaluasi ekspresi logika yang menghasilkan tipe boolean
const kapasitasServer: number = 80;
const serverPenuh: boolean = kapasitasServer >= 90;

console.log(`Apakah server aktif? ${serverAktif}`);
console.log(`Sedang dalam perbaikan? ${dalamPerbaikan}`);
console.log(`Apakah server penuh (> 90%)? ${serverPenuh}`);

// Penggunaan boolean dalam pemilihan keputusan
if (serverAktif && !dalamPerbaikan) {
    console.log("Status: Layanan siap melayani permintaan pengguna.");
}
