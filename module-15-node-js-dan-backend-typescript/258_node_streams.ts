/**
 * Submodul: 258_node_streams.ts
 * Topik: Streams di Node.js (Readable, Writable, Transform)
 * Tujuan: Mengalirkan data berukuran besar secara sepotong-sepotong (*chunk by chunk*) untuk efisiensi memori.
 */

import { Readable, Writable } from "stream";

console.log("=== Streams di Node.js ===");

// 1. Readable Stream penghasil angka
const sumberAngka = new Readable({
    read() {
        for (let i = 1; i <= 3; i++) {
            this.push(`Paket Chunk #${i}\n`);
        }
        this.push(null); // Menandai akhir stream
    }
});

// 2. Writable Stream pencatat ke konsol
const penerimaStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(`[STREAM CHUNK DITERIMA]: ${chunk.toString().trim()}`);
        callback();
    }
});

// Menghubungkan aliran data menggunakan pipe
sumberAngka.pipe(penerimaStream);
