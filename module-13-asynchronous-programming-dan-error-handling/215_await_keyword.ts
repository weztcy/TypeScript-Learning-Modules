/**
 * Submodul: 215_await_keyword.ts
 * Topik: Keyword 'await'
 * Tujuan: Menghentikan sementara eksekusi fungsi async hingga Promise selesai dan mengembalikan nilainya.
 */

console.log("=== Keyword 'await' di TypeScript ===");

function simulasiTunda(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function alurPemesananTiket(): Promise<void> {
    console.log("Langkah 1: Memverifikasi ketersediaan kursi...");
    await simulasiTunda(80);
    console.log("Langkah 2: Mengunci kursi penumpang...");
    await simulasiTunda(60);
    console.log("Langkah 3: Tiket berhasil diterbitkan!");
}

alurPemesananTiket();
