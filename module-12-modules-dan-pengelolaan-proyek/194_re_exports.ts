/**
 * Submodul: 194_re_exports.ts
 * Topik: Re-exports (Barrel Pattern)
 * Tujuan: Meneruskan kembali export dari berbagai modul internal melalui satu titik gerbang terpadu (index barrel).
 */

// Simulasi re-export langsung: export { ... } from './...'
export { VERSI_MODUL, hitungPajak } from "./189_es_module_exports";
export { default as LayananAuth } from "./190_default_exports";

console.log("=== Re-exports (Barrel Pattern) di TypeScript ===");
console.log("Pola Barrel memungkinkan pengembang mengimpor berbagai modul melalui satu pintu masuk.");
console.log("Contoh: import { LayananAuth, hitungPajak } from './services';");
