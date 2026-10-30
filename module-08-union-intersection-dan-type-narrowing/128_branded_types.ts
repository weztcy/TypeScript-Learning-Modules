/**
 * Submodul: 128_branded_types.ts
 * Topik: Branded Types (Nominal Typing Simulation)
 * Tujuan: Mencegah pertukaran nilai primitif yang berbeda semantik secara tidak sengaja (misal ID Pengguna vs ID Produk).
 */

console.log("=== Branded Types (Nominal Typing) ===");

// Membuat type brand khusus menggunakan tag unik
type IDPengguna = string & { readonly __brand: "IDPengguna" };
type IDProduk = string & { readonly __brand: "IDProduk" };

// Fungsi factory untuk validasi dan branding
function buatIDPengguna(id: string): IDPengguna {
    return id as IDPengguna;
}

function buatIDProduk(id: string): IDProduk {
    return id as IDProduk;
}

function prosesPesanan(userId: IDPengguna, productId: IDProduk): void {
    console.log(`Memproses pesanan untuk Pengguna [${userId}] atas Produk [${productId}]`);
}

const user = buatIDPengguna("USR-101");
const produk = buatIDProduk("PRD-999");

prosesPesanan(user, produk);
// prosesPesanan(produk, user); // Jika parameter tertukar, TypeScript akan memunculkan error kompilasi!
console.log("Branded types mencegah kesalahan tertukarnya variabel bertipe primitif sama!");
