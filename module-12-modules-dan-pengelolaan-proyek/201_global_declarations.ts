/**
 * Submodul: 201_global_declarations.ts
 * Topik: Global Declarations (declare global)
 * Tujuan: Memperluas cakupan variabel atau interface global (seperti window atau process.env).
 */

console.log("=== Global Declarations di TypeScript ===");

// Menunjukkan cara mendeklarasikan variabel lingkungan global
interface GlobalConfigMock {
    API_URL: string;
    MODE_DEBUG: boolean;
}

const GLOBAL_CONFIG: GlobalConfigMock = {
    API_URL: "https://api.belajarts.com/v1",
    MODE_DEBUG: true
};

console.log("Akses Konfigurasi Global Aplikasi:");
console.log(`Endpoint URL : ${GLOBAL_CONFIG.API_URL}`);
console.log(`Mode Debug   : ${GLOBAL_CONFIG.MODE_DEBUG}`);
