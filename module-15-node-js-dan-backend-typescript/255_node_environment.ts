/**
 * Submodul: 255_node_environment.ts
 * Topik: Environment Variables (process.env)
 * Tujuan: Mengakses konfigurasi sensitif (seperti API key atau database URL) dari variabel lingkungan.
 */

console.log("=== Environment Variables (process.env) ===");

interface KonfigurasiEnv {
    nodeEnv: string;
    portAplikasi: number;
    dbHost: string;
}

// Membaca variabel environment dengan fallback nilai default
const config: KonfigurasiEnv = {
    nodeEnv: process.env.NODE_ENV || "development",
    portAplikasi: parseInt(process.env.PORT || "5000", 10),
    dbHost: process.env.DB_HOST || "localhost:5432"
};

console.log(`Lingkungan Sistem: ${config.nodeEnv}`);
console.log(`Port Server      : ${config.portAplikasi}`);
console.log(`Basis Data Host  : ${config.dbHost}`);
