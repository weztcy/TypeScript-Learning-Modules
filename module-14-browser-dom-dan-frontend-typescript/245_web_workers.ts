/**
 * Submodul: 245_web_workers.ts
 * Topik: Web Workers
 * Tujuan: Menjalankan komputasi berat di thread latar belakang (*background thread*) tanpa memblokir UI browser.
 */

console.log("=== Web Workers di TypeScript ===");

interface PesanWorker {
    perintah: "HITUNG_FAKTORIAL" | "SELESAI";
    inputAngka?: number;
    hasil?: number;
}

// Simulasi komunikasi thread utama dengan Web Worker
class MockWorkerThread {
    onmessage?: (pesan: PesanWorker) => void;

    postMessage(data: PesanWorker): void {
        console.log(`[THREAD UTAMA] Mengirim perintah ke Worker: ${data.perintah}`);
        // Worker bekerja di background
        setTimeout(() => {
            if (data.perintah === "HITUNG_FAKTORIAL" && data.inputAngka) {
                let f = 1;
                for (let i = 2; i <= data.inputAngka; i++) f *= i;
                if (this.onmessage) {
                    this.onmessage({ perintah: "SELESAI", hasil: f });
                }
            }
        }, 60);
    }
}

const worker = new MockWorkerThread();
worker.onmessage = (res) => {
    console.log(`[WORKER SELESAI] Hasil komputasi latar belakang diterima: ${res.hasil}`);
};

worker.postMessage({ perintah: "HITUNG_FAKTORIAL", inputAngka: 8 });
