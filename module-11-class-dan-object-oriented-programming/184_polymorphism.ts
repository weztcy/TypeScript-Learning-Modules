/**
 * Submodul: 184_polymorphism.ts
 * Topik: Polymorphism (Polimorfisme)
 * Tujuan: Memperlakukan berbagai objek turunan yang berbeda melalui antarmuka kelas induk yang sama.
 */

console.log("=== Polymorphism di TypeScript ===");

abstract class AlatMusik {
    constructor(public nama: string) {}
    abstract mainkan(): void;
}

class Gitar extends AlatMusik {
    mainkan(): void {
        console.log(`${this.nama}: Jreng jreng jreng (petikan dawai)`);
    }
}

class Drum extends AlatMusik {
    mainkan(): void {
        console.log(`${this.nama}: Dum tak dum tak (pukulan stik)`);
    }
}

class Piano extends AlatMusik {
    mainkan(): void {
        console.log(`${this.nama}: Ting tong ting tong (tuts tuts akustik)`);
    }
}

// Koleksi polimorfis: array bertipe AlatMusik yang menampung aneka subclass
const orkestra: AlatMusik[] = [
    new Gitar("Gitar Akustik Yamaha"),
    new Drum("Drum Kit Pearl"),
    new Piano("Grand Piano Steinway")
];

console.log("Memulai Konser Orkestra Musik:");
for (const instrumen of orkestra) {
    // Setiap instrumen mengeksekusi metode mainkan() sesuai bentuk uniknya
    instrumen.mainkan();
}
