/**
 * Submodul: 123_exhaustive_checks.ts
 * Topik: Exhaustive Checking dengan Tipe 'never'
 * Tujuan: Menggaransi tidak ada varian union baru yang terlewat ditangani saat pembaruan kode.
 */

console.log("=== Exhaustive Checking di TypeScript ===");

type TingkatPrioritas = "RENDAH" | "SEDANG" | "TINGGI";

function durasiSLA(prioritas: TingkatPrioritas): string {
    switch (prioritas) {
        case "RENDAH":
            return "Penyelesaian maksimal 72 jam kerja.";
        case "SEDANG":
            return "Penyelesaian maksimal 24 jam kerja.";
        case "TINGGI":
            return "Penyelesaian segera dalam kurun 4 jam!";
        default: {
            // Jika ada varian baru ditambahkan ke TingkatPrioritas namun belum ditangani di sini,
            // variabel ini akan menyebabkan compile error.
            const _exhaustiveCheck: never = prioritas;
            return _exhaustiveCheck;
        }
    }
}

console.log("Prioritas RENDAH :", durasiSLA("RENDAH"));
console.log("Prioritas SEDANG :", durasiSLA("SEDANG"));
console.log("Prioritas TINGGI :", durasiSLA("TINGGI"));
