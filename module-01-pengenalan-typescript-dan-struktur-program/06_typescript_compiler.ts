/**
 * Submodul: 06_typescript_compiler.ts
 * Topik: Penggunaan compiler TypeScript (tsc)
 * Tujuan: Memahami bagaimana compiler TypeScript mentranspilasi kode TypeScript menjadi JavaScript.
 */

// Fungsi matematika sederhana dengan anotasi tipe
function hitungKelilingLingkaran(radius: number): number {
    // Math.PI adalah konstanta bawaan JavaScript/TypeScript
    return 2 * Math.PI * radius;
}

const r: number = 7;
const keliling: number = hitungKelilingLingkaran(r);

console.log("=== Penggunaan TypeScript Compiler (tsc) ===");
console.log("Proses kompilasi: file .ts ditranspilasi menjadi file .js yang valid untuk dieksekusi browser/node.");
console.log(`Radius lingkaran: ${r}`);
console.log(`Keliling lingkaran: ${keliling.toFixed(2)}`);
