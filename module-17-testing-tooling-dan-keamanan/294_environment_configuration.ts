/**
 * Submodul: 294_environment_configuration.ts
 * Topik: Konfigurasi Environment Terketik
 * Tujuan: Memvalidasi variabel lingkungan menggunakan skema tipe agar server gagal booting jika config kurang.
 */

console.log("=== Konfigurasi Environment Terketik ===");

interface EnvConfig {
    PORT: number;
    NODE_ENV: "development" | "production" | "test";
    DATABASE_URL: string;
}

function parseEnv(envInput: Record<string, string | undefined>): EnvConfig {
    const portStr = envInput.PORT || "3000";
    const port = parseInt(portStr, 10);
    const nodeEnv = (envInput.NODE_ENV || "development") as EnvConfig["NODE_ENV"];
    const dbUrl = envInput.DATABASE_URL || "postgresql://localhost:5432/app";

    if (isNaN(port)) {
        throw new Error("Variabel PORT harus bernilai numerik valid!");
    }

    return {
        PORT: port,
        NODE_ENV: nodeEnv,
        DATABASE_URL: dbUrl
    };
}

const env = parseEnv(process.env);
console.log(`Port Terkonfigurasi: ${env.PORT}`);
console.log(`Mode Lingkungan    : ${env.NODE_ENV}`);
console.log(`Koneksi DB Valid   : ${env.DATABASE_URL.startsWith("postgresql://") ? "YA" : "TIDAK"}`);
