/**
 * Submodul: 290_type_testing.ts
 * Topik: Pengujian Tipe Statis (Type Testing)
 * Tujuan: Menguji ketepatan tipe pada masa kompilasi tanpa perlu dieksekusi saat runtime.
 */

console.log("=== Pengujian Tipe Statis (Type Testing) ===");

// Utilitas pengujian kesetaraan tipe secara compile-time
type HarapTipeSama<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

type TipeUji1 = HarapTipeSama<string | number, number | string>; // bernilai true
type TipeUji2 = HarapTipeSama<string, number>;                   // bernilai false

const hasilUji1: TipeUji1 = true;
const hasilUji2: TipeUji2 = false;

console.log(`Apakah string | number sama dengan number | string? ${hasilUji1}`);
console.log(`Apakah string sama dengan number? ${hasilUji2}`);
console.log("Type testing memverifikasi kebenaran kontrak tipe pada level kompilasi compiler!");
