/**
 * Submodul: 226_async_retry.ts
 * Topik: Pola Retry Asynchronous
 * Tujuan: Mengulang kembali operasi jaringan yang gagal sementara hingga batas maksimal percobaan.
 */

console.log("=== Pola Retry Asynchronous di TypeScript ===");

async function jalankanDenganRetry<T>(
    operasi: () => Promise<T>,
    maksimalCoba: number,
    jedaMs: number
): Promise<T> {
    let percobaan = 0;
    while (percobaan < maksimalCoba) {
        try {
            percobaan++;
            return await operasi();
        } catch (err: any) {
            console.log(`Percobaan ke-${percobaan} gagal: ${err.message}`);
            if (percobaan >= maksimalCoba) {
                throw new Error(`Operasi gagal total setelah ${maksimalCoba} kali percobaan.`);
            }
            await new Promise((r) => setTimeout(r, jedaMs));
        }
    }
    throw new Error("Gagal tak terduga");
}

let counterCoba = 0;
const simulasiApiTidakStabil = async (): Promise<string> => {
    counterCoba++;
    if (counterCoba < 3) {
        throw new Error("Gateway timeout");
    }
    return "Data transaksi berhasil diterima pada percobaan ke-3!";
};

jalankanDenganRetry(simulasiApiTidakStabil, 4, 50)
    .then((hasil) => console.log("[HASIL AKHIR]:", hasil))
    .catch((err) => console.error("[FATAL]:", err.message));
