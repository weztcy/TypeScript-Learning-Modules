/**
 * Submodul: 180_class_inheritance.ts
 * Topik: Inheritance (Pewarisan Class dengan 'extends' & 'super')
 * Tujuan: Mewariskan atribut dan metode dari kelas induk (superclass) ke kelas anak (subclass).
 */

console.log("=== Class Inheritance di TypeScript ===");

class KendaraanBermotor {
    constructor(public merk: string, public tahun: number) {}

    bunyikanKlakson(): void {
        console.log(`${this.merk}: Tin tin!`);
    }
}

class MobilKomersil extends KendaraanBermotor {
    constructor(merk: string, tahun: number, public dayaAngkutTon: number) {
        // Memanggil konstruktor superclass dengan kata kunci 'super'
        super(merk, tahun);
    }

    tampilkanKapasitas(): void {
        console.log(`Truk ${this.merk} (${this.tahun}) memiliki kapasitas angkut ${this.dayaAngkutTon} ton.`);
    }
}

const truk = new MobilKomersil("Isuzu Giga", 2023, 15);
truk.bunyikanKlakson();
truk.tampilkanKapasitas();
