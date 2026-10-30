/**
 * Submodul: 80_array_methods.ts
 * Topik: Metode-metode dasar array
 * Tujuan: Memanfaatkan metode mutasi dan ekstraksi array bawaan (push, pop, shift, unshift, slice, splice).
 */

console.log("=== Metode Dasar Array di TypeScript ===");

const antrean: string[] = ["Antrean-1", "Antrean-2", "Antrean-3"];
console.log("Antrean awal:", antrean);

// unshift: Menambahkan ke posisi paling depan
antrean.unshift("Antrean-VIP");
console.log("Setelah unshift VIP:", antrean);

// pop: Mengambil dan menghapus elemen paling akhir
const elemenAkhir = antrean.pop();
console.log(`Elemen yang di-pop: ${elemenAkhir} | Sisa:`, antrean);

// shift: Mengambil dan menghapus elemen paling depan
const elemenDepan = antrean.shift();
console.log(`Elemen yang di-shift: ${elemenDepan} | Sisa:`, antrean);

// slice: Membuat salinan sebagian elemen tanpa mengubah array asli
const salinan = antrean.slice(0, 1);
console.log("Hasil slice(0, 1):", salinan);
