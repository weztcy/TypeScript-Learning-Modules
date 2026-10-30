/**
 * Submodul: 221_abort_controller.ts
 * Topik: AbortController (Membatalkan Operasi Asynchronous)
 * Tujuan: Menghentikan proses asynchronous yang sedang berjalan jika melebihi batas waktu (timeout).
 */

console.log("=== AbortController di TypeScript ===");

function unduhBerkasBesar(signal: AbortSignal): Promise<string> {
    return new Promise((resolve, reject) => {
        if (signal.aborted) {
            reject(new Error("Operasi dibatalkan sebelum dimulai."));
            return;
        }

        const timer = setTimeout(() => {
            resolve("Berkas ISO 4.5 GB berhasil diunduh.");
        }, 500);

        // Menangkap sinyal pembatalan
        signal.addEventListener("abort", () => {
            clearTimeout(timer);
            reject(new Error("Pengunduhan DIBATALKAN oleh pengguna atau timeout sistem!"));
        });
    });
}

const controller = new AbortController();

unduhBerkasBesar(controller.signal)
    .then((hasil) => console.log(hasil))
    .catch((err) => console.log(`[ABORT TERDETEKSI]: ${err.message}`));

// Membatalkan unduhan setelah 50ms (sebelum timer 500ms selesai)
setTimeout(() => {
    console.log(">> Memicu sinyal pembatalan controller.abort()...");
    controller.abort();
}, 50);
