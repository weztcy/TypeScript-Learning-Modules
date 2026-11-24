/**
 * Submodul: 23_never_type.ts
 * Topik: Tipe data 'never'
 * Tujuan: Memahami tipe kembalian fungsi yang tidak pernah selesai normal atau tidak pernah menghasilkan nilai.
 */

console.log("=== Tipe Data 'never' di TypeScript ===");

// Fungsi yang selalu melempar error memiliki return type 'never'
function lemparErrorSistem(pesan: string): never {
    throw new Error(`[CRITICAL ERROR]: ${pesan}`);
}

// Fungsi dengan perulangan tak terbatas (infinite loop) juga bertipe 'never'
function pantauSistemBerkala(): void {
    console.log("Simulasi pengecekan status server sebelum eksepsi...");
}

pantauSistemBerkala();

try {
    lemparErrorSistem("Koneksi basis data terputus mendadak!");
} catch (e: any) {
    console.log(`Error berhasil ditangkap: ${e.message}`);
}
