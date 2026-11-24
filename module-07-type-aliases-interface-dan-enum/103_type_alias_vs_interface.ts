/**
 * Submodul: 103_type_alias_vs_interface.ts
 * Topik: Type Alias vs Interface
 * Tujuan: Membandingkan kemampuan dan kapan memilih type alias vs interface.
 */

console.log("=== Type Alias vs Interface di TypeScript ===");

// 1. Interface: ideal untuk objek, mendukung 'extends' dan 'declaration merging'
interface TitikA {
    x: number;
    y: number;
}

// 2. Type Alias: ideal untuk union types, primitif, tuples, dan fungsi
type TitikB = {
    x: number;
    y: number;
};
type HasilKomparasi = "SAMA" | "LEBIH_BESAR" | "LEBIH_KECIL";

const t1: TitikA = { x: 10, y: 20 };
const t2: TitikB = { x: 10, y: 20 };

function bandingkanKoordinat(a: TitikA, b: TitikB): HasilKomparasi {
    const jarakA = a.x + a.y;
    const jarakB = b.x + b.y;
    if (jarakA === jarakB) return "SAMA";
    return jarakA > jarakB ? "LEBIH_BESAR" : "LEBIH_KECIL";
}

console.log(`Koordinat A: (${t1.x}, ${t1.y})`);
console.log(`Koordinat B: (${t2.x}, ${t2.y})`);
console.log(`Hasil Perbandingan: ${bandingkanKoordinat(t1, t2)}`);
