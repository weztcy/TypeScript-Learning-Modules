/**
 * Submodul: 120_equality_narrowing.ts
 * Topik: Equality Narrowing (===, !==, ==, !=)
 * Tujuan: Mempersempit tipe data melalui perbandingan kesetaraan nilai harfiah.
 */

console.log("=== Equality Narrowing di TypeScript ===");

function bandingkanNilai(a: string | number, b: string | boolean): void {
    // Jika a === b, maka satu-satunya tipe yang mungkin beririsan adalah 'string'
    if (a === b) {
        console.log(`Nilai identik: "${a.toUpperCase()}" (Tipe otomatis string)`);
    } else {
        console.log(`Nilai a (${a}) dan b (${b}) tidak sama.`);
    }
}

bandingkanNilai("typescript", "typescript");
bandingkanNilai(42, true);
