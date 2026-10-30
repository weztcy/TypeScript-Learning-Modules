/**
 * Submodul: 137_keyof_operator.ts
 * Topik: Operator 'keyof'
 * Tujuan: Menghasilkan union tipe dari nama-nama kunci properti suatu interface atau objek.
 */

console.log("=== Operator 'keyof' di TypeScript ===");

interface MobilKeluarga {
    merk: string;
    kapasitasPenumpang: number;
    fiturAC: boolean;
}

// Tipe KunciMobil adalah union: "merk" | "kapasitasPenumpang" | "fiturAC"
type KunciMobil = keyof MobilKeluarga;

const k1: KunciMobil = "merk";
const k2: KunciMobil = "kapasitasPenumpang";

console.log(`Kunci 1: '${k1}'`);
console.log(`Kunci 2: '${k2}'`);
console.log("Operator 'keyof' menjamin bahwa hanya nama properti yang sah yang dapat digunakan sebagai kunci!");
