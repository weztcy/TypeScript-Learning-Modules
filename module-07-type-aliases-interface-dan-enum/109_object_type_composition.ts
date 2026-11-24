/**
 * Submodul: 109_object_type_composition.ts
 * Topik: Komposisi Tipe Objek (Intersection & Type Merging)
 * Tujuan: Menggabungkan beberapa tipe objek terpisah menjadi satu model data baru yang utuh.
 */

console.log("=== Komposisi Tipe Objek di TypeScript ===");

type IdentitasDasar = {
    id: string;
    namaLengkap: string;
};

type KontakInfo = {
    email: string;
    telepon: string;
};

type KeamananAkun = {
    role: "superadmin" | "staff";
    twoFactorEnabled: boolean;
};

// Menggabungkan ketiga tipe menggunakan intersection (&)
type ProfilLengkapStaff = IdentitasDasar & KontakInfo & KeamananAkun;

const adminUtama: ProfilLengkapStaff = {
    id: "EMP-001",
    namaLengkap: "Rahmat Santoso",
    email: "rahmat@perusahaan.co.id",
    telepon: "081198765432",
    role: "superadmin",
    twoFactorEnabled: true
};

console.log("Profil Lengkap Staf Hasil Komposisi:");
console.log(adminUtama);
