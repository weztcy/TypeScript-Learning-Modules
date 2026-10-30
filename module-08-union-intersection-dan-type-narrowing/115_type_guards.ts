/**
 * Submodul: 115_type_guards.ts
 * Topik: Type Guards Bawaan (typeof dan instanceof)
 * Tujuan: Menggunakan ekspresi kondisional yang menjamin tipe data variabel pada blok kode tertentu.
 */

console.log("=== Type Guards di TypeScript ===");

class Kucing {
    meong() {
        console.log("Kucing: Meong meong!");
    }
}

class Anjing {
    gukguk() {
        console.log("Anjing: Guk guk!");
    }
}

type HewanPeliharaan = Kucing | Anjing;

function suarakanHewan(hewan: HewanPeliharaan): void {
    // Type guard menggunakan instanceof
    if (hewan instanceof Kucing) {
        hewan.meong();
    } else if (hewan instanceof Anjing) {
        hewan.gukguk();
    }
}

suarakanHewan(new Kucing());
suarakanHewan(new Anjing());
