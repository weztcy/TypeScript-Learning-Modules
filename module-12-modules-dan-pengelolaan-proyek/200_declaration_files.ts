/**
 * Submodul: 200_declaration_files.ts
 * Topik: Declaration Files (.d.ts)
 * Tujuan: Memahami peran file .d.ts yang hanya memuat metadata tipe data tanpa implementasi kode runtime.
 */

console.log("=== Declaration Files (.d.ts) di TypeScript ===");

interface RingkasanDts {
    ekstensi: ".d.ts";
    fungsiUtama: string;
    mengandungKodeRuntime: boolean;
}

const infoDts: RingkasanDts = {
    ekstensi: ".d.ts",
    fungsiUtama: "Menyediakan intellisense dan verifikasi tipe untuk JavaScript murni",
    mengandungKodeRuntime: false
};

console.log(`Ekstensi Berkas       : ${infoDts.ekstensi}`);
console.log(`Fungsi Utama          : ${infoDts.fungsiUtama}`);
console.log(`Mengandung Kode JS    : ${infoDts.mengandungKodeRuntime}`);
