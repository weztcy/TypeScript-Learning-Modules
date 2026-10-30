/**
 * Submodul: 94_excess_property_checks.ts
 * Topik: Excess Property Checks
 * Tujuan: Memahami bagaimana TypeScript mendeteksi typo atau properti tak dikenal pada object literal.
 */

console.log("=== Excess Property Checks di TypeScript ===");

interface OpsiPencarian {
    kataKunci: string;
    halaman?: number;
    batasPerHalaman?: number;
}

function lakukanPencarian(opsi: OpsiPencarian): void {
    console.log(`Mencari: "${opsi.kataKunci}" pada halaman ${opsi.halaman ?? 1}`);
}

// 1. Literal langsung: TypeScript memeriksa secara ketat tidak boleh ada properti berlebih
lakukanPencarian({
    kataKunci: "TypeScript Tutorials",
    halaman: 2
});

// 2. Jika objek dideklarasikan dalam variabel terpisah terlebih dahulu, kelebihan properti diabaikan
// selama properti wajib interface OpsiPencarian terpenuhi (structural typing)
const parameterEksternal = {
    kataKunci: "Design Patterns",
    halaman: 1,
    tagTambahan: "programming" // Properti berlebih
};

lakukanPencarian(parameterEksternal);
console.log("Excess property check melindungi dari salah ketik (typo) pada object literal!");
