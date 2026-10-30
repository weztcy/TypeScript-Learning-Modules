/**
 * Submodul: 56_factorial_loop.ts
 * Topik: Faktorial menggunakan loop
 * Tujuan: Menghitung nilai faktorial n! (n * (n-1) * ... * 1) secara iteratif.
 */

console.log("=== Perhitungan Faktorial Iteratif ===");

function hitungFaktorial(n: number): number {
    if (n < 0) {
        throw new Error("Faktorial tidak terdefinisi untuk bilangan negatif");
    }
    let hasil: number = 1;
    for (let i: number = 2; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

const angkaUji: number[] = [0, 1, 4, 5, 6];

for (const n of angkaUji) {
    console.log(`Faktorial dari ${n}! = ${hitungFaktorial(n)}`);
}
