/**
 * Submodul: 111_union_types.ts
 * Topik: Union Types (|)
 * Tujuan: Mengizinkan sebuah variabel atau parameter memiliki beberapa alternatif tipe data yang valid.
 */

console.log("=== Union Types di TypeScript ===");

// Parameter dapat menerima string atau number
function cetakPengenal(id: string | number): void {
    console.log(`Pengenal Diterima: ${id} (Tipe Data: ${typeof id})`);
}

cetakPengenal("USR-8821");
cetakPengenal(1048576);

// Variabel union dengan status string literal
let statusKoneksi: "tersambung" | "terputus" | "menghubungkan";
statusKoneksi = "menghubungkan";
console.log(`Status koneksi jaringan: ${statusKoneksi}`);
statusKoneksi = "tersambung";
console.log(`Status koneksi jaringan: ${statusKoneksi}`);
