/**
 * Submodul: 35_optional_chaining.ts
 * Topik: Optional Chaining (?.)
 * Tujuan: Mengakses properti objek bersarang secara aman tanpa memicu runtime TypeError jika null/undefined.
 */

console.log("=== Optional Chaining (?.) di TypeScript ===");

interface Alamat {
    kota?: string;
    kodePos?: string;
}

interface Karyawan {
    id: number;
    nama: string;
    alamat?: Alamat;
}

const karyawanLengkap: Karyawan = {
    id: 1,
    nama: "Hendro",
    alamat: { kota: "Surabaya", kodePos: "60111" }
};

const karyawanBaru: Karyawan = {
    id: 2,
    nama: "Siti"
    // Alamat sengaja tidak didefinisikan (undefined)
};

// Mengakses properti alamat bersarang secara aman menggunakan ?.
const kota1 = karyawanLengkap.alamat?.kota ?? "Belum terdata";
const kota2 = karyawanBaru.alamat?.kota ?? "Belum terdata";

console.log(`Karyawan 1 (${karyawanLengkap.nama}): Kota = ${kota1}`);
console.log(`Karyawan 2 (${karyawanBaru.nama}): Kota = ${kota2}`);
