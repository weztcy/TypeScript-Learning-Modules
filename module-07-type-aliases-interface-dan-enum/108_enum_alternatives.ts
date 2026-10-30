/**
 * Submodul: 108_enum_alternatives.ts
 * Topik: Alternatif Enum menggunakan Union Types dan const object
 * Tujuan: Menggunakan teknik 'as const' dan keyof typeof sebagai alternatif idiomatis modern dari enum.
 */

console.log("=== Alternatif Enum Modern di TypeScript ===");

// Objek konstanta dengan 'as const'
const STATUS_TRANSAKSI = {
    PENDING: "pending",
    BERHASIL: "berhasil",
    GAGAL: "gagal"
} as const;

// Membuat tipe union dari nilai objek STATUS_TRANSAKSI
type TipeStatusTransaksi = typeof STATUS_TRANSAKSI[keyof typeof STATUS_TRANSAKSI];

function perbaruiStatus(status: TipeStatusTransaksi): void {
    console.log(`Status transaksi berhasil diset ke: '${status}'`);
}

perbaruiStatus(STATUS_TRANSAKSI.BERHASIL);
perbaruiStatus("pending"); // Langsung menerima string literal yang valid
