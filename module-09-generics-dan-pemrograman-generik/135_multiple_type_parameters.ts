/**
 * Submodul: 135_multiple_type_parameters.ts
 * Topik: Multiple Type Parameters (<T, U, V>)
 * Tujuan: Mengelola fungsi yang membutuhkan beberapa parameter tipe independen sekaligus.
 */

console.log("=== Multiple Type Parameters di TypeScript ===");

interface EntitasKombinasi<T, U, V> {
    kunci: T;
    nilai: U;
    metadata: V;
}

function buatEntitas<K, V, M>(kunci: K, nilai: V, meta: M): EntitasKombinasi<K, V, M> {
    return {
        kunci,
        nilai,
        metadata: meta
    };
}

const rekaman = buatEntitas<string, number, { dibuatOleh: string }>(
    "SesiLogin-88",
    3600,
    { dibuatOleh: "SecurityService" }
);

console.log(`Kunci   : ${rekaman.kunci}`);
console.log(`Nilai   : ${rekaman.nilai} detik`);
console.log(`Pembuat : ${rekaman.metadata.dibuatOleh}`);
