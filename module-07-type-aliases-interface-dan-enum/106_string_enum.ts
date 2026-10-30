/**
 * Submodul: 106_string_enum.ts
 * Topik: String Enum
 * Tujuan: Mengasosiasikan nilai string yang bermakna pada setiap anggota enum saat runtime.
 */

console.log("=== String Enum di TypeScript ===");

enum PeranPengguna {
    Admin = "ADMINISTRATOR",
    Dosen = "PENGAJAR_AKADEMIK",
    Mahasiswa = "PESERTA_DIDIK"
}

function periksaHakAkses(peran: PeranPengguna): void {
    console.log(`Peran: ${peran}`);
    if (peran === PeranPengguna.Admin) {
        console.log("Akses: Hak penuh pengelolaan sistem basis data.");
    } else {
        console.log("Akses: Hak baca dan unggah tugas reguler.");
    }
}

periksaHakAkses(PeranPengguna.Admin);
periksaHakAkses(PeranPengguna.Mahasiswa);
