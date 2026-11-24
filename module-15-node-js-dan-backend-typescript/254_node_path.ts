/**
 * Submodul: 254_node_path.ts
 * Topik: Path Module (path.join, path.resolve, path.extname)
 * Tujuan: Mengelola path direktori dan file secara lintas platform (Windows & POSIX).
 */

import * as path from "path";

console.log("=== Path Module di Node.js ===");

const direktoriBase = "D:/Proyek/Backend";
const subFolder = "controllers";
const namaBerkas = "UserAuthController.ts";

// Menggabungkan path dengan path.join (otomatis menangani separator / atau \)
const fullPath = path.join(direktoriBase, subFolder, namaBerkas);

console.log(`Path Gabungan : ${fullPath}`);
console.log(`Nama Direktori: ${path.dirname(fullPath)}`);
console.log(`Nama Berkas   : ${path.basename(fullPath)}`);
console.log(`Ekstensi      : ${path.extname(fullPath)}`);
console.log(`Separator OS  : '${path.sep}'`);
