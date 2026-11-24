/**
 * Submodul: 168_custom_utility_types.ts
 * Topik: Membuat Custom Utility Types Sendiri
 * Tujuan: Mengombinasikan mapped types, conditional types, dan key remapping untuk membuat utilitas kustom.
 */

console.log("=== Membuat Custom Utility Types Sendiri ===");

// 1. Custom Utility: DeepReadonly<T> (mengunci seluruh hierarki objek bersarang)
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface KonfigurasiSistemLengkap {
    appId: string;
    jaringan: {
        host: string;
        port: number;
    };
}

const configTerkunci: DeepReadonly<KonfigurasiSistemLengkap> = {
    appId: "SYS-CORE",
    jaringan: {
        host: "10.0.0.1",
        port: 9000
    }
};

// configTerkunci.jaringan.port = 80; // Error kompilasi: properti jaringan juga bersifat readonly!

console.log("Konfigurasi Terkunci Mendalam (DeepReadonly):");
console.log(configTerkunci);
