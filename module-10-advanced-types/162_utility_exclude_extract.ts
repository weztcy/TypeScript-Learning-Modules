/**
 * Submodul: 162_utility_exclude_extract.ts
 * Topik: Utility Types Exclude<T, U> dan Extract<T, U>
 * Tujuan: Mengeliminasi atau mengekstrak anggota dari suatu union type.
 */

console.log("=== Utility Types Exclude dan Extract ===");

type SemuaFormatFile = "png" | "jpg" | "gif" | "pdf" | "docx";

// Exclude: menghapus "pdf" dan "docx" dari union (hanya format gambar)
type FormatGambar = Exclude<SemuaFormatFile, "pdf" | "docx">;

// Extract: hanya mengambil format yang cocok dengan "pdf" | "docx" | "txt"
type FormatDokumen = Extract<SemuaFormatFile, "pdf" | "docx" | "txt">;

const gambar: FormatGambar = "png";
const dokumen: FormatDokumen = "pdf";

console.log(`Format Gambar Terpilih  : ${gambar}`);
console.log(`Format Dokumen Terpilih : ${dokumen}`);
