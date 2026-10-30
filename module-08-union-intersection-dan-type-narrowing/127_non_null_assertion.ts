/**
 * Submodul: 127_non_null_assertion.ts
 * Topik: Non-null Assertion Operator (!)
 * Tujuan: Menegaskan kepada compiler bahwa nilai pasti tidak bernilai null atau undefined.
 */

console.log("=== Non-null Assertion Operator (!) ===");

interface NodeElemen {
    teksJudul: string | null;
}

const elemenWeb: NodeElemen = {
    teksJudul: "Selamat Datang di Beranda"
};

// Operator tanda seru (!) menjamin bahwa teksJudul tidak bernilai null
const judulPasti: string = elemenWeb.teksJudul!;

console.log(`Panjang judul pasti: ${judulPasti.length} karakter`);
console.log(`Teks Judul         : "${judulPasti}"`);
