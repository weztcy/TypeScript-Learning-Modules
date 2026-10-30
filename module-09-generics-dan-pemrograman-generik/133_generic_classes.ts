/**
 * Submodul: 133_generic_classes.ts
 * Topik: Generic Classes
 * Tujuan: Mengimplementasikan struktur data antrean (Queue) berorientasi objek yang type-safe.
 */

console.log("=== Generic Classes di TypeScript ===");

class AntreanGenerik<T> {
    private elemen: T[] = [];

    masuk(item: T): void {
        this.elemen.push(item);
    }

    keluar(): T | undefined {
        return this.elemen.shift();
    }

    lihatUkuran(): number {
        return this.elemen.length;
    }
}

// Antrean angka
const antreanNomor = new AntreanGenerik<number>();
antreanNomor.masuk(101);
antreanNomor.masuk(102);
console.log(`Elemen keluar antrean nomor: ${antreanNomor.keluar()}`);
console.log(`Sisa antrean nomor: ${antreanNomor.lihatUkuran()}`);

// Antrean string
const antreanTugas = new AntreanGenerik<string>();
antreanTugas.masuk("Compile Code");
antreanTugas.masuk("Run Linter");
console.log(`Tugas yang diproses: "${antreanTugas.keluar()}"`);
