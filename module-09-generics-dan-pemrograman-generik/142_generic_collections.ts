/**
 * Submodul: 142_generic_collections.ts
 * Topik: Generic Collections (Koleksi Map dan Set Generik)
 * Tujuan: Mengelola struktur data Map<K, V> dan Set<T> dengan perlindungan tipe data statis.
 */

console.log("=== Generic Collections di TypeScript ===");

// 1. Generic Set<T>: koleksi elemen unik tanpa duplikasi
const daftarIDUnik = new Set<string>();
daftarIDUnik.add("USER-01");
daftarIDUnik.add("USER-02");
daftarIDUnik.add("USER-01"); // Nilai duplikat diabaikan otomatis

console.log(`Jumlah ID unik: ${daftarIDUnik.size}`);

// 2. Generic Map<K, V>: pasangan kunci-nilai terketik
const kamusNilai = new Map<string, number>();
kamusNilai.set("Andi", 95);
kamusNilai.set("Budi", 88);
kamusNilai.set("Candra", 91);

console.log("Daftar Nilai Siswa (Map<string, number>):");
for (const [siswa, nilai] of kamusNilai.entries()) {
    console.log(`- ${siswa}: ${nilai}`);
}
