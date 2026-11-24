/**
 * Submodul: 298_authorization_types.ts
 * Topik: Tipe Data Otorisasi (RBAC & ABAC)
 * Tujuan: Mengontrol perizinan tindakan (*permissions*) berdasarkan peran pengguna (*Role-Based Access Control*).
 */

console.log("=== Tipe Data Otorisasi (RBAC) ===");

type Tindakan = "baca" | "tulis" | "hapus" | "ekspor";
type SumberDaya = "laporan" | "pengguna" | "transaksi";

type IzinAkses = `${Tindakan}:${SumberDaya}`;

interface AturanOtorisasi {
    role: "ADMIN" | "OPERATOR" | "TAMU";
    daftarIzin: IzinAkses[];
}

const aturanAdmin: AturanOtorisasi = {
    role: "ADMIN",
    daftarIzin: ["baca:laporan", "tulis:laporan", "hapus:laporan", "baca:pengguna", "tulis:pengguna"]
};

function punyaIzin(aturan: AturanOtorisasi, izinTarget: IzinAkses): boolean {
    return aturan.daftarIzin.includes(izinTarget);
}

console.log(`Apakah ADMIN boleh membaca laporan? ${punyaIzin(aturanAdmin, "baca:laporan")}`);
console.log(`Apakah ADMIN boleh menghapus laporan? ${punyaIzin(aturanAdmin, "hapus:laporan")}`);
console.log(`Apakah ADMIN boleh menghapus transaksi? ${punyaIzin(aturanAdmin, "hapus:transaksi")}`);
