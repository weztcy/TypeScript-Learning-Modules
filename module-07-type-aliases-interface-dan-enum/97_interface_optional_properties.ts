/**
 * Submodul: 97_interface_optional_properties.ts
 * Topik: Optional Properties pada Interface (?)
 * Tujuan: Menandai properti yang tidak wajib ada saat objek diinisialisasi.
 */

console.log("=== Optional Properties pada Interface ===");

interface ProfilSiswa {
    nis: string;
    nama: string;
    email: string;
    nomorTelepon?: string; // Properti opsional
    catatanKhusus?: string; // Properti opsional
}

const siswa1: ProfilSiswa = {
    nis: "2026001",
    nama: "Anisa Rahma",
    email: "anisa@sekolah.sch.id"
};

const siswa2: ProfilSiswa = {
    nis: "2026002",
    nama: "Bayu Perkasa",
    email: "bayu@sekolah.sch.id",
    nomorTelepon: "081234567890",
    catatanKhusus: "Juara Olimpiade Sains"
};

console.log(`Siswa 1: ${siswa1.nama} | Telp: ${siswa1.nomorTelepon ?? "Belum ada"}`);
console.log(`Siswa 2: ${siswa2.nama} | Telp: ${siswa2.nomorTelepon} | Catatan: ${siswa2.catatanKhusus}`);
