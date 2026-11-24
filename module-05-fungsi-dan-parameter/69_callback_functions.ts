/**
 * Submodul: 69_callback_functions.ts
 * Topik: Callback Functions
 * Tujuan: Mengirimkan fungsi sebagai argumen untuk dieksekusi setelah operasi tertentu selesai.
 */

console.log("=== Callback Functions di TypeScript ===");

type CallbackSelesai = (pesanStatus: string, kodeHasil: number) => void;

function jalankanProsesData(namaData: string, onSelesai: CallbackSelesai): void {
    console.log(`Memulai proses pemrosesan data: '${namaData}'...`);
    // Simulasi pemrosesan
    const pesan = `Data '${namaData}' berhasil diproses tanpa kesalahan.`;
    const kode = 200;
    
    // Memanggil fungsi callback
    onSelesai(pesan, kode);
}

jalankanProsesData("Laporan_Bulanan.csv", (pesan, kode) => {
    console.log(`[CALLBACK DITERIMA] Status: ${pesan} | Kode: ${kode}`);
});
