/**
 * Submodul: 195_dynamic_import.ts
 * Topik: Dynamic Import (import() expression)
 * Tujuan: Memuat modul secara asynchronous saat dibutuhkan (lazy-loading) untuk menghemat memori.
 */

console.log("=== Dynamic Import di TypeScript ===");

async function muatModulFinansial() {
    console.log("Mengunduh modul finansial secara dinamis saat runtime...");
    // Dynamic import mengembalikan Promise yang me-resolve seluruh ekspor modul
    const modulKeuangan = await import("./189_es_module_exports");
    
    console.log(`Modul berhasil dimuat. Versi: ${modulKeuangan.VERSI_MODUL}`);
    const hasil = modulKeuangan.formatRupiah(modulKeuangan.KURS_DOLLAR * 100);
    console.log(`Nilai 100 USD dalam Rupiah: ${hasil}`);
}

muatModulFinansial().catch((err) => console.error("Gagal memuat modul:", err));
