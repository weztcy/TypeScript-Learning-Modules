/**
 * Submodul: 32_increment_decrement.ts
 * Topik: Increment dan decrement
 * Tujuan: Membedakan perilaku pre-increment (++i) vs post-increment (i++).
 */

console.log("=== Increment dan Decrement di TypeScript ===");

let counter: number = 10;

// Post-increment (counter++): Nilai dikembalikan DAHULU, baru kemudian dinaikkan 1
console.log(`Nilai awal counter: ${counter}`);
console.log(`Hasil post-increment (counter++): ${counter++}`);
console.log(`Nilai counter setelah post-increment: ${counter}`);

// Pre-increment (++counter): Nilai dinaikkan 1 TERLEBIH DAHULU, lalu dikembalikan
console.log(`Hasil pre-increment (++counter): ${++counter}`);

// Decrement (--counter): Mengurangi nilai sebesar 1
counter--;
console.log(`Nilai counter setelah decrement (counter--): ${counter}`);
