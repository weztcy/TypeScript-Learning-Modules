/**
 * Submodul: 191_named_imports.ts
 * Topik: Named Imports (import { ... } from ...)
 * Tujuan: Mengimpor konstanta dan fungsi spesifik dari berkas modul lain dengan nama yang sama atau alias.
 */

// Mengimpor named exports dari berkas 189_es_module_exports
import { VERSI_MODUL, hitungPajak, formatRupiah as rupiah } from "./189_es_module_exports";

console.log("=== Named Imports di TypeScript ===");
console.log(`Modul diimpor versi: ${VERSI_MODUL}`);

const belanja = 750000;
const pajak = hitungPajak(belanja);
const total = belanja + pajak;

console.log(`Harga Belanja : ${rupiah(belanja)}`);
console.log(`PPN (11%)     : ${rupiah(pajak)}`);
console.log(`Total Bayar   : ${rupiah(total)}`);
