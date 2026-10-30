/**
 * Submodul: 202_namespace_basic.ts
 * Topik: Namespace Dasar
 * Tujuan: Mengelompokkan fungsionalitas dan mencegah polusi scope global pada lingkungan legacy/skrip.
 */

console.log("=== Namespace Dasar di TypeScript ===");

namespace Geometri2D {
    export const PHI = 3.14;

    export function luasPersegi(sisi: number): number {
        return sisi * sisi;
    }

    export function luasLingkaran(radius: number): number {
        return PHI * radius * radius;
    }
}

console.log(`Phi Geometri      : ${Geometri2D.PHI}`);
console.log(`Luas Persegi (s=5): ${Geometri2D.luasPersegi(5)}`);
console.log(`Luas Lingkaran(r=4): ${Geometri2D.luasLingkaran(4)}`);
