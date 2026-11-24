/**
 * Submodul: 74_closures.ts
 * Topik: Closures
 * Tujuan: Memahami kemampuan fungsi dalam mengingat dan mengakses variabel dari lexical scope induknya.
 */

console.log("=== Closures di TypeScript ===");

// Fungsi pembuat counter dengan closure
function buatPenghitung(nilaiAwal: number = 0) {
    let hitungan = nilaiAwal; // Variabel privat yang tertutup (encapsulated) oleh closure
    
    return {
        tambah: (): number => ++hitungan,
        kurang: (): number => --hitungan,
        dapatkanNilai: (): number => hitungan
    };
}

const counter1 = buatPenghitung(10);
const counter2 = buatPenghitung(50);

console.log(`Counter 1 tambah 1: ${counter1.tambah()}`);
console.log(`Counter 1 tambah 1: ${counter1.tambah()}`);
console.log(`Counter 1 nilai saat ini: ${counter1.dapatkanNilai()}`);

console.log(`Counter 2 tambah 1: ${counter2.tambah()}`);
console.log(`Counter 2 nilai saat ini: ${counter2.dapatkanNilai()}`);
