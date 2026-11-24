/**
 * Submodul: 44_while_loop.ts
 * Topik: Perulangan 'while'
 * Tujuan: Melakukan perulangan selama kondisi logika tertentu masih bernilai benar (true).
 */

console.log("=== Perulangan 'while' di TypeScript ===");

let cadanganBahanBakar: number = 100;
const konsumsiPerPutaran: number = 25;
let nomorPutaran: number = 1;

// Perulangan berjalan selama cadangan bahan bakar masih mencukupi
while (cadanganBahanBakar > 0) {
    console.log(`Putaran ${nomorPutaran}: Sisa bahan bakar = ${cadanganBahanBakar}L`);
    cadanganBahanBakar -= konsumsiPerPutaran;
    nomorPutaran++;
}

console.log(`Kondisi akhir: Bahan bakar habis (${cadanganBahanBakar}L). Perulangan while berhenti.`);
