/**
 * Submodul: 225_api_response_types.ts
 * Topik: Tipe Respons API Standar
 * Tujuan: Merancang kontrak tipe standar untuk respon API sukses dan respon API error.
 */

console.log("=== Tipe Respons API Standar ===");

type APIResponse<T> =
    | { status: "sukses"; kode: 200 | 201; payload: T }
    | { status: "error"; kode: 400 | 404 | 500; pesan: string };

interface ProdukItem {
    id: number;
    nama: string;
    harga: number;
}

function prosesRespon(res: APIResponse<ProdukItem>): void {
    if (res.status === "sukses") {
        console.log(`[SUKSES ${res.kode}] Produk: ${res.payload.nama} (Rp ${res.payload.harga.toLocaleString("id-ID")})`);
    } else {
        console.log(`[ERROR ${res.kode}] Gagal: ${res.pesan}`);
    }
}

prosesRespon({ status: "sukses", kode: 200, payload: { id: 1, nama: "Monitor 4K", harga: 5500000 } });
prosesRespon({ status: "error", kode: 404, pesan: "Data produk tidak ditemukan di basis data." });
