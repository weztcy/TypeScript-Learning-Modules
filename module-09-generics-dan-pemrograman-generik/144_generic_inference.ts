/**
 * Submodul: 144_generic_inference.ts
 * Topik: Generic Type Inference
 * Tujuan: Memahami kemampuan compiler dalam menyimpulkan parameter tipe generic secara otomatis.
 */

console.log("=== Generic Type Inference di TypeScript ===");

function gabungkanData<T>(item1: T, item2: T): T[] {
    return [item1, item2];
}

// Compiler otomatis menyimpulkan T adalah string tanpa perlu menulis gabungkanData<string>(...)
const gabungTeks = gabungkanData("Apel", "Jeruk");

// Compiler otomatis menyimpulkan T adalah number
const gabungAngka = gabungkanData(100, 200);

console.log("Inferensi String :", gabungTeks);
console.log("Inferensi Number :", gabungAngka);
