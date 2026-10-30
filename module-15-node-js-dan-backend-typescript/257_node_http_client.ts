/**
 * Submodul: 257_node_http_client.ts
 * Topik: HTTP Client Bawaan Node.js (http.get / https.get)
 * Tujuan: Mengirimkan permintaan HTTP keluar (*outbound request*) menggunakan modul bawaan.
 */

import * as http from "http";

console.log("=== HTTP Client di Node.js ===");

// Simulasi klien HTTP lokal
function ujiKlienHTTP(): void {
    console.log("[KLIEN HTTP] Menyiapkan permintaan GET ke endpoint pengujian...");
    
    // Pola pembuatan request klien dengan http.request
    const opsi: http.RequestOptions = {
        hostname: "127.0.0.1",
        port: 80,
        path: "/healthz",
        method: "GET",
        timeout: 100
    };

    console.log(`Opsi Klien: ${opsi.method} http://${opsi.hostname}:${opsi.port}${opsi.path}`);
    console.log("Klien HTTP siap diintegrasikan untuk inter-service communication.");
}

ujiKlienHTTP();
