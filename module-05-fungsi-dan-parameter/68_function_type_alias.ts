/**
 * Submodul: 68_function_type_alias.ts
 * Topik: Function Type Aliases
 * Tujuan: Membuat kontrak tipe terstandar untuk bentuk fungsi tertentu.
 */

console.log("=== Function Type Alias di TypeScript ===");

// Mendefinisikan type alias untuk fungsi pemformat teks
type PemformatTeks = (input: string) => string;

// Mengimplementasikan dua fungsi konkret yang tunduk pada kontrak PemformatTeks
const hurufBesar: PemformatTeks = (teks) => teks.toUpperCase();
const formatSlug: PemformatTeks = (teks) => teks.toLowerCase().replace(/\s+/g, "-");

function transformasikan(kalimat: string, transformer: PemformatTeks): void {
    console.log(`Hasil Transformasi: "${transformer(kalimat)}"`);
}

const judulArtikel = "Belajar Bahasa TypeScript Modern";
transformasikan(judulArtikel, hurufBesar);
transformasikan(judulArtikel, formatSlug);
