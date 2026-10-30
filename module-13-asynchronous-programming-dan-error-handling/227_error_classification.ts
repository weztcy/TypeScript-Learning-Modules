/**
 * Submodul: 227_error_classification.ts
 * Topik: Klasifikasi Error (Custom Error Hierarchy)
 * Tujuan: Mengembangkan class error berhierarki untuk membedakan kesalahan validasi, otorisasi, dan jaringan.
 */

console.log("=== Klasifikasi Custom Error di TypeScript ===");

abstract class AppErrorBase extends Error {
    constructor(pesan: string, public readonly kodeStatus: number) {
        super(pesan);
        this.name = this.constructor.name;
    }
}

class ValidationError extends AppErrorBase {
    constructor(pesan: string) {
        super(pesan, 400);
    }
}

class NotFoundError extends AppErrorBase {
    constructor(entitas: string) {
        super(`Entitas '${entitas}' tidak ditemukan.`, 404);
    }
}

function periksaData(input: string): void {
    if (input.length < 5) {
        throw new ValidationError("Input minimal 5 karakter!");
    }
    if (input === "unknown") {
        throw new NotFoundError("DokumenKunci");
    }
    console.log(`Data valid: ${input}`);
}

try {
    periksaData("abc");
} catch (e: any) {
    if (e instanceof ValidationError) {
        console.log(`[VALIDASI GAGAL - KODE ${e.kodeStatus}]: ${e.message}`);
    } else if (e instanceof NotFoundError) {
        console.log(`[TIDAK DITEMUKAN - KODE ${e.kodeStatus}]: ${e.message}`);
    }
}
