/**
 * Submodul: 50_continue_statement.ts
 * Topik: Pernyataan 'continue'
 * Tujuan: Melewati sisa instruksi pada iterasi saat ini dan langsung melompat ke iterasi berikutnya.
 */

console.log("=== Pernyataan 'continue' di TypeScript ===");

console.log("Mencetak angka ganjil antara 1 sampai 10:");

for (let i: number = 1; i <= 10; i++) {
    // Jika angka genap, lewati iterasi ini
    if (i % 2 === 0) {
        continue; // Langsung ke iterasi i berikutnya
    }
    
    console.log(`Angka ganjil: ${i}`);
}
