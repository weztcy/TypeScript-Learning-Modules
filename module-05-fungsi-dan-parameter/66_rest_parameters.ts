/**
 * Submodul: 66_rest_parameters.ts
 * Topik: Rest Parameters (...args)
 * Tujuan: Menerima jumlah argumen tak terbatas dan mengumpulkannya ke dalam array terketik.
 */

console.log("=== Rest Parameters (...args) di TypeScript ===");

// Parameter rest mengumpulkan semua argumen angka tambahan ke dalam array 'angkaList' bertipe number[]
function hitungRataRata(namaMataPelajaran: string, ...angkaList: number[]): string {
    if (angkaList.length === 0) {
        return `Mata Pelajaran ${namaMataPelajaran}: Belum ada data nilai.`;
    }
    const total = angkaList.reduce((acc, curr) => acc + curr, 0);
    const rata = total / angkaList.length;
    return `Mata Pelajaran ${namaMataPelajaran}: Rata-rata dari ${angkaList.length} nilai = ${rata.toFixed(1)}`;
}

console.log(hitungRataRata("Matematika", 80, 85, 90));
console.log(hitungRataRata("Fisika", 70, 75, 80, 85, 90));
console.log(hitungRataRata("Biologi"));
