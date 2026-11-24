/**
 * Submodul: 296_xss_prevention.ts
 * Topik: Pencegahan Serangan Cross-Site Scripting (XSS)
 * Tujuan: Meng-escape karakter khusus HTML (&, <, >, ", ') sebelum ditampilkan ke browser pengguna.
 */

console.log("=== Pencegahan Serangan XSS di TypeScript ===");

function escapeHTML(teksMentah: string): string {
    const petaKarakter: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return teksMentah.replace(/[&<>"']/g, (m) => petaKarakter[m] || m);
}

const komentarPengguna = `<script>alert('Akun Anda diretas!');</script> Halo semuanya!`;
const komentarAman = escapeHTML(komentarPengguna);

console.log("Input Asli   :", komentarPengguna);
console.log("Hasil Escape :", komentarAman);
console.log("Dengan escaping, kode JavaScript berbahaya tidak akan dieksekusi oleh browser!");
