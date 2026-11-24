/**
 * Submodul: 262_node_child_process.ts
 * Topik: Child Processes (child_process.exec & spawn)
 * Tujuan: Menjalankan perintah shell atau subprocess sistem operasi secara terprogram.
 */

import { exec } from "child_process";

console.log("=== Child Processes di Node.js ===");

// Menjalankan perintah shell sederhana (node -v)
exec("node -v", (error, stdout, stderr) => {
    if (error) {
        console.error("Gagal menjalankan perintah shell:", error.message);
        return;
    }
    console.log(`Versi Node via Subprocess: ${stdout.trim()}`);
});
