/**
 * Submodul: 93_index_signatures.ts
 * Topik: Index Signatures pada Objek
 * Tujuan: Mendefinisikan objek yang nama propertinya fleksibel/dinamis dengan tipe nilai terstandar.
 */

console.log("=== Index Signatures di TypeScript ===");

// Interface dengan index signature: kunci bertipe string, nilai bertipe number
interface KamusHarga {
    [namaBarang: string]: number;
}

const daftarTarif: KamusHarga = {
    "kopi-hitam": 15000,
    "teh-manis": 8000,
    "roti-bakar": 20000
};

// Menambahkan properti baru secara dinamis
daftarTarif["jus-alpukat"] = 22000;

console.log("Kamus Harga Menu Kafe:");
for (const [menu, harga] of Object.entries(daftarTarif)) {
    console.log(`- ${menu.padEnd(15, " ")} : Rp ${harga.toLocaleString("id-ID")}`);
}
