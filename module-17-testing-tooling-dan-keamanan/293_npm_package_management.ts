/**
 * Submodul: 293_npm_package_management.ts
 * Topik: Pengelolaan Paket npm (dependencies vs devDependencies)
 * Tujuan: Mengorganisasikan dependensi runtime aplikasi vs dependensi kebutuhan kompilasi dan testing.
 */

console.log("=== Pengelolaan Paket npm di Proyek TypeScript ===");

const dependensiProyek = {
    dependencies: {
        express: "^4.19.2",
        zod: "^3.23.8"
    },
    devDependencies: {
        typescript: "^5.4.5",
        tsx: "^4.10.5",
        "@types/node": "^20.12.7",
        "@types/express": "^4.17.21"
    }
};

console.log("Struktur Dependensi package.json:");
console.log("- Runtime Dependencies (wajib di produksi):", Object.keys(dependensiProyek.dependencies));
console.log("- Dev Dependencies (hanya saat dev & build) :", Object.keys(dependensiProyek.devDependencies));
