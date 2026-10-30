/**
 * Submodul: 57_prime_number.ts
 * Topik: Pemeriksaan bilangan prima
 * Tujuan: Menguji apakah suatu bilangan bulat merupakan bilangan prima menggunakan loop efisien.
 */

console.log("=== Pemeriksaan Bilangan Prima ===");

function adalahPrima(angka: number): boolean {
    if (angka <= 1) return false;
    if (angka <= 3) return true;
    if (angka % 2 === 0 || angka % 3 === 0) return false;

    // Pengecekan faktor hingga akar kuadrat angka (optimasi 6k +/- 1)
    for (let i = 5; i * i <= angka; i += 6) {
        if (angka % i === 0 || angka % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

const daftarAngkaUji: number[] = [2, 3, 4, 11, 15, 17, 21, 29, 33, 37];

for (const bil of daftarAngkaUji) {
    const status = adalahPrima(bil) ? "BILANGAN PRIMA" : "Bukan Prima";
    console.log(`Angka ${bil.toString().padStart(2, " ")} : ${status}`);
}
