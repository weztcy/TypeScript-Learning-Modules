/**
 * Submodul: 214_async_functions.ts
 * Topik: Async Functions (async function)
 * Tujuan: Menulis fungsi asynchronous dengan sintaks yang menyerupai kode sinkron.
 */

console.log("=== Async Functions di TypeScript ===");

// Fungsi async otomatis membungkus nilai kembalian ke dalam Promise
async function dapatkanSapaan(nama: string): Promise<string> {
    return `Halo ${nama}, selamat datang di dunia modern TypeScript!`;
}

dapatkanSapaan("Bagas Pratama")
    .then((pesan) => console.log(pesan));
