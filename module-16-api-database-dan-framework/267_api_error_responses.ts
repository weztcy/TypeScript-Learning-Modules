/**
 * Submodul: 267_api_error_responses.ts
 * Topik: Format Error API Terstandar (RFC 7807 Problem Details)
 * Tujuan: Menyajikan respon kesalahan API dengan format error yang konsisten bagi klien frontend.
 */

console.log("=== Format Respon Error API Standar (RFC 7807) ===");

interface ProblemDetailsError {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors?: Record<string, string[]>;
}

function buatErrorValidasi(instancePath: string, errors: Record<string, string[]>): ProblemDetailsError {
    return {
        type: "https://api.domain.id/errors/validation-failed",
        title: "Validasi Parameter Permintaan Gagal",
        status: 422,
        detail: "Satu atau lebih bidang parameter permintaan tidak memenuhi spesifikasi.",
        instance: instancePath,
        errors
    };
}

const responError = buatErrorValidasi("/api/v1/orders/checkout", {
    metodeBayar: ["Metode pembayaran wajib diisi."],
    alamatKirim: ["Kode pos harus terdiri dari 5 digit angka."]
});

console.log(JSON.stringify(responError, null, 2));
