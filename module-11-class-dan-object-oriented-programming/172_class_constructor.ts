/**
 * Submodul: 172_class_constructor.ts
 * Topik: Constructor pada Class
 * Tujuan: Memahami fungsi konstruktor untuk menginisialisasi state awal saat objek dibuat.
 */

console.log("=== Constructor pada Class di TypeScript ===");

class ServerConfig {
    readonly host: string;
    readonly port: number;
    waktuBoot: Date;

    // Konstruktor menerima argumen inisialisasi awal
    constructor(host: string, port: number = 8080) {
        this.host = host;
        this.port = port;
        this.waktuBoot = new Date();
        console.log(`[BOOT] Server diinisialisasi pada ${this.host}:${this.port}`);
    }

    dapatkanURI(): string {
        return `http://${this.host}:${this.port}`;
    }
}

const server1 = new ServerConfig("127.0.0.1", 3000);
console.log(`Endpoint Server 1: ${server1.dapatkanURI()}`);

const server2 = new ServerConfig("api.internal.net"); // Port default 8080
console.log(`Endpoint Server 2: ${server2.dapatkanURI()}`);
