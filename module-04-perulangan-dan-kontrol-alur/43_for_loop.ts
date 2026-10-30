/**
 * Submodul: 43_for_loop.ts
 * Topik: Perulangan 'for' standar
 * Tujuan: Mengulang eksekusi kode dengan jumlah iterasi yang sudah diketahui secara pasti.
 */

console.log("=== Perulangan 'for' di TypeScript ===");

// Struktur perulangan for: inisialisasi counter; kondisi henti; pembaruan counter
const batasMaksimal: number = 5;

for (let i: number = 1; i <= batasMaksimal; i++) {
    // Menghitung kuadrat dari nilai counter saat ini
    const kuadrat: number = i * i;
    console.log(`Iterasi ke-${i}: Nilai = ${i}, Kuadrat = ${kuadrat}`);
}

console.log("Perulangan for selesai dieksekusi.");
