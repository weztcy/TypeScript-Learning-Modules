/**
 * Submodul: 159_utility_pick.ts
 * Topik: Utility Type Pick<T, K>
 * Tujuan: Memilih sekumpulan properti tertentu dari suatu interface untuk membuat tipe baru yang lebih ringkas.
 */

console.log("=== Utility Type Pick<T, K> di TypeScript ===");

interface ArtikelLengkap {
    id: string;
    judul: string;
    konten: string;
    penulis: string;
    tanggalRilis: string;
    jumlahPembaca: number;
}

// Hanya memilih 'id', 'judul', dan 'penulis' untuk tampilan ringkasan
type RingkasanArtikel = Pick<ArtikelLengkap, "id" | "judul" | "penulis">;

const kartuArtikel: RingkasanArtikel = {
    id: "ART-882",
    judul: "Panduan Lengkap Advanced TypeScript",
    penulis: "Arsitek Sistem"
};

console.log("Kartu Ringkasan Artikel (Pick):");
console.log(kartuArtikel);
