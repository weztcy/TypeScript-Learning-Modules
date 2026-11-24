/**
 * Submodul: 217_async_return_types.ts
 * Topik: Return Types Asynchronous
 * Tujuan: Mengatur tipe kembalian Promise pada fungsi async dan menangani variasi data kompleks.
 */

console.log("=== Return Types Asynchronous di TypeScript ===");

interface LaporanPenjualan {
    bulan: string;
    totalUnit: number;
    totalPendapatan: number;
}

async function ambilLaporanBulanan(bulan: string): Promise<LaporanPenjualan> {
    return {
        bulan,
        totalUnit: 1420,
        totalPendapatan: 710000000
    };
}

ambilLaporanBulanan("Oktober 2026").then((lap) => {
    console.log(`Laporan Bulan     : ${lap.bulan}`);
    console.log(`Unit Terjual      : ${lap.totalUnit} item`);
    console.log(`Total Pendapatan  : Rp ${lap.totalPendapatan.toLocaleString("id-ID")}`);
});
