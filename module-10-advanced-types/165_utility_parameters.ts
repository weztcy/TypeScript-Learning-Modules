/**
 * Submodul: 165_utility_parameters.ts
 * Topik: Utility Type Parameters<T>
 * Tujuan: Mengekstrak tuple tipe-tipe parameter dari suatu fungsi.
 */

console.log("=== Utility Type Parameters<T> di TypeScript ===");

function kirimNotifikasi(tujuanEmail: string, judul: string, prioritasTinggi: boolean): void {
    console.log(`[EMAIL ke ${tujuanEmail}] ${judul} (Prioritas: ${prioritasTinggi ? "TINGGI" : "Biasa"})`);
}

// Mengekstrak parameter fungsi sebagai tuple: [string, string, boolean]
type ParameterNotifikasi = Parameters<typeof kirimNotifikasi>;

const argumenKirim: ParameterNotifikasi = [
    "manager@perusahaan.co.id",
    "Pemberitahuan Audit Triwulan",
    true
];

// Memanggil fungsi menggunakan spread operator
kirimNotifikasi(...argumenKirim);
