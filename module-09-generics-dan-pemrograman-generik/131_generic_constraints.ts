/**
 * Submodul: 131_generic_constraints.ts
 * Topik: Generic Constraints (T extends Interface)
 * Tujuan: Membatasi tipe generik agar harus memiliki properti tertentu (seperti .length atau .id).
 */

console.log("=== Generic Constraints di TypeScript ===");

// Membatasi tipe T harus memiliki properti 'panjang' (length: number)
interface PunyaPanjang {
    length: number;
}

function cetakPanjangElemen<T extends PunyaPanjang>(item: T): void {
    console.log(`Panjang item: ${item.length} elemen/karakter`);
}

cetakPanjangElemen("Halo Dunia TypeScript"); // string memiliki properti length
cetakPanjangElemen([10, 20, 30, 40]);         // array memiliki properti length
cetakPanjangElemen({ length: 50, unit: "cm" }); // objek memiliki properti length
// cetakPanjangElemen(12345); // Error: number tidak memiliki properti length
