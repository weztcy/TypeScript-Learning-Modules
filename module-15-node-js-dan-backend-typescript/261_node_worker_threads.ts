/**
 * Submodul: 261_node_worker_threads.ts
 * Topik: Worker Threads (worker_threads module)
 * Tujuan: Memahami eksekusi multithread berbasis CPU-intensive task pada lingkungan Node.js.
 */

import { isMainThread } from "worker_threads";

console.log("=== Worker Threads di Node.js ===");

if (isMainThread) {
    console.log(`[MAIN THREAD] Berjalan pada thread utama (PID: ${process.pid})`);
    console.log("Worker threads memungkinkan pemrosesan komputasi CPU paralel tanpa memblokir event loop.");
}
