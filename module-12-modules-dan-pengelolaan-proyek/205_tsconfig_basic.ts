/**
 * Submodul: 205_tsconfig_basic.ts
 * Topik: Konfigurasi tsconfig.json Mendasar
 * Tujuan: Memahami peran kunci root pada tsconfig.json (compilerOptions, include, exclude).
 */

console.log("=== Konfigurasi tsconfig.json Mendasar ===");

const strukturTsConfig = {
    compilerOptions: {
        target: "ES2022",
        module: "CommonJS",
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true
    },
    include: ["src/**/*"],
    exclude: ["node_modules", "dist", "**/*.spec.ts"]
};

console.log("Struktur Standar tsconfig.json:");
console.log(JSON.stringify(strukturTsConfig, null, 2));
