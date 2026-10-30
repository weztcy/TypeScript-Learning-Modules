/**
 * Submodul: 54_loop_conditions.ts
 * Topik: Kondisi perulangan majemuk
 * Tujuan: Mengontrol perulangan dengan beberapa kondisi multi-variabel secara simultan.
 */

console.log("=== Perulangan dengan Kondisi Majemuk ===");

let modalUsaha: number = 1000000;
let hari: number = 1;
const targetUntung: number = 1400000;
const batasHariMaks: number = 10;

// Perulangan berhenti jika target untung sudah tercapai ATAU batas hari habis
while (modalUsaha < targetUntung && hari <= batasHariMaks) {
    // Simulasi pendapatan harian acak terkontrol (stabil +50.000 s/d +90.000)
    const profitHarian: number = 60000 + (hari * 5000);
    modalUsaha += profitHarian;
    console.log(`Hari ke-${hari}: Mendapat laba Rp ${profitHarian.toLocaleString("id-ID")} | Saldo modal: Rp ${modalUsaha.toLocaleString("id-ID")}`);
    hari++;
}

console.log(`Status Berhenti: Hari=${hari - 1}, Saldo Akhir=Rp ${modalUsaha.toLocaleString("id-ID")}`);
