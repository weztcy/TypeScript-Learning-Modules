/**
 * Submodul: 42_control_flow_analysis.ts
 * Topik: Control Flow Analysis (CFA)
 * Tujuan: Memahami bagaimana TypeScript mempersempit tipe variabel berdasarkan alur eksekusi percabangan.
 */

console.log("=== Control Flow Analysis (CFA) di TypeScript ===");

function hitungLuasBentuk(bentuk: { tipe: "persegi"; sisi: number } | { tipe: "lingkaran"; radius: number }): number {
    // Pada titik ini, bentuk bisa berupa persegi atau lingkaran
    if (bentuk.tipe === "persegi") {
        // Berkat Control Flow Analysis, TypeScript otomatis mengetahui bentuk pasti adalah persegi
        return bentuk.sisi * bentuk.sisi;
    } else {
        // Di cabang else, TypeScript menyimpulkan bahwa bentuk pasti lingkaran
        return Math.PI * (bentuk.radius ** 2);
    }
}

const persegi = { tipe: "persegi" as const, sisi: 8 };
const lingkaran = { tipe: "lingkaran" as const, radius: 7 };

console.log(`Luas Persegi (sisi 8)       : ${hitungLuasBentuk(persegi)}`);
console.log(`Luas Lingkaran (radius 7)   : ${hitungLuasBentuk(lingkaran).toFixed(2)}`);
