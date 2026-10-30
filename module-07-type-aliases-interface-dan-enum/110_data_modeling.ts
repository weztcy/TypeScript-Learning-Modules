/**
 * Submodul: 110_data_modeling.ts
 * Topik: Pemodelan Tipe Data (Data Modeling Studi Kasus E-Commerce)
 * Tujuan: Menerapkan seluruh konsep type alias, interface, dan enum dalam arsitektur model domain nyata.
 */

console.log("=== Studi Kasus Pemodelan Tipe Data E-Commerce ===");

// 1. Tipe dasar dan enum
type IDUnik = string;

enum StatusPembayaran {
    BelumBayar = "MENUNGGU_PEMBAYARAN",
    Lunas = "LUNAS",
    Kedaluwarsa = "KEDALUWARSA"
}

// 2. Interface entitas
interface ItemKeranjang {
    produkId: IDUnik;
    namaProduk: string;
    hargaSatuan: number;
    kuantitas: number;
}

interface PesananECommerce {
    orderId: IDUnik;
    pembeli: {
        nama: string;
        alamatKirim: string;
    };
    daftarItem: ItemKeranjang[];
    status: StatusPembayaran;
    totalTagihan(): number;
}

// 3. Objek konkret yang menerapkan model data di atas
const pesananPelanggan: PesananECommerce = {
    orderId: "ORD-2026-9901",
    pembeli: {
        nama: "Irfan Hakim",
        alamatKirim: "Jl. Sudirman Kav. 25, Jakarta Pusat"
    },
    daftarItem: [
        { produkId: "PRD-1", namaProduk: "Tas Laptop Tahan Air", hargaSatuan: 250000, kuantitas: 1 },
        { produkId: "PRD-2", namaProduk: "Kabel USB-C Fast Charging", hargaSatuan: 75000, kuantitas: 2 }
    ],
    status: StatusPembayaran.Lunas,
    totalTagihan() {
        return this.daftarItem.reduce((tot, itm) => tot + (itm.hargaSatuan * itm.kuantitas), 0);
    }
};

console.log(`Pesanan [${pesananPelanggan.orderId}]`);
console.log(`Pembeli : ${pesananPelanggan.pembeli.nama}`);
console.log(`Tujuan  : ${pesananPelanggan.pembeli.alamatKirim}`);
console.log(`Status  : ${pesananPelanggan.status}`);
console.log(`Total   : Rp ${pesananPelanggan.totalTagihan().toLocaleString("id-ID")}`);
