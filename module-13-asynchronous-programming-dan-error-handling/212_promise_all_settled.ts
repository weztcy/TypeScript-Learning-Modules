/**
 * Submodul: 212_promise_all_settled.ts
 * Topik: Promise.allSettled()
 * Tujuan: Menunggu seluruh Promise selesai baik yang statusnya sukses (fulfilled) maupun gagal (rejected).
 */

console.log("=== Promise.allSettled() di TypeScript ===");

const tugas1 = Promise.resolve("Pengiriman Email Notifikasi Berhasil");
const tugas2 = Promise.reject(new Error("SMS Gateway Sibuk"));
const tugas3 = Promise.resolve("Pencatatan Database Audit Berhasil");

Promise.allSettled([tugas1, tugas2, tugas3])
    .then((hasil) => {
        console.log("Hasil status seluruh tugas asynchronous:");
        hasil.forEach((res, i) => {
            if (res.status === "fulfilled") {
                console.log(`  [Tugas ${i + 1} SUKSES] Nilai: ${res.value}`);
            } else {
                console.log(`  [Tugas ${i + 1} GAGAL] Alasan: ${res.reason.message}`);
            }
        });
    });
