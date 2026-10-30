/**
 * Submodul: 264_node_module_system.ts
 * Topik: Module System Node.js (CommonJS vs ECMAScript Modules)
 * Tujuan: Memahami perbedaan require/module.exports (CJS) vs import/export (ESM) di Node.js.
 */

console.log("=== Module System di Node.js ===");

interface PerbandinganSistemModul {
    sistem: "CommonJS (CJS)" | "ECMAScript Modules (ESM)";
    sintaksImport: string;
    sintaksExport: string;
    fileExtension: string;
}

const daftarSistem: PerbandinganSistemModul[] = [
    {
        sistem: "CommonJS (CJS)",
        sintaksImport: "const x = require('./x')",
        sintaksExport: "module.exports = { ... }",
        fileExtension: ".cjs atau .js (default)"
    },
    {
        sistem: "ECMAScript Modules (ESM)",
        sintaksImport: "import x from './x.js'",
        sintaksExport: "export default ...",
        fileExtension: ".mjs atau .js (type: module)"
    }
];

console.log("Perbandingan Sistem Modul Node.js:");
for (const s of daftarSistem) {
    console.log(`[${s.sistem}]`);
    console.log(`  Import : ${s.sintaksImport}`);
    console.log(`  Export : ${s.sintaksExport}`);
    console.log(`  Format : ${s.fileExtension}`);
}
