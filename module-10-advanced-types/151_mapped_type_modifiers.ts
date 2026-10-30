/**
 * Submodul: 151_mapped_type_modifiers.ts
 * Topik: Mapped Type Modifiers (+/-, readonly, ?)
 * Tujuan: Menghapus atau menambahkan atribut readonly dan tanda opsional (?) pada properti.
 */

console.log("=== Mapped Type Modifiers (+/-, readonly, ?) ===");

interface ProfilAplikasi {
    readonly idApp: string;
    namaApp?: string;
    versi?: string;
}

// Menghapus readonly (-readonly) dan menghapus opsional (-?)
type MutabelDanWajib<T> = {
    -readonly [K in keyof T]-?: T[K];
};

const configTerbuka: MutabelDanWajib<ProfilAplikasi> = {
    idApp: "APP-001",
    namaApp: "Portal Belajar",
    versi: "1.0.0"
};

// idApp sekarang dapat dimutasi karena modifier -readonly
configTerbuka.idApp = "APP-002";

console.log("Konfigurasi setelah pelepasan readonly & opsional:");
console.log(configTerbuka);
