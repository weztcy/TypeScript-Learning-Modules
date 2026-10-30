/**
 * Submodul: 175_parameter_properties.ts
 * Topik: Parameter Properties (Shorthand Constructor)
 * Tujuan: Mendeklarasikan sekaligus menginisialisasi properti class langsung dari parameter konstruktor.
 */

console.log("=== Parameter Properties di TypeScript ===");

class RekeningSimpanan {
    // Dengan menyematkan modifier (public/private/readonly) pada parameter konstruktor,
    // TypeScript otomatis membuat field dan menginisialisasinya (menghemat boilerplate kode)
    constructor(
        public readonly nomorRekening: string,
        public namaNasabah: string,
        private saldoAktif: number = 0
    ) {}

    dapatkanSaldo(): string {
        return `Saldo Nasabah: Rp ${this.saldoAktif.toLocaleString("id-ID")}`;
    }
}

const akun1 = new RekeningSimpanan("009-881-224", "Joko Widodo", 5000000);

console.log(`Nomor Akun : ${akun1.nomorRekening}`);
console.log(`Nasabah    : ${akun1.namaNasabah}`);
console.log(akun1.dapatkanSaldo());
