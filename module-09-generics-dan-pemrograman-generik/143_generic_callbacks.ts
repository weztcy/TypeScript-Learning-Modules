/**
 * Submodul: 143_generic_callbacks.ts
 * Topik: Generic Callbacks
 * Tujuan: Menerapkan fungsi callback beranotasi generic untuk pemrosesan elemen array.
 */

console.log("=== Generic Callbacks di TypeScript ===");

// Fungsi pemetaan kustom dengan callback generic: (item: T, indeks: number) => U
function petakanArray<T, U>(daftar: T[], callback: (item: T, indeks: number) => U): U[] {
    const hasil: U[] = [];
    for (let i = 0; i < daftar.length; i++) {
        hasil.push(callback(daftar[i], i));
    }
    return hasil;
}

const daftarAngka = [10, 20, 30];
// Transformasi angka menjadi string terformat
const daftarTeks = petakanArray(daftarAngka, (n, i) => `#${i + 1}: Skor ${n}`);

console.log("Hasil Pemetaan Generic Callback:");
console.log(daftarTeks);
