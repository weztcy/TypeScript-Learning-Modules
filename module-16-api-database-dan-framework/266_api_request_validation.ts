/**
 * Submodul: 266_api_request_validation.ts
 * Topik: Validasi Request API
 * Tujuan: Memastikan parameter request body memenuhi aturan tipe dan batasan nilai sebelum diproses.
 */

console.log("=== Validasi Request API di TypeScript ===");

interface RequestRegistrasi {
    email: string;
    sandi: string;
    usia: number;
}

function validasiRegistrasi(req: unknown): { valid: boolean; pesanError?: string; data?: RequestRegistrasi } {
    if (typeof req !== "object" || req === null) {
        return { valid: false, pesanError: "Body permintaan harus berupa objek JSON." };
    }

    const { email, sandi, usia } = req as Record<string, any>;

    if (typeof email !== "string" || !email.includes("@")) {
        return { valid: false, pesanError: "Format email tidak sah!" };
    }
    if (typeof sandi !== "string" || sandi.length < 8) {
        return { valid: false, pesanError: "Kata sandi minimal harus 8 karakter!" };
    }
    if (typeof usia !== "number" || usia < 18) {
        return { valid: false, pesanError: "Pengguna minimal harus berusia 18 tahun!" };
    }

    return {
        valid: true,
        data: { email, sandi, usia }
    };
}

const req1 = { email: "budi@perusahaan.com", sandi: "Rahasia2026!", usia: 25 };
const req2 = { email: "budi", sandi: "123", usia: 15 };

console.log("Validasi Request 1 (Valid)   :", validasiRegistrasi(req1));
console.log("Validasi Request 2 (Invalid) :", validasiRegistrasi(req2));
