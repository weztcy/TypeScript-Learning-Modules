/**
 * Submodul: 126_const_assertions.ts
 * Topik: Const Assertions (as const)
 * Tujuan: Mengunci seluruh properti objek atau array menjadi literal readonly mendalam (deep immutable).
 */

console.log("=== Const Assertions (as const) di TypeScript ===");

// Tanpa 'as const', roles bertipe string[]
// Dengan 'as const', roles bertipe readonly ["ADMIN", "USER", "GUEST"]
const KONFIGURASI_KEAMANAN = {
    mode: "STRICT_AUTH",
    maksimalPercobaanLogin: 5,
    rolesDiizinkan: ["ADMIN", "USER", "GUEST"]
} as const;

console.log("Konfigurasi Keamanan (as const):");
console.log(`Mode     : ${KONFIGURASI_KEAMANAN.mode}`);
console.log(`Maks Coba: ${KONFIGURASI_KEAMANAN.maksimalPercobaanLogin}`);
console.log(`Roles    : [${KONFIGURASI_KEAMANAN.rolesDiizinkan.join(", ")}]`);
