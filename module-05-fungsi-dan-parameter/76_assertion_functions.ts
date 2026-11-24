/**
 * Submodul: 76_assertion_functions.ts
 * Topik: Assertion Functions (asserts condition)
 * Tujuan: Memberikan garansi kepada compiler TypeScript bahwa kondisi tertentu pasti terpenuhi setelah fungsi dipanggil.
 */

console.log("=== Assertion Functions di TypeScript ===");

// Assertion function menggunakan kata kunci 'asserts kondisi'
function pastikanString(nilai: unknown, pesanError?: string): asserts nilai is string {
    if (typeof nilai !== "string") {
        throw new Error(pesanError || `Nilai diharapkan berupa string, namun menerima ${typeof nilai}`);
    }
}

function prosesDataInput(input: unknown): void {
    console.log(`Memeriksa input bernilai: ${JSON.stringify(input)}`);
    
    // Sebelum assertion, tipe input adalah unknown
    pastikanString(input, "Input wajib bertipe string!");
    
    // Berkat assertion function di atas, TypeScript tahu bahwa input di bawah ini adalah string murni
    console.log(`Panjang string: ${input.length} karakter`);
    console.log(`Huruf besar   : ${input.toUpperCase()}`);
}

try {
    prosesDataInput("Halo TypeScript Assertions");
    prosesDataInput(12345); // Ini akan memicu error assertion
} catch (e: any) {
    console.log(`[ASSERTION TERTANGKAP]: ${e.message}`);
}
