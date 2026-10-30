/**
 * Submodul: 185_composition.ts
 * Topik: Composition ("Has-A" Relationship Kuat)
 * Tujuan: Membangun sistem yang terdiri dari objek-objek penyusun independen (Favors Composition over Inheritance).
 */

console.log("=== Composition di TypeScript ===");

class MesinKendaraan {
    constructor(public tenagaKuda: number) {}
    hidupkan(): void {
        console.log(`Mesin berkekuatan ${this.tenagaKuda} HP aktif.`);
    }
}

class RodaKendaraan {
    constructor(public jumlahRoda: number) {}
    putar(): void {
        console.log(`${this.jumlahRoda} roda berputar di jalan.`);
    }
}

// Class Mobil mengomposisikan objek MesinKendaraan dan RodaKendaraan
class MobilBalap {
    private mesin: MesinKendaraan;
    private roda: RodaKendaraan;

    constructor(tenagaKuda: number) {
        // Objek bagian dibuat di dalam siklus hidup MobilBalap
        this.mesin = new MesinKendaraan(tenagaKuda);
        this.roda = new RodaKendaraan(4);
    }

    jalan(): void {
        console.log("Menjalankan mobil balap:");
        this.mesin.hidupkan();
        this.roda.putar();
    }
}

const mobil = new MobilBalap(650);
mobil.jalan();
