/**
 * Submodul: 114_type_narrowing.ts
 * Topik: Type Narrowing Dasar
 * Tujuan: Mempersempit tipe data dari bentuk union yang lebih luas ke tipe yang lebih spesifik menggunakan percabangan.
 */

console.log("=== Type Narrowing Dasar di TypeScript ===");

function gandakanNilai(input: string | number): void {
    // Sebelum pemeriksaan, input adalah string | number
    if (typeof input === "string") {
        // Di sini tipe input dipersempit menjadi string murni
        console.log(`Penggandaan String: "${input.repeat(2)}"`);
    } else {
        // Di cabang else, input dipastikan bertipe number
        console.log(`Penggandaan Number: ${input * 2}`);
    }
}

gandakanNilai("Halo!");
gandakanNilai(25);
