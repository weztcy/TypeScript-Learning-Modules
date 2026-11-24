/**
 * Submodul: 63_function_return_types.ts
 * Topik: Return Types pada Fungsi
 * Tujuan: Memastikan konsistensi tipe kembalian (string, number, boolean, void, union).
 */

console.log("=== Return Types pada Fungsi di TypeScript ===");

// Fungsi dengan kembalian union type: objek data jika sukses, atau null jika gagal
interface PenggunaSistem {
    id: number;
    username: string;
}

function cariPengguna(id: number): PenggunaSistem | null {
    if (id === 101) {
        return { id: 101, username: "admin_super" };
    }
    return null; // Mengembalikan null bila data tidak ditemukan
}

const user1 = cariPengguna(101);
const user2 = cariPengguna(999);

console.log("Pencarian ID 101:", user1 ? `Ditemukan (${user1.username})` : "Tidak ada");
console.log("Pencarian ID 999:", user2 ? `Ditemukan (${user2.username})` : "Tidak ada");
