/**
 * Submodul: 169_class_basic.ts
 * Topik: Class dan Object
 * Tujuan: Memahami pembuatan blueprint class dan instansiasinya menjadi objek konkret di TypeScript.
 */

console.log("=== Class dan Object di TypeScript ===");

class Pelajar {
    // Definisi field/properti class dengan anotasi tipe
    nama: string = "Anonim";
    usia: number = 0;

    // Metode perilaku class
    perkenalkanDiri(): void {
        console.log(`Halo, nama saya ${this.nama} dan saya berusia ${this.usia} tahun.`);
    }
}

// Instansiasi objek baru menggunakan kata kunci 'new'
const murid1 = new Pelajar();
murid1.nama = "Bayu Setiawan";
murid1.usia = 16;

murid1.perkenalkanDiri();
