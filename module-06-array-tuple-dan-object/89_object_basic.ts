/**
 * Submodul: 89_object_basic.ts
 * Topik: Object Dasar
 * Tujuan: Membuat dan memanipulasi objek JavaScript/TypeScript berbasis pasangan key-value.
 */

console.log("=== Object Dasar di TypeScript ===");

// Objek sederhana dengan properti beragam tipe
const mobilSedan = {
    merk: "Toyota",
    model: "Camry",
    tahun: 2024,
    mesinHidup: false,
    nyalakanMesin: function () {
        this.mesinHidup = true;
        console.log(`Mesin ${this.merk} ${this.model} berhasil dinyalakan!`);
    }
};

console.log(`Merk  : ${mobilSedan.merk}`);
console.log(`Model : ${mobilSedan.model} (${mobilSedan.tahun})`);
mobilSedan.nyalakanMesin();
console.log(`Status mesin sekarang: ${mobilSedan.mesinHidup ? "Aktif" : "Mati"}`);
