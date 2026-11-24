/**
 * Submodul: 102_interface_declaration_merging.ts
 * Topik: Declaration Merging pada Interface
 * Tujuan: Menggabungkan beberapa deklarasi interface dengan nama yang sama secara otomatis oleh compiler.
 */

console.log("=== Declaration Merging pada Interface ===");

// Deklarasi interface pertama
interface KonfigurasiAplikasi {
    namaApp: string;
    versi: string;
}

// Deklarasi interface kedua dengan NAMA YANG SAMA (akan digabungkan/merged)
interface KonfigurasiAplikasi {
    modeLingkungan: "development" | "production";
    port: number;
}

// Objek harus memenuhi seluruh properti gabungan
const konfigurasiSistem: KonfigurasiAplikasi = {
    namaApp: "Portal E-Learning TypeScript",
    versi: "2.5.0",
    modeLingkungan: "production",
    port: 8000
};

console.log("Konfigurasi Hasil Declaration Merging:");
console.log(konfigurasiSistem);
console.log("Catatan: Declaration merging adalah fitur khas interface yang tidak didukung oleh type alias.");
