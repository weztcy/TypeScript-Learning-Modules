/**
 * Submodul: 158_utility_readonly.ts
 * Topik: Utility Type Readonly<T>
 * Tujuan: Mengunci seluruh properti objek agar tidak dapat dimutasi setelah dibuat.
 */

console.log("=== Utility Type Readonly<T> di TypeScript ===");

interface PengaturanKeamanan {
    kunciEnkripsi: string;
    batasMaksimalSesiMenit: number;
}

const configKeamanan: Readonly<PengaturanKeamanan> = {
    kunciEnkripsi: "AES-256-GCM-SECRET",
    batasMaksimalSesiMenit: 30
};

// configKeamanan.kunciEnkripsi = "NEW-SECRET"; // Error: Cannot assign to read-only property

console.log(`Kunci Enkripsi : ${configKeamanan.kunciEnkripsi}`);
console.log(`Batas Maksimal : ${configKeamanan.batasMaksimalSesiMenit} menit`);
console.log("Readonly<T> menjamin data aman dari mutasi tak disengaja!");
