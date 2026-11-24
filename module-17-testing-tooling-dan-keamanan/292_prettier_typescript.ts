/**
 * Submodul: 292_prettier_typescript.ts
 * Topik: Format Kode dengan Prettier
 * Tujuan: Menjaga konsistensi indentasi, tanda petik, trailing commas, dan lebar baris pada seluruh tim.
 */

console.log("=== Konfigurasi Prettier untuk TypeScript ===");

const prettierConfig = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 100,
    trailingComma: "none",
    bracketSpacing: true
};

console.log("Pengaturan Standar .prettierrc:");
console.log(JSON.stringify(prettierConfig, null, 2));
console.log("Prettier mengotomatiskan formatting seragam tanpa debat gaya antar programmer!");
