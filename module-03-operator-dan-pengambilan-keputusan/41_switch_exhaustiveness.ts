/**
 * Submodul: 41_switch_exhaustiveness.ts
 * Topik: Pemeriksaan kelengkapan switch (Exhaustive checking dengan tipe never)
 * Tujuan: Memastikan seluruh kemungkinan kasus dalam union type ditangani tanpa ada yang terlewat pada compile-time.
 */

console.log("=== Pemeriksaan Kelengkapan Switch (Exhaustiveness Check) ===");

type StatusPesanan = "Menunggu" | "Diproses" | "Dikirim" | "Selesai";

function tanganiStatusPesanan(status: StatusPesanan): string {
    switch (status) {
        case "Menunggu":
            return "Pesanan sedang menunggu verifikasi pembayaran.";
        case "Diproses":
            return "Barang sedang dikemas di gudang penyedia.";
        case "Dikirim":
            return "Paket berada dalam perjalanan menuju alamat tujuan.";
        case "Selesai":
            return "Transaksi berhasil diselesaikan oleh pembeli.";
        default: {
            // Jika ada varian StatusPesanan yang lupa ditangani pada case di atas,
            // baris ini akan memicu error kompilasi karena tipe tersebut tidak bisa di-assign ke 'never'.
            const exhaustiveCheck: never = status;
            throw new Error(`Status tidak tertangani: ${exhaustiveCheck}`);
        }
    }
}

console.log(tanganiStatusPesanan("Menunggu"));
console.log(tanganiStatusPesanan("Dikirim"));
console.log(tanganiStatusPesanan("Selesai"));
