/**
 * Submodul: 81_array_map.ts
 * Topik: Metode Array.prototype.map()
 * Tujuan: Mentransformasikan setiap elemen array menjadi array baru dengan bentuk atau nilai baru.
 */

console.log("=== Metode Array map() di TypeScript ===");

interface ProdukKatalog {
    nama: string;
    hargaUSD: number;
}

const daftarProduk: ProdukKatalog[] = [
    { nama: "Mouse Wireless", hargaUSD: 25 },
    { nama: "Keyboard RGB", hargaUSD: 70 },
    { nama: "Webcam HD", hargaUSD: 45 }
];

const KURS_IDR: number = 16000;

// Transformasi array objek menjadi daftar string berformat rupiah
const labelHargaIDR: string[] = daftarProduk.map((item) => {
    const hargaRupiah = item.hargaUSD * KURS_IDR;
    return `${item.nama} -> Rp ${hargaRupiah.toLocaleString("id-ID")}`;
});

console.log("Hasil Pemetaan Harga Produk (map):");
labelHargaIDR.forEach((label) => console.log(`  - ${label}`));
