/**
 * Submodul: 28_assignment_operators.ts
 * Topik: Operator penugasan (Assignment Operators)
 * Tujuan: Memahami penugasan dasar (=) dan penugasan gabungan compound (+=, -=, *=, /=, %=).
 */

console.log("=== Operator Penugasan di TypeScript ===");

let totalSkor: number = 50;
console.log(`Skor mula-mula: ${totalSkor}`);

// Penugasan penjumlahan (totalSkor = totalSkor + 25)
totalSkor += 25;
console.log(`Setelah += 25 : ${totalSkor}`);

// Penugasan pengurangan (totalSkor = totalSkor - 10)
totalSkor -= 10;
console.log(`Setelah -= 10 : ${totalSkor}`);

// Penugasan perkalian (totalSkor = totalSkor * 2)
totalSkor *= 2;
console.log(`Setelah *= 2  : ${totalSkor}`);

// Penugasan pembagian (totalSkor = totalSkor / 5)
totalSkor /= 5;
console.log(`Setelah /= 5  : ${totalSkor}`);

// Penugasan sisa bagi (totalSkor = totalSkor % 7)
totalSkor %= 7;
console.log(`Setelah %= 7  : ${totalSkor}`);
