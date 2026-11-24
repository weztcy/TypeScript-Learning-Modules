/**
 * Submodul: 05_variable_declaration.ts
 * Topik: Deklarasi variabel
 * Tujuan: Memahami cara mendeklarasikan variabel dengan tipe data eksplisit dan implisit.
 */

console.log("=== Deklarasi Variabel di TypeScript ===");

// Deklarasi eksplisit dengan tipe data (Type Annotation)
// Menjamin bahwa nilai yang dimasukkan ke variabel selalu bertipe string
let namaPengguna: string = "Ahmad Dani";

// Deklarasi konstanta yang nilainya tidak dapat diubah kembali (immutable identifier)
const idPengguna: number = 1001;

// Deklarasi dengan inferensi tipe otomatis oleh TypeScript compiler
let saldoRekening = 750000; // TypeScript otomatis menganggap tipe 'number'

console.log(`ID Pelanggan  : ${idPengguna}`);
console.log(`Nama          : ${namaPengguna}`);
console.log(`Saldo Awal    : Rp ${saldoRekening}`);

// Mengubah nilai variabel let dengan tipe data yang sesuai
saldoRekening += 250000;
console.log(`Saldo Baru    : Rp ${saldoRekening}`);
