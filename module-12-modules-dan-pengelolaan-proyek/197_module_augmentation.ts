/**
 * Submodul: 197_module_augmentation.ts
 * Topik: Module Augmentation
 * Tujuan: Menambahkan properti atau metode baru ke dalam modul eksternal yang sudah didefinisikan sebelumnya.
 */

console.log("=== Module Augmentation di TypeScript ===");

// Mendefinisikan modul lokal
namespace ModulAplikasi {
    export interface KonfigDasar {
        nama: string;
    }
}

// Melakukan augmentasi untuk memperluas interface KonfigDasar dengan properti baru
namespace ModulAplikasi {
    export interface KonfigDasar {
        versiRilis?: string;
        lingkungan?: "dev" | "prod";
    }
}

const appSetup: ModulAplikasi.KonfigDasar = {
    nama: "Portal Utama",
    versiRilis: "2026.1",
    lingkungan: "prod"
};

console.log("Konfig Setelah Augmentation:");
console.log(appSetup);
