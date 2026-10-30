/**
 * Submodul: 186_aggregation.ts
 * Topik: Aggregation ("Has-A" Relationship Lemah)
 * Tujuan: Mengaitkan objek independen yang dapat tetap eksis di luar siklus hidup objek penampungnya.
 */

console.log("=== Aggregation di TypeScript ===");

class Guru {
    constructor(public nama: string, public spesialisasi: string) {}
}

class Sekolah {
    // Hubungan agregasi: daftar guru dikirim dari luar dan tetap eksis meskipun sekolah bubar
    private daftarGuru: Guru[] = [];

    constructor(public namaSekolah: string) {}

    tambahGuru(guru: Guru): void {
        this.daftarGuru.push(guru);
        console.log(`Guru ${guru.nama} (${guru.spesialisasi}) bergabung ke ${this.namaSekolah}.`);
    }

    tampilkanTenagaPendidik(): void {
        console.log(`Daftar Pendidik di ${this.namaSekolah}:`);
        this.daftarGuru.forEach((g, i) => console.log(`  ${i + 1}. ${g.nama} [${g.spesialisasi}]`));
    }
}

const pakJoko = new Guru("Joko Susilo, M.Pd.", "Fisika Terapan");
const buRetno = new Guru("Retno Marsudi, M.Sc.", "Kimia Organik");

const sma1 = new Sekolah("SMA Bintang Cendekia");
sma1.tambahGuru(pakJoko);
sma1.tambahGuru(buRetno);

sma1.tampilkanTenagaPendidik();
