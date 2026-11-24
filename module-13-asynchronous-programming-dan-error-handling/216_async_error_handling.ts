/**
 * Submodul: 216_async_error_handling.ts
 * Topik: Penanganan Error Asynchronous (try...catch)
 * Tujuan: Menangkap eksepsi asynchronous menggunakan blok try-catch standar.
 */

console.log("=== Penanganan Error Asynchronous (try...catch) ===");

function verifikasiSaldo(saldo: number, tarik: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tarik > saldo) {
                reject(new Error("Saldo rekening tidak mencukupi untuk penarikan!"));
            } else {
                resolve(saldo - tarik);
            }
        }, 50);
    });
}

async function jalankanTransaksi(): Promise<void> {
    try {
        console.log("Mencoba penarikan tunai Rp 1.000.000 dari saldo Rp 500.000...");
        const sisa = await verifikasiSaldo(500000, 1000000);
        console.log(`Transaksi sukses! Sisa saldo: Rp ${sisa}`);
    } catch (e: any) {
        console.log(`[TERTANGKAP DENGAN AMAN]: ${e.message}`);
    } finally {
        console.log("Sesi penarikan ATM ditutup.");
    }
}

jalankanTransaksi();
