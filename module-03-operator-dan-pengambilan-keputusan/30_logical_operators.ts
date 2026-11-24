/**
 * Submodul: 30_logical_operators.ts
 * Topik: Operator logika
 * Tujuan: Memahami operasi logika AND (&&), OR (||), dan NOT (!).
 */

console.log("=== Operator Logika di TypeScript ===");

const memilikiKTP: boolean = true;
const memilikiSIM: boolean = false;
const suratIzinOrtu: boolean = true;

// Logika AND (&&): Bernilai benar hanya jika SEMUA operand bernilai benar
const bolehBawaMobil: boolean = memilikiKTP && memilikiSIM;

// Logika OR (||): Bernilai benar jika SALAH SATU operand bernilai benar
const bolehMengikutiAcara: boolean = memilikiSIM || suratIzinOrtu;

// Logika NOT (!): Membalikkan nilai kebenaran boolean
const belumPunyaSIM: boolean = !memilikiSIM;

console.log(`Boleh mengendarai mobil (KTP && SIM)      : ${bolehBawaMobil}`);
console.log(`Boleh ikut acara (SIM || Izin Ortu)       : ${bolehMengikutiAcara}`);
console.log(`Status belum memiliki SIM (!memilikiSIM)  : ${belumPunyaSIM}`);
