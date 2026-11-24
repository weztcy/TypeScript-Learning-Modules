/**
 * Submodul: 117_type_predicates.ts
 * Topik: Type Predicates (parameter is Type)
 * Tujuan: Mengembalikan sinyal kepastian tipe kepada compiler saat menyaring array menggunakan .filter().
 */

console.log("=== Type Predicates di TypeScript ===");

// Fungsi type predicate memeriksa apakah nilai bukan null atau undefined
function bukanNull<T>(nilai: T | null | undefined): nilai is T {
    return nilai !== null && nilai !== undefined;
}

const daftarInput: (string | null | undefined)[] = [
    "Jakarta",
    null,
    "Bandung",
    undefined,
    "Surabaya"
];

// Dengan type predicate, hasil penyaringan otomatis bertipe string[], bukan (string | null | undefined)[]
const kotaValid: string[] = daftarInput.filter(bukanNull);

console.log("Data Asli   :", daftarInput);
console.log("Kota Valid  :", kotaValid);
console.log(`Jumlah valid: ${kotaValid.length} kota.`);
