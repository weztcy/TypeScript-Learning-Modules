/**
 * Submodul: 190_default_exports.ts
 * Topik: Default Exports (export default ...)
 * Tujuan: Mengekspor satu entitas utama dari sebuah berkas modul sebagai default export.
 */

// Class utama yang diekspor sebagai default export
export default class LayananAutentikasi {
    constructor(private namaDomain: string) {}

    masuk(username: string): string {
        return `[AUTH] ${username} berhasil masuk ke domain ${this.namaDomain}`;
    }

    keluar(username: string): string {
        return `[AUTH] ${username} telah keluar dari sistem.`;
    }
}

console.log("=== Default Exports di TypeScript ===");
const auth = new LayananAutentikasi("auth.internal.ac.id");
console.log(auth.masuk("admin_pusat"));
console.log(auth.keluar("admin_pusat"));
