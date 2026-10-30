/**
 * Submodul: 64_optional_parameters.ts
 * Topik: Optional Parameters (Parameter Opsional)
 * Tujuan: Menandai parameter yang boleh tidak diisi menggunakan tanda tanya (?).
 */

console.log("=== Optional Parameters (?) di TypeScript ===");

// Parameter opsional (? ) harus diletakkan SETELAH semua parameter wajib
function sapaPelanggan(namaDepan: string, namaBelakang?: string, gelar?: string): string {
    let namaLengkap = namaDepan;
    if (namaBelakang) {
        namaLengkap += ` ${namaBelakang}`;
    }
    if (gelar) {
        namaLengkap += `, ${gelar}`;
    }
    return `Selamat datang, ${namaLengkap}!`;
}

console.log(sapaPelanggan("Anwar"));
console.log(sapaPelanggan("Anwar", "Sanusi"));
console.log(sapaPelanggan("Anwar", "Sanusi", "M.Eng."));
