/**
 * Submodul: 153_template_literal_types.ts
 * Topik: Template Literal Types
 * Tujuan: Membangun tipe string baru dengan menggabungkan union literal menggunakan template syntax.
 */

console.log("=== Template Literal Types di TypeScript ===");

type PosisiHorizontal = "kiri" | "kanan";
type PosisiVertikal = "atas" | "bawah";

// Menghasilkan kombinasi: "atas-kiri" | "atas-kanan" | "bawah-kiri" | "bawah-kanan"
type LokasiPenempatan = `${PosisiVertikal}-${PosisiHorizontal}`;

type NamaEvent = "klik" | "hover";
type EventKustom = `on${Capitalize<NamaEvent>}`; // "onKlik" | "onHover"

const posisiNotifikasi: LokasiPenempatan = "atas-kanan";
const handler: EventKustom = "onKlik";

console.log(`Posisi Notifikasi: ${posisiNotifikasi}`);
console.log(`Handler Event    : ${handler}`);
