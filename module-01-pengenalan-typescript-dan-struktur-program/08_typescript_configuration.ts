/**
 * Submodul: 08_typescript_configuration.ts
 * Topik: Konfigurasi TypeScript (tsconfig.json)
 * Tujuan: Memahami peran opsi-opsi konfigurasi compiler utama dalam tsconfig.json.
 */

interface TsConfigSummary {
    target: string;
    moduleSystem: string;
    strictMode: boolean;
    esModuleInterop: boolean;
}

// Representasi dari pengaturan umum tsconfig.json
const pengaturanTs: TsConfigSummary = {
    target: "ES2022",
    moduleSystem: "CommonJS",
    strictMode: true,
    esModuleInterop: true
};

console.log("=== Penjelasan Konfigurasi tsconfig.json ===");
console.log(`Target Output      : ${pengaturanTs.target} (Versi ECMAScript JavaScript hasil kompilasi)`);
console.log(`Module System      : ${pengaturanTs.moduleSystem} (Format pemuatan modul CommonJS / ESModules)`);
console.log(`Strict Type Checks : ${pengaturanTs.strictMode} (Mengaktifkan seluruh validasi tipe ketat)`);
console.log(`ES Module Interop  : ${pengaturanTs.esModuleInterop} (Kemudahan interoperabilitas import)`);
