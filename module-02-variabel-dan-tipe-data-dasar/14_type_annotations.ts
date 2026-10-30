/**
 * Submodul: 14_type_annotations.ts
 * Topik: Type Annotations
 * Tujuan: Menguasai sintaksis penulisan tipe eksplisit pada variabel, fungsi, dan objek.
 */

console.log("=== Menggunakan Type Annotations di TypeScript ===");

// Sintaks type annotation ditulis dengan tanda titik dua (:) diikuti nama tipe
const namaLengkap: string = "Rina Melati";
const usiaPengguna: number = 24;
const sudahMenikah: boolean = false;

// Type annotation pada parameter fungsi dan nilai kembali (return type)
function buatLaporanPengguna(nama: string, usia: number, menikah: boolean): string {
    const status = menikah ? "Sudah Menikah" : "Belum Menikah";
    return `Pengguna: ${nama} | Usia: ${usia} tahun | Status: ${status}`;
}

const ringkasan = buatLaporanPengguna(namaLengkap, usiaPengguna, sudahMenikah);
console.log(ringkasan);
