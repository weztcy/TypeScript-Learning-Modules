/**
 * Submodul: 46_for_of_loop.ts
 * Topik: Perulangan 'for...of'
 * Tujuan: Melakukan iterasi langsung pada setiap elemen nilai dari iterable (Array, String, Set).
 */

console.log("=== Perulangan 'for...of' di TypeScript ===");

// Array bahasa pemrograman modern
const daftarBahasa: string[] = ["TypeScript", "JavaScript", "Python", "Rust", "Go"];

console.log("Daftar bahasa pemrograman favorit:");
// 'for...of' mengambil langsung nilai elemen, bukan indeksnya
for (const bahasa of daftarBahasa) {
    console.log(`- ${bahasa} (Karakter: ${bahasa.length})`);
}
