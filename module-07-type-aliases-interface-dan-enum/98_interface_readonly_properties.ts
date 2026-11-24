/**
 * Submodul: 98_interface_readonly_properties.ts
 * Topik: Readonly Interface Properties
 * Tujuan: Mengunci properti interface agar bersifat tidak dapat dimutasi setelah inisialisasi.
 */

console.log("=== Readonly Properties pada Interface ===");

interface SertifikatDigital {
    readonly idSertifikat: string;
    readonly namaPenerima: string;
    readonly tanggalTerbit: string;
    statusVerifikasi: boolean; // Boleh diperbarui
}

const sertifikatKelulusan: SertifikatDigital = {
    idSertifikat: "CERT-TS-2026-887",
    namaPenerima: "Rizky Firmansyah",
    tanggalTerbit: "2026-10-15",
    statusVerifikasi: false
};

console.log(`ID Sertifikat : ${sertifikatKelulusan.idSertifikat}`);
console.log(`Penerima      : ${sertifikatKelulusan.namaPenerima}`);
console.log(`Terverifikasi : ${sertifikatKelulusan.statusVerifikasi}`);

// Memperbarui properti yang bukan readonly
sertifikatKelulusan.statusVerifikasi = true;
console.log(`Setelah Verifikasi: ${sertifikatKelulusan.statusVerifikasi}`);
