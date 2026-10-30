/**
 * Submodul: 207_callback_functions.ts
 * Topik: Callback Functions Asynchronous
 * Tujuan: Memahami alur kerja asynchronous berbasis callback (pola Node.js error-first callback).
 */

console.log("=== Callback Functions Asynchronous ===");

type ErrorFirstCallback<T> = (err: Error | null, data?: T) => void;

function bacaBerkasSimulasi(namaFile: string, callback: ErrorFirstCallback<string>): void {
    console.log(`[MULAI] Membaca berkas: ${namaFile}...`);
    // Simulasi jeda operasi I/O
    setTimeout(() => {
        if (namaFile.endsWith(".txt")) {
            callback(null, `Isi konten dokumen '${namaFile}': Selamat Datang di TypeScript Async!`);
        } else {
            callback(new Error(`Format berkas tidak didukung: ${namaFile}`));
        }
    }, 100);
}

bacaBerkasSimulasi("panduan.txt", (err, data) => {
    if (err) {
        console.error("Gagal membaca:", err.message);
        return;
    }
    console.log("[SUKSES]:", data);
});
