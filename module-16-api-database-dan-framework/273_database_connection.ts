/**
 * Submodul: 273_database_connection.ts
 * Topik: Koneksi Database Terkelola
 * Tujuan: Merancang kelas pool koneksi basis data dengan status siklus hidup terpadu.
 */

console.log("=== Koneksi Database di TypeScript ===");

interface KonfigurasiDB {
    host: string;
    port: number;
    namaDatabase: string;
    maxKoneksi: number;
}

class PoolBasisData {
    private tersambung: boolean = false;

    constructor(private config: KonfigurasiDB) {}

    async hubungkan(): Promise<void> {
        console.log(`[DB] Menghubungkan ke ${this.config.host}:${this.config.port}/${this.config.namaDatabase}...`);
        // Simulasi handshake koneksi
        await new Promise((r) => setTimeout(r, 60));
        this.tersambung = true;
        console.log(`[DB ONLINE] Pool koneksi (${this.config.maxKoneksi} worker) siap melayani query.`);
    }

    async putuskan(): Promise<void> {
        this.tersambung = false;
        console.log("[DB OFFLINE] Koneksi ke basis data berhasil ditutup dengan aman.");
    }
}

const pool = new PoolBasisData({
    host: "postgres-primary.db.internal",
    port: 5432,
    namaDatabase: "kampus_akademik",
    maxKoneksi: 20
});

pool.hubungkan().then(() => pool.putuskan());
