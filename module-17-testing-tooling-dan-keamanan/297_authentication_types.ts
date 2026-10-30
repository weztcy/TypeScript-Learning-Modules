/**
 * Submodul: 297_authentication_types.ts
 * Topik: Tipe Data Autentikasi (JWT & Session Token)
 * Tujuan: Memodelkan muatan klaim token JWT (*payload claims*) dan identitas pengguna terautentikasi.
 */

console.log("=== Tipe Data Autentikasi (JWT Payload) ===");

interface JWTPayloadClaims {
    sub: string;             // Subject ID (ID Pengguna)
    nama: string;
    email: string;
    peran: "ADMIN" | "USER";
    iat: number;             // Issued At (stempel waktu penerbitan)
    exp: number;             // Expiration (stempel waktu kedaluwarsa)
}

const sesiLogin: JWTPayloadClaims = {
    sub: "USR-99214",
    nama: "Hadi Purnomo",
    email: "hadi@domain.ac.id",
    peran: "ADMIN",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 7200 // Berlaku 2 jam
};

console.log("Payload Klaim Token JWT:");
console.log(`Subject User ID : ${sesiLogin.sub}`);
console.log(`Nama Pemilik    : ${sesiLogin.nama}`);
console.log(`Hak Akses       : ${sesiLogin.peran}`);
console.log(`Durasi Sisa     : ${(sesiLogin.exp - sesiLogin.iat) / 60} menit`);
