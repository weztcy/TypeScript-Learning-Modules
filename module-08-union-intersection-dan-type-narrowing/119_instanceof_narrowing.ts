/**
 * Submodul: 119_instanceof_narrowing.ts
 * Topik: Narrowing Menggunakan 'instanceof'
 * Tujuan: Menangani berbagai turunan objek standar JavaScript (seperti Date atau Error).
 */

console.log("=== Narrowing Menggunakan 'instanceof' ===");

function formatStempelWaktu(waktu: Date | string): string {
    if (waktu instanceof Date) {
        // Di sini waktu dipastikan merupakan instance dari Date
        return `Format Objek Date: ${waktu.toLocaleDateString("id-ID")} ${waktu.toLocaleTimeString("id-ID")}`;
    } else {
        // Di sini waktu dipastikan bertipe string murni
        return `Format Teks String: ${waktu}`;
    }
}

const tanggalObjek = new Date(2026, 9, 17, 10, 30);
const tanggalTeks = "17 Oktober 2026";

console.log(formatStempelWaktu(tanggalObjek));
console.log(formatStempelWaktu(tanggalTeks));
