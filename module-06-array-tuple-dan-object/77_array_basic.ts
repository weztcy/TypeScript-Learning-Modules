/**
 * Submodul: 77_array_basic.ts
 * Topik: Array dasar
 * Tujuan: Memahami inisialisasi, pengindeksan, dan penambahan elemen pada array di TypeScript.
 */

console.log("=== Array Dasar di TypeScript ===");

// Deklarasi array angka sederhana
const daftarNilai: number[] = [85, 90, 78, 92];

console.log(`Jumlah elemen awal: ${daftarNilai.length}`);
console.log(`Elemen pertama (indeks 0): ${daftarNilai[0]}`);
console.log(`Elemen ketiga  (indeks 2): ${daftarNilai[2]}`);

// Menambahkan elemen baru ke akhir array
daftarNilai.push(88);
console.log(`Setelah penambahan (push): [${daftarNilai.join(", ")}]`);
console.log(`Jumlah elemen sekarang: ${daftarNilai.length}`);
