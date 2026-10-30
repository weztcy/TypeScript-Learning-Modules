/**
 * Submodul: 09_strict_mode.ts
 * Topik: Strict mode pada TypeScript
 * Tujuan: Memahami keamanan tipe yang diberikan oleh strict mode (mencegah null pointer exception).
 */

// Dalam strict mode, variabel tidak boleh bernilai undefined/null jika tipenya non-nullable
function formatNama(namaLengkap: string | null): string {
    // Pemeriksaan type narrowing untuk menangani kemungkinan nilai null
    if (namaLengkap === null) {
        return "Tamu Anonim";
    }
    // TypeScript mengetahui secara pasti bahwa namaLengkap adalah string di blok ini
    return namaLengkap.trim().toUpperCase();
}

console.log("=== Pemeriksaan Ketat (Strict Mode) ===");
console.log("Format 1 (Valid):", formatNama("Bambang Pamungkas"));
console.log("Format 2 (Null) :", formatNama(null));
console.log("Strict mode mencegah bug 'Cannot read properties of null/undefined' saat runtime!");
