/**
 * Submodul: 136_default_generic_parameters.ts
 * Topik: Default Generic Parameters (<T = string>)
 * Tujuan: Menyediakan nilai fallback untuk tipe generik jika tidak ditentukan saat pemanggilan.
 */

console.log("=== Default Generic Parameters di TypeScript ===");

// Jika tipe data payload tidak dispesifikasikan, maka otomatis bernilai string
interface PaketPesan<T = string> {
    pengirim: string;
    isiPesan: T;
    waktuKirim: Date;
}

// 1. Menggunakan default generic (string)
const pesanBiasa: PaketPesan = {
    pengirim: "Admin",
    isiPesan: "Server akan direstart dalam 10 menit",
    waktuKirim: new Date()
};

// 2. Menentukan generic parameter kustom (objek)
const pesanTerstruktur: PaketPesan<{ kodeInsiden: number; keparahan: string }> = {
    pengirim: "MonitorBot",
    isiPesan: { kodeInsiden: 504, keparahan: "CRITICAL" },
    waktuKirim: new Date()
};

console.log(`Pesan Biasa       : "${pesanBiasa.isiPesan}" (Tipe: ${typeof pesanBiasa.isiPesan})`);
console.log(`Pesan Terstruktur : Insiden #${pesanTerstruktur.isiPesan.kodeInsiden}`);
