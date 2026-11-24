/**
 * Submodul: 250_node_process.ts
 * Topik: Process Object di Node.js
 * Tujuan: Mengakses informasi proses prosesor, penggunaan memori (memoryUsage), dan PID.
 */

console.log("=== Process Object di Node.js ===");

const pidProses: number = process.pid;
const direktoriKerja: string = process.cwd();
const memori = process.memoryUsage();

console.log(`ID Proses (PID)       : ${pidProses}`);
console.log(`Current Working Dir   : ${direktoriKerja}`);
console.log(`Alokasi Heap Digunakan: ${(memori.heapUsed / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total Alokasi Heap    : ${(memori.heapTotal / 1024 / 1024).toFixed(2)} MB`);
