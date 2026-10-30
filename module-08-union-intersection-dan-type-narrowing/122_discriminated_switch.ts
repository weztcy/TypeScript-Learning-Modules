/**
 * Submodul: 122_discriminated_switch.ts
 * Topik: Discriminated Union dengan Switch-Case
 * Tujuan: Mengelola banyak varian discriminated union menggunakan struktur switch yang rapi.
 */

console.log("=== Discriminated Union dengan Switch ===");

type BentukGeometri =
    | { tipe: "persegi"; sisi: number }
    | { tipe: "persegi_panjang"; panjang: number; lebar: number }
    | { tipe: "lingkaran"; radius: number };

function hitungKeliling(bentuk: BentukGeometri): number {
    switch (bentuk.tipe) {
        case "persegi":
            return 4 * bentuk.sisi;
        case "persegi_panjang":
            return 2 * (bentuk.panjang + bentuk.lebar);
        case "lingkaran":
            return 2 * Math.PI * bentuk.radius;
    }
}

const b1: BentukGeometri = { tipe: "persegi", sisi: 10 };
const b2: BentukGeometri = { tipe: "persegi_panjang", panjang: 8, lebar: 4 };
const b3: BentukGeometri = { tipe: "lingkaran", radius: 7 };

console.log(`Keliling Persegi (sisi 10)           : ${hitungKeliling(b1)}`);
console.log(`Keliling Persegi Panjang (8x4)       : ${hitungKeliling(b2)}`);
console.log(`Keliling Lingkaran (r 7)             : ${hitungKeliling(b3).toFixed(2)}`);
