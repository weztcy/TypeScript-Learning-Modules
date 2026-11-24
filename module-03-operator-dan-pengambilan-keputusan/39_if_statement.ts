/**
 * Submodul: 39_if_statement.ts
 * Topik: Percabangan 'if', 'else if', dan 'else'
 * Tujuan: Mengendalikan alur logika pengambilan keputusan berdasarkan kondisi bertingkat.
 */

console.log("=== Percabangan if, else if, else di TypeScript ===");

function klasifikasiSuhu(suhuCelcius: number): string {
    if (suhuCelcius <= 0) {
        return "Air membeku (Padat / Es)";
    } else if (suhuCelcius > 0 && suhuCelcius < 100) {
        return "Air dalam wujud cair normal";
    } else {
        return "Air mendidih (Wujud gas / Uap)";
    }
}

const suhuUji = [-5, 27, 102];

for (const t of suhuUji) {
    console.log(`Suhu ${t}°C : ${klasifikasiSuhu(t)}`);
}
