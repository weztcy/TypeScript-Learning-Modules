/**
 * Submodul: 101_interface_extends.ts
 * Topik: Pewarisan Interface (interface extends ...)
 * Tujuan: Melakukan perluasan bentuk interface dasar ke interface turunan secara hierarkis.
 */

console.log("=== Pewarisan Interface (extends) di TypeScript ===");

interface EntitasDasar {
    id: number;
    dibuatPada: Date;
}

// Mewarisi properti dari EntitasDasar dan menambahkan properti baru
interface KategoriProduk extends EntitasDasar {
    namaKategori: string;
    kodeSlug: string;
}

interface ItemKatalog extends KategoriProduk {
    namaProduk: string;
    harga: number;
}

const barangDagang: ItemKatalog = {
    id: 1001,
    dibuatPada: new Date(),
    namaKategori: "Aksesoris Komputer",
    kodeSlug: "aksesoris-komputer",
    namaProduk: "Mechanical Numpad",
    harga: 350000
};

console.log(`ID Barang : ${barangDagang.id}`);
console.log(`Kategori  : ${barangDagang.namaKategori}`);
console.log(`Produk    : ${barangDagang.namaProduk}`);
console.log(`Harga     : Rp ${barangDagang.harga.toLocaleString("id-ID")}`);
