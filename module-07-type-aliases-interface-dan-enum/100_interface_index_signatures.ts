/**
 * Submodul: 100_interface_index_signatures.ts
 * Topik: Index Signatures pada Interface
 * Tujuan: Mengizinkan penambahan properti baru secara dinamis dengan pola kunci dan nilai yang seragam.
 */

console.log("=== Index Signatures pada Interface ===");

interface KamusDefinisi {
    bahasaKamus: string; // Properti statis wajib
    [istilah: string]: string; // Index signature untuk kunci dinamis
}

const kamusIT: KamusDefinisi = {
    bahasaKamus: "Bahasa Indonesia - Komputasi",
    "compiler": "Program yang menerjemahkan kode sumber menjadi bahasa mesin atau target lain.",
    "interface": "Kontrak sintaksis yang mendefinisikan bentuk sebuah objek.",
    "tuple": "Struktur data array dengan jumlah dan tipe elemen berurutan tetap."
};

console.log(`Kamus: ${kamusIT.bahasaKamus}`);
console.log(`Definisi 'compiler': ${kamusIT["compiler"]}`);
console.log(`Definisi 'interface': ${kamusIT["interface"]}`);
