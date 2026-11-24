/**
 * Submodul: 154_recursive_types.ts
 * Topik: Recursive Types (Tipe Data Bersarang)
 * Tujuan: Mendefinisikan tipe data untuk struktur pohon atau nilai JSON bertingkat tanpa batas kedalaman.
 */

console.log("=== Recursive Types di TypeScript ===");

// Tipe data nilai JSON rekursif
type NilaiJSON =
    | string
    | number
    | boolean
    | null
    | NilaiJSON[]
    | { [kunci: string]: NilaiJSON };

const dokumenJSON: NilaiJSON = {
    namaProyek: "TypeScript Learning Suite",
    versi: 2,
    stabil: true,
    pengembang: ["Senior Architect", "Curriculum Dev"],
    metadata: {
        server: {
            lokasi: "Jakarta",
            nodeId: 104
        }
    }
};

console.log("Dokumen Struktur JSON Valid Terverifikasi:");
console.log(JSON.stringify(dokumenJSON, null, 2));
