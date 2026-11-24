/**
 * Submodul: 181_method_overriding.ts
 * Topik: Method Overriding
 * Tujuan: Menimpa dan memodifikasi implementasi method dari superclass pada subclass.
 */

console.log("=== Method Overriding di TypeScript ===");

class NotifikasiDasar {
    kirim(pesan: string): void {
        console.log(`[Pemberitahuan Standar] ${pesan}`);
    }
}

class NotifikasiEmailPrioritas extends NotifikasiDasar {
    // Menimpa (override) metode kirim milik class induk
    override kirim(pesan: string): void {
        console.log("-----------------------------------------");
        console.log("[EMAIL PRIORITAS TINGGI - ENKRIPSI AKTIF]");
        super.kirim(pesan); // Tetap dapat memanggil logika induk bila diperlukan
        console.log("-----------------------------------------");
    }
}

const notif1 = new NotifikasiDasar();
notif1.kirim("Server online normal");

const notif2 = new NotifikasiEmailPrioritas();
notif2.kirim("PERINGATAN: Beban CPU mencapai 98%!");
