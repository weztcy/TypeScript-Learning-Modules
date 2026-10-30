/**
 * Submodul: 82_array_filter.ts
 * Topik: Metode Array.prototype.filter()
 * Tujuan: Menyaring elemen array yang memenuhi kriteria predikat logika tertentu.
 */

console.log("=== Metode Array filter() di TypeScript ===");

interface KaryawanStaff {
    nama: string;
    divisi: string;
    skorKinerja: number;
}

const timKerja: KaryawanStaff[] = [
    { nama: "Bima", divisi: "Engineering", skorKinerja: 92 },
    { nama: "Sari", divisi: "Marketing", skorKinerja: 78 },
    { nama: "Bayu", divisi: "Engineering", skorKinerja: 88 },
    { nama: "Nisa", divisi: "Finance", skorKinerja: 84 }
];

// Menyaring hanya karyawan dari divisi Engineering dengan performa >= 85
const engineeringUnggul: KaryawanStaff[] = timKerja.filter(
    (k) => k.divisi === "Engineering" && k.skorKinerja >= 85
);

console.log("Karyawan Engineering Berprestasi (filter):");
console.log(engineeringUnggul);
