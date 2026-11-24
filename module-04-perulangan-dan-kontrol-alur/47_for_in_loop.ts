/**
 * Submodul: 47_for_in_loop.ts
 * Topik: Perulangan 'for...in'
 * Tujuan: Melakukan iterasi pada properti (kunci / keys) dari sebuah objek.
 */

console.log("=== Perulangan 'for...in' di TypeScript ===");

interface SpesifikasiKomputer {
    prosesor: string;
    ramGB: number;
    penyimpanan: string;
    sistemOperasi: string;
}

const laptopDev: SpesifikasiKomputer = {
    prosesor: "Intel Core i7 Gen-13",
    ramGB: 32,
    penyimpanan: "1TB NVMe SSD",
    sistemOperasi: "Windows 11 Pro"
};

// 'for...in' menjelajahi setiap kunci properti yang dapat dienumerasi
for (const kunci in laptopDev) {
    // Type assertion keyof untuk mengakses properti objek secara dinamis dan aman
    const nilai = laptopDev[kunci as keyof SpesifikasiKomputer];
    console.log(`Spesifikasi [${kunci}] : ${nilai}`);
}
