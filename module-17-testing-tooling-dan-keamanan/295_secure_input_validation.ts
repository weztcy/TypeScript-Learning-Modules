/**
 * Submodul: 295_secure_input_validation.ts
 * Topik: Validasi Input yang Aman (Pencegahan SQLi & Path Traversal)
 * Tujuan: Mensterilkan dan membatasi masukan dari pengguna luar untuk mencegah eksploitasi keamanan.
 */

console.log("=== Validasi Input yang Aman di TypeScript ===");

function bersihkanPathFile(namaBerkasInput: string): string {
    // Mencegah serangan Directory Traversal (../)
    const bersih = namaBerkasInput.replace(/\.\.[\/\\]/g, "").replace(/[^a-zA-Z0-9_.-]/g, "");
    return bersih;
}

const inputBahaya = "../../etc/passwd";
const inputAman = "laporan_keuangan_2026.pdf";

console.log(`Input Berbahaya : "${inputBahaya}" -> Disterilkan: "${bersihkanPathFile(inputBahaya)}"`);
console.log(`Input Sah       : "${inputAman}" -> Disterilkan: "${bersihkanPathFile(inputAman)}"`);
