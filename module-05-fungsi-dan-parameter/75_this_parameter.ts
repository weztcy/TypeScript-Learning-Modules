/**
 * Submodul: 75_this_parameter.ts
 * Topik: Parameter 'this' pada Fungsi
 * Tujuan: Menentukan tipe eksplisit untuk konteks objek 'this' dalam fungsi TypeScript.
 */

console.log("=== Parameter 'this' Eksplisit di TypeScript ===");

interface AkunDompetDigital {
    pemilik: string;
    saldo: number;
    // Anotasi parameter 'this' diletakkan sebagai parameter pertama (tidak dihitung sebagai argumen runtime)
    tambahSaldo(this: AkunDompetDigital, nominal: number): void;
    cekSaldo(this: AkunDompetDigital): string;
}

const dompet: AkunDompetDigital = {
    pemilik: "Rian Hidayat",
    saldo: 150000,
    tambahSaldo(this: AkunDompetDigital, nominal: number) {
        this.saldo += nominal;
        console.log(`Top-up berhasil sebesar Rp ${nominal.toLocaleString("id-ID")}`);
    },
    cekSaldo(this: AkunDompetDigital): string {
        return `Pemilik: ${this.pemilik} | Saldo: Rp ${this.saldo.toLocaleString("id-ID")}`;
    }
};

console.log(dompet.cekSaldo());
dompet.tambahSaldo(50000);
console.log(dompet.cekSaldo());
