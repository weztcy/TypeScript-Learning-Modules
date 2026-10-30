/**
 * Submodul: 193_namespace_imports.ts
 * Topik: Namespace Imports (import * as Namespace from ...)
 * Tujuan: Mengemas seluruh named exports dari suatu modul ke dalam satu objek namespace tunggal.
 */

// Mengimpor seluruh export dari berkas 189 ke dalam objek KeuanganUtils
import * as KeuanganUtils from "./189_es_module_exports";

console.log("=== Namespace Imports (import * as ...) ===");
console.log(`Versi Engine: ${KeuanganUtils.VERSI_MODUL}`);

const omset = 25000000;
const potonganPajak = KeuanganUtils.hitungPajak(omset);

console.log(`Omset Bisnis : ${KeuanganUtils.formatRupiah(omset)}`);
console.log(`Kewajiban PPN: ${KeuanganUtils.formatRupiah(potonganPajak)}`);
