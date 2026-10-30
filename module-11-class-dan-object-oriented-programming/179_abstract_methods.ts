/**
 * Submodul: 179_abstract_methods.ts
 * Topik: Abstract Methods
 * Tujuan: Mewajibkan seluruh subclass untuk mengimplementasikan perilaku spesifik sesuai kontrak abstrak.
 */

console.log("=== Abstract Methods di TypeScript ===");

abstract class PembayaranDigital {
    constructor(public jumlahBayar: number) {}

    // Method abstrak yang mengharuskan setiap jenis kanal pembayaran memproses transaksi secara spesifik
    abstract prosesKanal(): boolean;

    konfirmasiTransaksi(): void {
        console.log(`Memulai verifikasi transaksi senilai Rp ${this.jumlahBayar.toLocaleString("id-ID")}...`);
        const sukses = this.prosesKanal();
        if (sukses) {
            console.log("Transaksi Berhasil Diproses!");
        } else {
            console.log("Transaksi Gagal.");
        }
    }
}

class PembayaranQRIS extends PembayaranDigital {
    prosesKanal(): boolean {
        console.log("[Kanal QRIS] Memindai kode QR dinamis dan memverifikasi saldo...");
        return true;
    }
}

class PembayaranTransferBank extends PembayaranDigital {
    prosesKanal(): boolean {
        console.log("[Kanal Transfer Bank] Memeriksa mutasi nomor rekening virtual account...");
        return true;
    }
}

const trx1 = new PembayaranQRIS(75000);
trx1.konfirmasiTransaksi();

const trx2 = new PembayaranTransferBank(1250000);
trx2.konfirmasiTransaksi();
