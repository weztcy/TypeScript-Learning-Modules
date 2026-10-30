/**
 * Submodul: 146_generic_type_guards.ts
 * Topik: Generic Type Guards
 * Tujuan: Membuat fungsi penjaga tipe yang dapat memvalidasi struktur properti secara generik.
 */

console.log("=== Generic Type Guards di TypeScript ===");

// Memeriksa apakah suatu objek unknown memiliki properti 'id' bertipe string
interface PunyaIDString {
    id: string;
}

function punyaIDString(obj: unknown): obj is PunyaIDString {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "id" in obj &&
        typeof (obj as PunyaIDString).id === "string"
    );
}

const sampel1: unknown = { id: "DOC-2026", judul: "Laporan Tahunan" };
const sampel2: unknown = { id: 999, judul: "Buku Panduan" };

if (punyaIDString(sampel1)) {
    console.log(`Sampel 1 valid! ID String: ${sampel1.id}`);
}

if (!punyaIDString(sampel2)) {
    console.log("Sampel 2 ditolak: Properti 'id' bukan bertipe string.");
}
