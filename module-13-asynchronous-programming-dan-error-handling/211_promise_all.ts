/**
 * Submodul: 211_promise_all.ts
 * Topik: Promise.all()
 * Tujuan: Menjalankan beberapa Promise secara paralel dan menunggu hingga semuanya berhasil diselesaikan.
 */

console.log("=== Promise.all() di TypeScript ===");

const p1 = new Promise<string>((resolve) => setTimeout(() => resolve("Data Layanan User"), 80));
const p2 = new Promise<string>((resolve) => setTimeout(() => resolve("Data Layanan Produk"), 60));
const p3 = new Promise<string>((resolve) => setTimeout(() => resolve("Data Layanan Promo"), 100));

console.log("Menjalankan 3 permintaan mikroservis secara paralel...");

Promise.all([p1, p2, p3])
    .then(([resUser, resProduk, resPromo]) => {
        console.log("[SEMUA SELESAI]:");
        console.log(`- 1: ${resUser}`);
        console.log(`- 2: ${resProduk}`);
        console.log(`- 3: ${resPromo}`);
    })
    .catch((err) => {
        console.error("Salah satu layanan gagal:", err);
    });
