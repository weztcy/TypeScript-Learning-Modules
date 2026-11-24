/**
 * Submodul: 171_class_methods.ts
 * Topik: Class Methods
 * Tujuan: Mengimplementasikan logika pemrosesan internal objek melalui fungsi method class.
 */

console.log("=== Class Methods di TypeScript ===");

class DompetElektronik {
    pemilik: string;
    saldo: number;

    constructor(pemilik: string, saldoAwal: number) {
        this.pemilik = pemilik;
        this.saldo = saldoAwal;
    }

    // Method untuk menambah saldo
    isiSaldo(nominal: number): void {
        if (nominal <= 0) {
            console.log("Nominal isi saldo harus lebih besar dari 0!");
            return;
        }
        this.saldo += nominal;
        console.log(`Isi saldo Rp ${nominal.toLocaleString("id-ID")} berhasil.`);
    }

    // Method untuk penarikan / belanja
    belanja(nominal: number): boolean {
        if (nominal > this.saldo) {
            console.log(`Gagal belanja: Saldo tidak mencukupi (Sisa Rp ${this.saldo.toLocaleString("id-ID")})`);
            return false;
        }
        this.saldo -= nominal;
        console.log(`Transaksi Rp ${nominal.toLocaleString("id-ID")} sukses.`);
        return true;
    }

    cetakRingkasan(): void {
        console.log(`Pemilik: ${this.pemilik} | Saldo Akhir: Rp ${this.saldo.toLocaleString("id-ID")}`);
    }
}

const dompet = new DompetElektronik("Rian Ardianto", 200000);
dompet.isiSaldo(150000);
dompet.belanja(80000);
dompet.belanja(500000); // Melebihi saldo
dompet.cetakRingkasan();
