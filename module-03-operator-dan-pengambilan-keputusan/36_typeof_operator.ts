/**
 * Submodul: 36_typeof_operator.ts
 * Topik: Operator 'typeof'
 * Tujuan: Memeriksa tipe data primitif runtime dan penggunaannya dalam type guard.
 */

console.log("=== Operator 'typeof' di TypeScript ===");

const teksContoh = "Belajar TypeScript";
const angkaContoh = 999;
const statusContoh = true;
const objekContoh = { id: 1 };

console.log(`typeof teksContoh   : ${typeof teksContoh}`);
console.log(`typeof angkaContoh  : ${typeof angkaContoh}`);
console.log(`typeof statusContoh : ${typeof statusContoh}`);
console.log(`typeof objekContoh  : ${typeof objekContoh}`);

// Type guard menggunakan typeof
function prosesNilai(nilai: string | number): void {
    if (typeof nilai === "string") {
        console.log(`Input berupa String: "${nilai.toUpperCase()}" (Panjang: ${nilai.length})`);
    } else {
        console.log(`Input berupa Number: ${nilai.toFixed(2)} (Kuadrat: ${nilai ** 2})`);
    }
}

prosesNilai("selamat datang");
prosesNilai(12.3456);
