/**
 * Submodul: 70_higher_order_functions.ts
 * Topik: Higher-Order Functions (HOF)
 * Tujuan: Membuat fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi baru.
 */

console.log("=== Higher-Order Functions (HOF) di TypeScript ===");

// Fungsi yang mengembalikan fungsi baru (Function Factory)
function buatFungsiPengali(faktor: number): (angka: number) => number {
    return (angka: number): number => angka * faktor;
}

const kaliTiga = buatFungsiPengali(3);
const kaliSepuluh = buatFungsiPengali(10);

console.log(`5 dikali 3  = ${kaliTiga(5)}`);
console.log(`7 dikali 10 = ${kaliSepuluh(7)}`);

// HOF yang menyaring array berdasarkan fungsi predikat
function saringData<T>(list: T[], predikat: (item: T) => boolean): T[] {
    const hasil: T[] = [];
    for (const item of list) {
        if (predikat(item)) {
            hasil.push(item);
        }
    }
    return hasil;
}

const angkaList: number[] = [12, 5, 8, 130, 44, 9];
const angkaBesar = saringData(angkaList, (n) => n > 10);
console.log("Hasil saringData (> 10):", angkaBesar);
