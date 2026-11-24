/**
 * Submodul: 163_utility_nonnullable.ts
 * Topik: Utility Type NonNullable<T>
 * Tujuan: Menghapus nilai null dan undefined dari union type.
 */

console.log("=== Utility Type NonNullable<T> di TypeScript ===");

type ResponMungkinKosong = string | number | null | undefined;

// NonNullable menyaring dan membuang null serta undefined
type ResponPastiAda = NonNullable<ResponMungkinKosong>;

const nilai1: ResponPastiAda = "Sukses Memuat";
const nilai2: ResponPastiAda = 200;

console.log(`Nilai 1: "${nilai1}" (Tipe: ${typeof nilai1})`);
console.log(`Nilai 2: ${nilai2} (Tipe: ${typeof nilai2})`);
