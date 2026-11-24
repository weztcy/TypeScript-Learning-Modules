/**
 * Submodul: 49_break_statement.ts
 * Topik: Pernyataan 'break'
 * Tujuan: Menghentikan perulangan lebih awal ketika kondisi target tertentu tercapai.
 */

console.log("=== Pernyataan 'break' di TypeScript ===");

const antreanNomor: number[] = [101, 102, 103, 104, 105, 106, 107];
const targetNomor: number = 104;

console.log(`Mencari tiket antrean target: ${targetNomor}`);

for (const tiket of antreanNomor) {
    console.log(`Memeriksa nomor: ${tiket}`);
    
    if (tiket === targetNomor) {
        console.log(`>> Target ${targetNomor} DITEMUKAN! Menghentikan pencarian dengan 'break'.`);
        break; // Keluar seketika dari perulangan
    }
}

console.log("Pencarian selesai.");
