/**
 * Submodul: 219_async_iterators.ts
 * Topik: Async Iterators (for await...of)
 * Tujuan: Menjelajahi sumber data asynchronous yang datang secara berurutan (*stream-like*).
 */

console.log("=== Async Iterators (for await...of) ===");

// Objek async iterable kustom
const penghitungAsync = {
    [Symbol.asyncIterator]() {
        let i = 1;
        return {
            async next() {
                if (i <= 3) {
                    await new Promise((resolve) => setTimeout(resolve, 50));
                    return { value: `Paket Data #${i++}`, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

async function konsumsiStream() {
    console.log("Membaca paket data berurutan via 'for await...of':");
    for await (const paket of penghitungAsync) {
        console.log(`- Menerima: ${paket}`);
    }
    console.log("Semua paket data selesai diterima.");
}

konsumsiStream();
