/**
 * Submodul: 156_utility_partial.ts
 * Topik: Utility Type Partial<T>
 * Tujuan: Mengubah seluruh properti suatu interface menjadi opsional (berguna untuk operasi update PATCH).
 */

console.log("=== Utility Type Partial<T> di TypeScript ===");

interface ProfilSiswa {
    nama: string;
    kelas: string;
    nilaiRata: number;
}

function perbaruiDataSiswa(id: number, dataBaru: Partial<ProfilSiswa>): void {
    console.log(`Memperbarui data siswa ID #${id} dengan data parsial:`);
    console.log(dataBaru);
}

// Kita hanya ingin memperbarui properti nilaiRata saja
perbaruiDataSiswa(101, { nilaiRata: 92.5 });
// Atau hanya memperbarui kelas saja
perbaruiDataSiswa(102, { kelas: "12-IPA-1" });
