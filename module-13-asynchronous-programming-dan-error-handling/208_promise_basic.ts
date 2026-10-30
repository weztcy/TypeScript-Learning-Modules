/**
 * Submodul: 208_promise_basic.ts
 * Topik: Promise Dasar
 * Tujuan: Mengubah alur asynchronous menjadi objek Promise yang memiliki state (pending, fulfilled, rejected).
 */

console.log("=== Promise Dasar di TypeScript ===");

function periksaStatusServer(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log(`[PROMISE] Memeriksa status: ${url}...`);
        setTimeout(() => {
            const serverSehat = true;
            if (serverSehat) {
                resolve(`Server ${url} aktif dan merespon dalam 45ms.`);
            } else {
                reject(new Error(`Server ${url} tidak dapat dihubungi!`));
            }
        }, 100);
    });
}

periksaStatusServer("https://api.internal.net")
    .then((hasil) => console.log("[RESOLVE]:", hasil))
    .catch((err) => console.error("[REJECT]:", err.message));
