/**
 * Submodul: 62_function_parameters.ts
 * Topik: Parameter Fungsi
 * Tujuan: Menjamin keabsahan jumlah dan tipe data setiap argumen yang dikirim ke fungsi.
 */

console.log("=== Validasi Parameter Fungsi di TypeScript ===");

interface InfoPengiriman {
    namaPenerima: string;
    alamatTujuan: string;
    beratKg: number;
}

// Fungsi dengan beberapa parameter terketik ketat
function buatResiPengiriman(resiId: string, info: InfoPengiriman, biayaPerKg: number): string {
    const totalOngkir = info.beratKg * biayaPerKg;
    return `[Resi: ${resiId}] Kirim ke: ${info.namaPenerima} (${info.alamatTujuan}) | Total Ongkir: Rp ${totalOngkir.toLocaleString("id-ID")}`;
}

const paket: InfoPengiriman = {
    namaPenerima: "Dewi Lestari",
    alamatTujuan: "Yogyakarta",
    beratKg: 3.5
};

const labelResi = buatResiPengiriman("EXP-2026-001", paket, 12000);
console.log(labelResi);
