/**
 * Submodul: 173_access_modifiers.ts
 * Topik: Access Modifiers (public, private, protected)
 * Tujuan: Mengontrol visibilitas dan enkapsulasi anggota class.
 */

console.log("=== Access Modifiers (public, private, protected) ===");

class KaryawanPerusahaan {
    public namaLengkap: string;       // Dapat diakses dari mana saja
    private gajiPokok: number;         // Hanya dapat diakses di dalam class ini saja
    protected nomorKTP: string;       // Dapat diakses di class ini dan class turunannya

    constructor(nama: string, gaji: number, ktp: string) {
        this.namaLengkap = nama;
        this.gajiPokok = gaji;
        this.nomorKTP = ktp;
    }

    public dapatkanInfoPublik(): string {
        return `Karyawan: ${this.namaLengkap}`;
    }

    public cekGaji(): string {
        return `Gaji Pokok: Rp ${this.gajiPokok.toLocaleString("id-ID")}`;
    }
}

class ManajerDivisi extends KaryawanPerusahaan {
    public tampilkanKTPRahasia(): string {
        // nomorKTP dapat diakses di subclass karena bertanda 'protected'
        return `Akses KTP Terlindungi: ${this.nomorKTP}`;
    }
}

const staf = new KaryawanPerusahaan("Budi Handoko", 8500000, "32710188990001");
console.log(staf.dapatkanInfoPublik());
console.log(staf.cekGaji());

const mgr = new ManajerDivisi("Sinta Nurhaliza", 18000000, "31750277880002");
console.log(mgr.dapatkanInfoPublik());
console.log(mgr.tampilkanKTPRahasia());
