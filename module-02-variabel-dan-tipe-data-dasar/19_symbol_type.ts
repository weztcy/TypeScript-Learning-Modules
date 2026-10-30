/**
 * Submodul: 19_symbol_type.ts
 * Topik: Tipe data 'symbol'
 * Tujuan: Memahami pembuatan nilai identitas unik yang tidak dapat diduplikasi (immutable & unique).
 */

console.log("=== Tipe Data 'symbol' di TypeScript ===");

// Setiap Symbol selalu unik meskipun memiliki deskripsi yang sama
const sym1: symbol = Symbol("id");
const sym2: symbol = Symbol("id");

console.log(`Apakah sym1 identik dengan sym2? ${sym1 === sym2}`); // Menghasilkan false

// Symbol sering digunakan sebagai properti tersembunyi/unik pada objek
const ID_RAHASIA = Symbol("idRahasia");

interface AkunInternal {
    nama: string;
    [ID_RAHASIA]: string;
}

const akun: AkunInternal = {
    nama: "Administrator Utama",
    [ID_RAHASIA]: "SEC-998822"
};

console.log(`Nama Akun: ${akun.nama}`);
console.log(`Kunci Rahasia Symbol: ${akun[ID_RAHASIA]}`);
