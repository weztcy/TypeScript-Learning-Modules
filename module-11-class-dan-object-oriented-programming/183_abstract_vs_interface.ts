/**
 * Submodul: 183_abstract_vs_interface.ts
 * Topik: Abstract Class vs Interface
 * Tujuan: Membandingkan abstract class (dapat memiliki implementasi konkret) vs interface (kontrak murni tanpa runtime code).
 */

console.log("=== Abstract Class vs Interface di TypeScript ===");

// 1. Interface: Kontrak murni tipe data
interface LoggerInterface {
    log(pesan: string): void;
}

// 2. Abstract Class: Kerangka dasar yang dapat menyertakan implementasi metode konkret dan state
abstract class FormatLoggerBase implements LoggerInterface {
    constructor(public prefix: string) {}

    // Implementasi method konkret bersama
    log(pesan: string): void {
        const waktu = new Date().toLocaleTimeString("id-ID");
        console.log(`[${waktu}] [${this.prefix}] ${this.formatPesan(pesan)}`);
    }

    // Method abstrak yang wajib didefinisikan implementasinya oleh subclass
    abstract formatPesan(pesan: string): string;
}

class JsonLogger extends FormatLoggerBase {
    formatPesan(pesan: string): string {
        return JSON.stringify({ event: pesan, status: "OK" });
    }
}

const logger = new JsonLogger("AUDIT_LOG");
logger.log("Pengguna admin berhasil masuk");
