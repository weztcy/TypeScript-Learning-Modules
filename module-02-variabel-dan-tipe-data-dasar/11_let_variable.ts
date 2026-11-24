/**
 * Submodul: 11_let_variable.ts
 * Topik: Deklarasi variabel dengan 'let'
 * Tujuan: Memahami konsep block scope dan mutabilitas variabel menggunakan let.
 */

console.log("=== Deklarasi Variabel dengan 'let' ===");

// Variabel 'let' memiliki sifat block scope (hanya berlaku dalam kurung kurawal tempat ia dideklarasikan)
let skorPemain: number = 100;
console.log(`Skor awal pemain: ${skorPemain}`);

// Nilai variabel let dapat diubah (re-assignment) selama tipe datanya tetap cocok
skorPemain = 150;
console.log(`Skor setelah update: ${skorPemain}`);

// Demonstrasi sifat block-scope pada percabangan if
if (skorPemain > 100) {
    // Variabel bonus ini hanya dapat diakses di dalam blok kurung kurawal if
    let bonusTambahan: number = 25;
    console.log(`Pemain memperoleh bonus tambahan sebesar: ${bonusTambahan}`);
}
// Di luar blok if, variabel 'bonusTambahan' tidak dapat diakses
