/**
 * Submodul: 61_arrow_function.ts
 * Topik: Arrow Function (Fungsi Panah)
 * Tujuan: Menggunakan sintaks ringkas fat arrow (=>) dan leksikal 'this'.
 */

console.log("=== Arrow Function di TypeScript ===");

// Arrow function satu baris dengan implisit return
const kaliDua = (x: number): number => x * 2;

// Arrow function multi-baris dengan blok kurung kurawal
const hitungDiskon = (hargaAsli: number, persenDiskon: number): number => {
    const potongan = (hargaAsli * persenDiskon) / 100;
    return hargaAsli - potongan;
};

console.log(`Hasil 15 dikalikan 2: ${kaliDua(15)}`);
console.log(`Harga Rp 500.000 diskon 20%: Rp ${hitungDiskon(500000, 20).toLocaleString("id-ID")}`);
