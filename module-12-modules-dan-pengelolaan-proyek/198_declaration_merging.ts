/**
 * Submodul: 198_declaration_merging.ts
 * Topik: Declaration Merging Lanjutan (Namespace & Function / Class)
 * Tujuan: Menggabungkan fungsi dengan namespace untuk menambahkan properti statis terorganisasi.
 */

console.log("=== Declaration Merging Lanjutan ===");

// 1. Deklarasi fungsi
function bangunKoneksi(namaHost: string): string {
    return `Koneksi tersambung ke ${namaHost}:${bangunKoneksi.portDefault}`;
}

// 2. Deklarasi namespace dengan nama yang sama untuk memperluas fungsi dengan properti statis
namespace bangunKoneksi {
    export const portDefault: number = 5432;
    export const protokolStandar: string = "postgresql://";
}

console.log(`Port Default Namespace : ${bangunKoneksi.portDefault}`);
console.log(`Protokol Standar       : ${bangunKoneksi.protokolStandar}`);
console.log(bangunKoneksi("db-cluster-01.internal"));
