/**
 * Submodul: 07_compile_and_run.ts
 * Topik: Kompilasi dan eksekusi program
 * Tujuan: Menunjukkan alur kompilasi tsc dan eksekusi langsung menggunakan runner tsx/node.
 */

interface ServerConfig {
    host: string;
    port: number;
    isHttps: boolean;
}

// Objek konfigurasi server yang divalidasi oleh interface ServerConfig
const config: ServerConfig = {
    host: "localhost",
    port: 3000,
    isHttps: false
};

function startServerSimulation(cfg: ServerConfig): string {
    const protokol = cfg.isHttps ? "https" : "http";
    return `Server berjalan di ${protokol}://${cfg.host}:${cfg.port}`;
}

console.log("=== Alur Kompilasi dan Eksekusi TypeScript ===");
console.log("Langkah 1: Tulis kode TypeScript (.ts)");
console.log("Langkah 2: Pemeriksaan tipe statis (Type Checking)");
console.log("Langkah 3: Kompilasi / Transpilasi ke JavaScript (.js)");
console.log("Langkah 4: Menjalankan runtime (Node.js)");
console.log(`Status Runtime: ${startServerSimulation(config)}`);
