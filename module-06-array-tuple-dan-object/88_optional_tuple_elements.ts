/**
 * Submodul: 88_optional_tuple_elements.ts
 * Topik: Optional Tuple Elements (?)
 * Tujuan: Mendefinisikan elemen tuple yang bersifat opsional pada posisi akhir.
 */

console.log("=== Optional Tuple Elements di TypeScript ===");

// Tuple dengan elemen ketiga yang opsional (format file gambar)
type UkuranGambar = [lebar: number, tinggi: number, format?: "png" | "jpg" | "webp"];

const gambarStandard: UkuranGambar = [1920, 1080];
const gambarLengkap: UkuranGambar = [800, 600, "webp"];

function cetakDimensi(img: UkuranGambar): void {
    const format = img[2] ? `.${img[2]}` : "format default";
    console.log(`Dimensi: ${img[0]} x ${img[1]} px (${format})`);
}

cetakDimensi(gambarStandard);
cetakDimensi(gambarLengkap);
