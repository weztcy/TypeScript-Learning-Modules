/**
 * Submodul: 130_generic_parameters.ts
 * Topik: Generic Parameters
 * Tujuan: Memahami konvensi penamaan parameter tipe (T, U, V, K, V) dan penerapannya.
 */

console.log("=== Generic Parameters di TypeScript ===");

// Menukar posisi dua elemen dalam tuple pasangan generic (T dan U)
function balikPasangan<T, U>(pasangan: [T, U]): [U, T] {
    return [pasangan[1], pasangan[0]];
}

const inputA: [string, number] = ["ID-Pengguna", 1001];
const hasilA = balikPasangan(inputA);

const inputB: [boolean, string] = [true, "Koneksi Stabil"];
const hasilB = balikPasangan(inputB);

console.log(`Pasangan awal: [${inputA[0]}, ${inputA[1]}] -> Dibalik: [${hasilA[0]}, ${hasilA[1]}]`);
console.log(`Pasangan awal: [${inputB[0]}, "${inputB[1]}"] -> Dibalik: ["${hasilB[0]}", ${hasilB[1]}]`);
