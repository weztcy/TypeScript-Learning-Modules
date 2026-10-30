/**
 * Submodul: 160_utility_omit.ts
 * Topik: Utility Type Omit<T, K>
 * Tujuan: Menghilangkan properti tertentu dari suatu interface (misal menyembunyikan password hash).
 */

console.log("=== Utility Type Omit<T, K> di TypeScript ===");

interface AkunDatabase {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    salt: string;
}

// Menghapus 'passwordHash' dan 'salt' saat mengekspos data ke publik
type ResponAkunPublik = Omit<AkunDatabase, "passwordHash" | "salt">;

const akunPublik: ResponAkunPublik = {
    id: 1,
    username: "super_developer",
    email: "dev@perusahaan.com"
};

console.log("Data Akun Publik Aman (Omit hash & salt):");
console.log(akunPublik);
