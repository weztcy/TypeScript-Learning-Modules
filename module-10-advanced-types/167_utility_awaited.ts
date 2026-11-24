/**
 * Submodul: 167_utility_awaited.ts
 * Topik: Utility Type Awaited<T>
 * Tujuan: Mengupas tipe internal dari operasi Promise bertingkat (unwrapping Promise).
 */

console.log("=== Utility Type Awaited<T> di TypeScript ===");

// Simulasi fungsi asynchronous yang mengembalikan Promise objek
async function ambilDataCuaca(): Promise<{ kota: string; suhuC: number }> {
    return { kota: "Denpasar", suhuC: 29.5 };
}

// Awaited mengupas Promise<{ kota: string; suhuC: number }> menjadi { kota: string; suhuC: number }
type DataCuaca = Awaited<ReturnType<typeof ambilDataCuaca>>;

const ramalan: DataCuaca = {
    kota: "Denpasar",
    suhuC: 29.5
};

console.log(`Cuaca Kota : ${ramalan.kota}`);
console.log(`Suhu Suhu  : ${ramalan.suhuC}°C`);
