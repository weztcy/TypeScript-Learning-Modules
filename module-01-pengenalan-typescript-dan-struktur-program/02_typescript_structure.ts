/**
 * Submodul: 02_typescript_structure.ts
 * Topik: Struktur program TypeScript
 * Tujuan: Memahami anatomi program TypeScript (tipe data, variabel, fungsi, dan eksekusi).
 */

// 1. Deklarasi Type Alias untuk mendefinisikan bentuk data pelajar
type Pelajar = {
    nama: string;
    umur: number;
    aktif: boolean;
};

// 2. Fungsi dengan type annotations pada parameter dan return value
function cetakProfilPelajar(data: Pelajar): void {
    console.log(`Nama : ${data.nama}`);
    console.log(`Umur : ${data.umur} tahun`);
    console.log(`Status: ${data.aktif ? "Aktif Belajar" : "Tidak Aktif"}`);
}

// 3. Inisialisasi data sesuai kontrak tipe Pelajar
const siswaBaru: Pelajar = {
    nama: "Budi Santoso",
    umur: 17,
    aktif: true
};

// 4. Eksekusi alur program utama
console.log("=== Struktur Dasar Program TypeScript ===");
cetakProfilPelajar(siswaBaru);
