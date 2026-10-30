/**
 * Submodul: 192_default_imports.ts
 * Topik: Default Imports (import NamaBebas from ...)
 * Tujuan: Mengimpor entitas default export tanpa kurung kurawal menggunakan nama lokal bebas.
 */

// Mengimpor default export dari berkas 190_default_exports
import AuthHandler from "./190_default_exports";

console.log("=== Default Imports di TypeScript ===");

const authService = new AuthHandler("sso.universitas.edu");
console.log(authService.masuk("mahasiswa_2026"));
