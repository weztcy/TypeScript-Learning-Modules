/**
 * Submodul: 79_readonly_array.ts
 * Topik: Readonly Array
 * Tujuan: Mencegah mutasi (push, pop, modifikasi indeks) pada kumpulan data array.
 */

console.log("=== Readonly Array di TypeScript ===");

// Array readonly menggunakan kata kunci readonly atau ReadonlyArray<T>
const kodeNegara: readonly string[] = ["ID", "SG", "MY", "TH"];

console.log("Daftar kode negara ASEAN:");
console.log(kodeNegara);

// kodeNegara.push("PH"); // Error: Properti 'push' tidak tersedia pada readonly array
// kodeNegara[0] = "US";  // Error: Indeks tidak dapat diubah

console.log("Elemen pertama:", kodeNegara[0]);
console.log("Array readonly menjamin immutabilitas data selama runtime aplikasi.");
