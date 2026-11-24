/**
 * Submodul: 84_array_sorting.ts
 * Topik: Pengurutan Array (.sort)
 * Tujuan: Mengurutkan elemen primitif dan array objek menggunakan comparator function.
 */

console.log("=== Pengurutan Array di TypeScript ===");

const deretAcak: number[] = [45, 12, 89, 5, 23, 71];

// Pengurutan angka menaik (ascending)
// Menyediakan comparator (a - b) agar tidak diurutkan secara leksikografis string
const terurutNaik = [...deretAcak].sort((a, b) => a - b);

// Pengurutan angka menurun (descending)
const terurutTurun = [...deretAcak].sort((a, b) => b - a);

console.log("Data Asli      :", deretAcak);
console.log("Ascending  (a-b):", terurutNaik);
console.log("Descending (b-a):", terurutTurun);
