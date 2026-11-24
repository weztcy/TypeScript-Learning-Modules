/**
 * Submodul: 107_const_enum.ts
 * Topik: Const Enum
 * Tujuan: Mengoptimalkan performa dengan menginlining nilai konstanta langsung tanpa menghasilkan objek JS tambahan.
 */

console.log("=== Const Enum di TypeScript ===");

// Const enum di-inline langsung saat kompilasi ke kode JavaScript
const enum ModeWarna {
    Merah = "#FF0000",
    Hijau = "#00FF00",
    Biru = "#0000FF"
}

const warnaTombolUtama = ModeWarna.Biru;
const warnaIndikatorSukses = ModeWarna.Hijau;

console.log(`Warna Tombol Utama: ${warnaTombolUtama}`);
console.log(`Warna Sukses      : ${warnaIndikatorSukses}`);
console.log("Const enum menghasilkan overhead runtime 0 karena seluruh nilai di-inline langsung!");
