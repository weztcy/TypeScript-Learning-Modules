/**
 * Submodul: 124_satisfies_operator.ts
 * Topik: Operator 'satisfies' (TypeScript 4.9+)
 * Tujuan: Memvalidasi bahwa sebuah objek sesuai dengan kontrak tipe tanpa memperlebar (widening) tipe aslinya.
 */

console.log("=== Operator 'satisfies' di TypeScript ===");

type KodeWarnaRGB = [r: number, g: number, b: number];
type WarnaPalet = Record<string, string | KodeWarnaRGB>;

// Menggunakan 'satisfies' memvalidasi kesesuaian WarnaPalet
// namun tetap mengingat bahwa 'primer' adalah string dan 'sekunder' adalah tuple RGB!
const temaPalet = {
    primer: "#1E40AF",
    sekunder: [30, 64, 175]
} satisfies WarnaPalet;

// Kita bisa langsung memanggil metode string pada 'primer' tanpa type-casting
console.log("Warna primer (hex):", temaPalet.primer.toLowerCase());

// Kita bisa langsung mengakses elemen tuple pada 'sekunder'
console.log(`RGB Sekunder: R=${temaPalet.sekunder[0]}, G=${temaPalet.sekunder[1]}, B=${temaPalet.sekunder[2]}`);
