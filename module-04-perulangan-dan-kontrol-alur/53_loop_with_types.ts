/**
 * Submodul: 53_loop_with_types.ts
 * Topik: Perulangan dengan tipe data kompleks
 * Tujuan: Melakukan perulangan pada array yang berisi objek terstruktur sesuai interface.
 */

console.log("=== Perulangan dengan Tipe Data Kompleks ===");

interface ProdukToko {
    id: string;
    nama: string;
    harga: number;
    stok: number;
}

const katalog: ProdukToko[] = [
    { id: "P01", nama: "Keyboard Mechanical", harga: 650000, stok: 12 },
    { id: "P02", nama: "Mouse Wireless", harga: 250000, stok: 3 },
    { id: "P03", nama: "Monitor UltraWide 29\"", harga: 3200000, stok: 5 }
];

let totalValuasiGudang: number = 0;

for (const produk of katalog) {
    const nilaiProduk = produk.harga * produk.stok;
    totalValuasiGudang += nilaiProduk;
    console.log(`Produk [${produk.id}] ${produk.nama} | Stok: ${produk.stok} | Subtotal: Rp ${nilaiProduk.toLocaleString("id-ID")}`);
}

console.log(`Total Valuasi Nilai Inventaris: Rp ${totalValuasiGudang.toLocaleString("id-ID")}`);
