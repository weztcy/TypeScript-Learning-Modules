/**
 * Submodul: 95_type_aliases.ts
 * Topik: Type Aliases (type Nama = ...)
 * Tujuan: Memberikan nama baru yang bermakna bagi tipe primitif, union, tuple, atau struktur objek.
 */

console.log("=== Type Aliases di TypeScript ===");

// 1. Alias untuk tipe primitif
type IDPelanggan = string;

// 2. Alias untuk union type
type StatusAkun = "aktif" | "ditangguhkan" | "nonaktif";

// 3. Alias untuk struktur objek
type DataPengguna = {
    id: IDPelanggan;
    nama: string;
    status: StatusAkun;
    saldoPoin: number;
};

const pelangganUtama: DataPengguna = {
    id: "CUST-9921",
    nama: "Faisal Tanjung",
    status: "aktif",
    saldoPoin: 1500
};

console.log("Data Pelanggan Terdaftar:");
console.log(`ID     : ${pelangganUtama.id}`);
console.log(`Nama   : ${pelangganUtama.nama}`);
console.log(`Status : ${pelangganUtama.status}`);
console.log(`Poin   : ${pelangganUtama.saldoPoin}`);
