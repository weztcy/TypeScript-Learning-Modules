/**
 * Submodul: 149_infer_keyword.ts
 * Topik: Keyword 'infer'
 * Tujuan: Mengambil return type dari suatu fungsi secara dinamis pada level tipe.
 */

console.log("=== Keyword 'infer' di TypeScript ===");

// Membuat utilitas ekstraksi tipe kembalian fungsi sendiri
type AmbilKembalian<T> = T extends (...args: any[]) => infer R ? R : never;

function hitungDiskon(harga: number): { hargaAwal: number; potongan: number; hargaAkhir: number } {
    const potongan = harga * 0.1;
    return {
        hargaAwal: harga,
        potongan,
        hargaAkhir: harga - potongan
    };
}

// Mengekstrak struktur objek return type dari fungsi hitungDiskon
type HasilDiskon = AmbilKembalian<typeof hitungDiskon>;

const laporan: HasilDiskon = hitungDiskon(1000000);

console.log(`Harga Awal  : Rp ${laporan.hargaAwal.toLocaleString("id-ID")}`);
console.log(`Potongan    : Rp ${laporan.potongan.toLocaleString("id-ID")}`);
console.log(`Harga Akhir : Rp ${laporan.hargaAkhir.toLocaleString("id-ID")}`);
