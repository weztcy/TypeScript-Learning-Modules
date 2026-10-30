/**
 * Submodul: 189_es_module_exports.ts
 * Topik: Named Exports (export const, export function)
 * Tujuan: Mengekspos konstanta dan fungsi tertentu agar dapat diimpor oleh berkas lain secara modular.
 */

// Named export untuk konstanta
export const VERSI_MODUL: string = "2.5.0";
export const KURS_DOLLAR: number = 16000;

// Named export untuk fungsi utilitas
export function hitungPajak(nominal: number, tarif: number = 0.11): number {
    return nominal * tarif;
}

export function formatRupiah(angka: number): string {
    return `Rp ${angka.toLocaleString("id-ID")}`;
}

console.log("=== Named Exports di TypeScript ===");
console.log(`Versi Modul Ekspor : ${VERSI_MODUL}`);
console.log(`Kurs Dollar        : ${formatRupiah(KURS_DOLLAR)}`);
console.log(`Pajak atas 1 Juta  : ${formatRupiah(hitungPajak(1000000))}`);
