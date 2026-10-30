/**
 * Submodul: 71_recursive_functions.ts
 * Topik: Fungsi Rekursif
 * Tujuan: Menyelesaikan masalah dengan memanggil fungsi itu sendiri hingga mencapai base case.
 */

console.log("=== Fungsi Rekursif di TypeScript ===");

// Fungsi rekursif untuk menghitung perpangkatan (basis^pangkat)
function hitungPangkat(basis: number, pangkat: number): number {
    // Base case: setiap bilangan dipangkatkan 0 bernilai 1
    if (pangkat === 0) {
        return 1;
    }
    // Recursive case: basis * (basis ^ (pangkat - 1))
    return basis * hitungPangkat(basis, pangkat - 1);
}

console.log(`2^0 = ${hitungPangkat(2, 0)}`);
console.log(`2^3 = ${hitungPangkat(2, 3)}`);
console.log(`5^4 = ${hitungPangkat(5, 4)}`);
