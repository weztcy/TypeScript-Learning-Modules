/**
 * Submodul: 148_conditional_type_inference.ts
 * Topik: Infer dalam Conditional Types
 * Tujuan: Mengekstrak elemen tipe internal (seperti tipe elemen dalam array atau Promise).
 */

console.log("=== Conditional Type Inference (infer) ===");

// Mengekstrak tipe elemen T di dalam sebuah Array
type EkstrakElemenArray<T> = T extends (infer E)[] ? E : T;

type TipeAngka = EkstrakElemenArray<number[]>; // number
type TipeTeks = EkstrakElemenArray<string[]>;   // string
type TipeBiasa = EkstrakElemenArray<boolean>;   // boolean (bukan array)

const angkaSampel: TipeAngka = 42;
const teksSampel: TipeTeks = "Inferensi Elemen Array";

console.log(`Tipe Angka: ${angkaSampel} (${typeof angkaSampel})`);
console.log(`Tipe Teks : "${teksSampel}" (${typeof teksSampel})`);
