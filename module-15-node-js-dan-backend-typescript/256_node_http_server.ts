/**
 * Submodul: 256_node_http_server.ts
 * Topik: HTTP Server Bawaan Node.js (http.createServer)
 * Tujuan: Membangun server web HTTP murni menggunakan modul bawaan 'http' dengan request & response handler.
 */

import * as http from "http";

console.log("=== HTTP Server Bawaan Node.js ===");

// Membuat server HTTP
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`[REQUEST MASUK] Metode: ${req.method} | URL: ${req.url}`);
    
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "OK", pesan: "Halo dari TypeScript HTTP Server" }));
});

// Mendengarkan port bebas sementara (port 0 otomatis memilih port acak yang tersedia)
server.listen(0, "127.0.0.1", () => {
    const addr = server.address() as any;
    console.log(`[HTTP SERVER ONLINE] Berjalan di http://127.0.0.1:${addr.port}`);
    
    // Menutup server secara otomatis agar program pengujian selesai dengan bersih
    server.close(() => {
        console.log("[HTTP SERVER OFFLINE] Server berhasil ditutup dengan bersih.");
    });
});
