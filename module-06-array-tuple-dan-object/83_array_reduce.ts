/**
 * Submodul: 83_array_reduce.ts
 * Topik: Metode Array.prototype.reduce()
 * Tujuan: Mereduksi seluruh elemen array menjadi satu nilai akumulatif tunggal.
 */

console.log("=== Metode Array reduce() di TypeScript ===");

interface TransaksiPenjualan {
    kode: string;
    nominal: number;
}

const riwayatTransaksi: TransaksiPenjualan[] = [
    { kode: "TRX-01", nominal: 150000 },
    { kode: "TRX-02", nominal: 320000 },
    { kode: "TRX-03", nominal: 85000 },
    { kode: "TRX-04", nominal: 440000 }
];

// Mengakumulasi seluruh nominal transaksi menjadi total omset
const totalOmset: number = riwayatTransaksi.reduce(
    (akumulator: number, transaksi: TransaksiPenjualan) => akumulator + transaksi.nominal,
    0 // Nilai awal akumulator
);

console.log(`Jumlah Transaksi : ${riwayatTransaksi.length}`);
console.log(`Total Omset Toko : Rp ${totalOmset.toLocaleString("id-ID")}`);
