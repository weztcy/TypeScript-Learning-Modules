/**
 * Submodul: 210_promise_then_catch.ts
 * Topik: Promise .then(), .catch(), dan .finally()
 * Tujuan: Merangkai operasi asynchronous berantai (chaining) dan menangani error secara terpusat.
 */

console.log("=== Promise Chaining (.then, .catch, .finally) ===");

function hitungAngkaAsync(nilai: number): Promise<number> {
    return new Promise((resolve) => setTimeout(() => resolve(nilai), 50));
}

hitungAngkaAsync(10)
    .then((n) => {
        console.log(`Tahap 1: Nilai awal = ${n}`);
        return n * 2; // Mengembalikan 20
    })
    .then((n) => {
        console.log(`Tahap 2: Dikalikan 2 = ${n}`);
        return n + 15; // Mengembalikan 35
    })
    .then((n) => {
        console.log(`Tahap 3: Ditambah 15 = ${n}`);
    })
    .catch((err) => {
        console.error("Terjadi error di salah satu tahap:", err);
    })
    .finally(() => {
        console.log("[FINALLY] Seluruh rangkaian kalkulasi selesai.");
    });
