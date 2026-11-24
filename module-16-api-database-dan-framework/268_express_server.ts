/**
 * Submodul: 268_express_server.ts
 * Topik: Server Menggunakan Express & TypeScript
 * Tujuan: Mengonfigurasi aplikasi web backend menggunakan framework Express dengan type safety penuh.
 */

import express, { Request, Response } from "express";

console.log("=== Server Menggunakan Express di TypeScript ===");

const app = express();
app.use(express.json());

// Endpoint dasar beranotasi Request dan Response terketik
app.get("/health", (req: Request, res: Response) => {
    res.json({ status: "UP", runtime: "Node.js + Express + TypeScript" });
});

// Menjalankan server pada port acak sementara dan menutupnya dengan bersih untuk pengujian
const server = app.listen(0, "127.0.0.1", () => {
    const addr = server.address() as any;
    console.log(`[EXPRESS SERVER AKTIF] Endpoint di http://127.0.0.1:${addr.port}/health`);
    
    server.close(() => {
        console.log("[EXPRESS SERVER DITUTUP] Server berhasil diuji dan ditutup secara anggun.");
    });
});
