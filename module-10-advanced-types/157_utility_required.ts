/**
 * Submodul: 157_utility_required.ts
 * Topik: Utility Type Required<T>
 * Tujuan: Menghapus tanda opsional (?) sehingga seluruh properti diwajibkan untuk diisi.
 */

console.log("=== Utility Type Required<T> di TypeScript ===");

interface OpsiSetup {
    host: string;
    port?: number;
    timeoutMs?: number;
}

// Seluruh properti wajib diisi
const konfigurasiPenuh: Required<OpsiSetup> = {
    host: "api.domain.com",
    port: 443,
    timeoutMs: 5000
};

console.log("Konfigurasi Penuh Wajib Terverifikasi:");
console.log(konfigurasiPenuh);
