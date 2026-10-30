/**
 * Submodul: 24_void_type.ts
 * Topik: Tipe data 'void'
 * Tujuan: Menandai fungsi yang melakukan tindakan tanpa mengembalikan nilai (return value).
 */

console.log("=== Tipe Data 'void' di TypeScript ===");

// Fungsi dengan return type 'void' hanya menjalankan instruksi dan tidak mengembalikan data
function catatLogAktivitas(pesan: string): void {
    const waktu = new Date().toISOString();
    console.log(`[${waktu}] LOG: ${pesan}`);
}

catatLogAktivitas("Aplikasi sistem berhasil dijalankan.");
catatLogAktivitas("Pengguna berhasil login ke dashboard.");
