/**
 * Submodul: 58_fibonacci_loop.ts
 * Topik: Deret Fibonacci menggunakan loop
 * Tujuan: Menghasilkan n suku pertama deret Fibonacci secara iteratif (0, 1, 1, 2, 3, 5, 8, ...).
 */

console.log("=== Pembentukan Deret Fibonacci Iteratif ===");

function buatDeretFibonacci(jumlahSuku: number): number[] {
    if (jumlahSuku <= 0) return [];
    if (jumlahSuku === 1) return [0];

    const hasil: number[] = [0, 1];

    for (let i = 2; i < jumlahSuku; i++) {
        // Suku berikutnya merupakan jumlah dari dua suku sebelumnya
        const sukuBaru = hasil[i - 1] + hasil[i - 2];
        hasil.push(sukuBaru);
    }

    return hasil;
}

const suku: number = 10;
const deret = buatDeretFibonacci(suku);

console.log(`${suku} suku pertama deret Fibonacci:`);
console.log(deret.join(" -> "));
