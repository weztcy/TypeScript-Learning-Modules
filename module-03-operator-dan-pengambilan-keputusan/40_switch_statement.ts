/**
 * Submodul: 40_switch_statement.ts
 * Topik: Percabangan 'switch'
 * Tujuan: Memproses pemilihan keputusan diskret banyak cabang secara bersih dan terstruktur.
 */

console.log("=== Percabangan switch-case di TypeScript ===");

type HariKerja = "Senin" | "Rabu" | "Jumat" | "Minggu";

function dapatkanJadwal(hari: HariKerja): string {
    switch (hari) {
        case "Senin":
            return "Meeting evaluasi mingguan divisi engineering";
        case "Rabu":
            return "Sesi code review dan peer-programming";
        case "Jumat":
            return "Deployment ke production dan evaluasi sprint";
        case "Minggu":
            return "Hari libur akhir pekan";
        default:
            return "Jadwal reguler pengembangan fitur";
    }
}

console.log("Senin  :", dapatkanJadwal("Senin"));
console.log("Jumat  :", dapatkanJadwal("Jumat"));
console.log("Minggu :", dapatkanJadwal("Minggu"));
