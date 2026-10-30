/**
 * Submodul: 178_abstract_classes.ts
 * Topik: Abstract Classes (abstract class)
 * Tujuan: Membuat kerangka dasar kelas induk yang tidak dapat diinstansiasi langsung, hanya untuk diwarisi.
 */

console.log("=== Abstract Classes di TypeScript ===");

abstract class BangunDatar {
    constructor(public nama: string) {}

    // Method konkret yang langsung diwariskan ke semua subclass
    deskripsi(): void {
        console.log(`Bangun Datar: ${this.nama}`);
    }

    // Method abstrak yang wajib diimplementasikan oleh setiap subclass
    abstract hitungLuas(): number;
}

class Persegi extends BangunDatar {
    constructor(public sisi: number) {
        super("Persegi Empat");
    }

    hitungLuas(): number {
        return this.sisi * this.sisi;
    }
}

// const b = new BangunDatar("Bentuk"); // Error: Cannot create an instance of an abstract class.
const kotak = new Persegi(6);
kotak.deskripsi();
console.log(`Luas Kotak (sisi 6): ${kotak.hitungLuas()}`);
