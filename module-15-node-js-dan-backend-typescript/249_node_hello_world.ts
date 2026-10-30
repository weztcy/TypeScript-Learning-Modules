/**
 * Submodul: 249_node_hello_world.ts
 * Topik: Program Node.js Pertama dengan TypeScript
 * Tujuan: Memahami eksekusi runtime backend Node.js dan informasi platform sistem.
 */

console.log("=== Program Node.js Pertama di TypeScript ===");

const platformSistem: string = process.platform;
const versiNode: string = process.version;
const arsitekturCPU: string = process.arch;

console.log(`Versi Runtime Node.js : ${versiNode}`);
console.log(`Platform Sistem Operasi: ${platformSistem}`);
console.log(`Arsitektur Prosesor   : ${arsitekturCPU}`);
console.log("TypeScript berjalan sempurna di lingkungan backend Node.js!");
