/**
 * Submodul: 139_indexed_access_types.ts
 * Topik: Indexed Access Types (T[K])
 * Tujuan: Mengambil tipe dari properti tertentu di dalam tipe objek lain.
 */

console.log("=== Indexed Access Types di TypeScript ===");

interface ProfilPegawai {
    id: number;
    nama: string;
    alamat: {
        jalan: string;
        kota: string;
        provinsi: string;
    };
    gajiBulanan: number;
}

// Mengambil tipe properti 'alamat' dari ProfilPegawai
type AlamatPegawai = ProfilPegawai["alamat"];

// Mengambil tipe 'kota' dari sub-properti alamat
type NamaKota = ProfilPegawai["alamat"]["kota"];

const domisili: AlamatPegawai = {
    jalan: "Jl. Diponegoro No. 45",
    kota: "Semarang",
    provinsi: "Jawa Tengah"
};

const ibukota: NamaKota = "Semarang";

console.log(`Domisili: ${domisili.jalan}, ${domisili.kota}`);
console.log(`Kota: ${ibukota}`);
