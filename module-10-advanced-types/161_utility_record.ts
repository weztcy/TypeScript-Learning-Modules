/**
 * Submodul: 161_utility_record.ts
 * Topik: Utility Type Record<K, T>
 * Tujuan: Membangun tipe objek yang memetakan kumpulan kunci K ke nilai bertipe T.
 */

console.log("=== Utility Type Record<K, T> di TypeScript ===");

type TingkatPeran = "admin" | "editor" | "pembaca";

interface HakAksesHalaman {
    bisaMenulis: boolean;
    bisaMenghapus: boolean;
}

// Memetakan setiap TingkatPeran ke objek HakAksesHalaman
const matrikAkses: Record<TingkatPeran, HakAksesHalaman> = {
    admin: { bisaMenulis: true, bisaMenghapus: true },
    editor: { bisaMenulis: true, bisaMenghapus: false },
    pembaca: { bisaMenulis: false, bisaMenghapus: false }
};

console.log("Matriks Hak Akses Pengguna:");
console.log(matrikAkses);
