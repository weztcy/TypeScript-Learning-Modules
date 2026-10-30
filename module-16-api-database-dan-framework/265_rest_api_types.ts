/**
 * Submodul: 265_rest_api_types.ts
 * Topik: Tipe Data REST API
 * Tujuan: Merancang kontrak tipe data DTO (Data Transfer Object) untuk request dan response REST API.
 */

console.log("=== Tipe Data REST API (DTO & Response) ===");

// DTO untuk pembuatan entitas pengguna baru
interface BuatProdukDTO {
    sku: string;
    nama: string;
    harga: number;
    kategori: "Elektronik" | "Pakaian" | "Buku";
}

// Format respon standar REST API
interface ResponStandarDTO<T> {
    sukses: boolean;
    pesan: string;
    data?: T;
    metadata?: {
        halaman: number;
        totalItem: number;
    };
}

const produkBaru: BuatProdukDTO = {
    sku: "ELK-2026-001",
    nama: "Monitor Gaming 144Hz",
    harga: 2800000,
    kategori: "Elektronik"
};

const responSukses: ResponStandarDTO<BuatProdukDTO> = {
    sukses: true,
    pesan: "Produk berhasil ditambahkan ke katalog",
    data: produkBaru
};

console.log("Struktur Kontrak Respon REST API:");
console.log(JSON.stringify(responSukses, null, 2));
