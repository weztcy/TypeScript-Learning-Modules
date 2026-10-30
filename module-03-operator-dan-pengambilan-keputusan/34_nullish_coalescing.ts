/**
 * Submodul: 34_nullish_coalescing.ts
 * Topik: Nullish Coalescing (??)
 * Tujuan: Memahami perbedaan operator ?? (hanya memeriksa null/undefined) dibanding || (falsy values).
 */

console.log("=== Nullish Coalescing (??) di TypeScript ===");

// Nilai nol (0) dan string kosong ("") adalah falsy tapi BUKAN nullish
const jumlahKomentar: number = 0;
const namaPanggilan: string = "";

// Menggunakan operator OR (||) menganggap 0 dan "" sebagai false sehingga mengambil nilai default
const fallbackOr = jumlahKomentar || 10;

// Menggunakan Nullish Coalescing (??) mempertahankan 0 karena 0 bukan null / undefined
const fallbackNullish = jumlahKomentar ?? 10;

console.log(`Nilai asli: 0`);
console.log(`Hasil dengan OR (||)            : ${fallbackOr} (Salah jika 0 dianggap sah)`);
console.log(`Hasil dengan Nullish Coalescing (??): ${fallbackNullish} (Benar, mempertahankan nilai 0)`);

const inputNull: string | null = null;
console.log(`Jika variabel null: '${inputNull ?? "Nilai Standar Default"}'`);
