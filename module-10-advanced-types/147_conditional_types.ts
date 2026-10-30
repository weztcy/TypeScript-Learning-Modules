/**
 * Submodul: 147_conditional_types.ts
 * Topik: Conditional Types (T extends U ? X : Y)
 * Tujuan: Memilih tipe data secara dinamis berdasarkan evaluasi kondisi relasi subtipe.
 */

console.log("=== Conditional Types di TypeScript ===");

// Tipe kondisional: jika T adalah string maka bertipe string[], jika bukan maka number[]
type ArraySesuaiTipe<T> = T extends string ? string[] : number[];

type KoleksiKata = ArraySesuaiTipe<string>; // Bertipe string[]
type KoleksiNilai = ArraySesuaiTipe<boolean>; // Bertipe number[]

const daftarKata: KoleksiKata = ["TypeScript", "Advanced", "Types"];
const daftarNilai: KoleksiNilai = [100, 200, 300];

console.log("Koleksi Kata (string[]):", daftarKata);
console.log("Koleksi Nilai (number[]):", daftarNilai);
