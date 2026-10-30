/**
 * Submodul: 112_intersection_types.ts
 * Topik: Intersection Types (&)
 * Tujuan: Mengombinasikan beberapa tipe objek sehingga tipe baru memiliki seluruh properti dari tipe-tipe penyusunnya.
 */

console.log("=== Intersection Types di TypeScript ===");

interface KontakPribadi {
    nama: string;
    email: string;
}

interface HakAksesAdministrator {
    tingkatAkses: "SUPERADMIN" | "MODERATOR";
    bisaMenghapusData: boolean;
}

// Intersection type: wajib memiliki properti KontakPribadi DAN HakAksesAdministrator
type AdminLengkap = KontakPribadi & HakAksesAdministrator;

const superUser: AdminLengkap = {
    nama: "Satria Pratama",
    email: "satria.admin@perusahaan.id",
    tingkatAkses: "SUPERADMIN",
    bisaMenghapusData: true
};

console.log(`Nama Administrator: ${superUser.nama}`);
console.log(`Tingkat Akses     : ${superUser.tingkatAkses}`);
console.log(`Izin Hapus Data   : ${superUser.bisaMenghapusData}`);
