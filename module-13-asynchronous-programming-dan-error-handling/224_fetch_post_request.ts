/**
 * Submodul: 224_fetch_post_request.ts
 * Topik: HTTP POST Request
 * Tujuan: Mengirimkan muatan JSON (*payload*) ke server dan memvalidasi respon balasan.
 */

console.log("=== HTTP POST Request di TypeScript ===");

interface BuatPenggunaInput {
    username: string;
    email: string;
}

interface BuatPenggunaResponse {
    sukses: boolean;
    userId: string;
    dibuatPada: string;
}

async function kirimDataPenggunaBaru(payload: BuatPenggunaInput): Promise<BuatPenggunaResponse> {
    console.log(`Mengirim HTTP POST /api/users dengan data:`, JSON.stringify(payload));
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                sukses: true,
                userId: "USR-9921",
                dibuatPada: new Date().toISOString()
            });
        }, 60);
    });
}

kirimDataPenggunaBaru({ username: "aditya_dev", email: "aditya@domain.id" })
    .then((res) => {
        console.log("Respon POST Berhasil:", res);
    });
