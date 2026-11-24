/**
 * Submodul: 65_default_parameters.ts
 * Topik: Default Parameters (Nilai Bawaan)
 * Tujuan: Memberikan nilai fallback jika argumen tidak diberikan atau bernilai undefined.
 */

console.log("=== Default Parameters di TypeScript ===");

// Jika parameter tarifPajak tidak diisi saat pemanggilan, nilai 0.11 (PPN 11%) otomatis dipakai
function hitungTagihan(hargaBarang: number, jumlah: number = 1, tarifPajak: number = 0.11): number {
    const subtotal = hargaBarang * jumlah;
    const pajak = subtotal * tarifPajak;
    return subtotal + pajak;
}

console.log(`Beli 1 barang (harga 100k, pajak default 11%): Rp ${hitungTagihan(100000)}`);
console.log(`Beli 3 barang (harga 100k, pajak default 11%): Rp ${hitungTagihan(100000, 3)}`);
console.log(`Beli 2 barang (harga 100k, bebas pajak 0%)     : Rp ${hitungTagihan(100000, 2, 0)}`);
