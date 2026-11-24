/**
 * Submodul: 87_named_tuple.ts
 * Topik: Named Tuple Elements
 * Tujuan: Memberikan label dokumentasi yang bermakna pada setiap posisi elemen tuple.
 */

console.log("=== Named Tuple di TypeScript ===");

// Named tuple: memberi label dokumentasi tanpa mempengaruhi struktur array runtime
type TitikKoordinat2D = [x: number, y: number];
type ResponStatusHTTP = [kode: number, pesan: string, sukses: boolean];

const posisiAwal: TitikKoordinat2D = [150, 320];
const responApi: ResponStatusHTTP = [200, "Berhasil memuat data", true];

console.log(`Titik X: ${posisiAwal[0]}, Titik Y: ${posisiAwal[1]}`);
console.log(`Status API -> Kode: ${responApi[0]}, Pesan: "${responApi[1]}", Sukses: ${responApi[2]}`);
