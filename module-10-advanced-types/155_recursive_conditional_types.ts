/**
 * Submodul: 155_recursive_conditional_types.ts
 * Topik: Recursive Conditional Types
 * Tujuan: Membuka susunan array bersarang (flattening deep array) hingga kedalaman tak hingga.
 */

console.log("=== Recursive Conditional Types di TypeScript ===");

// Meratakan susunan array bertingkat menjadi tipe elemen tunggal
type RatakanArray<T> = T extends (infer E)[] ? RatakanArray<E> : T;

type ArraySarang3 = number[][][];
type HasilRata = RatakanArray<ArraySarang3>; // number

function ratakan(koleksi: any[]): any[] {
    return koleksi.flat(Infinity);
}

const dataBersarang = [[[1, 2], [3]], [[4, 5, [6]]]];
const dataRata: HasilRata[] = ratakan(dataBersarang);

console.log("Data Bersarang :", JSON.stringify(dataBersarang));
console.log("Hasil Diratakan:", dataRata);
